(function () {
    "use strict";

    const Validator = {
        schema: null,
        validator: null,
        validate: null,

        async init() {
            if (this.validate) {
                return true;
            }

            try {
                const schema = window.MADMP_SCHEMA_V12;
                if (!schema) {
                    throw new Error("Embedded maDMP schema not found. Ensure madmp-schema.js is loaded.");
                }

                const AjvCtor = window.ajv2020 || window.Ajv;
                if (!AjvCtor) {
                    throw new Error("Ajv runtime not available. Include ajv2020.min.js before validator.js.");
                }

                this.validator = new AjvCtor({
                    strict: false,
                    allErrors: true,
                    verbose: true,
                    validateFormats: true
                });

                this.addCustomFormats();
                this.schema = schema;
                this.validate = this.validator.compile(this.schema);
                return true;
            } catch (error) {
                console.error("MadmpValidator init failed:", error);
                this.validator = null;
                this.validate = null;
                return false;
            }
        },

        addCustomFormats() {
            if (!this.validator) {
                return;
            }

            this.validator.addFormat("email", {
                type: "string",
                validate: (data) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data)
            });

            this.validator.addFormat("url", {
                type: "string",
                validate: (data) => {
                    try {
                        new URL(data);
                        return true;
                    } catch {
                        return false;
                    }
                }
            });

            this.validator.addFormat("date", {
                type: "string",
                validate: (data) => /^\d{4}-\d{2}-\d{2}$/.test(data)
            });

            this.validator.addFormat("date-time", {
                type: "string",
                validate: (data) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/.test(data)
            });
        },

        validateData(data) {
            if (!this.validate) {
                return {
                    valid: false,
                    errors: [{
                        path: "/",
                        message: "Validator not initialized. Please reload the page."
                    }]
                };
            }

            try {
                const valid = this.validate(data);
                if (valid) {
                    return {
                        valid: true,
                        errors: []
                    };
                }
                return {
                    valid: false,
                    errors: this.formatErrors(this.validate.errors)
                };
            } catch (error) {
                console.error("Validation error:", error);
                return {
                    valid: false,
                    errors: [{
                        path: "/",
                        message: `Validation failed: ${error.message}`
                    }]
                };
            }
        },

        formatErrors(errors) {
            if (!errors || errors.length === 0) {
                return [];
            }

            return errors.map((error) => {
                const path = error.instancePath && error.instancePath.length > 0 ? error.instancePath : "/";
                let message = error.message || "Validation error.";

                switch (error.keyword) {
                    case "required":
                        message = `Missing required property: ${error.params.missingProperty}`;
                        break;
                    case "type":
                        message = `Invalid type: expected ${error.params.type}`;
                        break;
                    case "enum":
                        message = `Invalid value. Allowed values: ${error.params.allowedValues.join(", ")}`;
                        break;
                    case "format":
                        message = `Invalid format for ${error.params.format}: ${message}`;
                        break;
                    case "minLength":
                        message = `String too short. Minimum length: ${error.params.limit}`;
                        break;
                    case "maxLength":
                        message = `String too long. Maximum length: ${error.params.limit}`;
                        break;
                    case "minimum":
                        message = `Value too small. Minimum: ${error.params.limit}`;
                        break;
                    case "maximum":
                        message = `Value too large. Maximum: ${error.params.limit}`;
                        break;
                    case "pattern":
                        message = `String does not match required pattern: ${error.params.pattern}`;
                        break;
                    case "additionalProperties":
                        message = `Additional property not allowed: ${error.params.additionalProperty}`;
                        break;
                    default:
                        break;
                }

                return {
                    path,
                    message,
                    keyword: error.keyword,
                    params: error.params
                };
            });
        }
    };

    window.MadmpValidator = Validator;
})();
