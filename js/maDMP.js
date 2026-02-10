const uploadmaDMP = async function (){
    let targetJSON = {
        replace:"",
        checkbox:""

    };
    const file =upload_maDMP.files[0]
    const fileText = await file.text();
    const parsedJSON = JSON.parse(fileText);
    const dmp = parsedJSON.dmp;
    const replace = JSON.parse(JSON.stringify(saved_a.replace));
    const checkbox = JSON.parse(JSON.stringify(saved_a.checkbox));
    const returned = safeSyncDMPtoReplaceAndCheckbox(dmp, replace, checkbox);
    window.saved_a.dmp = dmp.dmp;
    targetJSON["replace"] = returned.replace;
    targetJSON["checkbox"] = returned.checkbox;
    openStorageModal(targetJSON);
}






/**
 * Detects and fixes swapped $_PROJECTNAME and $_ADDACRONYM values
 * Uses heuristics: shorter length and/or >80% uppercase = acronym
 * @param {Object} replace - The replace object containing $_PROJECTNAME and $_ADDACRONYM
 * @returns {Object} The corrected replace object
 */
function detectAndFixAcronymMismatch(replace) {
    const projectName = replace.$_PROJECTNAME;
    const addAcronym = replace.$_ADDACRONYM;

    // Skip if either is missing, empty, or default placeholder
    if (!projectName || !addAcronym ||
        projectName === "Example Project" || projectName === "Beispielprojekt" ||
        addAcronym === "Add the acronym here" ||
        addAcronym === "Fügen Sie hier das Akronym ein") {
        return replace;
    }

    // Calculate uppercase percentage
    function getUppercasePercentage(str) {
        if (!str || str.length === 0) return 0;
        const upperCount = (str.match(/[A-Z]/g) || []).length;
        return upperCount / str.length;
    }

    const projectUpperPct = getUppercasePercentage(projectName);
    const acronymUpperPct = getUppercasePercentage(addAcronym);

    // Check if values appear swapped
    // Logic: Compare uppercase percentage first, if similar (<5% difference), use length as tie-breaker
    const upperPctDiff = Math.abs(projectUpperPct - acronymUpperPct);
    let projectLooksLikeAcronym = false;
    let acronymLooksLikeProject = false;

    if (upperPctDiff < 0.05) {
        // Similar uppercase percentage - use shorter as acronym
        projectLooksLikeAcronym = projectName.length < addAcronym.length;
        acronymLooksLikeProject = addAcronym.length > projectName.length;
    } else {
        // Different uppercase percentage - higher % is likely acronym
        projectLooksLikeAcronym = projectUpperPct > acronymUpperPct;
        acronymLooksLikeProject = acronymUpperPct > projectUpperPct;
    }

    // If they appear swapped, exchange them
    if (projectLooksLikeAcronym && acronymLooksLikeProject) {
        console.log("Detected swapped PROJECTNAME and ADDACRONYM - swapping values");
        const temp = replace.$_PROJECTNAME;
        replace.$_PROJECTNAME = replace.$_ADDACRONYM;
        replace.$_ADDACRONYM = temp;
    }

    return replace;
}

function safeSyncDMPtoReplaceAndCheckbox(dmp, replace, checkbox) {
    try {
        // Safely map top-level dmp fields to replace
        replace.$_PROJECTNAME = dmp?.title ?? "Example Project";
        replace.$_USERNAME = dmp?.contact?.name ?? "Example User";
        replace.$_EMAIL = dmp?.contact?.mbox ?? "E-Mail";
        replace.$_DMPVERSION = dmp?.version ?? "1.0";
        replace.$_ADDPROJECTCOORDINATOR = dmp?.project?.contact ?? "project coordinator";
        replace.$_CREATIONDATE = dmp?.created ? formatDate(dmp.created) : "xxxx-xx-xx";
        replace.$_MODIFICATIONDATE = dmp?.modified ? formatDate(dmp.modified) : "xxxx-xx-xx";

        // Handle dataset safely
        const dataset = dmp?.dataset?.[0]; // Use optional indexing
        replace.$_RAWDATA = dataset?.personal_data === "unknown" ? "???" : dataset?.personal_data ?? "???";
        replace.$_DERIVEDDATA = dataset?.sensitive_data === "unknown" ? "???" : dataset?.sensitive_data ?? "???";

        // Handle DOI safely
        replace.$_DOI = dmp?.dmp_id?.identifier?.trim() ?? "";
        replace.$_DATASETDOI = dataset?.dataset_id?.identifier?.trim() ?? "";

        // Checkbox logic with safe access
        handleCheckbox(
            dmp?.ethical_issues_exist,
            "check_protect",
            checkbox.checkbox_1
        );

        // Also check dataset-level personal/sensitive data
        if (dataset) {
            handleCheckbox(
                dataset.personal_data,
                "check_protect",
                checkbox.checkbox_1
            );
            handleCheckbox(
                dataset.sensitive_data,
                "check_protect",
                checkbox.checkbox_1
            );
        }

        // Detect and fix swapped PROJECTNAME and ADDACRONYM
        replace = detectAndFixAcronymMismatch(replace);

        return { replace, checkbox };

    } catch (error) {
        console.error("Error during DMP synchronization:", error);
        return { replace, checkbox }; // Return original unchanged values
    }
}

// Helper to format date safely
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? "xxxx-xx-xx" : date.toISOString().split("T")[0];
}

// Helper to update checkbox state safely
function handleCheckbox(value, checkboxKey, checkboxGroup) {
    const val = value?.toLowerCase();
    if (val === "yes") {
        if (!checkboxGroup.checked.includes(checkboxKey)) {
            checkboxGroup.checked.push(checkboxKey);
            checkboxGroup.unchecked = checkboxGroup.unchecked.filter(
                (item) => item !== checkboxKey
            );
        }
    } else if (val === "no" || val === "unknown") {
        if (!checkboxGroup.unchecked.includes(checkboxKey)) {
            checkboxGroup.unchecked.push(checkboxKey);
            checkboxGroup.checked = checkboxGroup.checked.filter(
                (item) => item !== checkboxKey
            );
        }
    }
}