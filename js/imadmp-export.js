/**
 * IMADMP Export Module
 * Exports DataPLAN internal data format to IMADMP (machine-actionable DMP) JSON format
 * based on the RDA-DMP-Common-Standard schema.
 */

// Manually converted from imadmp-dataplan.csv
// Mapping of IMADMP paths to DataPLAN keys
const IMADMP_MAPPING = [
    // Simple placeholder mappings
    { path: "dmp/created", type: "placeholder", key: "$_CREATIONDATE" },
    { path: "dmp/modified", type: "placeholder", key: "$_MODIFICATIONDATE" },
    { path: "dmp/version", type: "placeholder", key: "$_DMPVERSION" },
    { path: "dmp/title", type: "placeholder", key: "dmp of $_PROJECTNAME", isTemplate: true },
    { path: "dmp/project/title", type: "placeholder", key: "$_PROJECTNAME" },
    { path: "dmp/project/acronym", type: "placeholder", key: "$_ADDACRONYM" },
    { path: "dmp/project/studyobject", type: "placeholder", key: "$_STUDYOBJECT" },
    { path: "dmp/project/description", type: "placeholder", key: "$_PROJECTAIM" },
    { path: "dmp/contact/mbox", type: "placeholder", key: "$_EMAIL" },
    { path: "dmp/contact/name", type: "placeholder", key: "$_USERNAME" },
    { path: "dmp/project/funding/programme", type: "placeholder", key: "$_FUNDINGPROGRAMME" },
    { path: "dmp/project/funding/project_coordinator", type: "placeholder", key: "$_ADDPROJECTCOORDINATOR" },
    { path: "dmp/project/funding/partner", type: "placeholder", key: "$_PARTNERS" },

    // Building block - text mappings (extract from rendered DOM)
    { path: "dmp/ethical_issues_description", type: "text", key: "text-ethical-en" },
    { path: "dmp/cost/description", type: "text", key: "text-cost-en" },
    { path: "dmp/dataset/datautility", type: "text", key: "text-data-utility-en" },
    { path: "dmp/dataset/data_quality_assurance", type: "text", key: "text-quality-control-en" },
    { path: "dmp/dataset/metadata/metadata_standard_id/identifier", type: "text", key: "text-standards-short-en" },
    { path: "dmp/dataset/preservation_statement/where", type: "text", key: "text-repository-short-en" },
    { path: "dmp/dataset/security_and_privacy/description", type: "text", key: "text-data-security-en" },
    { path: "dmp/dataset/distribution/byte_size", type: "text", key: "text-data-size-en" },

    // Building block - list mappings (extract from rendered DOM <li> elements)
    { path: "dmp/dataset/type", type: "list", key: "list-dataType-en" },
    { path: "dmp/dataset/creation_methods", type: "list", key: "list-dataCollection-en" },
    { path: "dmp/dataset/distribution/format", type: "list", key: "list-data-format-en" },

    // Note: Rows with empty IMADMP path are auxiliary building blocks and are skipped
];

/**
 * Set nested value in object using path (e.g., "dmp/project/title")
 * @param {Object} obj - The target object
 * @param {string} path - The path to set (e.g., "dmp/project/title")
 * @param {any} value - The value to set
 */
function setNestedValue(obj, path, value) {
    const parts = path.split('/');
    let current = obj;

    for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (!(part in current)) {
            current[part] = {};
        }
        current = current[part];
    }

    const lastPart = parts[parts.length - 1];
    current[lastPart] = value;
}

/**
 * Resolve placeholders in template strings
 * Reuses pattern from main.js save_rdmoxml() function
 * @param {Object} replaceObj - Object containing placeholder replacements (e.g., {$_PROJECTNAME: "My Project"})
 * @param {string} template - Template string with placeholders (e.g., "dmp of $_PROJECTNAME")
 * @returns {string} Template with placeholders resolved
 */
function resolvePlaceholders(replaceObj, template) {
    let result = template;
    // Find all $_PLACEHOLDER patterns
    const placeholderRegex = /\$\_[A-Z_]+/g;

    result = result.replace(placeholderRegex, (placeholder) => {
        return replaceObj?.[placeholder] || placeholder;
    });

    return result;
}

/**
 * Extract placeholder value from saved_a.replace
 * @param {Object} saved_a - The saved DataPLAN data object
 * @param {string} key - The placeholder key (e.g., "$_PROJECTNAME")
 * @returns {string} The extracted value or empty string
 */
function extractPlaceholderValue(saved_a, key) {
    // Direct placeholder like $_PROJECTNAME
    if (key.startsWith('$_')) {
        return saved_a.replace?.[key] || '';
    }
    return '';
}

/**
 * Extract building block text content from rendered DOM
 * Reuses pattern from main.js save_rdmoxml() line 709:
 * document.querySelector(".dmpblocks-"+ele[0]).innerText
 * @param {string} key - The building block key (e.g., "text-ethical-en")
 * @returns {string} The extracted text content or empty string
 */
function extractTextValue(key) {
    const element = document.querySelector(`.dmpblocks-${key}`);
    if (!element) return '';
    return element.innerText.trim();
}

/**
 * Extract building block list from rendered DOM
 * Extracts <li> elements from the rendered HTML
 * @param {string} key - The building block key (e.g., "list-dataType-en")
 * @returns {Array<string>} Array of list item texts
 */
function extractListValue(key) {
    const element = document.querySelector(`.dmpblocks-${key}`);
    if (!element) return [];

    const items = element.querySelectorAll('li');
    return Array.from(items).map(li => li.innerText.trim());
}

/**
 * Transform DataPLAN saved_a to IMADMP format
 * @param {Object} saved_a - The saved DataPLAN data object
 * @returns {Object} IMADMP formatted object
 */
function transformToIMADMP(saved_a) {
    const imadmp = { dmp: {} };

    IMADMP_MAPPING.forEach(mapping => {
        const { path, type, key, isTemplate } = mapping;
        let extractedValue;

        switch(type) {
            case 'placeholder':
                if (isTemplate) {
                    // Template string with embedded placeholders
                    extractedValue = resolvePlaceholders(saved_a.replace, key);
                } else {
                    // Direct placeholder reference
                    extractedValue = extractPlaceholderValue(saved_a, key);
                }
                break;

            case 'text':
                extractedValue = extractTextValue(key);
                break;

            case 'list':
                extractedValue = extractListValue(key);
                break;

            default:
                return; // Skip unknown types
        }

        // Only set if value exists
        if (extractedValue !== null && extractedValue !== undefined && extractedValue !== '') {
            setNestedValue(imadmp, path, extractedValue);
        }
    });

    // Merge with existing dmp metadata if available
    if (saved_a.dmp) {
        imadmp.dmp = { ...saved_a.dmp, ...imadmp.dmp };
    }

    return imadmp;
}

/**
 * Convert IMADMP format to DataPLAN full format for the editor
 * @param {Object} imadmpData - The IMADMP data object
 * @param {Object} saved_a - The original saved_a for replace/checkbox data
 * @returns {Object} DataPLAN format for the editor
 */
function convertToEditorFormat(imadmpData, saved_a) {
    return {
        templateName: "",
        templateText: "",
        dmp: imadmpData.dmp || {},
        replace: saved_a.replace || {},
        checkbox: saved_a.checkbox || {},
        update: saved_a.update || { timeline: [], storage: [] }
    };
}

// Track the current editor instance
let currentEditorInstance = null;

/**
 * Main export function (called from button)
 * Opens the maDMP editor modal instead of direct download
 */
function save_imadmp() {
    const imadmpData = transformToIMADMP(window.saved_a);
    const editorData = convertToEditorFormat(imadmpData, window.saved_a);

    // Open modal and initialize editor with data
    const modalElement = document.getElementById('imadmp_editor_modal');
    const modal = new bootstrap.Modal(modalElement);

    // Initialize editor when modal is shown
    const container = document.getElementById('imadmp_editor_container');

    // Clean up previous instance if exists
    if (currentEditorInstance && currentEditorInstance._instanceId) {
        window.MadmpEditor.reset(currentEditorInstance._instanceId);
    }

    // Initialize new editor instance
    currentEditorInstance = window.MadmpEditor.init(container, editorData, 'imadmp');

    // Store reference for download handler
    modalElement._currentEditorInstance = currentEditorInstance;

    modal.show();
}

/**
 * Download handler for the editor
 * Gets data from editor, validates, and downloads as JSON
 */
function handleImadmpDownload() {
    if (!currentEditorInstance) {
        console.error('No editor instance available');
        return;
    }

    const data = currentEditorInstance.getData();

    // Validate the dmp data
    if (!data || !data.dmp) {
        alert('No valid maDMP data to export.');
        return;
    }

    // Download the JSON file
    try {
        const payload = JSON.stringify(data, null, 2);
        const blob = new Blob([payload], { type: "application/json" });
        saveAs(blob, "DataPLAN_IMADMP.json");
    } catch (error) {
        console.error("Export failed:", error);
        alert("Export failed. See console for details.");
    }
}

// Initialize download button handler when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('imadmp_download_btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', handleImadmpDownload);
    }

    // Clean up when modal is hidden
    const modalElement = document.getElementById('imadmp_editor_modal');
    if (modalElement) {
        modalElement.addEventListener('hidden.bs.modal', function() {
            currentEditorInstance = null;
        });
    }
});
