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

    // DMP field definitions for form-based editing - split into two columns
    const DMP_FIELDS_GENERAL = [
        { key: "title", label: "title", path: "title" },
        { key: "created", label: "created", path: "created" },
        { key: "modified", label: "modified", path: "modified" },
        { key: "version", label: "version", path: "version" },
        { key: "language", label: "language", path: "language" },
        { key: "ethical_issues_exist", label: "ethical_issues", path: "ethical_issues_exist" },
        { key: "dmp_id_identifier", label: "dmp_id", path: "dmp_id/identifier" },
        { key: "dmp_id_type", label: "dmp_id_type", path: "dmp_id/type" }
    ];

    const DMP_FIELDS_CONTACT_PROJECT = [
        { key: "contact_name", label: "contact/name", path: "contact/name" },
        { key: "contact_mbox", label: "contact/mbox", path: "contact/mbox" },
        { key: "project_title", label: "project/title", path: "project/title" },
        { key: "project_start", label: "project/start", path: "project/start" },
        { key: "project_end", label: "project/end", path: "project/end" }
    ];

    // Helper to get nested value from object
    function getNestedValue(obj, path) {
        if (!path) return obj;
        const parts = path.split('/');
        let current = obj;
        for (const part of parts) {
            if (current === null || current === undefined) return '';
            current = current[part];
        }
        return current ?? '';
    }

    // Helper to set nested value in object
    function setNestedValueInPath(obj, path, value) {
        if (!path) return;
        const parts = path.split('/');
        let current = obj;
        for (let i = 0; i < parts.length - 1; i++) {
            const part = parts[i];
            if (!(part in current) || typeof current[part] !== 'object') {
                current[part] = {};
            }
            current = current[part];
        }
        const lastPart = parts[parts.length - 1];
        if (value === '' || value === null || value === undefined) {
            delete current[lastPart];
        } else {
            current[lastPart] = value;
        }
    }

    // Editor instance state - supports multiple instances
    const instances = new Map();
    let instanceCounter = 0;

    class MadmpEditorInstance {
        constructor(container, idPrefix) {
            this.container = container;
            this.idPrefix = idPrefix;
            this.state = {
                data: null,
                fileName: "DataPLAN_DMP.json"
            };
            this.validatorReadyPromise = null;
            this.elements = {};
        }

        cacheElements() {
            const p = (id) => this.idPrefix ? `${this.idPrefix}_${id}` : id;
            this.elements.fileInput = document.getElementById(p("fileInput"));
            this.elements.loadSample = document.getElementById(p("loadSample"));
            this.elements.resetEditor = document.getElementById(p("resetEditor"));
            this.elements.exportJson = document.getElementById(p("exportJson"));
            this.elements.statusBanner = document.getElementById(p("statusBanner"));

            this.elements.dmpEditor = document.getElementById(p("dmpEditor"));
            this.elements.applyDmpChanges = document.getElementById(p("applyDmpChanges"));

            this.elements.replaceRows = document.getElementById(p("replaceRows"));
            this.elements.addReplaceForm = document.getElementById(p("addReplaceForm"));
            this.elements.newReplaceKey = document.getElementById(p("newReplaceKey"));
            this.elements.newReplaceValue = document.getElementById(p("newReplaceValue"));

            this.elements.checkboxGroups = document.getElementById(p("checkboxGroups"));
            this.elements.addGroupForm = document.getElementById(p("addGroupForm"));
            this.elements.newGroupName = document.getElementById(p("newGroupName"));

            this.elements.jsonPreview = document.getElementById(p("jsonPreview"));
            this.elements.dmpValidationMessages = document.getElementById(p("dmpValidationMessages"));
            this.elements.dmpGeneral = document.getElementById(p("dmpGeneral"));
            this.elements.dmpContactProject = document.getElementById(p("dmpContactProject"));
        }

        wireEvents() {
            if (this.elements.fileInput) {
                this.elements.fileInput.addEventListener("change", (e) => this.onFileImport(e));
            }
            if (this.elements.loadSample) {
                this.elements.loadSample.addEventListener("click", () => {
                    this.setState(cloneData(DEFAULT_JSON), "DataPLAN_DMP.json");
                    this.setStatus("Sample JSON loaded.");
                });
            }
            if (this.elements.resetEditor) {
                this.elements.resetEditor.addEventListener("click", () => {
                    this.setState(cloneData(EMPTY_TEMPLATE), "DataPLAN_DMP.json");
                    this.setStatus("Editor reset to an empty template.");
                });
            }
            if (this.elements.exportJson) {
                this.elements.exportJson.addEventListener("click", () => this.downloadJson());
            }
            if (this.elements.applyDmpChanges) {
                this.elements.applyDmpChanges.addEventListener("click", () => this.applyDmpChanges());
            }
            if (this.elements.addReplaceForm) {
                this.elements.addReplaceForm.addEventListener("submit", (e) => this.addReplaceField(e));
            }
            if (this.elements.addGroupForm) {
                this.elements.addGroupForm.addEventListener("submit", (e) => this.addCheckboxGroup(e));
            }
        }

        setState(rawData, fileName) {
            const sanitized = sanitizeData(rawData);
            this.state.data = sanitized;
            this.state.fileName = fileName || this.state.fileName || "DataPLAN_DMP.json";
            this.renderAll();
        }

        getData() {
            this.syncPrimaryCache();
            return cloneData(this.state.data);
        }

        reset() {
            this.setState(cloneData(EMPTY_TEMPLATE), "DataPLAN_DMP.json");
        }

        renderAll() {
            this.renderDmpFields();
            this.renderDmpEditor();
            this.renderReplaceRows();
            this.renderCheckboxGroups();
            this.renderPreview();
            this.runValidation(false);
        }

        renderDmpFields() {
            const dmp = this.state.data.dmp || {};

            // Helper to render fields into a container (using replace-row style)
            const renderFields = (container, fields) => {
                if (!container) return;
                container.innerHTML = '';

                fields.forEach(field => {
                    const rowEl = document.createElement('div');
                    rowEl.className = 'replace-row';

                    const spanEl = document.createElement('span');
                    spanEl.textContent = field.label;
                    rowEl.appendChild(spanEl);

                    const inputEl = document.createElement('input');
                    inputEl.type = 'text';
                    inputEl.id = `${this.idPrefix}_${field.key}`;
                    inputEl.value = getNestedValue(dmp, field.path);
                    inputEl.dataset.path = field.path;

                    inputEl.addEventListener('input', () => {
                        this.onDmpFieldChange(field.path, inputEl.value);
                    });

                    rowEl.appendChild(inputEl);
                    container.appendChild(rowEl);
                });
            };

            renderFields(this.elements.dmpGeneral, DMP_FIELDS_GENERAL);
            renderFields(this.elements.dmpContactProject, DMP_FIELDS_CONTACT_PROJECT);
        }

        onDmpFieldChange(path, value) {
            if (!this.state.data.dmp) {
                this.state.data.dmp = {};
            }
            setNestedValueInPath(this.state.data.dmp, path, value);
            this.renderDmpEditor();
            this.renderPreview();
            this.runValidation(false);
        }

        onFileImport(event) {
            const file = event.target.files && event.target.files[0];
            if (!file) {
                return;
            }

            file.text()
                .then((text) => JSON.parse(text))
                .then((json) => {
                    this.setState(json, file.name || "DataPLAN_DMP.json");
                    this.setStatus(`Imported ${file.name || "JSON file"}.`);
                    if (this.elements.fileInput) {
                        this.elements.fileInput.value = "";
                    }
                })
                .catch((error) => {
                    console.error("Import failed:", error);
                    this.setStatus("Import failed: invalid JSON.", "error");
                });
        }

        async applyDmpChanges() {
            try {
                const next = JSON.parse(this.elements.dmpEditor.value || "{}");
                this.state.data.dmp = normalizeMaDmpStructure(next);
                const syncResult = syncReplaceAndCheckboxFromDmp(
                    this.state.data.dmp,
                    this.state.data.replace,
                    this.state.data.checkbox
                );
                this.state.data.replace = syncResult.replace;
                this.state.data.checkbox = syncResult.checkbox;
                this.renderDmpEditor();
                this.renderReplaceRows();
                this.renderCheckboxGroups();
                this.renderPreview();
                await this.runValidation(true);
            } catch (error) {
                console.error("maDMP parse error:", error);
                this.setStatus("maDMP JSON invalid. Changes not applied.", "error");
            }
        }

        addReplaceField(event) {
            event.preventDefault();
            const key = (this.elements.newReplaceKey.value || "").trim();
            const value = this.elements.newReplaceValue.value || "";

            if (!key) {
                this.setStatus("Replace key cannot be empty.", "error");
                return;
            }
            if (!key.startsWith("$_")) {
                this.setStatus("Replace keys should start with $_ to stay compatible with DataPLAN templates.", "error");
                return;
            }
            if (Object.prototype.hasOwnProperty.call(this.state.data.replace, key)) {
                this.setStatus(`Replace key ${key} already exists.`, "error");
                return;
            }

            this.state.data.replace[key] = value;
            this.elements.newReplaceKey.value = "";
            this.elements.newReplaceValue.value = "";
            this.renderReplaceRows();
            this.renderPreview();
            this.setStatus(`Added replace field ${key}.`);
        }

        removeReplaceField(key) {
            delete this.state.data.replace[key];
            this.renderReplaceRows();
            this.renderPreview();
            this.setStatus(`Removed replace field ${key}.`);
        }

        renderReplaceRows() {
            const container = this.elements.replaceRows;
            if (!container) return;
            container.innerHTML = "";
            const entries = Object.entries(this.state.data.replace || {}).sort((a, b) => a[0].localeCompare(b[0]));

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
                    this.state.data.replace[key] = valueInput.value;
                    this.renderPreview();
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

        addCheckboxGroup(event) {
            event.preventDefault();
            const group = (this.elements.newGroupName.value || "").trim();
            if (!group) {
                this.setStatus("Group name is required.", "error");
                return;
            }
            if (Object.prototype.hasOwnProperty.call(this.state.data.checkbox, group)) {
                this.setStatus(`Group ${group} already exists.`, "error");
                return;
            }
            this.state.data.checkbox[group] = { checked: [], unchecked: [] };
            this.elements.newGroupName.value = "";
            this.renderCheckboxGroups();
            this.renderPreview();
            this.setStatus(`Added checkbox group ${group}.`);
        }

        removeCheckboxGroup(group) {
            delete this.state.data.checkbox[group];
            this.renderCheckboxGroups();
            this.renderPreview();
            this.setStatus(`Removed checkbox group ${group}.`);
        }

        toggleCheckbox(group, option, checked) {
            const target = this.state.data.checkbox[group];
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
            this.renderPreview();
        }

        renderCheckboxGroups() {
            const container = this.elements.checkboxGroups;
            if (!container) return;
            container.innerHTML = "";
            const entries = Object.entries(this.state.data.checkbox || {}).sort((a, b) => a[0].localeCompare(b[0]));

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
                        checkbox.addEventListener("change", () => this.toggleCheckbox(groupName, optionName, checkbox.checked));

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

        renderDmpEditor() {
            if (this.elements.dmpEditor) {
                this.elements.dmpEditor.value = JSON.stringify(this.state.data.dmp || {}, null, 2);
            }
        }

        renderPreview() {
            this.syncPrimaryCache();
            if (!this.elements.jsonPreview) return;
            try {
                this.elements.jsonPreview.textContent = JSON.stringify(this.state.data, null, 2);
            } catch (error) {
                console.error("Preview rendering failed:", error);
                this.elements.jsonPreview.textContent = "Unable to render preview.";
            }
        }

        async downloadJson() {
            this.syncPrimaryCache();
            const isValid = await this.runValidation(true);
            if (!isValid) {
                return;
            }
            try {
                const payload = JSON.stringify(this.state.data, null, 2);
                const blob = new Blob([payload], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = this.state.fileName || "DataPLAN_DMP.json";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                this.setStatus(`Exported ${link.download}.`);
            } catch (error) {
                console.error("Export failed:", error);
                this.setStatus("Export failed. See console for details.", "error");
            }
        }

        syncPrimaryCache() {
            if (!this.state.data) {
                return;
            }
            const update = this.state.data.update;
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
            primary.answer.replace = cloneData(this.state.data.replace || {});
            primary.answer.checkbox = cloneData(this.state.data.checkbox || {});
        }

        setStatus(message, type = "info") {
            if (!this.elements.statusBanner) {
                return;
            }
            if (!message) {
                this.elements.statusBanner.classList.remove("visible");
                this.elements.statusBanner.textContent = "";
                return;
            }
            this.elements.statusBanner.textContent = message;
            this.elements.statusBanner.dataset.type = type;
            this.elements.statusBanner.classList.add("visible");
        }

        async runValidation(showStatus) {
            const editor = this.elements.dmpEditor;
            const messages = this.elements.dmpValidationMessages;
            if (!editor || !messages) {
                return true;
            }

            const clearState = () => {
                editor.classList.remove("invalid-field");
                messages.innerHTML = "";
                messages.className = "validation-messages";
            };

            try {
                await this.ensureValidatorReady();
                const payload = buildValidationPayload(this.state.data);
                const result = window.MadmpValidator.validateData(payload);
                const errors = result.errors || [];

                if (result.valid) {
                    clearState();
                    if (showStatus) {
                        this.setStatus("maDMP is valid.", "success");
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
                        this.setStatus("maDMP validation failed, but no error details are available.", "error");
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
                    this.setStatus("maDMP validation failed. Errors are highlighted below the editor.", "error");
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
                    this.setStatus(`Validation unavailable: ${error.message}`, "error");
                }
                return false;
            }
        }

        async ensureValidatorReady() {
            if (!window.MadmpValidator) {
                throw new Error("MadmpValidator is not available.");
            }
            if (!this.validatorReadyPromise) {
                this.validatorReadyPromise = window.MadmpValidator.init();
            }
            const initialized = await this.validatorReadyPromise;
            if (!initialized) {
                this.validatorReadyPromise = null;
                throw new Error("Failed to initialize maDMP validator.");
            }
        }

        init(rawData, fileName) {
            this.cacheElements();
            this.wireEvents();
            this.setState(rawData || cloneData(DEFAULT_JSON), fileName || "DataPLAN_DMP.json");
        }
    }

    // Helper functions (shared across instances)
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

    function normalizeMaDmpStructure(raw) {
        if (!raw || typeof raw !== "object") {
            return {};
        }
        const candidate = raw.dmp && typeof raw.dmp === "object" ? raw.dmp : raw;
        return cloneData(candidate);
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

    // Public API for embedded mode
    window.MadmpEditor = {
        /**
         * Initialize an editor instance in a container
         * @param {HTMLElement} container - The container element
         * @param {Object} initialData - Initial data to populate
         * @param {string} idPrefix - Prefix for element IDs (default: "imadmp")
         * @returns {MadmpEditorInstance} The editor instance
         */
        init: function(container, initialData, idPrefix = "imadmp") {
            const instance = new MadmpEditorInstance(container, idPrefix);
            const instanceId = ++instanceCounter;
            instances.set(instanceId, instance);
            instance._instanceId = instanceId;
            instance.init(initialData);
            return instance;
        },

        /**
         * Get an editor instance by ID
         * @param {number} instanceId - The instance ID
         * @returns {MadmpEditorInstance|null}
         */
        getInstance: function(instanceId) {
            return instances.get(instanceId) || null;
        },

        /**
         * Get data from an instance
         * @param {number} instanceId - The instance ID
         * @returns {Object|null}
         */
        getData: function(instanceId) {
            const instance = instances.get(instanceId);
            return instance ? instance.getData() : null;
        },

        /**
         * Reset an instance
         * @param {number} instanceId - The instance ID
         */
        reset: function(instanceId) {
            const instance = instances.get(instanceId);
            if (instance) {
                instance.reset();
            }
        }
    };

    // Standalone mode initialization (when not embedded)
    // Check if standalone elements exist
    if (document.getElementById("dmpEditor")) {
        const standaloneInstance = new MadmpEditorInstance(null, "");
        document.addEventListener("DOMContentLoaded", () => {
            standaloneInstance.cacheElements();
            standaloneInstance.wireEvents();
            standaloneInstance.setState(cloneData(DEFAULT_JSON), "DataPLAN_DMP.json");
        });
    }
})();
