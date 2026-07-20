(() => {
    "use strict";

    const DEFAULT_JSON = {
        "templateName": "clean-example",
        "templateText": "DataPLAN maDMP clean-example (Enhancing Water Use Efficiency of Wheat)",
        "dmp": {
            "created": "2025-06-11T00:00:00Z",
            "modified": "2025-06-13T00:00:00Z",
            "version": "1.0",
            "title": "Data Management Plan of the Horizon Europe Project ‘Enhancing Water Use Efficiency of Wheat’",
            "ethical_issues_description": "At the moment, we do not anticipate ethical or legal issues with data sharing. In terms of ethics, since this is plant data, there is no need for an ethics committee to deal with data from plants, although we will diligently follow the Nagoya protocol on access and benefit sharing.",
            "project": [
                {
                    "title": "Enhancing Water Use Efficiency of Wheat",
                    "acronym": "WUEAT",
                    "discipline": "water use efficiency",
                    "description": "aims to identify wheat genotypes with enhanced water use efficiency and identify the underlying mechanisms of variation in this trait",
                    "funding": [
                        {
                            "programme": {
                                "name": "FZJ7392817"
                            },
                            "funding_status": "granted",
                            "funder_id": {
                                "identifier": "",
                                "type": "fundref"
                            },
                            "grant_id": {
                                "identifier": "",
                                "type": "other"
                            }
                        }
                    ],
                    "start": "2025-06-01",
                    "end": "2027-12-31"
                }
            ],
            "contributor": [
                {
                    "name": "José Carioca",
                    "affiliation": [
                        {
                            "name": "HHU Düsseldorf",
                            "affiliation_id": {
                                "identifier": "",
                                "type": "ror"
                            }
                        }
                    ],
                    "role": [],
                    "mbox": "jose.carioca@example.org",
                    "contributor_id": {
                        "identifier": "",
                        "type": "orcid"
                    }
                }
            ],
            "contact": {
                "mbox": "e.mustermann@fz-juelich.de",
                "name": "Erika Mustermann",
                "contact_id": {
                    "identifier": "",
                    "type": "orcid"
                }
            },
            "cost": [
                {
                    "description": "Enhancing Water Use Efficiency of Wheat will bear the costs of data curation, ARC consistency checks, and data maintenance/security before transfer to public repositories. Subsequent costs for storage after publication are then borne by the operators of these repositories and not charged against Enhancing Water Use Efficiency of Wheat or its members",
                    "cover_how": "The data related cost of Enhancing Water Use Efficiency of Wheat are covered by the project funding. Pre-existing structures such as structures, tools, and knowledge laid down in the DataPLANT consortium will also be used.",
                    "title": "",
                    "value": 0
                }
            ],
            "dataset": [
                {
                    "type": "RNA sequencing data will be generated using short-read or long-read platforms, either in-house or outsourced to academic facilities or commercial services, and the raw data will be processed using established bioinformatics pipelines.\nPhenotypic data will be generated using phenotyping platforms and annotated using corresponding ontologies, including number/size of organs such as leaves, flowers, buds etc., size of whole plant, stem/root architecture (number of lateral branches/roots etc), organ structures/morphologies, quantitative metrics such as color, turgor, health/nutrition indicators, among others.\nTargeted assay data (e.g. glucose and fructose concentrations or production/utilization rates) will be generated using specific equipment and methods that are fully documented in the laboratory notebook.",
                    "usage_description": "The data will initially benefit ‘Enhancing Water Use Efficiency of Wheat’ partners, but will also be made available to selected stakeholders closely involved in the project, and then the scientific community working on water use efficiency. Breeding companies and other researchers working on water use efficiency will also benefit from the data.\nIn addition, the general public interested in water use efficiency can also use the data after publication.\nThe data will be disseminated according to ‘Enhancing Water Use Efficiency of Wheat’'s dissemination and communication plan, which makes use of DataPLANT’s DataHUB.",
                    "keywords_purpose": "Keywords about the experiment and the general consortium will be included, as well as an abstract about the data, where useful. In addition, certain keywords can be auto-generated from dense metadata and its underlying ontologies. Here, DataPLANT strives to complement these with standardized DataPLANT ontology terms that are supplemented where other ontologies do not yet include the variables.",
                    "data_quality_assurance": [
                        "Data quality will be assured by using a data collection protocol, personnel training, data cleaning, data analysis, and quality control. Furthermore, data will be analyzed for quality control (QC) problems using automatic procedures as well as by manual curation. All data quality assurance processes, including the data collection protocol, data cleaning procedures, data analysis techniques, and quality control measures will be documented. This documentation should be kept for future reference and should be made available to stakeholders upon request. PhD students and lab professionals will be responsible for the first-hand quality control. Afterwards, the data will be checked and annotated by Max Mustermann. FastQC will be conducted on the base-calling. Before publication, the data will be controlled again."
                    ],
                    "metadata": [
                        {
                            "description": "As mentioned above, we will use ISA specification for metadata creation. The following metadata standards will also be used: MINSEQE and MIAPPE. These specific standards, unlike cross-domain minimal sets such as the Dublin core, which mostly define the submitter and the general type of data, allow reusability by other researchers by defining properties of the plant (see the preceding section). However, ‘Enhancing Water Use Efficiency of Wheat’ also implements minimal cross-domain annotations such as Schema.org. The core integration with DataPLANT will also allow individual releases to be tagged with a Digital Object Identifier (DOI). The metadata standards will thus allow the integration of data across projects and safeguard the established and tested protocols being reused. Additionally, we will use ontology terms to enrich the data sets relying on free and open ontologies. In addition, additional ontology terms might be created and be canonized during the ‘Enhancing Water Use Efficiency of Wheat’ project.",
                            "language": "eng",
                            "metadata_standard_id": {
                                "identifier": "",
                                "type": "url"
                            }
                        }
                    ],
                    "vocabularies_purpose": "Common and open ontologies will be used. In fact, open biomedical ontologies will be used where they are mature. As stated in the previous question, sometimes ontologies and controlled vocabularies might have to be extended. Here, ‘Enhancing Water Use Efficiency of Wheat’ will build on the DataPLANT biology ontology (DPBO) developed in DataPLANT. The DPBO is also published in GitHub https://github.com/nfdi4plants/nfdi4plants_ontology.",
                    "sharing_explanation": "Relevant processed datasets are made public when the research findings are published. All consortium partners will be encouraged to make data available before publication, openly and/or under pre-publication agreements. This will be implemented as soon as IP-related checks are complete.",
                    "security_and_privacy": [
                        {
                            "description": "Online platforms will be protected by vulnerability scanning, two-factor authorization and daily automatic backups allowing immediate recovery. All partners holding confidential project data will use secure platforms with automatic backups and offsite secure copies. As ARCs are stored in the PLANTdataHUB of DataPLANT, data security will be imposed. This comprises secure storage, and the use of password and usernames is generally transferred via separate safe media.",
                            "title": "Data security"
                        }
                    ],
                    "sensitive_data_explanation": "The only personal data that will potentially be stored is the submitter name and affiliation in the metadata for data. In addition, personal data will be collected for dissemination and communication activities using specific methods and procedures developed by ‘Enhancing Water Use Efficiency of Wheat’ partners to adhere to data protection.",
                    "distribution": [
                        {
                            "description": "In addition to the project related sharing platform, data will be stored in international discipline related repositories which use specialized technologies and preserve data for more than 10 years: EBI-ENA and e!DAL-PGP.",
                            "title": "‘Enhancing Water Use Efficiency of Wheat’ will collect and/or generate the following types of raw data: RNAseq data, phenotypic data, targeted assay data (e.g. glucose and fructose content), and other types of data which are related to water use efficiency. In addition, the raw data will also be processed and modified using analytical pipelines, which may yield additional results, including those of ad hoc data analysis. Therefore, care will be taken to document and archive these resources (including the analytical pipelines) as well, relying on the expertise and frameworks of the DataPLANT consortium.",
                            "format_description": "‘Enhancing Water Use Efficiency of Wheat’ will use the following data formats: FASTQ and XLSX.",
                            "byte_size_description": "We expect to generate raw data in the range of 1000 GB of data. The size of the derived data will be about 500 GB.",
                            "data_access_description": "By default, all data sets from ‘Enhancing Water Use Efficiency of Wheat’ will be shared with the community and made openly available. However, before the data are released, all will be provided with an opportunity to check for potential IP (according to the consortium agreement and background IP rights). IP protection will be prioritized for datasets that offer the potential for exploitation.",
                            "data_access": "open",
                            "host": {
                                "title": "",
                                "url": "https://example.org",
                                "description": ""
                            }
                        }
                    ],
                    "is_reused_source_name": "The project builds on existing datasets to support its objectives. For example, without a proper genomic reference, analyzing NGS datasets—such as RNAseq—can be extremely challenging. The following types of data will be included as relevant: RNAseq data, phenotypic data, targeted assay data (e.g. glucose and fructose content). Additional datasets will be provided by project partners: HHU Düsseldorf, serving as valuable sources of characterization. Where available, data will be directly retrieved from accessible repositories. For instance, genomic references can be sourced from databases such as: National Center for Biotechnology Information: NCBI (US); European Bioinformatics Institute: EBI (EU); DNA Data Bank of Japan: DDBJ (JP). If direct access is not possible, insights from previously published literature will be used to reconstruct or approximate relevant data.",
                    "title": "",
                    "dataset_id": {
                        "identifier": "",
                        "type": "doi"
                    },
                    "personal_data": "no",
                    "sensitive_data": "no",
                    "sensitive_data_description": "",
                    "description": "The data will initially benefit ‘Enhancing Water Use Efficiency of Wheat’ partners, but will also be made available to selected stakeholders closely involved in the project, and then the scientific community working on water use efficiency. Breeding companies and other researchers working on water use efficiency will also benefit from the data.\nIn addition, the general public interested in water use efficiency can also use the data after publication.\nThe data will be disseminated according to ‘Enhancing Water Use Efficiency of Wheat’'s dissemination and communication plan, which makes use of DataPLANT’s DataHUB.",
                    "keyword": [],
                    "preservation_statement": ""
                }
            ],
            "description": "",
            "language": "eng",
            "ethical_issues_exist": "no",
            "dmp_id": {
                "identifier": "",
                "type": "doi"
            }
        },
        "replace": {
            "$_ADDACRONYM": "WUEAT",
            "$_ADDPROJECTCOORDINATOR": "José Carioca",
            "$_CREATIONDATE": "2025-06-11",
            "$_DATAOFFICER": "",
            "$_DMPVERSION": "1.0",
            "$_EMAIL": "e.mustermann@fz-juelich.de",
            "$_FUNDINGPROGRAMME": "FZJ7392817",
            "$_MODIFICATIONDATE": "2025-06-13",
            "$_DOI": "",
            "$_PROJECTSTART": "2025-06-01",
            "$_GRANTID": "",
            "$_CONTACTID": "",
            "$_COSTTITLE": "",
            "$_COSTVALUE": "0",
            "$_DATASETTITLE": "",
            "$_DATASETDOI": "",
            "$_RAWDATA": "no",
            "$_DERIVEDDATA": "no",
            "$_DATAUTILITY": "The data will initially benefit ‘Enhancing Water Use Efficiency of Wheat’ partners, but will also be made available to selected stakeholders closely involved in the project, and then the scientific community working on water use efficiency. Breeding companies and other researchers working on water use efficiency will also benefit from the data.\nIn addition, the general public interested in water use efficiency can also use the data after publication.\nThe data will be disseminated according to ‘Enhancing Water Use Efficiency of Wheat’'s dissemination and communication plan, which makes use of DataPLANT’s DataHUB.",
            "$_OTHERDATATYPETEXT": "",
            "$_OTHERDATAFORMATS": "",
            "$_OTHEREP": "",
            "$_OTHERSTANDARDINPUT": "",
            "$_PARTNERS": "HHU Düsseldorf",
            "$_PREVIOUSPROJECTS": "",
            "$_PROJECTAIM": "aims to identify wheat genotypes with enhanced water use efficiency and identify the underlying mechanisms of variation in this trait",
            "$_PROJECTNAME": "Enhancing Water Use Efficiency of Wheat",
            "$_PROPRIETARY": "",
            "$_SENSITIVEDATADESCRIPTION": "",
            "$_STUDYOBJECT": "water use efficiency",
            "$_UPDATEMONTH": "",
            "$_USERNAME": "Erika Mustermann",
            "basicInfo-isEu-en": "",
            "basicInfo-isProtected-en": "",
            "list-abbreviation-en": "",
            "list-data-format-en": "‘Enhancing Water Use Efficiency of Wheat’ will use the following data formats: FASTQ and XLSX.",
            "list-dataCollection-en": "‘Enhancing Water Use Efficiency of Wheat’ will collect and/or generate the following types of raw data: RNAseq data, phenotypic data, targeted assay data (e.g. glucose and fructose content), and other types of data which are related to water use efficiency. In addition, the raw data will also be processed and modified using analytical pipelines, which may yield additional results, including those of ad hoc data analysis. Therefore, care will be taken to document and archive these resources (including the analytical pipelines) as well, relying on the expertise and frameworks of the DataPLANT consortium.",
            "list-dataType-en": "RNA sequencing data will be generated using short-read or long-read platforms, either in-house or outsourced to academic facilities or commercial services, and the raw data will be processed using established bioinformatics pipelines.\nPhenotypic data will be generated using phenotyping platforms and annotated using corresponding ontologies, including number/size of organs such as leaves, flowers, buds etc., size of whole plant, stem/root architecture (number of lateral branches/roots etc), organ structures/morphologies, quantitative metrics such as color, turgor, health/nutrition indicators, among others.\nTargeted assay data (e.g. glucose and fructose concentrations or production/utilization rates) will be generated using specific equipment and methods that are fully documented in the laboratory notebook.",
            "list-reuse-en": "The project builds on existing datasets to support its objectives. For example, without a proper genomic reference, analyzing NGS datasets—such as RNAseq—can be extremely challenging. The following types of data will be included as relevant: RNAseq data, phenotypic data, targeted assay data (e.g. glucose and fructose content). Additional datasets will be provided by project partners: HHU Düsseldorf, serving as valuable sources of characterization. Where available, data will be directly retrieved from accessible repositories. For instance, genomic references can be sourced from databases such as: National Center for Biotechnology Information: NCBI (US); European Bioinformatics Institute: EBI (EU); DNA Data Bank of Japan: DDBJ (JP). If direct access is not possible, insights from previously published literature will be used to reconstruct or approximate relevant data.",
            "text-access-identity-en": "",
            "text-aim-intro-en": "",
            "text-archive-en": "",
            "text-cost-coverage-en": "The data related cost of Enhancing Water Use Efficiency of Wheat are covered by the project funding. Pre-existing structures such as structures, tools, and knowledge laid down in the DataPLANT consortium will also be used.",
            "text-cost-en": "Enhancing Water Use Efficiency of Wheat will bear the costs of data curation, ARC consistency checks, and data maintenance/security before transfer to public repositories. Subsequent costs for storage after publication are then borne by the operators of these repositories and not charged against Enhancing Water Use Efficiency of Wheat or its members",
            "text-cross-metadata-en": "",
            "text-data-accessible-en": "By default, all data sets from ‘Enhancing Water Use Efficiency of Wheat’ will be shared with the community and made openly available. However, before the data are released, all will be provided with an opportunity to check for potential IP (according to the consortium agreement and background IP rights). IP protection will be prioritized for datasets that offer the potential for exploitation.",
            "text-data-officer-decide-en": "",
            "text-data-officer-en": "",
            "text-data-security-en": "Online platforms will be protected by vulnerability scanning, two-factor authorization and daily automatic backups allowing immediate recovery. All partners holding confidential project data will use secure platforms with automatic backups and offsite secure copies. As ARCs are stored in the PLANTdataHUB of DataPLANT, data security will be imposed. This comprises secure storage, and the use of password and usernames is generally transferred via separate safe media.",
            "text-data-size-en": "We expect to generate raw data in the range of 1000 GB of data. The size of the derived data will be about 500 GB.",
            "text-data-utility-en": "The data will initially benefit ‘Enhancing Water Use Efficiency of Wheat’ partners, but will also be made available to selected stakeholders closely involved in the project, and then the scientific community working on water use efficiency. Breeding companies and other researchers working on water use efficiency will also benefit from the data.\nIn addition, the general public interested in water use efficiency can also use the data after publication.\nThe data will be disseminated according to ‘Enhancing Water Use Efficiency of Wheat’'s dissemination and communication plan, which makes use of DataPLANT’s DataHUB.",
            "text-dataplant-tools-en": "",
            "text-ethical-en": "At the moment, we do not anticipate ethical or legal issues with data sharing. In terms of ethics, since this is plant data, there is no need for an ethics committee to deal with data from plants, although we will diligently follow the Nagoya protocol on access and benefit sharing.",
            "text-infrastructure-en": "",
            "text-intro-en": "",
            "text-keywords-en": "Keywords about the experiment and the general consortium will be included, as well as an abstract about the data, where useful. In addition, certain keywords can be auto-generated from dense metadata and its underlying ontologies. Here, DataPLANT strives to complement these with standardized DataPLANT ontology terms that are supplemented where other ontologies do not yet include the variables.",
            "text-made-public-en": "Relevant processed datasets are made public when the research findings are published. All consortium partners will be encouraged to make data available before publication, openly and/or under pre-publication agreements. This will be implemented as soon as IP-related checks are complete.",
            "text-metadata-format-en": "",
            "text-metadata-naming-en": "",
            "text-not-only-but-fair-en": "",
            "text-ontologies-en": "Common and open ontologies will be used. In fact, open biomedical ontologies will be used where they are mature. As stated in the previous question, sometimes ontologies and controlled vocabularies might have to be extended. Here, ‘Enhancing Water Use Efficiency of Wheat’ will build on the DataPLANT biology ontology (DPBO) developed in DataPLANT. The DPBO is also published in GitHub https://github.com/nfdi4plants/nfdi4plants_ontology.",
            "text-personnal-data-en": "The only personal data that will potentially be stored is the submitter name and affiliation in the metadata for data. In addition, personal data will be collected for dissemination and communication activities using specific methods and procedures developed by ‘Enhancing Water Use Efficiency of Wheat’ partners to adhere to data protection.",
            "text-quality-control-en": "Data quality will be assured by using a data collection protocol, personnel training, data cleaning, data analysis, and quality control. Furthermore, data will be analyzed for quality control (QC) problems using automatic procedures as well as by manual curation. All data quality assurance processes, including the data collection protocol, data cleaning procedures, data analysis techniques, and quality control measures will be documented. This documentation should be kept for future reference and should be made available to stakeholders upon request. PhD students and lab professionals will be responsible for the first-hand quality control. Afterwards, the data will be checked and annotated by Max Mustermann. FastQC will be conducted on the base-calling. Before publication, the data will be controlled again.",
            "text-repository-long-en": "",
            "text-repository-short-en": "In addition to the project related sharing platform, data will be stored in international discipline related repositories which use specialized technologies and preserve data for more than 10 years: EBI-ENA and e!DAL-PGP.",
            "text-standards-long-en": "",
            "text-standards-short-en": "As mentioned above, we will use ISA specification for metadata creation. The following metadata standards will also be used: MINSEQE and MIAPPE. These specific standards, unlike cross-domain minimal sets such as the Dublin core, which mostly define the submitter and the general type of data, allow reusability by other researchers by defining properties of the plant (see the preceding section). However, ‘Enhancing Water Use Efficiency of Wheat’ also implements minimal cross-domain annotations such as Schema.org. The core integration with DataPLANT will also allow individual releases to be tagged with a Digital Object Identifier (DOI). The metadata standards will thus allow the integration of data across projects and safeguard the established and tested protocols being reused. Additionally, we will use ontology terms to enrich the data sets relying on free and open ontologies. In addition, additional ontology terms might be created and be canonized during the ‘Enhancing Water Use Efficiency of Wheat’ project."
        },
        "checkbox": {
            "checkbox_1": {
                "checked": [],
                "unchecked": [
                    "check_protect",
                    "check_personaldata",
                    "check_sensitive",
                    "check_previousprojects",
                    "check_industry",
                    "check_proprietary",
                    "check_partners",
                    "check_eu"
                ]
            },
            "checkbox_2": {
                "checked": ["check_rnaseq", "check_metabolomic", "check_genomic"],
                "unchecked": ["check_image", "check_models", "check_code"]
            },
            "checkbox_3": {
                "checked": ["check_miappe", "check_otherstandards"],
                "unchecked": ["check_dublincore", "check_marc21"]
            },
            "checkbox_4": {
                "checked": ["check_formatcsvtsvpsv", "check_formattxt", "check_formatxlsx"],
                "unchecked": ["check_formatjson", "check_formatxmlhtml", "check_otherdataformats"]
            },
            "checkbox_5": {
                "checked": ["check_zenodo", "check_pride", "check_edal"],
                "unchecked": ["check_pdb", "check_bioimage"]
            }
        },
        "update": {
            "timeline": [],
            "storage": [
                { "answer": {}, "name": "" }
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

    const TEXTAREA_KEY_PATTERN = /^(text|list|basicInfo)-/;

    const BUILDING_BLOCK_EXAMPLES = {
        "text-cost-en": [
            "$_PROJECTNAME will bear the costs of data curation, ARC consistency checks, and data maintenance/security before transfer to public repositories. Subsequent costs for storage after publication are then borne by the operators of these repositories and not charged against $_PROJECTNAME or its members"
        ],
        "text-cost-coverage-en": [
            "The data related cost of $_PROJECTNAME are covered by the project funding.",
            "Pre-existing structures such as structures, tools, and knowledge laid down in the DataPLANT consortium will also be used."
        ],
        "list-dataType-en": [
            "RNA sequencing data will be generated using short-read or long-read platforms, either in-house or outsourced to academic facilities or commercial services, and the raw data will be processed using established bioinformatics pipelines.",
            "Phenotypic data will be generated using phenotyping platforms and annotated using corresponding ontologies, including number/size of organs such as leaves, flowers, buds etc., size of whole plant, stem/root architecture (number of lateral branches/roots etc), organ structures/morphologies, quantitative metrics such as color, turgor, health/nutrition indicators, among others.",
            "Targeted assay data (e.g. glucose and fructose concentrations or production/utilization rates) will be generated using specific equipment and methods that are fully documented in the laboratory notebook."
        ],
        "text-data-utility-en": [
            "The data will initially benefit ‘$_PROJECTNAME’ partners, but will also be made available to selected stakeholders closely involved in the project, and then the scientific community working on $_STUDYOBJECT.",
            "Breeding companies and other researchers working on $_STUDYOBJECT will also benefit from the data.",
            "In addition, the general public interested in $_STUDYOBJECT can also use the data after publication.",
            "The data will be disseminated according to ‘$_PROJECTNAME’'s dissemination and communication plan, which makes use of DataPLANT’s DataHUB."
        ],
        "text-keywords-en": [
            "Keywords about the experiment and the general consortium will be included, as well as an abstract about the data, where useful.",
            "In addition, certain keywords can be auto-generated from dense metadata and its underlying ontologies.",
            "Here, DataPLANT strives to complement these with standardized DataPLANT ontology terms that are supplemented where other ontologies do not yet include the variables."
        ],
        "text-quality-control-en": [
            "Data quality will be assured by using a data collection protocol, personnel training, data cleaning, data analysis, and quality control.",
            "Furthermore, data will be analyzed for quality control (QC) problems using automatic procedures as well as by manual curation.",
            "All data quality assurance processes, including the data collection protocol, data cleaning procedures, data analysis techniques, and quality control measures will be documented.",
            "This documentation should be kept for future reference and should be made available to stakeholders upon request.",
            "PhD students and lab professionals will be responsible for the first-hand quality control.",
            "Afterwards, the data will be checked and annotated by Max Mustermann. DMP Officer",
            "FastQC will be conducted on the base-calling.",
            "Before publication, the data will be controlled again."
        ],
        "text-standards-short-en": [
            "As mentioned above, we will use ISA specification for metadata creation.",
            "The following metadata standards will also be used: MINSEQE and MIAPPE.",
            "These specific standards, unlike cross-domain minimal sets such as the Dublin core, which mostly define the submitter and the general type of data, allow reusability by other researchers by defining properties of the plant (see the preceding section).",
            "However, ‘$_PROJECTNAME’ also implements minimal cross-domain annotations such as Schema.org.",
            "The core integration with DataPLANT will also allow individual releases to be tagged with a Digital Object Identifier (DOI).",
            "The metadata standards will thus allow the integration of data across projects and safeguard the established and tested protocols being reused.",
            "Additionally, we will use ontology terms to enrich the data sets relying on free and open ontologies.",
            "In addition, additional ontology terms might be created and be canonized during the ‘$_PROJECTNAME’ project."
        ],
        "text-ontologies-en": [
            "Common and open ontologies will be used.",
            "In fact, open biomedical ontologies will be used where they are mature.",
            "As stated in the previous question, sometimes ontologies and controlled vocabularies might have to be extended.",
            "Here, ‘$_PROJECTNAME’ will build on the DataPLANT biology ontology (DPBO) developed in DataPLANT.",
            "The DPBO is also published in GitHub https://github.com/nfdi4plants/nfdi4plants_ontology."
        ],
        "text-made-public-en": [
            "Relevant processed datasets are made public when the research findings are published.",
            "All consortium partners will be encouraged to make data available before publication, openly and/or under pre-publication agreements.",
            "This will be implemented as soon as IP-related checks are complete."
        ],
        "text-data-security-en": [
            "Online platforms will be protected by vulnerability scanning, two-factor authorization and daily automatic backups allowing immediate recovery.",
            "All partners holding confidential project data will use secure platforms with automatic backups and offsite secure copies.",
            "As ARCs are stored in the PLANTdataHUB of DataPLANT, data security will be imposed.",
            "This comprises secure storage, and the use of password and usernames is generally transferred via separate safe media."
        ],
        "text-personnal-data-en": [
            "The only personal data that will potentially be stored is the submitter name and affiliation in the metadata for data.",
            "In addition, personal data will be collected for dissemination and communication activities using specific methods and procedures developed by ‘$_PROJECTNAME’ partners to adhere to data protection."
        ],
        "list-reuse-en": [
            "The project builds on existing datasets to support its objectives.",
            "For example, without a proper genomic reference, analyzing NGS datasets—such as RNAseq—can be extremely challenging.",
            "The following types of data will be included as relevant: RNAseq data, phenotypic data, targeted assay data (e.g. glucose and fructose content).",
            "Additional datasets will be provided by project partners: $_PARTNERS, serving as valuable sources of characterization.",
            "Where available, data will be directly retrieved from accessible repositories.",
            "For instance, genomic references can be sourced from databases such as: National Center for Biotechnology Information: NCBI (US); European Bioinformatics Institute: EBI (EU); DNA Data Bank of Japan: DDBJ (JP).",
            "If direct access is not possible, insights from previously published literature will be used to reconstruct or approximate relevant data."
        ],
        "list-dataCollection-en": [
            "‘$_PROJECTNAME’ will collect and/or generate the following types of raw data: RNAseq data, phenotypic data, targeted assay data (e.g. glucose and fructose content), and other types of data which are related to $_STUDYOBJECT.",
            "In addition, the raw data will also be processed and modified using analytical pipelines, which may yield additional results, including those of ad hoc data analysis.",
            "Therefore, care will be taken to document and archive these resources (including the analytical pipelines) as well, relying on the expertise and frameworks of the DataPLANT consortium."
        ],
        "text-data-accessible-en": [
            "By default, all data sets from ‘$_PROJECTNAME’ will be shared with the community and made openly available.",
            "However, before the data are released, all will be provided with an opportunity to check for potential IP (according to the consortium agreement and background IP rights).",
            "IP protection will be prioritized for datasets that offer the potential for exploitation."
        ]
    };

    const DEFAULT_BLOCK_TEXT = {
        "basicInfo-isEu-en": "#if$_EU $_PROJECTNAME is part of the Open Data Initiative (ODI) of the EU. #endif$_EU",
        "text-not-only-but-fair-en": "To best profit from open data, it is necessary not only to store data but to make data Findable, Accessible, Interoperable, and Reusable (FAIR).",
        "basicInfo-isProtected-en": "#if$_PROTECT We support open and FAIR data, however, we also consider the need to protect individual data sets. #endif$_PROTECT",
        "text-intro-en": "This document outlines the principles of data management for $_PROJECTNAME. A Data Management Plan (DMP), created using responses to the EU DMP questionnaire, will detail key aspects such as data types, collection methods, storage, access, sharing, preservation, and reuse strategies, ensuring compliance with FAIR data principles.",
        "list-dataType-en": "<ul style=\"list-style-type:disc;\">\n            #if$_GENETIC&nbsp; <li>\n                    <span class=\"c1\"> Genetic data will be generated from targeted crosses and in breeding experiments, and\n                        will include recombination frequencies and position of genetic markers. This data will be used to associate quantitative trait loci with physical genomic markers/variants.\n                    </span>\n            </li> #endif$_GENETIC #if$_GENOMIC&nbsp; \n            <li>\n                    <span class=\"c1\"> Genomic data will be created from sequencing data, which will be processed to\n                        identify genes, regulatory elements, transposable elements, and physical markers such as\n                        SNPs, microsatellites and structural variants. </span>\n            </li>\n            #if$_PANGENOMIC&nbsp; \n            <li>\n                    <span class=\"c1\"> Pangenomic data will be collected by sequencing the genomes of multiple individuals within a clade. Then the sequences are assembled and aligned to create a comprehensive gene reference.  </span>\n            </li>\n            #endif$_PANGENOMIC\n            #endif$_GENOMIC #if$_CLONED-DNA&nbsp; \n            <li>\n                    <span class=\"c1\"> The origin and assembly of cloned DNA will include (a) source of original\n                        vector sequence with adding gene reference where available, and source of insert DNA (e.g.,\n                        amplification by PCR from a given sample, or obtained from existing library), (b) cloning\n                        strategy (e.g., restriction endonuclease digests/ligation, PCR, TOPO cloning, Gibson\n                        assembly, LR recombination), and (c) verified DNA sequence data of final recombinant vector.\n                    </span>\n            </li>\n            #endif$_CLONED-DNA  #if$_TRANSCRIPTOMIC&nbsp; \n            <li>\n                    <span class=\"c1\"> Methods of transcriptomics data collection will be selected from microarrays,\n                        quantitative PCR, Northern blotting, RNA immunoprecipitation, fluorescence in situ\n                        hybridization. RNA-Seq data will be collected in seperate methods.</span>\n            </li>\n            #if$_SPATIALTRANSCRIPTOMIC&nbsp; \n            <li>\n                    <span class=\"c1\"> Spatial transcriptomics data will be collected using methods that spatially map RNA molecules to their precise tissue locations, ensuring the preservation of RNA data alongside comprehensive metadata about its origin.</span>\n            </li>\n            #endif$_SPATIALTRANSCRIPTOMIC&nbsp;\n            #endif$_TRANSCRIPTOMIC&nbsp;    #if$_RNASEQ&nbsp; \n            <li>\n                    <span class=\"c1\"> RNA sequencing data will be generated using short-read or long-read platforms, either in-house or outsourced to academic facilities or commercial services, and the raw data will be processed using established bioinformatics pipelines. </span>\n            </li>\n            #if$_SCRNASEQ&nbsp; \n            <li>\n                    <span class=\"c1\"> Single-cell RNA-seq data will be collected by isolating single cells, extracting and barcoding RNA, preparing sequencing libraries, and generating high-quality transcriptomic data using platforms like Illumina, with meticulous metadata recording.</span>\n            </li>\n            #endif$_SCRNASEQ&nbsp;\n            #endif$_RNASEQ&nbsp;  #if$_METABOLOMIC&nbsp; \n            <li>\n                    <span class=\"c1\"> Metabolomic data will be generated by coupled chromatography and mass\n                        spectrometry using targeted or untargeted approaches.</span>\n            </li>\n            #endif$_METABOLOMIC  #if$_PROTEOMIC&nbsp; \n            <li>\n                    <span class=\"c1\"> Proteomic data will be generated using coupled chromatography and mass\n                        spectrometry for the analysis of protein abundance and protein identification, as well as\n                        additional techniques for structural analysis, the identification of post-translational\n                        modifications and the characterization of protein interactions.</span>\n            </li>\n            #endif$_PROTEOMIC  #if$_PHENOTYPIC&nbsp; \n            <li>\n                    <span class=\"c1\"> Phenotypic data will be generated using phenotyping platforms and annotated using\n                        corresponding ontologies, including number/size of organs such as leaves, flowers, buds\n                        etc., size of whole plant, stem/root architecture (number of lateral branches/roots etc),\n                        organ structures/morphologies, quantitative metrics such as color, turgor, health/nutrition\n                        indicators, among others. </span>\n            </li>\n            #endif$_PHENOTYPIC  #if$_TARGETED&nbsp; \n            <li>\n                    <span class=\"c1\"> Targeted assay data (e.g. glucose and fructose concentrations or\n                        production/utilization rates) will be generated using specific equipment and methods that\n                        are fully documented in the laboratory notebook. </span>\n            </li>\n            #endif$_TARGETED #if$_IMAGE&nbsp; \n            <li>\n                    <span class=\"c1\"> Image data will be generated by equipment such as cameras, scanners, and\n                        microscopes combined with software. Original images which contain metadata such as EXIF\n                        photo information will be archived.</span>\n            </li>\n            #endif$_IMAGE #if$_MODELS&nbsp; \n            <li>\n                    <span class=\"c1\"> Model data will be generated by using software simulations. The complete\n                        workflow, which includes the environment, runtime, parameters, and results, will be\n                        documented and archived. </span>\n            </li>\n            #endif$_MODELS #if$_CODE&nbsp; \n            <li>\n                    <span class=\"c1\"> Computer code will be produced by programmers. </span>\n            </li>\n            #endif$_CODE  \n            #if$_OTHERDATATYPE&nbsp; \n            <li>\n                    <span class=\"c1\"> $_OTHERDATATYPETEXT </span>\n            </li>\n            #endif$_OTHERDATATYPE \n        </ul>",
        "list-reuse-en": "The project builds on existing datasets to support its objectives. #if$_RNASEQ For example, without a proper genomic reference, analyzing NGS datasets—such as RNAseq—can be extremely challenging. #endif$_RNASEQ\n    The following types of data will be included as relevant: \n                #if$_GENETIC genetic data, #endif$_GENETIC\n                #if$_GENOMIC genomic data, \n                    #if$_PANGENOMIC pangenomic data, #endif$_PANGENOMIC\n                #endif$_GENOMIC\n                #if$_CLONED-DNA cloned DNA data, #endif$_CLONED-DNA\n                #if$_TRANSCRIPTOMIC transcriptomic data, \n                    #if$_SPATIALTRANSCRIPTOMIC spatial transcriptomic data, #endif$_SPATIALTRANSCRIPTOMIC\n                #endif$_TRANSCRIPTOMIC\n                #if$_RNASEQ RNAseq data, \n                    #if$_SCRNASEQ single cell RNAseq data, #endif$_SCRNASEQ\n                #endif$_RNASEQ\n                #if$_METABOLOMIC metabolomic data, #endif$_METABOLOMIC\n                #if$_PROTEOMIC proteomic data, #endif$_PROTEOMIC\n                #if$_PHENOTYPIC phenotypic data, #endif$_PHENOTYPIC\n                #if$_TARGETED targeted assays (e.g. glucose and fructose content), #endif$_TARGETED\n                #if$_IMAGE image datasets, #endif$_IMAGE\n                #if$_MODELS modelling data, #endif$_MODELS\n                #if$_CODE computational code, #endif$_CODE\n                #if$_OTHERDATATYPE $_OTHERDATATYPETEXT #endif$_OTHERDATATYPE .\n                \n                 #if$_PARTNERS Additional datasets will be provided by project partners: $_PARTNERS , serving as valuable sources of characterization. #endif$_PARTNERS Where available, data will be directly retrieved from accessible repositories. For instance, genomic references can be sourced from databases such as: National Center for Biotechnology Information: NCBI (US); European\n                Bioinformatics Institute: EBI (EU); DNA Data Bank of Japan: DDBJ (JP). If direct access is not possible, insights from previously published literature will be used to reconstruct or approximate relevant data. ",
        "list-dataCollection-en": "                    $_PROJECTNAME will collect and/or generate the following types of raw data: \n                    #if$_GENETIC genetic data, #endif$_GENETIC  \n                                    #if$_GENOMIC genomic data, \n                    #if$_PANGENOMIC Pangenomic data, #endif$_PANGENOMIC\n                #endif$_GENOMIC\n                #if$_CLONED-DNA cloned DNA data, #endif$_CLONED-DNA\n                #if$_TRANSCRIPTOMIC transcriptomic data, \n                    #if$_SPATIALTRANSCRIPTOMIC spatial transcriptomic data, #endif$_SPATIALTRANSCRIPTOMIC\n                #endif$_TRANSCRIPTOMIC\n                #if$_RNASEQ RNAseq data, \n                    #if$_SCRNASEQ single cell RNAseq data, #endif$_SCRNASEQ\n                #endif$_RNASEQ\n                    #if$_METABOLOMIC Metabolomic data, #endif$_METABOLOMIC  \n                    #if$_PROTEOMIC proteomic data, #endif$_PROTEOMIC \n                    #if$_PHENOTYPIC phenotypic data, #endif$_PHENOTYPIC  \n                    #if$_TARGETED targeted assays (e.g. glucose and fructose content), #endif$_TARGETED  \n                    #if$_IMAGE image datasets, #endif$_IMAGE  \n                    #if$_MODELS modelling data, #endif$_MODELS \n                    #if$_CODE computational code, #endif$_CODE \n                    #if$_OTHERDATATYPE $_OTHERDATATYPETEXT #endif$_OTHERDATATYPE\n                     and other types of data which are related to $_STUDYOBJECT. In addition, the raw data\n                    will also be processed and modified using analytical pipelines, which may yield additional results,\n                    including those of ad hoc data analysis. #if$_DATAPLANT These pipelines will be\n                    tracked in the ARC. #endif$_DATAPLANT Care will be taken to document and archive\n                    these resources (including the analytical pipelines) as well, #if$_DATAPLANT relying on the frameworks and expertise in the DataPLANT consortium #endif$_DATAPLANT.",
        "text-aim-intro-en": "$_PROJECTNAME $_PROJECTAIM. Therefore, data collection #if!$_VVISUALIZATION\n                and integration #endif!$_VVISUALIZATION #if$_VVISUALIZATION , integration and visualization\n                #endif$_VVISUALIZATION #if$_DATAPLANT using the DataPLANT Annotated Research Context (ARC) structure are essential,\n                #endif$_DATAPLANT #if!$_DATAPLANT through a standardized data management process is absolutely\n                necessary, #endif!$_DATAPLANT to get full use of the data and derive scientific insights. Stakeholders must also be informed\n                about the provenance of data. It is therefore necessary to ensure that the data are well generated\n                and also well annotated with metadata using open standards, as laid out in the next section.",
        "text-standards-long-en": "            <span class=\"c1\">\n                All datasets will be associated with unique identifiers and will be annotated with metadata. We will\n                use Investigation, Study, Assay (ISA) specification for metadata creation. $_PROJECTNAME will rely\n                on community standards plus additional recommendations applicable in the plant science.\n                <span class=\"list-to-remove-comma\">\n                    The following metadata/ minimum information standards will be used to collect metadata:\n                    #if$_GENOMIC|$_GENETIC #if$_MIXS MIxS (Minimum Information about any (X) Sequence), #endif$_MIXS\n                    #if$_MIGSEU MigsEu (Minimum Information about a Genome Sequence: Eucaryote), #endif$_MIGSEU\n                    #if$_MIGSORG MigsOrg (Minimum Information about a Genome Sequence: Organelle), #endif$_MIGSORG\n                    #if$_MIMS MIMS (Minimum Information about Metagenome or Environmental), #endif$_MIMS\n                    #if$_MIMARKSSPECIMEN MIMARKSSpecimen (Minimal Information about a Marker Specimen:\n                    Specimen), #endif$_MIMARKSSPECIMEN\n                    #if$_MIMARKSSURVEY MIMARKSSurvey (Minimal Information about a Marker Specimen:\n                    Survey), #endif$_MIMARKSSURVEY\n                    #if$_MISAG MISAG (Minimum Information about a Single Amplified Genome), #endif$_MISAG\n                    #if$_MIMAG MIMAG (Minimum Information about Metagenome-Assembled Genome), #endif$_MIMAG\n                    #endif$_GENOMIC|$_GENETIC\n                    #if$_TRANSCRIPTOMIC\n                    #if$_MINSEQE MINSEQE (Minimum Information about a high-throughput SEQuencing\n                    Experiment), #endif$_MINSEQE \n                     #if$_MIAME MIAME (Minimum Information About a Microarray\n                    Experiment), #endif$_MIAME #endif$_TRANSCRIPTOMIC\n                    #if$_IMAGE\n                    #if$_REMBI REMBI (Recommended Metadata for Biological Images), #endif$_REMBI\n                    #endif$_IMAGE\n                    #if$_RNASEQ|$_GENOMIC\n \n                    #if$_MINSEQE\n                        MINSEQE (Minimum Information about a high-throughput SEQuencing Experiment),\n                    #endif$_MINSEQE \n                    #endif$_RNASEQ|$_GENOMIC\n\n                    #if$_METABOLOMIC\n                    #if$_MMIAMET\n                    MIAMET (Minimum Information About a METabolomics experiment),\n                    #endif$_MMIAMET\n                    #endif$_METABOLOMIC\n                    #if$_PROTEOMIC\n                    #if$_MIAPE MIAPE (Minimum Information About a Proteomics Experiment), #endif$_MIAPE\n                    #if$_MIMIX MIMix (The Minimum Information required for reporting a Molecular Interaction Experiment), #endif$_MIMIX\n                    #endif$_PROTEOMIC  \n                    #if$_PHENOTYPIC #if$_MIAPPE MIAPPE (Minimum Information about Plant Phenotyping Experiment) #endif$_MIAPPE  #endif$_PHENOTYPIC .\n                    </span>\n                    #if$_METABOLOMIC #if$_METABOLIGHTS The Metabolights submission compliant standards are used for metabolomic data. #issuewarning Some metabolomics partners considers Metabolights\n                not an accepted standard. #endissuewarning #endif$_METABOLIGHTS #endif$_METABOLOMIC These specific standard unlike cross-domain minimal sets such as the Dublin core, which mostly define the submitter and the general type of data, allow reusability by other researchers by\n                defining properties of the plant (see the preceding section). \n                \n                #if$_DATAPLANT The core integration with DataPLANT will also allow individual releases to be tagged with a Digital Object Identifier (DOI).\n                #endif$_DATAPLANT #if$_OTHERSTANDARDS Other standards such as $_OTHERSTANDARDINPUT are also adhered to. #endif$_OTHERSTANDARDS\n                The metadata standards will thus allow the integration of data across projects and safeguard the established and tested\n                protocols being reused. Additionally, we will use ontology terms to enrich the data sets relying on free and open\n                ontologies. In addition, additional ontology terms might be created and be canonized during the\n                $_PROJECTNAME. </span>",
        "text-standards-short-en": "<span class=\"c1\">As mentioned above, <span class=\"c1 list-to-remove-comma\">we will use ISA specification for metadata creation.\n                    The following metadata standards will also be used:\n                    #if$_PHENOTYPIC #if$_MIAPPE MIAPPE, #endif$_MIAPPE #endif$_PHENOTYPIC\n                    #if$_GENOMIC|$_GENETIC #if$_MIXS MIxS, #endif$_MIXS\n                    #if$_MIGSEU MigsEu, #endif$_MIGSEU\n                    #if$_MIGSORG MigsOrg, #endif$_MIGSORG\n                    #if$_MIMS MIMS, #endif$_MIMS\n                    #if$_MIMARKSSPECIMEN MIMARKSSpecimen, #endif$_MIMARKSSPECIMEN\n                    #if$_MIMARKSSURVEY MIMARKSSurvey, #endif$_MIMARKSSURVEY\n                    #if$_MISAG MISAG, #endif$_MISAG\n                    #if$_MIMAG MIMAG, #endif$_MIMAG\n                    #endif$_GENOMIC|$_GENETIC\n                    #if$_GENOMIC|$_TRANSCRIPTOMIC #if$_MINSEQE MINSEQE, #endif$_MINSEQE #endif$_GENOMIC|$_TRANSCRIPTOMIC\n                    #if$_TRANSCRIPTOMIC #if$_MIAME MIAME, #endif$_MIAME #endif$_TRANSCRIPTOMIC\n                    #if$_IMAGE\n                    #if$_REMBI REMBI, #endif$_REMBI\n                    #endif$_IMAGE\n                    #if$_METABOLOMIC\n                    #if$_MMIAMET MIAMET, #endif$_MMIAMET\n                    #endif$_METABOLOMIC\n                    #if$_PROTEOMIC\n                    #if$_MIAPE MIAPE, #endif$_MIAPE\n                    #if$_MIMIX MIMix, #endif$_MIMIX\n                    #endif$_PROTEOMIC.                   \n                </span> \n                #if$_METABOLOMIC #if$_METABOLIGHTS The Metabolights submission compliant standards are used for metabolomic data. #issuewarning Some metabolomics partners considers Metabolights\n                not an accepted standard. #endissuewarning #endif$_METABOLIGHTS #endif$_METABOLOMIC These specific standard unlike cross-domain minimal sets such as the Dublin core, which mostly define the submitter and the general type of data, allow reusability by other researchers by\n                defining properties of the plant (see the preceding section). However, $_PROJECTNAME also implements minimal cross-domain annotations #if$_DUBLINCORE|$_DARWINCORE|$_BIOSCHEMAS|$_SCHEMAORG|$_MARC21 such as #endif$_DUBLINCORE|$_DARWINCORE|$_BIOSCHEMAS|$_SCHEMAORG|$_MARC21 <span class=\"list-to-remove-comma\"> #if$_DUBLINCORE Dublin Core, #endif$_DUBLINCORE #if$_DARWINCORE Darwin Core, #endif$_DARWINCORE #if$_SCHEMAORG Schema.org, #endif$_SCHEMAORG #if$_BIOSCHEMAS BioSchemas, #endif$_BIOSCHEMAS #if$_MARC21 MARC 21 #endif$_MARC21 . </span> #if$_DATAPLANT The core integration with DataPLANT will also allow individual releases to be tagged with a Digital Object Identifier (DOI).\n                #endif$_DATAPLANT #if$_OTHERSTANDARDS Other standards such as $_OTHERSTANDARDINPUT are also adhered to. #endif$_OTHERSTANDARDS\n                The metadata standards will thus allow the integration of data across projects and safeguard the established and tested\n                protocols being reused. Additionally, we will use ontology terms to enrich the data sets relying on free and open\n                ontologies. In addition, additional ontology terms might be created and be canonized during the\n                $_PROJECTNAME.</span>",
        "text-quality-control-en": "\n        <span class=\"c1\">Data quality will be assured by using a data collection protocol, personnel training, data cleaning, data analysis, and quality control. #if$_DATAPLANT Furthermore, data will be analyzed for quality control (QC) problems using automatic procedures as well as by manual curation. #endif$_DATAPLANT All data quality assurance processes, including the data collection protocol, data cleaning procedures, data analysis techniques, and quality control measures will be documented. This documentation should be kept for future reference and should be made available to stakeholders upon request. PhD students and lab professionals will be responsible for the first-hand quality control. Afterwards, the data will be checked and annotated by $_DATAOFFICER. #if$_RNASEQ|$_GENOMIC FastQC will be conducted on the base-calling. #endif$_RNASEQ|$_GENOMIC Before publication, the data will be controlled again.</span>",
        "text-repository-long-en": "\n        <span class=\"c1\">\n                Data will be made available via the $_PROJECTNAME platform using a user-friendly front end that allows\n                data visualization. Besides this it will be ensured that data will be stored in\n                international discipline related repositories which use specialized technologies and preserve data for more than 10 years, if available:\n                 <p class=\"c0\">\n                        <span class=\"c1 list-to-remove-comma\"> #if$_GENETIC|$_GENOMIC|$_RNASEQ For genetic or genomic data: #if$_GENBANK NCBI-GenBank, #endif$_GENBANK #if$_ENA EBI-ENA, #endif$_ENA #endif$_GENETIC|$_GENOMIC|$_RNASEQ #if$_GENETIC #if$_SRA NCBI-SRA (Sequence Read Archive), #endif$_SRA #if$_ARRAYEXPRESS EBI-ArrayExpress, #endif$_ARRAYEXPRESS\n                            #if$_GEO NCBI-GEO (Gene Expression Omnibus), #endif$_GEO #endif$_GENETIC #if$_GENETIC|$_GENOMIC|$_RNASEQ . #endif$_GENETIC|$_GENOMIC|$_RNASEQ </span>\n                    </p>\n\n                <p class=\"c0\">\n                    <span class=\"c1  list-to-remove-comma\">#if$_TRANSCRIPTOMIC For transcriptomic data: #if$_SRA\n                        NCBI-SRA (Sequence Read Archive), #endif$_SRA #if$_GEO NCBI-GEO (Gene Expression Omnibus), #endif$_GEO #if$_ARRAYEXPRESS\n                        EBI-ArrayExpress, #endif$_ARRAYEXPRESS . #endif$_TRANSCRIPTOMIC</span>\n                </p>\n\n                <p class=\"c0\">\n                    <span class=\"c1 list-to-remove-comma\">#if$_IMAGE For image data: #if$_BIOIMAGE EBI-BioImage\n                        Archive, #endif$_BIOIMAGE #if$_IDR IDR (Image Data Resource), #endif$_IDR .\n                        #endif$_IMAGE </span>\n                </p>\n\n                <p class=\"c0\">\n                    <span class=\"c1 list-to-remove-comma\">#if$_METABOLOMIC For metabolomic data: #if$_METABOLIGHTS\n                        EBI-Metabolights, #endif$_METABOLIGHTS #if$_METAWORKBENCH Metabolomics\n                        Workbench, #endif$_METAWORKBENCH #if$_INTACT IntAct (Molecular\n                        interactions), #endif$_INTACT . #endif$_METABOLOMIC </span>\n                </p>\n                <p class=\"c0\">\n                    <span class=\"c1 list-to-remove-comma\">#if$_PROTEOMIC For proteomics data: #if$_PRIDE\n                        EBI-PRIDE (PRoteomics IDEntifications Database), #endif$_PRIDE #if$_PDB PDB (Protein Data Bank), #endif$_PDB\n                        #if$_CHEBI Chebi (Chemical Entities of Biological Interest), #endif$_CHEBI .\n                        #endif$_PROTEOMIC </span>\n                </p>\n\n                <p class=\"c0\">\n                    <span class=\"c1 list-to-remove-comma\">#if$_PHENOTYPIC For phenotypic data: #if$_EDAL e!DAL-PGP (Plant\n                        Genomics & Phenomics Research Data Repository), #endif$_EDAL . #endif$_PHENOTYPIC\n                        #if$_OTHEREP $_OTHEREP will also be used to store data and the data will be processed there as\n                        well. #endif$_OTHEREP\n                    </span>\n                </p>\n            </span>\n            <p class=\"c0\">\n            <span class=\"c1\">\n                   Unstructured and less standardized data (e.g., experimental phenotypic measurements) will\n                    be annotated with metadata and if complete allocated a digital object identifier (DOI).\n                    #if$_DATAPLANT Whole datasets will also be wrapped into an ARC with allocated DOIs. The ARC and the\n                    converters provided by DataPLANT will ensure that the upload into the endpoint repositories is fast\n                    and easy.\n                    #endif$_DATAPLANT\n                </span></p>",
        "text-repository-short-en": "<span class=\"c1 list-to-remove-comma\">\n                        In addition to the project related sharing platform, data will be stored in international discipline related repositories which use specialized technologies and preserve data for more than 10 years: \n                        #if$_GENETIC|$_GENOMIC|$_RNASEQ #if$_GENBANK NCBI-GenBank, #endif$_GENBANK #if$_ENA EBI-ENA, #endif$_ENA #endif$_GENETIC|$_GENOMIC|$_RNASEQ #if$_TRANSCRIPTOMIC|$_GENETIC \n                        #if$_SRA NCBI-SRA, #endif$_SRA #if$_GEO NCBI-GEO, #endif$_GEO #endif$_TRANSCRIPTOMIC|$_GENETIC #if$_TRANSCRIPTOMIC|$_GENOMIC #if$_ARRAYEXPRESS\n                        EBI-ArrayExpress, #endif$_ARRAYEXPRESS #endif$_TRANSCRIPTOMIC|$_GENOMIC #if$_IMAGE #if$_BIOIMAGE\n                        EBI-BioImage Archive, #endif$_BIOIMAGE #if$_IDR IDR, #endif$_IDR\n                        #endif$_IMAGE #if$_METABOLOMIC #if$_METABOLIGHTS EBI-Metabolights, #endif$_METABOLIGHTS\n                        #if$_METAWORKBENCH Metabolomics Workbench, #endif$_METAWORKBENCH #if$_INTACT IntAct, #endif$_INTACT #endif$_METABOLOMIC #if$_PROTEOMIC #if$_PRIDE\n                        EBI-PRIDE, #endif$_PRIDE #if$_PDB PDB, #endif$_PDB #if$_CHEBI Chebi, #endif$_CHEBI #endif$_PROTEOMIC #if$_PHENOTYPIC #if$_EDAL e!DAL-PGP, #endif$_EDAL #endif$_PHENOTYPIC. \n                        #if$_OTHEREP $_OTHEREP will also be used to store data and the data will be processed there as well. #endif$_OTHEREP\n                    </span>",
        "text-dataplant-tools-en": " <span class=\"c1\">#if$_PROPRIETARY $_PROJECTNAME relies on the tool(s) $_PROPRIETARY. #endif$_PROPRIETARY\n                #if!$_PROPRIETARY No specialized software will be needed to access the data, usually just a modern\n                browser. Access will be possible through web interfaces. For data processing after obtaining raw\n                data, typical open-source software can be used. #endif!$_PROPRIETARY\n                #if$_DATAPLANT DataPLANT offers opensource data curation tools such as the <a target=\"_blank\" href=\"https://nfdi4plants.github.io/nfdi4plants.knowledgebase/arcitect/\">ARC management tool ARCitect </a>, command line tool <a target=\"_blank\" href=\"https://nfdi4plants.github.io/nfdi4plants.knowledgebase/arc-commander/\">ARCcommander </a>, <a target=\"_blank\" href=\"https://github.com/nfdi4plants/nfdi4plants_ontology\"> DataPLANT Biological Ontology (DPBO)</a>, <a target=\"_blank\" href=\"https://nfdi4plants.github.io/nfdi4plants.knowledgebase/swate/\">metadata annotation tool Swate</a>, <a target=\"_blank\" href=\"https://nfdi4plants.github.io/nfdi4plants.knowledgebase/resources/metadata-quiz/\">the Metadata Quiz</a> and <a target=\"_blank\" href=\"https://nfdi4plants.github.io/nfdi4plants.knowledgebase/resources/dataplan/\">DataPLAN DMP generator</a>. #endif$_DATAPLANT\n            </span>",
        "text-made-public-en": "#if$_EARLY Some raw data is made public as soon as it is collected and processed. #endif$_EARLY\n                #if$_BEFOREPUBLICATION Relevant processed datasets are made public when the research findings are\n                published. #endif$_BEFOREPUBLICATION #if$_ENDOFPROJECT At the end of the project, all data without\n                embargo period will be published. #endif$_ENDOFPROJECT #if$_EMBARGO Data, which is subject to an\n                embargo period, is not publicly accessible until the end of embargo period. #endif$_EMBARGO\n                #if$_REQUEST Data is made available upon request, allowing controlled sharing while ensuring\n                responsible use. #endif$_REQUEST #if$_IPISSUE IP issues will be checked before publication.\n                #endif$_IPISSUE All consortium partners will be encouraged to make data available before publication, \n                openly and/or under pre-publication agreements #if$_GENOMIC such as those started in Fort Lauderdale \n                and set forth by the Toronto International Data Release Workshop #endif$_GENOMIC . \n                This will be implemented as soon as IP-related checks are complete.",
        "text-metadata-format-en": "Whenever possible, data will be stored in common and openly defined formats including all the necessary\n        metadata to interpret and analyze data in a biological context. By default, no proprietary formats will be\n        used. However, Microsoft Excel files (according to ISO/IEC 29500-1:2016) might be used as intermediates by\n        the consortium#if$_DATAPLANT and by some ARC components #endif$_DATAPLANT. In addition, text files might be\n        edited in text processor files, but will be shared as pdf.",
        "text-cross-metadata-en": "<span class=\"c1\">$_PROJECTNAME also implement minimal cross-domain annotations #if$_DUBLINCORE|$_DARWINCORE|$_BIOSCHEMAS|$_SCHEMAORG|$_MARC21 such\n                            as #endif$_DUBLINCORE|$_DARWINCORE|$_BIOSCHEMAS|$_SCHEMAORG|$_MARC21 \n                            <span class=\"list-to-remove-comma\">\n                            #if$_DUBLINCORE Dublin Core, #endif$_DUBLINCORE \n                            #if$_DARWINCORE Darwin Core, #endif$_DARWINCORE \n                            #if$_SCHEMAORG Schema.org, #endif$_SCHEMAORG \n                            #if$_BIOSCHEMAS BioSchemas, #endif$_BIOSCHEMAS \n                            #if$_MARC21 MARC 21 #endif$_MARC21 . </span> \n                            </span>\n        ",
        "list-abbreviation-en": "\n        #if$_DATAPLANT  <span class=\"c11\">  ARC </span> <span class=\"c1\"> Annotated Research Context</span> <br>  #endif$_DATAPLANT \n        <span class=\"c11\"> CC</span><span class=\"c1\"> Creative Commons</span> <br>\n        <span class=\"c11\"> CC CEL</span><span class=\"c1\"> Creative Commons Rights Expression Language</span> <br>\n        #if$_PROTEOMIC #if$_CHEBI <span class=\"c11\"> ChEBI</span><span class=\"c1\"> Chemical Entities of Biological Interest </span> <br>  #endif$_CHEBI #endif$_PROTEOMIC      \n        <span class=\"c11\"> DDBJ</span><span class=\"c1\"> DNA Data Bank of Japan</span> <br>\n        <span class=\"c11\"> DMP</span><span class=\"c1\"> Data Management Plan</span> <br>\n        <span class=\"c11\"> DoA</span><span class=\"c1\"> Description of Action</span> <br>\n        <span class=\"c11\"> DOI</span><span class=\"c1\"> Digital Object Identifier</span> <br>\n        <span class=\"c11\"> EBI</span><span class=\"c1\"> European Bioinformatics Institute</span> <br>\n        #if$_PHENOTYPIC #if$_EDAL  <span class=\"c11\"> e!DAL-PGP</span><span class=\"c1\"> Plant Genomics & Phenomics Research Data Repository</span> <br>  #endif$_EDAL   #endif$_PHENOTYPIC  \n        #if$_GENETIC  #if$_ENA   <span class=\"c11\">  ENA </span> <span class=\"c1\"> European Nucleotide Archive </span> <br>  #endif$_ENA        #endif$_GENETIC   \n        <span class=\"c11\"> EU </span><span class=\"c1\">European Union</span> <br>\n        <span class=\"c11\"> FAIR </span><span class=\"c1\">Findable Accessible Interoperable Reproducible</span> <br>\n        <span class=\"c11\"> GDPR</span><span class=\"c1\"> General data protection regulation (of the EU)</span> <br>\n        #if$_TRANSCRIPTOMIC|$_GENETIC #if$_GEO  <span class=\"c11\"> GEO</span><span class=\"c1\"> Gene Expression Omnibus </span>  <br>  #endif$_GEO   #endif$_TRANSCRIPTOMIC|$_GENETIC   \n        #if$_IMAGE #if$_IDR  <span class=\"c11\"> IDR</span><span class=\"c1\"> Image Data Resource </span>  <br>  #endif$_IDR  #endif$_IMAGE \n        <span class=\"c11\"> IP</span><span class=\"c1\"> Intellectual Property</span> <br>\n        <span class=\"c11\"> ISO</span><span class=\"c1\"> International Organization for Standardization</span>  <br>\n        #if$_TRANSCRIPTOMIC #if$_MIAME <span class=\"c11\"> MIAME</span><span class=\"c1\"> Minimum Information About a Microarray Experiment</span> <br>  #endif$_MIAME  #endif$_TRANSCRIPTOMIC  \n        #if$_METABOLOMIC #if$_MMIAMET <span class=\"c11\"> MIAMET</span><span class=\"c1\"> Minimum Information About a METabolomics experiment</span> <br>  #endif$_MMIAMET   #endif$_METABOLOMIC  \n        #if$_PROTEOMIC #if$_MIAPE <span class=\"c11\"> MIAPE</span><span class=\"c1\"> Minimum Information About a Proteomics Experiment</span> <br>  #endif$_MIAPE  #endif$_PROTEOMIC  \n        #if$_PHENOTYPIC #if$_MIAPPE <span class=\"c11\"> MIAPPE</span><span class=\"c1\"> Minimum Information about Plant Phenotyping Experiment</span> <br>  #endif$_MIAPPE  #endif$_PHENOTYPIC \n        #if$_GENOMIC|$_GENETIC #if$_MIGSEU <span class=\"c11\"> MigsEu </span><span class=\"c1\"> Minimum Information about a Genome Sequence: Eucaryote </span> <br>  #endif$_MIGSEU  \n        #if$_MIGSORG <span class=\"c11\"> MigsOrg </span><span class=\"c1\"> Minimum Information about a Genome Sequence: Organelle </span> <br>  #endif$_MIGSORG  \n        #if$_MIMAG <span class=\"c11\"> MIMAG </span><span class=\"c1\"> Minimum Information about Metagenome-Assembled Genome </span> <br>  #endif$_MIMAG  \n        #if$_MIMARKSSPECIMEN <span class=\"c11\"> MIMARKSSpecimen</span><span class=\"c1\"> Minimal Information about a Marker Specimen: Specimen </span> <br>  #endif$_MIMARKSSPECIMEN \n        #if$_MIMARKSSURVEY  <span class=\"c11\">  MIMARKSSurvey </span><span class=\"c1\"> Minimal Information about a Marker Specimen: Survey </span> <br>  #endif$_MIMARKSSURVEY    #endif$_GENOMIC|$_GENETIC  \n        #if$_PROTEOMIC #if$_MIMIX <span class=\"c11\"> MIMIX</span><span class=\"c1\"> The Minimum Information required for reporting a Molecular Interaction Experiment </span> <br>  #endif$_MIMIX   #endif$_PROTEOMIC \n        #if$_GENOMIC|$_GENETIC #if$_MIMS  <span class=\"c11\">  MIMS</span><span class=\"c1\"> Molecular Interactions </span> <br>  #endif$_MIMS    #endif$_GENOMIC|$_GENETIC \n        #if$_TRANSCRIPTOMIC|$_GENOMIC #if$_MINSEQE <span class=\"c11\"> MINSEQE</span><span class=\"c1\"> Minimum Information about a high-throughput SEQuencing Experiment</span> <br>  #endif$_MINSEQE #endif$_TRANSCRIPTOMIC|$_GENOMIC \n        #if$_GENOMIC|$_GENETIC #if$_MISAG <span class=\"c11\"> MISAG</span><span class=\"c1\"> Minimum Information about a Single Amplified Genome </span> <br>  #endif$_MISAG\n        #if$_MIXS <span class=\"c11\"> MIxS</span><span class=\"c1\"> Minimum Information about any (X) Sequence </span> <br>  #endif$_MIXS #endif$_GENOMIC|$_GENETIC \n        <span class=\"c11\"> NCBI</span><span class=\"c1\"> National Center for Biotechnology Information</span> <br>\n        <span class=\"c11\"> NFDI</span><span class=\"c1\"> National Research Data Infrastructure (of Germany)</span> <br>\n        <span class=\"c11\"> NGS</span><span class=\"c1\"> Next Generation Sequencing</span> <br>\n        #if$_PROTEOMIC #if$_PRIDE  <span class=\"c11\"> PRIDE</span><span class=\"c1\"> PRoteomics IDEntifications Database</span> <br>  #endif$_PRIDE\n        #if$_PDB  <span class=\"c11\"> PDB</span><span class=\"c1\"> Protein Data Bank </span> <br>  #endif$_PDB #endif$_PROTEOMIC\n        <span class=\"c11\"> RDM</span><span class=\"c1\"> Research Data Management</span> <br>\n        #if$_IMAGE  #if$_REMBI  <span class=\"c11\"> REMBI</span><span class=\"c1\"> Recommended Metadata for Biological Images </span> <br>  #endif$_REMBI #endif$_IMAGE \n        #if$_RNASEQ  <span class=\"c11\"> RNASeq</span><span class=\"c1\"> Ribonucleic Acid Sequencing</span> <br>  #endif$_RNASEQ \n        <span class=\"c11\"> SOP</span><span class=\"c1\"> Standard Operating Procedures</span>  <br>\n        #if$_GENETIC #if$_SRA  <span class=\"c11\"> SRA</span><span class=\"c1\"> Sequence Read Archive</span> <br>  #endif$_SRA #endif$_GENETIC\n        #if$_DATAPLANT  <span class=\"c11\">  SWATE</span><span class=\"c1\"> Swate Workflow Annotation Tool for Excel</span> <br>  #endif$_DATAPLANT \n        <span class=\"c11\"> ONP</span><span class=\"c1\"> Oxford Nanopore</span>  <br>\n        <span class=\"c11\"> qRT</span> <span class=\"c11\"> PCR</span><span class=\"c1\"> quantitative real time polymerase chain reaction</span>  <br>\n        <span class=\"c11\"> WP</span><span class=\"c1\"> Work Package</span>  <br>",
        "text-cost-en": "<span class=\"c1\">$_PROJECTNAME will bear the costs of data curation, #if$_DATAPLANT ARC\n                consistency checks, #endif$_DATAPLANT and data maintenance/security before transfer to public\n                repositories. Subsequent costs for storage after publication are then borne by the operators of these repositories and not charged against $_PROJECTNAME or its members.</span>\n                <br>\n                <span class=\"c1\">\n                </span>",
        "text-cost-coverage-en": "\n            <span class=\"c1\">The data related cost of $_PROJECTNAME are covered by the project funding.\n                Pre-existing structures #if$_DATAPLANT such as structures, tools, and knowledge laid down in the\n                DataPLANT consortium #endif$_DATAPLANT will also be used.</span>",
        "text-data-size-en": "We expect to generate raw data in the range of $_RAWDATA GB of data. The size of the\n                derived data will be about $_DERIVEDDATA GB.",
        "text-data-utility-en": "<span class=\"c1\">\n                    The data will initially benefit $_PROJECTNAME partners, but will also be made available to selected\n                    stakeholders closely involved in the project, and then the scientific community working on\n                    $_STUDYOBJECT. $_DATAUTILITY In addition, the general public interested in $_STUDYOBJECT can also\n                    use the data after publication. The data will be disseminated according to $_PROJECTNAME's\n                    dissemination and communication plan, #if$_DATAPLANT which makes use of DataPLANT's DataHUB and other means #endif$_DATAPLANT.\n                </span>",
        "text-metadata-naming-en": "<span class=\"c1\">\n                Data variables will be allocated standard names. For example, genes, proteins and metabolites will\n                be named according to approved nomenclature and conventions. These will also be linked to functional\n                ontologies where possible. Datasets will also be named in a meaningful way to ensure readability by\n                humans. Plant names will include traditional names, binomials, and all\n                strain/cultivar/subspecies/variety identifiers.</span>",
        "text-data-accessible-en": "\n            <span class=\"c1\">\n                    By default, all data sets from $_PROJECTNAME will be shared with the community and made openly\n                    available. However, before the data are released, all will be provided with an opportunity to check\n                    for potential IP (according to the consortium agreement and background IP rights). #if$_INDUSTRY\n                    This applies in particular to data pertaining to the industry. #endif$_INDUSTRY IP protection will\n                    be prioritized for datasets that offer the potential for exploitation.\n                <br>\n                    Note that in multi-beneficiary projects it is also possible for specific beneficiaries to keep their\n                    data closed if relevant provisions are made in the consortium agreement and are in line with the\n                    reasons\n                    for opting out.\n                </span>",
        "text-access-identity-en": "\n            <span class=\"c1\">\n                In case data is only shared within the consortium, if the data is not yet finished or under IP\n                checks, the data is hosted internally and username and password will be required (see also our GDPR\n                rules). In the case data is made public under final EU or US repositories, completely anonymous\n                access is normally allowed. This is the case for ENA as well and both are in line with GDPR\n                requirements.\n                #if$_DATAPLANT Currently, data management relies on the annotated research context ARC. It is\n                password protected, so before any data can be obtained or samples generated an authentication needs\n                to take place. #endif$_DATAPLANT\n            </span>",
        "text-personnal-data-en": "\n            <span class=\"c1\">\n                    The only personal data that will potentially be stored is the submitter name and affiliation in the\n                    metadata for data. In addition, personal data will be collected for dissemination and communication\n                    activities using specific methods and procedures developed by $_PROJECTNAME partners to adhere to\n                    data protection. #issuewarning You need to inform and better get WRITTEN consent that you store\n                    emails and\n                    names or even pseudonyms such as twitter handles, we are very sorry about these issues we didn’t\n                    invent them #endissuewarning\n                </span>",
        "text-keywords-en": "\n            <span class=\"c1\">Keywords about the experiment and the general consortium will be included, as well as an abstract\n                about the data, where useful. In addition, certain keywords can be auto-generated from dense\n                metadata and its underlying ontologies. #if$_DATAPLANT Here, DataPLANT strives to complement these with\n                standardized DataPLANT ontologies that are supplemented where the ontology does not yet include the\n                variables.\n                #endif$_DATAPLANT</span>",
        "text-ontologies-en": "\n            <span class=\"c1\">Common and open ontologies will be used. In fact, open biomedical ontologies will be used where they\n                are mature. As stated in the previous question, sometimes ontologies and controlled vocabularies\n                might have to be extended. #if$_DATAPLANT Here, $_PROJECTNAME will build on the DataPLANT biology\n                ontology (DPBO) developed in DataPLANT. #endif$_DATAPLANT #if$_DATAPLANT The DPBO is also published in GitHub\n                https://github.com/nfdi4plants/nfdi4plants_ontology #endif$_DATAPLANT.</span>",
        "text-data-officer-en": "\n            <span class=\"c1\">The responsible will be $_DATAOFFICER as data officer.</span>\n            <span class=\"c1\">The data responsible(s) (data officer#if$_PARTNERS or $_PARTNERS #endif$_PARTNERS)\n                decides on the preservation of data not submitted to end-point subject area repositories\n                #if$_DATAPLANT or ARCs in DataPLANT #endif$_DATAPLANT after the\n                project end. This will be in line with EU institute policies, and data sharing based on EU and\n                international standards.</span>",
        "text-data-officer-decide-en": "<span class=\"c1\">\n                The data officer #if$_PARTNERS or $_PARTNERS #endif$_PARTNERS will ultimately decide on the\n                strategy to preserve data that are not submitted to end-point subject area repositories\n                #if$_DATAPLANT or ARCs in DataPLANT #endif$_DATAPLANT when the\n                project ends. This will be in line with EU guidlines, institute policies, and data sharing based on\n                EU and international standards.\n            </span>",
        "text-archive-en": "\n            <span class=\"c1\">\n                The submission is for free, and it is the goal #if$_ENA (at least of ENA) #endif$_ENA to obtain as much data as possible.\n                Therefore, arrangements are neither necessary nor useful. Catch-all repositories are not required.\n                #if$_DATAPLANT For DataPLANT, this has been agreed upon. #endif$_DATAPLANT #issuewarning If no data\n                management platform such as DataPLANT is used, then you need to find appropriate repository to store\n                or archive your data after publication. #endissuewarning\n            </span>",
        "text-data-security-en": "<span class=\"c1\">\n                Online platforms will be protected by vulnerability scanning, two-factor authorization and daily\n                automatic backups allowing immediate recovery. All partners holding confidential project data will use secure platforms with automatic backups and offsite secure copies.\n                #if$_DATAPLANT As ARCs are stored in the PLANTDataHUB of DataPLANT, data security will be imposed.\n                This comprises secure storage, and the use of password and usernames is generally transferred via\n                separate safe media. #endif$_DATAPLANT\n            </span>",
        "text-ethical-en": "<span class=\"c1\">\n                    At the moment, we do not anticipate ethical or legal issues with data sharing. In terms of ethics,\n                    since this is plant data, there is no need for an ethics committee to deal with data from plants,\n                    although we will diligently follow the Nagoya protocol on access and benefit sharing. #issuewarning\n                    Please ensure that you complete any necessary due diligence. Currently, we are awaiting clarification on whether the Nagoya Protocol (🡺 see Nagoya Protocol) will encompass sequence information. Regardless, if you use material from a country other than your own (or that of your partner), and you conduct physical or biochemical characterization (e.g., metabolites, proteome, RNASeq, etc.), this may constitute an action relevant under the Nagoya Protocol. Exceptions might include materials from countries such as the U.S. (non-partner), Ireland (has not signed—still contact them), etc., though other laws could apply.\n                    #endissuewarning\n                </span>",
        "text-infrastructure-en": "<span class=\"c1 list-to-remove-comma\">Yes, $_PROJECTNAME will use common Research Data Management (RDM) infrastructures #if$_DATAPLANT|$_NFDI|$_FRENCH|$_EOSC developed by #endif$_DATAPLANT|$_NFDI|$_FRENCH|$_EOSC #if$_DATAPLANT|$_NFDI the NFDI of Germany, #endif$_DATAPLANT|$_NFDI #if$_FRENCH INRAe from France, #endif$_FRENCH #if$_EOSC EOSC (European Open Science Cloud), #endif$_EOSC .\n                    </span>",
        "list-data-format-en": "<span class=\"c1 list-to-remove-comma\"> $_PROJECTNAME will use the following data format:\n            #if$_OTHERDATAFORMATS $_OTHERDATAFORMATS #endif$_OTHERDATAFORMATS \n            #if$_FORMATFASTQ FASTQ, #endif$_FORMATFASTQ\n            #if$_FORMATFAST5 FAST5, #endif$_FORMATFAST5\n            #if$_FORMATFASTA FASTA, #endif$_FORMATFASTA\n            #if$_FORMATBCL BCL, #endif$_FORMATBCL\n            #if$_FORMATSAMBAM SAM/BAM, #endif$_FORMATSAMBAM\n            #if$_FORMATVCFBCF VCF/BCF, #endif$_FORMATVCFBCF\n            #if$_FORMATCRAM CRAM, #endif$_FORMATCRAM\n            #if$_FORMATGBK GBK, #endif$_FORMATGBK\n            #if$_FORMATEMBL EMBL, #endif$_FORMATEMBL\n            #if$_FORMATGFFGTF GFT/GTF, #endif$_FORMATGFFGTF\n            #if$_FORMATMZML MZML, #endif$_FORMATMZML\n            #if$_FORMATMGF MGF, #endif$_FORMATMGF\n            #if$_FORMATMZIDENTML mzIdentML, #endif$_FORMATMZIDENTML\n            #if$_FORMATMZQUANTML mzQuantML, #endif$_FORMATMZQUANTML\n            #if$_FORMATPEPXML pepXML, #endif$_FORMATPEPXML\n            #if$_FORMATRAW RAW, #endif$_FORMATRAW\n            #if$_FORMATIMZML imzML, #endif$_FORMATIMZML\n            #if$_FORMATCDF CDF, #endif$_FORMATCDF\n            #if$_FORMATXLSX XLSX, #endif$_FORMATXLSX\n            #if$_FORMATTXT TXT, #endif$_FORMATTXT\n            #if$_FORMATCSVTSVPSV CSV/TSV/PSV, #endif$_FORMATCSVTSVPSV\n            #if$_FORMATPDF PDF, #endif$_FORMATPDF\n            #if$_FORMATJSON JSON, #endif$_FORMATJSON\n            #if$_FORMATXMLHTML XML/HTML, #endif$_FORMATXMLHTML .\n\n            </span>"
    };

    const REPLACE_DMP_PATHS = {
        "$_PROJECTNAME": ["title"],
        "$_USERNAME": ["contact", "name"],
        "$_EMAIL": ["contact", "mbox"],
        "$_DMPVERSION": ["version"],
        "$_CREATIONDATE": ["created"],
        "$_MODIFICATIONDATE": ["modified"],
        "$_DOI": ["dmp_id", "identifier"],
        "$_PROJECTSTART": ["project", 0, "start"],
        "$_GRANTID": ["project", 0, "funding", 0, "grant_id", "identifier"],
        "$_CONTACTID": ["contact", "contact_id", "identifier"],
        "$_COSTTITLE": ["cost", 0, "title"],
        "$_COSTVALUE": ["cost", 0, "value"],
        "$_DATASETTITLE": ["dataset", 0, "title"],
        "$_DATASETDOI": ["dataset", 0, "dataset_id", "identifier"],
        "$_ADDACRONYM": ["project", 0, "acronym"],
        "$_FUNDINGPROGRAMME": ["project", 0, "funding", 0, "programme", "name"],
        "$_PARTNERS": ["contributor", 0, "affiliation", 0, "name"],
        "$_ADDPROJECTCOORDINATOR": ["contributor", 0, "name"],
        "$_OTHEREP": ["dataset", 0, "distribution", 0, "host", "title"],
        "$_SENSITIVEDATADESCRIPTION": ["dataset", 0, "sensitive_data_description"],
        "$_STUDYOBJECT": ["project", 0, "discipline"],
        "text-ethical-en": ["ethical_issues_description"],
        "text-cost-en": ["cost", 0, "description"],
        "text-cost-coverage-en": ["cost", 0, "cover_how"],
        "text-data-utility-en": ["dataset", 0, "description"],
        "text-keywords-en": ["dataset", 0, "keywords_purpose"],
        "text-quality-control-en": ["dataset", 0, "data_quality_assurance", 0],
        "text-standards-short-en": ["dataset", 0, "metadata", 0, "description"],
        "text-standards-long-en": ["dataset", 0, "metadata", 0, "description_long"],
        "text-ontologies-en": ["dataset", 0, "vocabularies_purpose"],
        "text-made-public-en": ["dataset", 0, "sharing_explanation"],
        "text-data-security-en": ["dataset", 0, "security_and_privacy", 0, "description"],
        "text-personnal-data-en": ["dataset", 0, "sensitive_data_explanation"],
        "text-repository-short-en": ["dataset", 0, "distribution", 0, "description"],
        "list-dataType-en": ["dataset", 0, "type"]
    };

    const REPLACE_ID_DEFAULTS = {
        "$_DOI": [["dmp_id"], "doi"],
        "$_GRANTID": [["project", 0, "funding", 0, "grant_id"], "other"],
        "$_CONTACTID": [["contact", "contact_id"], "orcid"],
        "$_DATASETDOI": [["dataset", 0, "dataset_id"], "doi"]
    };

    const HIGHLIGHT_REPLACE_KEYS = new Set([
        ...Object.keys(REPLACE_DMP_PATHS).filter((k) => TEXTAREA_KEY_PATTERN.test(k)),
        "$_STUDYOBJECT",
        "$_PROJECTSTART",
        "$_GRANTID",
        "$_CONTACTID",
        "$_COSTTITLE",
        "$_COSTVALUE",
        "$_DATASETTITLE",
        "$_DATASETDOI",
        "$_SENSITIVEDATADESCRIPTION",
        "$_ADDACRONYM",
        "$_FUNDINGPROGRAMME",
        "$_PARTNERS",
        "$_ADDPROJECTCOORDINATOR",
        "$_OTHEREP",
        "text-dataplant-tools-en"
    ]);

    const NEW_CHECKBOX_OPTIONS = new Set([
        "check_personaldata",
        "check_sensitive"
    ]);

    function isDmpValueMissing(path) {
        if (!state.data.dmp) {
            return true;
        }
        let current = state.data.dmp;
        for (const key of path) {
            if (current == null || typeof current !== "object") {
                return true;
            }
            if (Array.isArray(current)) {
                if (typeof key !== "number" || key < 0 || key >= current.length) {
                    return true;
                }
            } else if (!(key in current)) {
                return true;
            }
            current = current[key];
        }
        if (current == null) {
            return true;
        }
        if (typeof current === "string" && current.trim() === "") {
            return true;
        }
        return false;
    }

    function getDmpValue(dmp, path) {
        if (!dmp || typeof dmp !== "object") {
            return undefined;
        }
        let current = dmp;
        for (const key of path) {
            if (current == null || typeof current !== "object") {
                return undefined;
            }
            if (Array.isArray(current)) {
                if (typeof key !== "number" || key < 0 || key >= current.length) {
                    return undefined;
                }
            } else if (!(key in current)) {
                return undefined;
            }
            current = current[key];
        }
        return current;
    }

    function isValueEmpty(value) {
        if (value == null) {
            return true;
        }
        if (typeof value === "string" && value.trim() === "") {
            return true;
        }
        if (Array.isArray(value) && value.length === 0) {
            return true;
        }
        return false;
    }

    function isReplaceKeyMissing(key, value) {
        const path = REPLACE_DMP_PATHS[key];
        if (path) {
            const dmpValue = getDmpValue(state.data.dmp, path);
            return isValueEmpty(dmpValue);
        }
        if (HIGHLIGHT_REPLACE_KEYS.has(key)) {
            return typeof value !== "string" || value.trim() === "";
        }
        return false;
    }

    function isNewCheckboxOptionMissing(option) {
        if (!state.data.dmp) {
            return true;
        }
        const dataset = Array.isArray(state.data.dmp.dataset) ? state.data.dmp.dataset[0] : undefined;
        if (!dataset) {
            return true;
        }
        const value = option === "check_personaldata" ? dataset.personal_data : dataset.sensitive_data;
        if (value == null) {
            return true;
        }
        const text = String(value).trim().toLowerCase();
        return text === "" || text === "unknown";
    }

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
        elements.exportWord = document.getElementById("exportWord");
        elements.exportRdmoXml = document.getElementById("exportRdmoXml");
        elements.templateSelect = document.getElementById("templateSelect");
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
        elements.documentPreview = document.getElementById("documentPreview");
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
        if (elements.exportWord) {
            elements.exportWord.addEventListener("click", exportWord);
        }
        if (elements.exportRdmoXml) {
            elements.exportRdmoXml.addEventListener("click", exportRdmoXml);
        }
        if (elements.templateSelect) {
            populateTemplateSelect();
            elements.templateSelect.addEventListener("change", renderDocumentPreview);
        }

        elements.applyDmpChanges.addEventListener("click", applyDmpChanges);

        if (elements.addReplaceForm) {
            elements.addReplaceForm.addEventListener("submit", addReplaceField);
        }
        if (elements.addGroupForm) {
            elements.addGroupForm.addEventListener("submit", addCheckboxGroup);
        }
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
        if (!key.startsWith("$_") && !TEXTAREA_KEY_PATTERN.test(key)) {
            setStatus("Replace keys should start with $_, or with text-/list-/basicInfo- for a building block, to stay compatible with DataPLAN templates.", "error");
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
        const placeholders = entries.filter(([key]) => key.startsWith("$_"));
        const buildingBlocks = entries.filter(([key]) => TEXTAREA_KEY_PATTERN.test(key));
        const other = entries.filter(([key]) => !key.startsWith("$_") && !TEXTAREA_KEY_PATTERN.test(key));

        renderReplaceGroup(container, "Placeholders", placeholders);
        renderReplaceGroup(container, "Building blocks", buildingBlocks);
        renderReplaceGroup(container, "Other", other);

        if (entries.length === 0) {
            const helper = document.createElement("p");
            helper.textContent = "No replace fields defined.";
            helper.className = "muted";
            container.appendChild(helper);
        }
    }

    function renderReplaceGroup(container, title, entries) {
        if (entries.length === 0) {
            return;
        }

        const heading = document.createElement("h4");
        heading.className = "replace-group-heading";
        heading.textContent = title;
        container.appendChild(heading);

        entries.forEach(([key, value]) => {
            container.appendChild(createReplaceRow(key, value));
        });
    }

    function createReplaceRow(key, value) {
        const isBuildingBlock = TEXTAREA_KEY_PATTERN.test(key);
        const isHighlighted = HIGHLIGHT_REPLACE_KEYS.has(key);

        const row = document.createElement("div");
        row.className = "replace-row";
        if (isBuildingBlock) {
            row.classList.add("is-building-block");
        } else if (isHighlighted) {
            row.classList.add("is-new");
        }

        const keyBadge = document.createElement("span");
        keyBadge.textContent = key;
        row.appendChild(keyBadge);

        const valueInput = isBuildingBlock ? document.createElement("textarea") : document.createElement("input");
        if (!isBuildingBlock) {
            valueInput.type = "text";
        }
        valueInput.value = value ?? "";
        valueInput.className = isBuildingBlock ? "replace-textarea" : "";

        let missingBadge = null;
        if (isHighlighted) {
            missingBadge = document.createElement("span");
            missingBadge.className = "missing-badge";
            missingBadge.textContent = isBuildingBlock ? "template block" : "missing in maDMP";
            missingBadge.title = isBuildingBlock
                ? "This building block is stored as template text and is not part of the maDMP JSON."
                : "This field is not present in the maDMP JSON and should be filled.";
            missingBadge.style.display = isReplaceKeyMissing(key, valueInput.value) ? "" : "none";
        }

        valueInput.addEventListener("input", () => {
            state.data.replace[key] = valueInput.value;
            applyReplaceToDmp(key, valueInput.value);
            renderDmpEditor();
            renderPreview();
            if (missingBadge) {
                missingBadge.style.display = isReplaceKeyMissing(key, valueInput.value) ? "" : "none";
            }
        });
        row.appendChild(valueInput);
        if (missingBadge) {
            row.appendChild(missingBadge);
        }

        if (isBuildingBlock) {
            const examples = BUILDING_BLOCK_EXAMPLES[key];
            if (examples && examples.length > 0) {
                row.appendChild(createBlockExampleChecklist(key, examples, valueInput));
            }
            if (DEFAULT_BLOCK_TEXT[key]) {
                const defaultButton = document.createElement("button");
                defaultButton.type = "button";
                defaultButton.className = "button-secondary button-small insert-default-button";
                defaultButton.textContent = "Insert funder default";
                defaultButton.title = "Insert the DMPDocs default sentence for this field, resolved against current placeholders and checkboxes.";
                defaultButton.addEventListener("click", () => {
                    valueInput.value = renderBlockDefaultText(DEFAULT_BLOCK_TEXT[key], state.data.replace, state.data.checkbox);
                    valueInput.dispatchEvent(new Event("input"));
                });
                row.appendChild(defaultButton);
            }
        }

        return row;
    }

    /**
     * @description Checklist of curated example sentences (from
     * DataPLAN_examples_complexfields.xlsx) for a building-block field.
     * Checking a sentence appends it to the textarea; unchecking removes it.
     */
    /**
     * @description Example sentences are stored as templates ($_PROJECTNAME,
     * $_PARTNERS, etc. in place of the WUEAT baseline text they were written
     * against), so they're rendered here against the *current*
     * state.data.replace/checkbox — same renderBlockDefaultText() used for
     * "Insert funder default". refreshBlockExampleChecklists() re-runs this
     * whenever replace fields or checkboxes change, so the displayed text
     * (and what gets inserted) always reflects the live editor state.
     */
    function createBlockExampleChecklist(key, examples, valueInput) {
        const wrap = document.createElement("div");
        wrap.className = "block-examples";

        const label = document.createElement("span");
        label.className = "block-examples-label";
        label.textContent = "Example sentences (toggle to compose an answer):";
        wrap.appendChild(label);

        examples.forEach((template) => {
            const option = document.createElement("label");
            option.className = "block-example-option";
            option.dataset.template = template;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            const text = document.createElement("span");
            text.textContent = renderBlockDefaultText(template, state.data.replace, state.data.checkbox);
            checkbox.checked = valueInput.value.includes(text.textContent);

            checkbox.addEventListener("change", () => {
                const sentence = text.textContent;
                const current = valueInput.value || "";
                if (checkbox.checked) {
                    valueInput.value = current && !current.endsWith(" ") ? `${current} ${sentence}` : `${current}${sentence}`;
                } else {
                    valueInput.value = current.split(sentence).join(" ").replace(/\s{2,}/g, " ").trim();
                }
                valueInput.dispatchEvent(new Event("input"));
                checkbox.checked = valueInput.value.includes(sentence);
            });

            option.appendChild(checkbox);
            option.appendChild(text);
            wrap.appendChild(option);
        });

        return wrap;
    }

    /**
     * @description Re-renders every visible example-sentence checklist
     * against current state (called whenever replace fields or checkboxes
     * change, via renderPreview()) so sentences built from $_PROJECTNAME /
     * $_PARTNERS / etc. stay in sync without rebuilding the whole row (which
     * would drop textarea focus/cursor while typing).
     */
    function refreshBlockExampleChecklists() {
        document.querySelectorAll(".block-examples").forEach((wrap) => {
            const row = wrap.closest(".replace-row");
            const valueInput = row ? row.querySelector("textarea") : null;
            if (!valueInput) {
                return;
            }
            wrap.querySelectorAll(".block-example-option").forEach((option) => {
                const template = option.dataset.template;
                const text = option.querySelector("span");
                const checkbox = option.querySelector("input");
                text.textContent = renderBlockDefaultText(template, state.data.replace, state.data.checkbox);
                checkbox.checked = valueInput.value.includes(text.textContent);
            });
        });
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
        applyCheckboxToDmp(group, option, checked);
        renderDmpEditor();
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
                    optionRow.className = NEW_CHECKBOX_OPTIONS.has(optionName)
                        ? "checkbox-option is-new"
                        : "checkbox-option";

                    const label = document.createElement("label");
                    const checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.checked = groupValue.checked.includes(optionName);

                    const caption = document.createElement("span");
                    caption.textContent = optionName;

                    label.appendChild(checkbox);
                    label.appendChild(caption);
                    optionRow.appendChild(label);

                    let missingBadge = null;
                    if (NEW_CHECKBOX_OPTIONS.has(optionName)) {
                        missingBadge = document.createElement("span");
                        missingBadge.className = "missing-badge";
                        missingBadge.textContent = "missing in maDMP";
                        missingBadge.title = "This option is not set in the maDMP JSON and should be filled.";
                        missingBadge.style.display = isNewCheckboxOptionMissing(optionName) ? "" : "none";
                        optionRow.appendChild(missingBadge);
                    }

                    checkbox.addEventListener("change", () => {
                        toggleCheckbox(groupName, optionName, checkbox.checked);
                        if (missingBadge) {
                            missingBadge.style.display = isNewCheckboxOptionMissing(optionName) ? "" : "none";
                        }
                    });

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
        renderDocumentPreview();
        refreshBlockExampleChecklists();
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

    const TEMPLATE_REGISTRY = {
        "horizon_europe": { label: "Horizon Europe", lang: "en", getHtml: () => (typeof horizon_europe !== "undefined" && horizon_europe ? horizon_europe.horizon_europe : "") },
        "Horizon2020_DMP": { label: "Horizon 2020", lang: "en", getHtml: () => (typeof Horizon2020_DMP !== "undefined" && Horizon2020_DMP ? Horizon2020_DMP.Horizon2020_DMP : "") },
        "dfg-dmp": { label: "DFG (Deutsche Forschungsgemeinschaft)", lang: "en", getHtml: () => (typeof dfg_dmp !== "undefined" && dfg_dmp ? dfg_dmp["dfg-dmp"] : "") },
        "bmbf-dmp": { label: "BMBF (Bundesministerium f\u00fcr Bildung und Forschung)", lang: "de", getHtml: () => (typeof bmbf_dmp !== "undefined" && bmbf_dmp ? bmbf_dmp["bmbf-dmp"] : "") },
        "BBSRC-dmp": { label: "BBSRC", lang: "en", getHtml: () => (typeof BBSRC_dmp !== "undefined" && BBSRC_dmp ? BBSRC_dmp["BBSRC-dmp"] : "") },
        "NSF-dmp": { label: "NSF", lang: "en", getHtml: () => (typeof NSF_dmp !== "undefined" && NSF_dmp ? NSF_dmp["NSF-dmp"] : "") },
        "bmel-dmp": { label: "BMEL", lang: "de", getHtml: () => (typeof bmel_dmp !== "undefined" && bmel_dmp ? bmel_dmp["bmel-dmp"] : "") },
        "cz-dmp": { label: "Carl-Zeiss Stiftung", lang: "de", getHtml: () => (typeof cz_dmp !== "undefined" && cz_dmp ? cz_dmp["cz-dmp"] : "") },
        "vw-dmp": { label: "Volkswagen Foundation", lang: "de", getHtml: () => (typeof vw_dmp !== "undefined" && vw_dmp ? vw_dmp["vw-dmp"] : "") },
        "msca-dmp": { label: "Marie Sk\u0142odowska-Curie Actions", lang: "en", getHtml: () => (typeof msca_dmp !== "undefined" && msca_dmp ? msca_dmp["msca-dmp"] : "") },
        "practical-guide": { label: "Practical Guide", lang: "en", getHtml: () => (typeof practical_guide !== "undefined" && practical_guide ? practical_guide["practical-guide"] : "") }
    };

    const DEFAULT_TEMPLATE_ID = "horizon_europe";

    function escapeRegExp(value) {
        return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    /**
     * @description Whether a $_KEY conditional flag is "on". If replace has an
     * explicit value for $_KEY, that wins; otherwise fall back to checkbox
     * state using the same rule main.js's match_mod() uses:
     * "check_" + key.toLowerCase() must be in a checked list.
     */
    function isConditionalFlagTrue(key, replace, checkbox) {
        const replaceValue = replace ? replace["$_" + key] : undefined;
        if (replaceValue !== undefined) {
            return replaceValue !== null && String(replaceValue).trim() !== "";
        }
        if (!checkbox) {
            return false;
        }
        const idText = "check_" + key.toLowerCase();
        return Object.values(checkbox).some((group) => Array.isArray(group && group.checked) && group.checked.includes(idText));
    }

    /**
     * @description Resolves #if$_KEY ... #endif$_KEY (and negated #if!$_KEY
     * ... #endif!$_KEY) conditional blocks in a DMPDocs template string.
     * Keys may be pipe-separated (#if$_RNASEQ|$_GENOMIC ... #endif$_RNASEQ|$_GENOMIC),
     * OR'd together, matching checkboxConversion()'s multi-holder handling.
     */
    function resolveConditionalBlocks(html, replace, checkbox) {
        const IF_PATTERN = /#if(!?)\$_(\w+(?:\|\$_\w+)*)([\s\S]*?)#endif\1\$_\2/;
        let result = html;
        let match;
        let guard = 0;
        while ((match = IF_PATTERN.exec(result)) && guard < 1000) {
            const [full, negate, keySpec, content] = match;
            const isTruthy = keySpec.split("|").some((part) => isConditionalFlagTrue(part.replace(/^\$_/, ""), replace, checkbox));
            const keep = negate === "!" ? !isTruthy : isTruthy;
            result = result.slice(0, match.index) + (keep ? content : "") + result.slice(match.index + full.length);
            guard += 1;
        }
        return result;
    }

    /**
     * @description Substitutes $_KEY placeholders and bare building-block
     * tokens (text-/list-/basicInfo- prefixed) with their replace values.
     * Longest keys first so no key is partially matched inside a longer one.
     * Any leftover $_KEY / building-block-shaped token with no matching
     * replace entry is blanked instead of leaking literal template syntax.
     */
    function substituteTokens(html, replace, options = {}) {
        const escapeForHtml = options.escapeForHtml !== false;
        let result = html;
        const keys = replace ? Object.keys(replace).sort((a, b) => b.length - a.length) : [];
        keys.forEach((key) => {
            const raw = replace[key] === undefined || replace[key] === null ? "" : String(replace[key]);
            const value = escapeForHtml ? escapeHtml(raw).replace(/\n/g, "<br>") : raw;
            const pattern = key.startsWith("$_")
                ? new RegExp(escapeRegExp(key), "g")
                : new RegExp("\\b" + escapeRegExp(key) + "\\b", "g");
            result = result.replace(pattern, value);
        });
        result = result
            .replace(/\$_[A-Za-z0-9_]+/g, "")
            .replace(/\b(?:text|list|basicInfo)-[a-zA-Z-]+-(?:en|de)\b/g, "");
        return result;
    }

    function renderTemplate(templateHtml, replace, checkbox) {
        if (!templateHtml) {
            return "";
        }
        const withConditionals = resolveConditionalBlocks(templateHtml, replace, checkbox);
        return substituteTokens(withConditionals, replace, { escapeForHtml: true });
    }

    /**
     * @description Renders a plain-text answer from a dmp-blocks default
     * snippet (may itself contain #if/$_ syntax and stray HTML tags), for
     * inserting into a building-block textarea.
     */
    function renderBlockDefaultText(rawText, replace, checkbox) {
        let result = resolveConditionalBlocks(rawText, replace, checkbox);
        result = result.replace(/<[^>]+>/g, " ");
        result = substituteTokens(result, replace, { escapeForHtml: false });
        return result.replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
    }

    function populateTemplateSelect() {
        const select = elements.templateSelect;
        select.innerHTML = "";
        Object.keys(TEMPLATE_REGISTRY).forEach((id) => {
            const option = document.createElement("option");
            option.value = id;
            option.textContent = `${TEMPLATE_REGISTRY[id].label} (${TEMPLATE_REGISTRY[id].lang})`;
            select.appendChild(option);
        });
        select.value = DEFAULT_TEMPLATE_ID;
    }

    function getSelectedTemplateId() {
        const id = elements.templateSelect && elements.templateSelect.value;
        return id && TEMPLATE_REGISTRY[id] ? id : DEFAULT_TEMPLATE_ID;
    }

    function getSelectedTemplateHtml() {
        const entry = TEMPLATE_REGISTRY[getSelectedTemplateId()];
        return entry ? entry.getHtml() : "";
    }

    function renderDocumentPreview() {
        if (!elements.documentPreview) {
            return;
        }
        const templateHtml = getSelectedTemplateHtml();
        if (!templateHtml) {
            elements.documentPreview.innerHTML = "<p class=\"document-preview-empty\">Template not loaded.</p>";
            return;
        }
        try {
            elements.documentPreview.innerHTML = renderTemplate(templateHtml, state.data.replace || {}, state.data.checkbox || {});
        } catch (error) {
            console.error("Document preview rendering failed:", error);
            elements.documentPreview.innerHTML = "<p class=\"document-preview-empty\">Unable to render document preview.</p>";
        }
    }

    async function exportWord() {
        syncPrimaryCache();
        const templateId = getSelectedTemplateId();
        const templateHtml = getSelectedTemplateHtml();
        if (!templateHtml) {
            setStatus("Selected template not loaded.", "error");
            return;
        }
        try {
            const rendered = renderTemplate(templateHtml, state.data.replace || {}, state.data.checkbox || {});
            const preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
            const postHtml = "</body></html>";
            const html = preHtml + rendered + postHtml;
            const blob = new Blob(["\ufeff", html], { type: "application/msword" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            const baseName = (state.fileName || "DataPLAN_DMP.json").replace(/\.json$/i, "");
            link.download = `${baseName}_${templateId}.doc`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            setStatus(`Exported ${link.download}.`);
        } catch (error) {
            console.error("Word export failed:", error);
            setStatus("Word export failed. See console for details.", "error");
        }
    }

    async function exportRdmoXml() {
        syncPrimaryCache();
        const templateHtml = typeof rdmo_dmp !== "undefined" && rdmo_dmp ? rdmo_dmp["rdmo-dmp"] : "";
        if (!templateHtml) {
            setStatus("RDMO template not loaded.", "error");
            return;
        }
        try {
            const rendered = substituteTokens(templateHtml, state.data.replace || {}, { escapeForHtml: false });
            const blob = new Blob([rendered], { type: "application/xml" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            const baseName = (state.fileName || "DataPLAN_DMP.json").replace(/\.json$/i, "");
            link.download = `${baseName}_rdmo.xml`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            setStatus(`Exported ${link.download}.`);
        } catch (error) {
            console.error("RDMO XML export failed:", error);
            setStatus("RDMO XML export failed. See console for details.", "error");
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

        Object.entries(REPLACE_DMP_PATHS).forEach(([key, path]) => {
            let value = getDmpValue(dmp, path);
            if (
                key === "$_CREATIONDATE" ||
                key === "$_MODIFICATIONDATE" ||
                key === "$_PROJECTSTART"
            ) {
                value = formatDateForReplace(value);
            } else if (value != null && typeof value !== "string") {
                value = String(value);
            }
            assignReplace(nextReplace, key, value, "");
        });

        const dataset = Array.isArray(dmp.dataset) ? dmp.dataset[0] : undefined;
        assignReplace(nextReplace, "$_RAWDATA", resolveDatasetValue(dataset?.personal_data, nextReplace.$_RAWDATA), "???");
        assignReplace(nextReplace, "$_DERIVEDDATA", resolveDatasetValue(dataset?.sensitive_data, nextReplace.$_DERIVEDDATA), "???");
        assignReplace(nextReplace, "$_DATAUTILITY", dataset?.description, "");

        const checkboxGroup1 = nextCheckbox.checkbox_1;
        setCheckboxStateFromValue(checkboxGroup1, "check_protect", dmp.ethical_issues_exist);
        if (dataset) {
            setCheckboxStateFromValue(checkboxGroup1, "check_personaldata", dataset.personal_data);
            setCheckboxStateFromValue(checkboxGroup1, "check_sensitive", dataset.sensitive_data);
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

    function setDmpValue(path, value) {
        if (!state.data.dmp) {
            state.data.dmp = {};
        }
        let current = state.data.dmp;
        for (let i = 0; i < path.length - 1; i++) {
            const key = path[i];
            const nextKey = path[i + 1];
            const needsArray = typeof nextKey === "number";
            if (typeof key === "number") {
                if (!Array.isArray(current)) {
                    return;
                }
                while (current.length <= key) {
                    current.push(needsArray ? [] : {});
                }
                if (!current[key] || typeof current[key] !== "object" || Array.isArray(current[key]) !== needsArray) {
                    current[key] = needsArray ? [] : {};
                }
                current = current[key];
            } else {
                if (!current[key] || typeof current[key] !== "object" || Array.isArray(current[key]) !== needsArray) {
                    current[key] = needsArray ? [] : {};
                }
                current = current[key];
            }
        }
        const lastKey = path[path.length - 1];
        current[lastKey] = value;
    }

    function applyReplaceToDmp(key, value) {
        const path = REPLACE_DMP_PATHS[key];
        if (!path) {
            return;
        }

        let nextValue = value;
        if (key === "$_COSTVALUE") {
            nextValue = value === "" ? null : Number(value);
            nextValue = Number.isNaN(nextValue) ? null : nextValue;
        }

        setDmpValue(path, nextValue);

        const idDefaults = REPLACE_ID_DEFAULTS[key];
        if (idDefaults) {
            ensureIdType(idDefaults[0], idDefaults[1]);
        }
    }

    function ensureIdType(path, defaultType) {
        if (!state.data.dmp) {
            return;
        }
        let current = state.data.dmp;
        for (let i = 0; i < path.length; i++) {
            const key = path[i];
            if (!(key in current) || current[key] == null) {
                return;
            }
            current = current[key];
        }
        if (current && typeof current === "object" && !Array.isArray(current) && !current.type) {
            current.type = defaultType;
        }
    }

    function applyCheckboxToDmp(group, option, checked) {
        if (group !== "checkbox_1") {
            return;
        }
        const value = checked ? "yes" : "no";
        switch (option) {
            case "check_protect":
                setDmpValue(["ethical_issues_exist"], value);
                break;
            case "check_personaldata":
                setDmpValue(["dataset", 0, "personal_data"], value);
                break;
            case "check_sensitive":
                setDmpValue(["dataset", 0, "sensitive_data"], value);
                break;
            default:
                break;
        }
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
