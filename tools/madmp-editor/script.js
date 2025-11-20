(() => {
    "use strict";

    const DEFAULT_JSON = {
        templateName: "",
        templateText: "",
        dmp: {
            title: "Funded DMP",
            description: "Example of a DMP header for a funded project.",
            created: "2018-07-23T10:10:23.6Z",
            modified: "2019-02-06T15:30:42.1Z",
            project: [
                {
                    title: "Making maDMPs awesome",
                    start: "2017-01-01",
                    end: "2020-12-31",
                    funding: [
                        {
                            funder_id: {
                                identifier: "501100002428",
                                type: "fundref"
                            },
                            grant_id: {
                                identifier: "1234567-AT",
                                type: "other"
                            },
                            funding_status: "granted"
                        }
                    ]
                }
            ],
            contact: {
                contact_id: {
                    identifier: "http://orcid.org/0000-0000-0000-0000",
                    type: "orcid"
                },
                mbox: "cc@example.com",
                name: "Charlie Chaplin"
            },
            dmp_id: {
                identifier: "https://doi.org/10.0000/00.0.1234",
                type: "doi"
            },
            language: "eng",
            ethical_issues_exist: "no",
            dataset: [
                {
                    title: "Source Code",
                    dataset_id: {
                        identifier: "https://hdl.handle.net/11353/10.923628",
                        type: "handle"
                    },
                    personal_data: "unknown",
                    sensitive_data: "no"
                }
            ]
        },
        replace: {
            $_PROJECTNAME: "Example Project",
            $_STUDYOBJECT: "Example Topic",
            $_PROJECTAIM: "Example Aim",
            $_USERNAME: "Example User",
            $_EMAIL: "example@example.org",
            $_DATAOFFICER: "Data officer name",
            $_UPDATEMONTH: "January",
            $_PREVIOUSPROJECTS: "Previous example project",
            $_PROPRIETARY: "Example proprietary tools",
            $_RAWDATA: "Raw data description",
            $_DERIVEDDATA: "Derived data description",
            $_DMPVERSION: "1.0",
            $_DATAUTILITY: "Industry, politicians and students can also use the data for different purposes.",
            $_CREATIONDATE: "2024-01-01",
            $_MODIFICATIONDATE: "2024-01-01",
            $_OTHERSTANDARDINPUT: "Other standards in use",
            $_PARTNERS: "Partner organisation",
            $_OTHERDATATYPETEXT: "Other data types",
            $_ADDPROJECTCOORDINATOR: "Project Coordinator",
            $_ADDACRONYM: "EXAMPLE-ACRO",
            $_OTHERDATAFORMATS: "Other formats",
            $_DOI: "https://doi.org/10.0000/00.0.1234",
            $_DATASETDOI: "https://doi.org/10.0000/00.0.5678"
        },
        checkbox: {
            checkbox_1: {
                checked: ["check_dataplant", "check_update"],
                unchecked: ["check_previousprojects", "check_industry", "check_proprietary", "check_partners", "check_eu"]
            },
            checkbox_2: {
                checked: ["check_genomic", "check_metabolomic", "check_rnaseq"],
                unchecked: ["check_image", "check_models", "check_code"]
            },
            checkbox_3: {
                checked: ["check_miappe", "check_otherstandards"],
                unchecked: ["check_dublincore", "check_marc21"]
            },
            checkbox_4: {
                checked: ["check_formatcsvtsvpsv", "check_formattxt"],
                unchecked: ["check_formatxlsx", "check_formatjson", "check_formatxmlhtml", "check_otherdataformats"]
            },
            checkbox_5: {
                checked: ["check_zenodo", "check_pride"],
                unchecked: ["check_edal", "check_pdb", "check_bioimage"]
            }
        },
        update: {
            timeline: [],
            storage: [
                { answer: {}, name: "" },
                { answer: {}, name: "" },
                { answer: {}, name: "" },
                { answer: {}, name: "" },
                { answer: {}, name: "" },
                { answer: {}, name: "" }
            ]
        }
    };

    const EMPTY_TEMPLATE = {
        templateName: "",
        templateText: "",
        dmp: {},
        replace: {},
        checkbox: {},
        update: {
            timeline: [],
            storage: []
        }
    };

    const state = {
        data: null,
        fileName: "DataPLAN_DMP.json"
    };

    let validatorReadyPromise = null;

    const elements = {};

    document.addEventListener("DOMContentLoaded", init);

    function init() {
        cacheElements();
        wireEvents();
        setState(cloneData(DEFAULT_JSON), "DataPLAN_DMP.json");
    }

    function cacheElements() {
        elements.fileInput = document.getElementById("fileInput");
        elements.loadSample = document.getElementById("loadSample");
        elements.resetEditor = document.getElementById("resetEditor");
        elements.exportJson = document.getElementById("exportJson");
        elements.statusBanner = document.getElementById("statusBanner");

        elements.dmpEditor = document.getElementById("dmpEditor");
        elements.applyDmpChanges = document.getElementById("applyDmpChanges");

        elements.replaceRows = document.getElementById("replaceRows");
        elements.addReplaceForm = document.getElementById("addReplaceForm");
        elements.newReplaceKey = document.getElementById("newReplaceKey");
        elements.newReplaceValue = document.getElementById("newReplaceValue");

        elements.checkboxGroups = document.getElementById("checkboxGroups");
        elements.addGroupForm = document.getElementById("addGroupForm");
        elements.newGroupName = document.getElementById("newGroupName");

        elements.jsonPreview = document.getElementById("jsonPreview");
        elements.dmpValidationMessages = document.getElementById("dmpValidationMessages");
    }

    function wireEvents() {
        elements.fileInput.addEventListener("change", onFileImport);
        elements.loadSample.addEventListener("click", () => {
            setState(cloneData(DEFAULT_JSON), "DataPLAN_DMP.json");
            setStatus("Sample JSON loaded.");
        });
        elements.resetEditor.addEventListener("click", () => {
            setState(cloneData(EMPTY_TEMPLATE), "DataPLAN_DMP.json");
            setStatus("Editor reset to an empty template.");
        });
        elements.exportJson.addEventListener("click", downloadJson);

        elements.applyDmpChanges.addEventListener("click", applyDmpChanges);

        elements.addReplaceForm.addEventListener("submit", addReplaceField);
        elements.addGroupForm.addEventListener("submit", addCheckboxGroup);
    }

    function setState(rawData, fileName) {
        const sanitized = sanitizeData(rawData);
        state.data = sanitized;
        state.fileName = fileName || state.fileName || "DataPLAN_DMP.json";
        renderAll();
    }

    function renderAll() {
        renderDmpEditor();
        renderReplaceRows();
        renderCheckboxGroups();
        renderPreview();
        runValidation(false);
    }

    function onFileImport(event) {
        const file = event.target.files && event.target.files[0];
        if (!file) {
            return;
        }

        file.text()
            .then((text) => JSON.parse(text))
            .then((json) => {
                setState(json, file.name || "DataPLAN_DMP.json");
                setStatus(`Imported ${file.name || "JSON file"}.`);
                elements.fileInput.value = "";
            })
            .catch((error) => {
                console.error("Import failed:", error);
                setStatus("Import failed: invalid JSON.", "error");
            });
    }

    async function applyDmpChanges() {
        try {
            const next = JSON.parse(elements.dmpEditor.value || "{}");
            state.data.dmp = normalizeMaDmpStructure(next);
            const syncResult = syncReplaceAndCheckboxFromDmp(
                state.data.dmp,
                state.data.replace,
                state.data.checkbox
            );
            state.data.replace = syncResult.replace;
            state.data.checkbox = syncResult.checkbox;
            renderDmpEditor();
            renderReplaceRows();
            renderCheckboxGroups();
            renderPreview();
            await runValidation(true);
        } catch (error) {
            console.error("maDMP parse error:", error);
            setStatus("maDMP JSON invalid. Changes not applied.", "error");
        }
    }

    function addReplaceField(event) {
        event.preventDefault();
        const key = (elements.newReplaceKey.value || "").trim();
        const value = elements.newReplaceValue.value || "";

        if (!key) {
            setStatus("Replace key cannot be empty.", "error");
            return;
        }
        if (!key.startsWith("$_")) {
            setStatus("Replace keys should start with $_ to stay compatible with DataPLAN templates.", "error");
            return;
        }
        if (Object.prototype.hasOwnProperty.call(state.data.replace, key)) {
            setStatus(`Replace key ${key} already exists.`, "error");
            return;
        }

        state.data.replace[key] = value;
        elements.newReplaceKey.value = "";
        elements.newReplaceValue.value = "";
        renderReplaceRows();
        renderPreview();
        setStatus(`Added replace field ${key}.`);
    }

    function removeReplaceField(key) {
        delete state.data.replace[key];
        renderReplaceRows();
        renderPreview();
        setStatus(`Removed replace field ${key}.`);
    }

    function renderReplaceRows() {
        const container = elements.replaceRows;
        container.innerHTML = "";
        const entries = Object.entries(state.data.replace || {}).sort((a, b) => a[0].localeCompare(b[0]));

        entries.forEach(([key, value]) => {
            const row = document.createElement("div");
            row.className = "replace-row";

            const keyBadge = document.createElement("span");
            keyBadge.textContent = key;
            row.appendChild(keyBadge);

            const valueInput = document.createElement("input");
            valueInput.type = "text";
            valueInput.value = value ?? "";
            valueInput.addEventListener("input", () => {
                state.data.replace[key] = valueInput.value;
                renderPreview();
            });
            row.appendChild(valueInput);

            container.appendChild(row);
        });

        if (entries.length === 0) {
            const helper = document.createElement("p");
            helper.textContent = "No replace fields defined.";
            helper.className = "muted";
            container.appendChild(helper);
        }
    }

    function addCheckboxGroup(event) {
        event.preventDefault();
        const group = (elements.newGroupName.value || "").trim();
        if (!group) {
            setStatus("Group name is required.", "error");
            return;
        }
        if (Object.prototype.hasOwnProperty.call(state.data.checkbox, group)) {
            setStatus(`Group ${group} already exists.`, "error");
            return;
        }
        state.data.checkbox[group] = { checked: [], unchecked: [] };
        elements.newGroupName.value = "";
        renderCheckboxGroups();
        renderPreview();
        setStatus(`Added checkbox group ${group}.`);
    }

    function removeCheckboxGroup(group) {
        delete state.data.checkbox[group];
        renderCheckboxGroups();
        renderPreview();
        setStatus(`Removed checkbox group ${group}.`);
    }

    function addCheckboxOption(group, option, isChecked) {
        const trimmed = option.trim();
        if (!trimmed) {
            setStatus("Checkbox option label is required.", "error");
            return;
        }
        setStatus("Checkbox options are fixed for the default template.", "error");
    }

    function removeCheckboxOption(group, option) {
        setStatus("Checkbox options are fixed for the default template.", "error");
    }

    function toggleCheckbox(group, option, checked) {
        const target = state.data.checkbox[group];
        if (!target) {
            return;
        }
        target.checked = target.checked.filter((item) => item !== option);
        target.unchecked = target.unchecked.filter((item) => item !== option);

        if (checked) {
            target.checked.push(option);
        } else {
            target.unchecked.push(option);
        }
        renderPreview();
    }

    function renderCheckboxGroups() {
        const container = elements.checkboxGroups;
        container.innerHTML = "";
        const entries = Object.entries(state.data.checkbox || {}).sort((a, b) => a[0].localeCompare(b[0]));

        entries.forEach(([groupName, groupValue]) => {
            const groupEl = document.createElement("div");
            groupEl.className = "checkbox-group";

            const header = document.createElement("header");
            const title = document.createElement("h3");
            title.textContent = groupName;
            header.appendChild(title);

            groupEl.appendChild(header);

            const optionsContainer = document.createElement("div");
            optionsContainer.className = "checkbox-options";

            const optionsSet = new Set([
                ...(groupValue.checked || []),
                ...(groupValue.unchecked || [])
            ]);

            if (optionsSet.size === 0) {
                const helper = document.createElement("p");
                helper.textContent = "No options defined.";
                helper.className = "muted";
                optionsContainer.appendChild(helper);
            } else {
                optionsSet.forEach((optionName) => {
                    const optionRow = document.createElement("div");
                    optionRow.className = "checkbox-option";

                    const label = document.createElement("label");
                    const checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.checked = groupValue.checked.includes(optionName);
                    checkbox.addEventListener("change", () => toggleCheckbox(groupName, optionName, checkbox.checked));

                    const caption = document.createElement("span");
                    caption.textContent = optionName;

                    label.appendChild(checkbox);
                    label.appendChild(caption);
                    optionRow.appendChild(label);

                    optionsContainer.appendChild(optionRow);
                });
            }

            groupEl.appendChild(optionsContainer);

            container.appendChild(groupEl);
        });

        if (entries.length === 0) {
            const helper = document.createElement("p");
            helper.textContent = "No checkbox groups available.";
            helper.className = "muted";
            container.appendChild(helper);
        }
    }

    function renderDmpEditor() {
        elements.dmpEditor.value = JSON.stringify(state.data.dmp || {}, null, 2);
    }

    function renderPreview() {
        syncPrimaryCache();
        try {
            elements.jsonPreview.textContent = JSON.stringify(state.data, null, 2);
        } catch (error) {
            console.error("Preview rendering failed:", error);
            elements.jsonPreview.textContent = "Unable to render preview.";
        }
    }

    async function downloadJson() {
        syncPrimaryCache();
        const isValid = await runValidation(true);
        if (!isValid) {
            return;
        }
        try {
            const payload = JSON.stringify(state.data, null, 2);
            const blob = new Blob([payload], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = state.fileName || "DataPLAN_DMP.json";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            setStatus(`Exported ${link.download}.`);
        } catch (error) {
            console.error("Export failed:", error);
            setStatus("Export failed. See console for details.", "error");
        }
    }

    function syncPrimaryCache() {
        if (!state.data) {
            return;
        }
        const update = state.data.update;
        if (!update || !Array.isArray(update.storage) || update.storage.length === 0) {
            return;
        }
        const primary = update.storage[0];
        if (!primary || typeof primary !== "object") {
            return;
        }
        if (!primary.answer || typeof primary.answer !== "object" || Array.isArray(primary.answer)) {
            primary.answer = {};
        }
        primary.answer.replace = cloneData(state.data.replace || {});
        primary.answer.checkbox = cloneData(state.data.checkbox || {});
    }

    function setStatus(message, type = "info") {
        if (!elements.statusBanner) {
            return;
        }
        if (!message) {
            elements.statusBanner.classList.remove("visible");
            elements.statusBanner.textContent = "";
            return;
        }
        elements.statusBanner.textContent = message;
        elements.statusBanner.dataset.type = type;
        elements.statusBanner.classList.add("visible");
    }

    async function runValidation(showStatus) {
        const editor = elements.dmpEditor;
        const messages = elements.dmpValidationMessages;
        if (!editor || !messages) {
            return true;
        }

        const clearState = () => {
            editor.classList.remove("invalid-field");
            messages.innerHTML = "";
            messages.className = "validation-messages";
        };

        try {
            await ensureValidatorReady();
            const payload = buildValidationPayload(state.data);
            const result = window.MadmpValidator.validateData(payload);
            const errors = result.errors || [];

            if (result.valid) {
                clearState();
                if (showStatus) {
                    setStatus("maDMP is valid.", "success");
                }
                return true;
            }

            if (errors.length === 0) {
                editor.classList.add("invalid-field");
                messages.className = "validation-messages";
                messages.innerHTML = "";
                const wrapper = document.createElement("div");
                wrapper.className = "validation-error-item";
                wrapper.innerHTML = `<div class="error-message">Validation failed, but no additional error information is available.</div>`;
                messages.appendChild(wrapper);
                if (showStatus) {
                    setStatus("maDMP validation failed, but no error details are available.", "error");
                }
                return false;
            }

            editor.classList.add("invalid-field");
            messages.innerHTML = "";
            messages.className = "validation-messages";

            const fragment = document.createDocumentFragment();
            errors.forEach((error) => {
                const wrapper = document.createElement("div");
                wrapper.className = "validation-error-item";

                const path = document.createElement("div");
                path.className = "error-path";
                path.textContent = error.path;

                const message = document.createElement("div");
                message.className = "error-message";
                message.textContent = error.message;

                wrapper.appendChild(path);
                wrapper.appendChild(message);
                fragment.appendChild(wrapper);
            });

            messages.appendChild(fragment);
            if (showStatus) {
                setStatus("maDMP validation failed. Errors are highlighted below the editor.", "error");
            }
            return false;
        } catch (error) {
            console.error("Validation unavailable:", error);
            editor.classList.add("invalid-field");
            messages.className = "validation-messages";
            messages.innerHTML = "";
            const wrapper = document.createElement("div");
            wrapper.className = "validation-error-item";
            wrapper.innerHTML = `<div class="error-message">Validation unavailable: ${error.message}</div>`;
            messages.appendChild(wrapper);
            if (showStatus) {
                setStatus(`Validation unavailable: ${error.message}`, "error");
            }
            return false;
        }
    }

    async function ensureValidatorReady() {
        if (!window.MadmpValidator) {
            throw new Error("MadmpValidator is not available.");
        }
        if (!validatorReadyPromise) {
            validatorReadyPromise = window.MadmpValidator.init();
        }
        const initialized = await validatorReadyPromise;
        if (!initialized) {
            validatorReadyPromise = null;
            throw new Error("Failed to initialize maDMP validator.");
        }
    }

    function buildValidationPayload(data) {
        if (!data || typeof data !== "object") {
            return {};
        }
        if (!data.dmp || typeof data.dmp !== "object") {
            return {};
        }
        return { dmp: data.dmp };
    }

    function normalizeMaDmpStructure(raw) {
        if (!raw || typeof raw !== "object") {
            return {};
        }
        const candidate = raw.dmp && typeof raw.dmp === "object" ? raw.dmp : raw;
        return cloneData(candidate);
    }

    function sanitizeData(rawData) {
        const initial = cloneData(rawData || EMPTY_TEMPLATE);
        const sanitized = {
            templateName: typeof initial.templateName === "string" ? initial.templateName : "",
            templateText: typeof initial.templateText === "string" ? initial.templateText : "",
        dmp: normalizeMaDmpStructure(initial),
            replace: normalizeReplace(initial.replace),
            checkbox: normalizeCheckbox(initial.checkbox),
            update: normalizeUpdate(initial.update)
        };
        return sanitized;
    }

    function syncReplaceAndCheckboxFromDmp(dmp, replace, checkbox) {
        const nextReplace = cloneData(replace || {});
        const nextCheckbox = cloneData(checkbox || {});

        if (!dmp || typeof dmp !== "object") {
            return { replace: nextReplace, checkbox: nextCheckbox };
        }

        assignReplace(nextReplace, "$_PROJECTNAME", dmp.title, "Example Project");
        assignReplace(nextReplace, "$_USERNAME", dmp?.contact?.name, "Example User");
        assignReplace(nextReplace, "$_EMAIL", dmp?.contact?.mbox, "E-Mail");
        assignReplace(nextReplace, "$_DMPVERSION", dmp.version, "1.0");
        assignReplace(
            nextReplace,
            "$_ADDPROJECTCOORDINATOR",
            dmp?.project?.contact,
            "Project Coordinator"
        );
        assignReplace(
            nextReplace,
            "$_CREATIONDATE",
            formatDateForReplace(dmp.created),
            "xxxx-xx-xx"
        );
        assignReplace(
            nextReplace,
            "$_MODIFICATIONDATE",
            formatDateForReplace(dmp.modified),
            "xxxx-xx-xx"
        );
        assignReplace(
            nextReplace,
            "$_DOI",
            (dmp?.dmp_id?.identifier || "").trim(),
            ""
        );

        const dataset = Array.isArray(dmp.dataset) ? dmp.dataset[0] : undefined;
        assignReplace(
            nextReplace,
            "$_DATASETDOI",
            (dataset?.dataset_id?.identifier || "").trim(),
            ""
        );

        const rawDataValue = resolveDatasetValue(dataset?.personal_data, nextReplace.$_RAWDATA);
        assignReplace(nextReplace, "$_RAWDATA", rawDataValue, "???");

        const derivedDataValue = resolveDatasetValue(
            dataset?.sensitive_data,
            nextReplace.$_DERIVEDDATA
        );
        assignReplace(nextReplace, "$_DERIVEDDATA", derivedDataValue, "???");

        const checkboxGroup1 = nextCheckbox.checkbox_1;
        setCheckboxStateFromValue(checkboxGroup1, "check_protect", dmp.ethical_issues_exist);
        if (dataset) {
            setCheckboxStateFromValue(checkboxGroup1, "check_protect", dataset.personal_data);
            setCheckboxStateFromValue(checkboxGroup1, "check_protect", dataset.sensitive_data);
        }

        return { replace: nextReplace, checkbox: nextCheckbox };
    }

    function assignReplace(target, key, value, fallback) {
        if (value !== undefined && value !== null && String(value).trim().length > 0) {
            target[key] = typeof value === "string" ? value : String(value);
        } else if (typeof target[key] === "undefined") {
            target[key] = fallback;
        }
    }

    function resolveDatasetValue(source, previous) {
        if (source === null || source === undefined) {
            return typeof previous === "string" ? previous : "???";
        }
        const text = String(source).trim();
        if (!text) {
            return typeof previous === "string" ? previous : "???";
        }
        return text.toLowerCase() === "unknown" ? "???" : text;
    }

    function setCheckboxStateFromValue(group, option, value) {
        if (!group || !option) {
            return;
        }
        const val = typeof value === "string" ? value.toLowerCase() : "";
        if (!val) {
            return;
        }
        const shouldCheck = val === "yes";
        const shouldUncheck = val === "no" || val === "unknown";

        if (!shouldCheck && !shouldUncheck) {
            return;
        }

        group.checked = normalizeStringArray(group.checked).filter((item) => item !== option);
        group.unchecked = normalizeStringArray(group.unchecked).filter((item) => item !== option);

        if (shouldCheck) {
            group.checked.push(option);
        } else {
            group.unchecked.push(option);
        }
    }

    function formatDateForReplace(dateStr) {
        if (!dateStr) {
            return "";
        }
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) {
            return "";
        }
        return date.toISOString().split("T")[0];
    }

    function normalizeReplace(value) {
        const source = normalizePlainObject(value);
        const result = {};
        Object.entries(source).forEach(([key, val]) => {
            if (typeof key !== "string") {
                return;
            }
            result[key] = typeof val === "string" ? val : (val == null ? "" : String(val));
        });
        return result;
    }

    function normalizeCheckbox(value) {
        const source = normalizePlainObject(value);
        const result = {};
        Object.entries(source).forEach(([groupName, groupValue]) => {
            const normalisedGroup = normalizeCheckboxGroup(groupValue);
            result[groupName] = normalisedGroup;
        });
        return result;
    }

    function normalizeCheckboxGroup(value) {
        const source = normalizePlainObject(value);
        const checkedSet = new Set(normalizeStringArray(source.checked));
        const uncheckedSet = new Set(normalizeStringArray(source.unchecked));
        checkedSet.forEach((item) => uncheckedSet.delete(item));
        return {
            checked: Array.from(checkedSet),
            unchecked: Array.from(uncheckedSet)
        };
    }

    function normalizeUpdate(value) {
        const source = normalizePlainObject(value);
        const timeline = Array.isArray(source.timeline) ? cloneData(source.timeline) : [];
        let storage = Array.isArray(source.storage) ? cloneData(source.storage) : [];
        storage = storage.map((entry) => {
            const normalisedEntry = normalizePlainObject(entry);
            const answer = normalizePlainObject(normalisedEntry.answer);
            return {
                name: typeof normalisedEntry.name === "string" ? normalisedEntry.name : "",
                answer: {
                    replace: normalizeReplace(answer.replace),
                    checkbox: normalizeCheckbox(answer.checkbox),
                    timestamp: answer.timestamp || normalisedEntry.timestamp
                }
            };
        });
        while (storage.length < 6) {
            storage.push({ answer: {}, name: "" });
        }
        return { timeline, storage };
    }

    function normalizePlainObject(value) {
        if (!value || typeof value !== "object" || Array.isArray(value)) {
            return {};
        }
        return value;
    }

    function normalizeStringArray(value) {
        if (!Array.isArray(value)) {
            return [];
        }
        return value
            .map((item) => (item == null ? "" : String(item).trim()))
            .filter((item) => item.length > 0);
    }

    function cloneData(value) {
        if (typeof structuredClone === "function") {
            try {
                return structuredClone(value);
            } catch (error) {
                // fall through to JSON based clone
            }
        }
        return JSON.parse(JSON.stringify(value));
    }
})();
