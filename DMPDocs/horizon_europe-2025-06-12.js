horizon_europe = {
    "horizon_europe": `<div id="horizon_europe" >
    <div class="content-page">
        <br />
        <center>
            <div class="p-2" id="vis-parent" style="margin: auto;">

                <div id="vis" style=" width:100%;max-height:600px;  aspect-ratio : 1 / 1;"></div>

            </div>
            <br />
            <div class="p-2" style="margin: auto;">


                <div class="c2 text-center">
                    <h1>Data Management Plan of the Horizon Europe Project $_PROJECTNAME</h1>
                </div>

                <div class="d-flex justify-content-center">


                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <h3>Action Number: </h3>
                                </td>
                                <td>
                                    <h3> $_FUNDINGPROGRAMME </h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3>Action Acronym:</h3>
                                </td>
                                <td>
                                     <h3> $_PROJECTNAME </h3> 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3>Action Title:</h3>
                                </td>
                                <td>
                                    <h3> #if!$_ACRONYM  $_PROJECTNAME   #endif!$_ACRONYM   #if$_ACRONYM   $_ADDACRONYM #endif$_ACRONYM </h3>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <h3>Creation Date:</h3>
                                </td>
                                <td>
                                    <h3>$_CREATIONDATE</h3>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <h3>Modification Date:</h2>
                                </td>
                                <td>
                                    <h3>$_MODIFICATIONDATE</h3>
                                </td>

                            </tr>
                        </tbody>
                    </table>

                </div>
                <br>

            </div>

        </center>

        <h1 class="c13"><span class="c2">Introduction</span></h1>
        <p class="c0"><span class="c1"> basicInfo-isEu-en text-not-only-but-fair-en basicInfo-isProtected-en
            </span>
        </p>
        <p class="c0">
            <span class="c1">
                 text-intro-en
            </span>
        </p>
        <p class="c0">
            <span class="c1">
                The detailed DMP instructs how data will be handled during and after the project. The $_PROJECTNAME DMP
                is modified according to the Horizon Europe and Horizon Europe online Manual. #if$_UPDATE It will be
                updated/its validity checked during the
                $_PROJECTNAME project several times. At the very least, this will happen at month $_UPDATEMONTH.
                #endif$_UPDATE</span>
        </p>

        <h2 class="c9" ><span class="c4">1.&nbsp; &nbsp; Data Summary</span></h2>
        <p class="c0"><span class="c3">Will you re-use any existing data and what will you re-use it for? State the
                reasons if re-use of any existing data has been considered but discarded.</span></p>
        <p class="c0">

            <span class="c1">
                list-reuse-en
            </span>
        </p>
        <p class="c0"><span class="c3">What types and formats of data will the project generate or re-use?</span>
        </p>


        <p class="c0">
            <span class="c1">
                list-dataCollection-en
                list-data-format-en
            </span>
        </p>

        <p class="c0"><span class="c3">What is the purpose of the data generation or re-use and its relation to the
                objectives of the project?</span></p>
        <p class="c0">
            <span class="c1">
                text-aim-intro-en
            </span>
        </p>


        <p class="c0"><span class="c3">What is the expected size of the data that you intend to generate or
                re-use?</span></p>
        <p class="c0"><span class="c1"> text-data-size-en </span></p>

        <p class="c0"><span class="c3">What is the origin/provenance of the data, either generated or
                re-used?</span></p>
        <p class="c0"><span class="c1">Public data will be extracted as described in the previous paragraph. For $_PROJECTNAME, specific data sets will be generated by the consortium partners.</span></p>


        <p class="c0">
            <span class="c1"> Data of different types or representing different domains will be generated using
                unique approaches. For example:</span>
        </p>
        list-dataType-en


        #if$_PREVIOUSPROJECTS&nbsp;
        <p class="c0"><span class="c1"> Data from previous projects such as $_PREVIOUSPROJECTS will be considered.
            </span></p>
        #endif$_PREVIOUSPROJECTS

        <p class="c0"><span class="c3">To whom might it be useful ('data utility'), outside your project?</span></p>
        <p class="c0">
            <span class="c1">
                text-data-utility-en
            </span>
        </p>

        <h2 class="c9"><span class="c4">2&nbsp; &nbsp; FAIR data</span></h2>
        <h3 class="c14"><span class="c7">2.1. Making data findable, including provisions for metadata</span></h3>
        <p class="c0">
            <span class="c3">
                Will data be identified by a persistent identifier?
            </span>
        </p>
        <p class="c0">
            <span class="c1">All data sets will receive unique identifiers, and they will be annotated with
                metadata.
            </span>
        </p>

        <p class="c0">
            <span class="c3">Will rich metadata be provided to allow discovery? What metadata will be created? What
                disciplinary or general standards will be followed? In case metadata standards do not exist in your
                discipline, please outline what type of metadata will be created and how.
            </span>
        </p>
        <p class="c0">
            text-standards-long-en
            text-cross-metadata-en
        </p>
        <p class="c0"><span class="c3">Will search keywords be provided in the metadata to optimize the possibility
                for discovery and then potential re-use?</span></p>
        <p class="c0">
            text-keywords-en
        </p>
        <p class="c0"><span class="c3">Will metadata be offered in such a way that it can be harvested and
                indexed?</span></p>
        <p class="c0">
            <span class="c1">
                To maintain data integrity and to be able to re-analyze data, data sets will get version numbers
                where this is useful (e.g. raw data must not be changed and will not get a version number and is
                considered
                immutable). #if$_DATAPLANT This is automatically supported by the ARC Git DataPLANT infrastructure.
                #endif$_DATAPLANT</span>

            <span class="c1">
                text-metadata-naming-en</span>
        </p>



        <h2 class="c9" ><span class="c4">2.2.&nbsp; &nbsp; Making data accessible</span></h2>
        <p class="c0"><span class="c3">Repository</span></p>
        <p class="c0"><span class="c3">Will the data be deposited in a trusted repository?</span></p>

        <p class="c0">
            text-repository-long-en
        </p>


        <p class="c0"><span class="c3">Have you explored appropriate arrangements with the identified repository
                where your data will be deposited? </span></p>
        <p class="c0">
            text-archive-en
        </p>

        <p class="c0"><span class="c3">Does the repository ensure that the data is assigned an identifier? Will the
                repository resolve the identifier to a digital object? </span></p>
        <p class="c0">
            <span class="c1">
                
                <p class="c0">
                text-repository-short-en
                </p> 
                <p class="c0">
                    <span class="c1">
                In the case of unstructured less standardized data (e.g. experimental
                phenotypic measurements), these will be metadata annotated and if complete given a digital object
                identifier (DOI) #if$_DATAPLANT and the whole data sets wrapped into an ARC will get DOIs as well
                #endif$_DATAPLANT .
                </span>
                </p> 
            </span>
        </p>
        Those repositories are the most appropriate ones.
        <br>
        <br>
        <p class="c0"><span class="c3">Data:</span></p>
        <p class="c0"><span class="c3">Will all data be made openly available? If certain datasets cannot be shared
                (or need to be shared under restricted access conditions), explain why, clearly separating legal and
                contractual reasons from intentional restrictions. Note that in multi-beneficiary projects it is
                also possible for specific beneficiaries to keep their data closed if opening their data goes
                against their legitimate interests or other constraints as per the Grant Agreement.</span></p>
        <p class="c0">
            text-data-accessible-en
        </p>

        <p class="c0">
        <span class="c3">If an embargo is applied to give time to publish or seek protection of the
                intellectual property (e.g. patents), specify why and how long this will apply, bearing in mind that
                research data should be made available as soon as possible.</span></p>
        <p class="c0">
            <span class="c1">
                text-made-public-en
            </span>
        </p>

        <p class="c0"><span class="c3">Will the data be accessible through a free and standardized access protocol?
            </span></p>
        <p class="c0">
            <span class="c1">
                #if$_DATAPLANT DataPLANT stores data in the ARC, which is a git repo. The DataHUB shares data and
                metadata as a gitlab instance. The "Git" and "Web" protocol are opensourced and freely accessible.
                In addition, #endif$_DATAPLANT Zenodo and the endpoint repositories will also be used for access. In
                General, web-based protocols are free and standardized for access.
            </span>
        </p>

        <p class="c0"><span class="c3">If there are restrictions on use, how will access be provided to the data,
                both during and after the end of the project?
            </span></p>
        <p class="c0">
            <span class="c1">
                There are no restrictions, beyond the aforementioned IP checks, which are in line with e.g. European
                open data policies.
            </span>
        </p>


        <p class="c0"><span class="c3">How will the identity of the person accessing the data be ascertained?
            </span></p>
        <p class="c0">
            text-access-identity-en
        </p>
        <p class="c0"><span class="c3">Is there a need for a data access committee (e.g. to evaluate/approve access
                requests to personal/sensitive data)?
            </span></p>
        <p class="c0">
            <span class="c1">
                Consequently, there is no need for a committee.

            </span>
        </p>
        <p class="c0">
            <span class="c3">
                Metadata:
            </span>
        </p>
        <p class="c0">
            <span class="c3">
                Will metadata be made openly available and licenced under a public domain dedication CC0, as per the
                Grant Agreement? If not, please clarify why. Will metadata contain information to enable the user to
                access the data?
            </span>
        </p>
        <p class="c0">
            <span class="c1">
                Yes, where possible, e.g. CC REL will be used for data not submitted to specialized repositories
                such as ENA.
            </span>
        </p>
        <p class="c0">
            <span class="c3">
                How long will the data remain available and findable? Will metadata be guaranteed to remain
                available after data is no longer available?
            </span>
        </p>
        <p class="c0">
            <span class="c1">
                <p class="c0"><span class="c1">The data will be made available for many years#if$_DATAPLANT and
                        ideally indefinitely after the end of the project #endif$_DATAPLANT.
                        In any case data submitted to repositories (as detailed above) e.g. ENA /PRIDE would be
                        subject to local data storage regulation.

                    </span></p>

            </span>
        </p>

        <p class="c0">
            <span class="c3">
                Will documentation or reference about any software be needed to access or read the data be included?
                Will it be possible to include the relevant software (e.g. in open source code)?
            </span>
        </p>
        <p class="c0">
            text-dataplant-tools-en
        </p>

        <h3><span class="c7"> 2.3. Making data interoperable </span></h3>
        <p class="c0">
            <span class="c3">
                What data and metadata vocabularies, standards, formats or methodologies will you follow to make
                your data interoperable to allow data exchange and re-use within and across disciplines? Will you
                follow community-endorsed interoperability best practices? Which ones?
            </span>
        </p>
        <p class="c0">
        <span class="c1">
            text-standards-short-en
            <p class="c0">
        <span class="c1">
                text-metadata-format-en
        </span>
        </p>
        </span>
        </p>


        



        <p class="c0">
            <span class="c3">
                In case it is unavoidable that you use uncommon or generate project specific ontologies or
                vocabularies, will you provide mappings to more commonly used ontologies? Will you openly publish
                the generated ontologies or vocabularies to allow reusing, refining or extending them?
            </span>
        </p>
        <p class="c0">
            
                text-ontologies-en

            </span>
        </p>

        <p class="c0">
            <span class="c3">
                Will your data include qualified references to other data (e.g. other data from your project, or
                datasets from previous research)?
            </span>
        </p>
        <p class="c0">
            <span class="c1">
                The references to other data will be made in the form of DOI and ontology terms.
            </span>
        </p>

        <h3><span class="c7"> 2.4. Increase data re-use </span></h3>
        <p class="c0"><span class="c3">How will you provide documentation needed to validate data analysis and
                facilitate data re-use (e.g. readme files with information on methodology, codebooks, data cleaning,
                analyses, variable definitions, units of measurement, etc.)?</span></p>

        <p class="c0">
            <span class="c1">
                The documentation will be provided in the form of ISA (Investigation Study Assay) and CWL (Common
                Workflow Language). #if$_DATAPLANT Here, $_PROJECTNAME will build on the ARC container, which
                includes all the data, metadata, and documentations. #endif$_DATAPLANT
            </span>
        </p>
        <p class="c0"><span class="c3">Will your data be made freely available in the public domain to permit the
                widest re-use possible? Will your data be licensed using standard reuse licenses, in line with the
                obligations set out in the Grant Agreement?
            </span></p>

        <p class="c0">
            <span class="c1">
                Yes, our data will be made freely available in the public domain to permit the widest re-use
                possible. Open licenses, such as Creative Commons (CC), will be used whenever possible.
            </span>
        </p>
        <p class="c0"><span class="c3">Will the data produced in the project be useable by third parties, in
                particular after the end of the project?
            </span></p>

        <p class="c0">
            <span class="c1">
                There will be no restrictions once the data is made public.
            </span>
        </p>
        <p class="c0"><span class="c3">Will the provenance of the data be thoroughly documented using the
                appropriate standards?
            </span></p>

        <p class="c0">
            <span class="c1">
                text-standards-en
                text-aim-intro-en
            </span>
        </p>

        <p class="c0"><span class="c3">Describe all relevant data quality assurance processes. Further to the FAIR
                principles, DMPs should also address research outputs other than data, and should carefully consider
                aspects related to the allocation of resources, data security and ethical aspects.
            </span></p>

        <p class="c0">
            <span class="c1">
                text-quality-control-en

            </span>
        </p>
        <h2 class="c9"><span class="c4">3&nbsp; &nbsp; Other research outputs</span></h2>
        <p class="c0"><span class="c3">In addition to the management of data, beneficiaries should also consider and
                plan for the management of other research outputs that may be generated or re-used throughout their
                projects. Such outputs can be either digital (e.g. software, workflows, protocols, models, etc.) or
                physical (e.g. new materials, antibodies, reagents, samples, etc.).

            </span></p>
        <p class="c0">
            <span class="c1">
                In the current data management plan, any digital output including but not limited to software,
                workflows, protocols, models, documents, templates, notebooks are all treated as data. Therefore,
                all aforementioned digital objects are already described in detail. For the non-digital objects, the
                data management plan will be closely connected to the digitalisation of the physical objects. #if$_DATAPLANT $_PROJECTNAME will build a workflow which connects the ARC with an electronic lab
                notebook in order to also manage the physical objects. #endif$_DATAPLANT

            </span>
        </p>

        <p class="c0"><span class="c3">Beneficiaries should consider which of the questions pertaining to FAIR data
                above, can apply to the management of other research outputs, and should strive to provide
                sufficient detail on how their research outputs will be managed and shared, or made available for
                re-use, in line with the FAIR principles.

            </span></p>
        <p class="c0">
            <span class="c1">
                Open licenses, such as Creative Commons CC, will be used whenever possible even on the other digital
                objects.

            </span>
        </p>





        <h2 class="c9"><span class="c4">4.&nbsp; &nbsp; Allocation of resources</span></h2>
        <p class="c10"><span class="c3">What will the costs be for making data or other research outputs FAIR in
                your project (e.g. direct and indirect costs related to storage, archiving, re-use, security,
                etc.)?</span></p>
        <p class="c0">text-cost-en
        </p>
        <p class="c10">
            <span class="c3">How will these be covered? Note that costs related to research data/output management
                are eligible as part of the Horizon Europe grant (if compliant with the Grant Agreement
                conditions)</span>
        </p>
        <p class="c0">text-cost-coverage-en</p>
        <p class="c10"><span class="c3">Who will be responsible for data management in your project?</span></p>
        <p class="c0">text-data-officer-en</p>
        <p class="c10"><span class="c3">How will long term preservation be ensured? Discuss the necessary resources
                to accomplish this (costs and potential value, who decides and how, what data will be kept and for
                how long)?</span></p>
        <p class="c0">
            text-data-officer-decide-en
        </p>
        <h2 class="c9" ><span class="c4">5.&nbsp; &nbsp; Data security</span></h2>
        <p class="c10"><span class="c3">What provisions are or will be in place for data security (including data
                recovery as well as secure storage/archiving and transfer of sensitive data)?</span></p>
        <p class="c20">
            text-data-security-en
        </p>
        <p class="c10"><span class="c3">Will the data be safely stored in trusted repositories for long term
                preservation and curation?</span></p>
    
                <p class="c0">
                   text-repository-short-en
                </p>
        <h2 class="c9" ><span class="c4">6.&nbsp; &nbsp; Ethics</span></h2>
        <p class="c10">
            <span class="c3">
                Are there, or could there be, any ethics or legal issues that can have an impact on data sharing?
                These can also be discussed in the context of the ethics review. If relevant, include references to
                ethics deliverables and ethics chapter in the Description of the Action (DoA).
            </span>
        </p>
        <p class="c0">
            text-ethical-en
        </p>
        <p class="c10"><span class="c3">Will informed consent for data sharing and long term preservation be
                included in questionnaires dealing with personal data?</span></p>
        <p class="c0">
           text-personnal-data-en
        </p>
        <h2 class="c9" ><span class="c4">7.&nbsp; &nbsp; Other issues</span></h2>
        <p class="c0"><span class="c3">Do you, or will you, make use of other national/funder/sectorial/departmental
                procedures for data management? If yes, which ones (please list and briefly describe them)?</span>
        </p>
        <p class="c0">
         text-infrastructure-en </p>
        <p class="c0"><span class="c1"></span></p>
        <p class="c6"><span class="c1"></span></p>
        <h1 class="c13" ><span class="c2">3&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c15">
            </span><span class="c12 c2">Annexes</span></h1>
        <p class="c0"><span class="c1"></span></p>
        <h2 class="c9" ><span class="c11 c18">3.1&nbsp;&nbsp;&nbsp;&nbsp;</span>

        <span class="c4">Abbreviations</span></h2>
 
       list-abbreviation-en
        <p class="c0"><span class="c1"></span></p>
        <p class="c0"><span class="c1"></span></p>
        <p class="c0"><span class="c1"></span></p>
        <p class="c22"><span class="c1"></span></p>

    </div>
</div>`}