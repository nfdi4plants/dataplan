
dfg_dmp = {"dfg-dmp" : `<div id="dfg-dmp" class="">
    <div id="dfg-dmp1" class="content-page">
        <br />
        <center>
            <div class="p-2" id="vis-parent" style="margin: auto; ">
                <div id="vis" style=" width:100%; max-height:600px; aspect-ratio : 1 / 1;"></div>
            </div>

            <div id="text_start" class="c2 text-center">Data Management Plan of the DFG Project $_PROJECTNAME</div>
        </center>
        <h2>
            <span class="c2">1.&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c2">Data description</span>
        </h2>
        <h3>
            <span class="c3">1.1&nbsp;&nbsp;&nbsp;&nbsp;Introduction</span>
        </h3>

        
        <p class="c0"><span class="c1">  basicInfo-isEu-en text-not-only-but-fair-en basicInfo-isProtected-en
            </span>
        </p>
        <p class="c0">
            <span class="c1">
                text-intro-en
            </span>
        </p>
        <p class="c0">
            <span class="c1">
                The detailed DMP instructs how data will be handled during and after the project. This DMP of $_PROJECTNAME 
                is created according to the DFG data management checklist. #if$_UPDATE It will be updated/its
                validity
                checked during $_PROJECTNAME several times. At the very least, this will happen at month
                $_UPDATEMONTH. #endif$_UPDATE
            </span>
        </p>

        <p class="c0">
            <span class="c3">1.2&nbsp;&nbsp;&nbsp;&nbsp;How does your project generate new data?</span>
        </p>
        <p class="c0">
            <span class="c1"> Data collection or generation methods may vary depending on their types and domains. For
                example:</span>
        </p>
            list-dataType-en

        <p class="c0">
            <span class="c1">
            text-aim-intro-en
                
            </span>
        </p>

        <p class="c0">
            <span class="c1">Public data will be extracted as described in paragraph 1.3. For $_PROJECTNAME,
                specific data sets will be generated by the consortium partners.</span>
        </p>

        <p class="c0">
            <span class="c3">1.3&nbsp;&nbsp;&nbsp;&nbsp;Is existing data reused?</span>
        </p>
        <p class="c0">
            <span class="c1">
                list-reuse-en
            </span>
        </p>

        <p class="c0">
            <span class="c3">1.4&nbsp;&nbsp;&nbsp;&nbsp;Which data types (in terms of data formats like image data,
                text data or measurement data) arise in your project and in what way are they further
                processed?</span>
        </p>
        <p class="c0">
            <span class="c1">
                list-dataCollection-en
            </span>
        </p>

        <span class="c3">1.5&nbsp;&nbsp;&nbsp;&nbsp;To what extent do these arise or what is the anticipated data
            volume?</span>

        <p class="c0">
            <span class="c1">text-data-size-en</span>
        </p>

        <h2 class="c13" id="documentation">
            <span class="c2">2.&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c15"></span><span
                class="c2 c12">Documentation and data quality</span>
        </h2>
        <h3 class="c3">
            <span class="c1">2.1.&nbsp;&nbsp;&nbsp;&nbsp;What approaches are being taken to describe the data in a
                comprehensible manner (such as the use of available metadata, documentation standards or
                ontologies)? </span>
        </h3>

        <p class="c0">
            text-standards-long-en
            
        </p>

        <p class="c0">
            <span class="c1">
                Open ontologies will be used where they are mature. As stated above, some ontologies and controlled
                vocabularies might need to be extended. #if$_DATAPLANT Here, $_PROJECTNAME will build on the
                advanced ontologies integrated in DataPLANT. #endif$_DATAPLANT
                Keywords about the experiment and the general consortium will be included, as well as an abstract
                about the data, where useful. In addition, certain keywords can be auto-generated from dense
                metadata and its underlying ontologies. #if$_DATAPLANT Here, DataPLANT strives to complement these with
                standardized DataPLANT ontologies that are supplemented where the ontology does not yet include the
                variables.
                #endif$_DATAPLANT
            </span>
        </p>

        <h3 class="c0">
            <span class="c3">2.2&nbsp;&nbsp;&nbsp;&nbsp;What measures are being adopted to ensure high data
                quality?</span>
        </h3>

        <p class="c0">
            <span class="c1">
                text-aim-intro-en

                Data variables will be allocated standardized names. For example, genes, proteins and metabolites will
                be named according to approved nomenclature and conventions. These will also be linked to functional
                ontologies where possible. Datasets will also be named in a meaningful way to ensure readability by
                humans. Plant names will include traditional names, binomials, and all strain/cultivar/subspecies/variety identifiers. Using methods from question 1.2 ensures high-quality raw data during collection and generation.
            </span>
        </p>

        <p class="c0">
            <span class="c1">
                To maintain data integrity and to be able to re-analyze data, data sets will get version numbers
                where this is useful (e.g. raw data must not be changed and will not get a version number and is
                considered
                immutable). #if$_DATAPLANT This is automatically supported by the ARC Git DataPLANT infrastructure.
                #endif$_DATAPLANT
            </span>
        </p>
        <p class="c0">
            text-standards-short-en
        </p>
        <h3 class="c0">
            <span class="c3">2.3&nbsp;&nbsp;&nbsp;&nbsp;Are quality controls in place and if so, how do they
                operate? </span>
        </h3>

        <p class="c0">
            text-quality-control-en
        </p>

        <h3 class="c0">
            <span class="c3">2.4&nbsp;&nbsp;&nbsp;&nbsp;Which digital methods and tools (e.g. software) are required
                to use the data?</span>
        </h3>
            <p class="c0"><span class="c1 list-to-remove-comma"> $_PROJECTNAME will use common Research Data Management (RDM) infrastructures #if$_DATAPLANT|$_NFDI|$_FRENCH|$_EOSC developed by #endif$_DATAPLANT|$_NFDI|$_FRENCH|$_EOSC #if$_DATAPLANT|$_NFDI the NFDI of Germany, #endif$_DATAPLANT|$_NFDI #if$_FRENCH INRAe from France, #endif$_FRENCH #if$_EOSC EOSC (European Open Science Cloud), #endif$_EOSC .
                    </span></p>

        <p class="c0">
           text-dataplant-tools-en
        </p>

        <span class="c1">As stated above, here we use publicly available open-source and well-documented certified
            software, #if$_PROPRIETARY except for $_PROPRIETARY #endif$_PROPRIETARY.</span>
        <p class="c0"></p>

        <h2 class="c0">
            <span class="c2">3.&nbsp;&nbsp;&nbsp;&nbsp;Storage and technical archiving the project </span>
        </h2>

        <h3 class="c0">
            <span class="c3">3.1&nbsp;&nbsp;&nbsp;&nbsp;How is the data to be stored and archived throughout the
                project duration?</span>
        </h3>
        text-repository-long-en
          
    
        <p class="c0">
            <span class="c1">Data will be made available for many years#if$_DATAPLANT and potentially indefinitely
                after the end of the project #endif$_DATAPLANT.</span>
        </p>
        <p class="c0">
            <span class="c1">In any case data submitted to international
                discipline related repositories which use specialized technologies (as detailed above) would be subject to local data storage regulation.</span>
        </p>
        <h3 class="c0">
            <span class="c3">3.2&nbsp;&nbsp;&nbsp;&nbsp;What is in place to secure sensitive data throughout the
                project duration (access and usage rights)? </span>
        </h3>
        <p class="c0">
            <span class="c1">
                #if$_DATAPLANT In DataPLANT, data management relies on the Annotated Research Context (ARC). It is
                password protected, so before any data can be obtained or samples generated, an authentication needs
                to
                take place. #endif$_DATAPLANT
            </span>
        </p>
        <p class="c20">
            <span class="c1">
                In case data is only shared within the consortium, because the data is not yet finished or under IP
                checks, the data is hosted internally, and the username and the password will be required (see also GDPR rules).
                In the case data is made public under final EU or US repositories, completely anonymous access is
                normally allowed. This is the case for ENA as well and both are in line with GDPR requirements.
            </span>
        </p>
        <p class="c0">
            <span class="c1">There will be no restrictions once the data is made public.</span>
        </p>

        <h2 class="c0">
            <span class="c2">4.&nbsp;&nbsp;&nbsp;&nbsp;Legal obligations and conditions </span>
        </h2>

        <h3 class="c0">
            <span class="c3">4.1&nbsp;&nbsp;&nbsp;&nbsp;What are the legal specifics associated with the handling of
                research data in your project?</span>
        </h3>

        <p class="c0">
            <span class="c1">
                At the moment, we do not anticipate ethical or legal issues with data sharing. In terms of ethics,
                since this is plant data, there is no need for an ethics committee, however, diligence for plant
                resource
                benefit sharing is considered. #issuewarning Please ensure that you complete any necessary due diligence. Currently, we are awaiting clarification on whether the Nagoya Protocol (🡺 see Nagoya Protocol) will encompass sequence information. Regardless, if you use material from a country other than your own (or that of your partner), and you conduct physical or biochemical characterization (e.g., metabolites, proteome, RNASeq, etc.), this may constitute an action relevant under the Nagoya Protocol. Exceptions might include materials from countries such as the U.S. (non-partner), Ireland (has not signed—still contact them), etc., though other laws could apply. #endissuewarning
            </span>
        </p>
        <p class="c0">
            <span class="c1">
                The only personal data that will potentially be stored is the submitter name and affiliation in the
                metadata for data. In addition, personal data will be collected for dissemination and communication
                activities using specific methods and procedures developed by $_PROJECTNAME partners to adhere to
                data protection. #issuewarning You need to inform and better get WRITTEN consent that you store
                emails and
                names or even pseudonyms such as twitter handles, we are very sorry about these issues we didn’t
                invent them #endissuewarning
            </span>
        </p>
        <h3 class="c0">
            <span class="c3">4.2&nbsp;&nbsp;&nbsp;&nbsp;Do you anticipate any implications or restrictions regarding
                subsequent publication or accessibility? </span>
        </h3>
        <p class="c20">
            <span class="c1">
                Once data is transferred to the $_PROJECTNAME platform #if$_DATAPLANT and ARCs have been generated in
                DataPLANT #endif$_DATAPLANT , data security will be imposed. This comprises secure storage, and the
                use of
                passwords and usernames is generally transferred via separate safe media.
            </span>
        </p>

        <h3 class="c0">
            <span class="c3">4.3&nbsp;&nbsp;&nbsp;&nbsp;What is in place to consider aspects of use and copyright
                law as well as ownership issues? </span>
        </h3>
        <p class="c0">
            <span class="c1">Open licenses, such as Creative Commons (CC), will be used whenever possible.</span>
        </p>
        <h3 class="c0">
            <span class="c3">4.4&nbsp;&nbsp;&nbsp;&nbsp;Are there any significant research codes or professional
                standards to be taken into account? </span>
        </h3>

        <p class="c0">
            <span class="c1">
                text-metadata-format-en
            </span>
        </p>

        <h2 class="c0">
            <span class="c2">5.&nbsp;&nbsp;&nbsp;&nbsp;Data exchange and long-term data accessibility </span>
        </h2>

        <h3 class="c0">
            <span class="c3">5.1&nbsp;&nbsp;&nbsp;&nbsp;Which data sets are especially suitable for use in other
                contexts? </span>
        </h3>

        <p class="c0">
            <span class="c1">
                The data will be useful for $_PROJECTNAME partners, the scientific community working on
                $_STUDYOBJECT or the general public interested in $_STUDYOBJECT. Hence, $_PROJECTNAME also strives
                to collect the data
                that has been disseminated and potentially advertise it #if$_DATAPLANT e.g. through the DataPLANT
                platform or other means #endif$_DATAPLANT , if it is not included in a publication anyway, which is
                the most
                likely form of dissemination.
            </span>
        </p>

        <h3 class="c0">
            <span class="c3">5.2&nbsp;&nbsp;&nbsp;&nbsp;Which criteria are used to select research data to make it
                available for subsequent use by others? </span>
        </h3>

        <p class="c0">
            <span class="c1">
                By default, all data sets from $_PROJECTNAME will be shared with the community and made openly
                available. This is, however, after partners have had the ability to check for IP protection
                (according to
                agreements and background rights). #if$_INDUSTRY This applies in particular to data pertaining to
                the industry. #endif$_INDUSTRY However, all partners also strive for IP protection of data sets
                which will
                be tested and due diligence will be given.
            </span>
        </p>
        <p class="c0">
            <span class="c1">
                Note that in multi-beneficiary projects it is also possible for specific beneficiaries to keep their
                data closed if relevant provisions are made in the consortium agreement and are in line with the
                reasons for opting out.
            </span>
        </p>
        <h3 class="c0">
            <span class="c3">5.3&nbsp;&nbsp;&nbsp;&nbsp;Are you planning to archive your data in a suitable
                infrastructure? </span>
        </h3>
        <p class="c0">
            #if$_DATAPLANT As $_PROJECTNAME is closely aligned with DataPLANT, the ARC converter and DataHUB will be
            used to find the end-point repositories and upload to the repositories automatically. #endif$_DATAPLANT
            <span class="c1"> </span>
        </p>

        <p class="c0"> 
        text-repository-short-en
        </p>
        <p class="c0">
            <span class="c1">
                The submission is for free, and it is the goal #if$_ENA (at least of ENA) #endif$_ENA to obtain as much data as possible.
                Therefore, arrangements are neither necessary nor useful. Catch-all repositories are not required.
                #if$_DATAPLANT For DataPLANT, this has been agreed upon. #endif$_DATAPLANT #issuewarning If no data
                management platform such as DataPLANT is used, then you need to find appropriate repository to store
                or archive your data after publication. #endissuewarning
            </span>
        </p>
        <h3 class="c0">
            <span class="c3">5.4&nbsp;&nbsp;&nbsp;&nbsp;If so, how and where? Are there any retention periods?
            </span>
        </h3>
        <p class="c0">
            <span class="c1">There are no restrictions, beyond the aforementioned IP checks, which are in line with
                e.g. European open data policies.</span>
        </p>
        <p class="c0">
            <span class="c1">
                The $_PARTNERS decides on preservation of data not submitted to end-point subject area repositories
                #if$_DATAPLANT or ARCs in DataPLANT #endif$_DATAPLANT after project end. This will be in line with EU
                institute policies and data sharing based on EU and international standards.
            </span>
        </p>
        <h3 class="c0">
            <span class="c3">5.5&nbsp;&nbsp;&nbsp;&nbsp;When is the research data available for use by third
                parties? </span>
        </h3>
        <p class="c0">
            <span class="c1">
                text-made-public-en
            </span>
        </p>

        <h2 class="c0">
            <span class="c2">6.&nbsp;&nbsp;&nbsp;&nbsp;Responsibilities and resources </span>
        </h2>

        <h3 class="c0">
            <span class="c3">6.1&nbsp;&nbsp;&nbsp;&nbsp;Who is responsible for adequate handling of the research
                data (description of roles and responsibilities within the project)? </span>
        </h3>
        <p class="c0">
            <span class="c1">The responsible will be $_DATAOFFICER as data officer.</span>
            <span class="c1">The data responsible(s) (data officer#if$_PARTNERS or $_PARTNERS #endif$_PARTNERS)
                decides on the preservation of data not submitted to end-point subject area repositories
                #if$_DATAPLANT or ARCs in DataPLANT #endif$_DATAPLANT after the
                project end. This will be in line with EU institute policies, and data sharing based on EU and
                international standards.</span>
        </p>
        <h3 class="c0">
            <span class="c3">6.2&nbsp;&nbsp;&nbsp;&nbsp;Which resources (costs; time or other) are required to
                implement adequate handling of research data within the project? </span>
        </h3>
        <p class="c0">
            <span class="c1">The costs comprise data curation, #if$_DATAPLANT ARC consistency checks,
                #endif$_DATAPLANT and maintenance on $_PROJECTNAME´s side.</span>        
            <span class="c1">A large part of the cost is covered by $_PROJECTNAME #if$_DATAPLANT and the structures,
                tools and knowledge laid down in the DataPLANT consortium. #endif$_DATAPLANT</span>
        
        </p>
        <p class="c0">
            <span class="c1">
                Additionally, last-level costs for storage are incurred by end-point repositories (e.g. ENA) but not
                charged against $_PROJECTNAME or its members but by the operation budget of these repositories.
            </span>
        </p>

        <h3 class="c0">
            <span class="c3">6.3&nbsp;&nbsp;&nbsp;&nbsp;Who is responsible for curating the data once the project
                has ended? </span>
        </h3>
        <p class="c0">
            <span class="c1">As applicable, $_DATAOFFICER, who is responsible for ongoing data maintenance will also
                take care of it after the finish of $_PROJECTNAME. #if$_DATAPLANT DataPLANT as external data
                archives may provide such services in some cases. #endif$_DATAPLANT</span>
        </p>

        <p class="c0">
            <span class="c1"></span>
        </p>
        <p class="c6">
            <span class="c1"></span>
        </p>
        <h1 class="c13" ><span class="c2">7&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c15">
        </span><span class="c12 c2">Annexes</span></h1>
    <p class="c0"><span class="c1"></span></p>
    <h2 class="c9" ><span class="c11 c18">7.1&nbsp;&nbsp;&nbsp;&nbsp;</span><span
            class="c15"> </span><span class="c4">Abbreviations</span></h2>
    <p class="c0"><span class="c1"></span></p>
    list-abbreviation-en
        <p class="c0"><span class="c1"></span></p>
        <p class="c0"><span class="c1"></span></p>
        <p class="c0"><span class="c1"></span></p>
        <p class="c0"><span class="c1"></span></p>
        <p class="c22"><span class="c1"></span></p>
    </div>
</div>`}