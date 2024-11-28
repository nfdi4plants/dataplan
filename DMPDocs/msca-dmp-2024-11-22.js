msca_dmp = {
    "msca-dmp": `<div id="msca-dmp" class="">
    <div class="content-page" id="text_start">
        <span class="c2">Research data management and management of other research outputs</span>
        <ul class="c0 ">
            <li class="c0 li-bullet-0">
                <span class="c0">
                    <b>Types of data/research outputs and their estimated size; if
                        applicable, combination with, and provenance of, existing data. </b>
                    <br>
                    &ndash; list-dataCollection-en
                    
                        <span class="c0">We expect to generate raw data in the range of $_RAWDATA GB of data. The size of
                        the
                        derived data will be about $_DERIVEDDATA GB.


                    </span>
                        <br>
                    The project builds on existing data sets, the combination and provenance of existing data will be
                    based on metadata standards and ontologies detailed in section interoperability.
                
                        </span>
                    </li>
                </p>
                <li class="c0 li-bullet-0">
                    <span class="c0">
                        <b>Findability of data/research outputs: Types of persistent and
                        unique identifiers (e.g. digital object identifiers) and trusted repositories that will be used.
                    </b>
                        <br> &ndash;&nbsp; 
                            <span class="c0">
                        All datasets will be associated with unique identifiers and will be annotated with metadata. We
                        will
                        use Investigation, Study, Assay (ISA) specification for metadata creation. #if$_DATAPLANT The
                        core integration with DataPLANT will also allow
                        individual releases to be tagged with a Digital Object Identifier (DOI).
                        #endif$_DATAPLANT #if$_OTHERSTANDARDS Other standards such as $_OTHERSTANDARDINPUT are also
                        adhered
                        to. #endif$_OTHERSTANDARDS
                    </span>
                        </span>
                    </li>
                <li class="c0 li-bullet-0">
                        <span class="c0">
                            <b>
                                Accessibility of data/research outputs: IPR considerations
                        and timeline for open access; provisions for access to restricted data for verification
                        purposes. 
                    </b>
                            
                                <span class="c0"> <br>
                            &ndash; #if$_EARLY Some raw data is made public as soon as it is collected and processed.
                            #endif$_EARLY
                            #if$_BEFOREPUBLICATION Relevant processed datasets are made public when the research
                            findings
                            are published. #endif$_BEFOREPUBLICATION #if$_ENDOFPROJECT At the end of the project, all
                            data
                            without embargo period will be published. #endif$_ENDOFPROJECT #if$_EMBARGO Data, which is
                            subject to an embargo period, is not publicly accessible until the end of embargo
                            period. #endif$_EMBARGO #if$_REQUEST Data is made available upon request, allowing
                            controlled
                            sharing while ensuring responsible use. #endif$_REQUEST #if$_IPISSUE IP issues will be
                            checked
                            before publication. #endif$_IPISSUE All consortium partners will be
                            encouraged to make data available before publication, openly and/or under pre-publication
                            agreements #if$_GENOMIC such as those started in Fort Lauderdale and set forth by the
                            Toronto
                            International Data
                            Release Workshop #endif$_GENOMIC . This will be implemented as soon as IP-related checks are
                            complete.
                        </span>
                            text-repository-long-en
                </li>
                <li class="c0 li-bullet-0">
                    <span class="c0">
                        <b>Interoperability of data/research outputs: Standards, formats
                        and vocabularies for data and metadata. </b>
                        <br> &ndash;
                                text-standards-long-en
                                 <span class="c0"> $_PROJECTNAME also implement
                            minimal cross-domain annotations #if$_DUBLINCORE|$_DARWINCORE|$_BIOSCHEMAS|$_SCHEMAORG|$_MARC21 such
                            as #endif$_DUBLINCORE|$_DARWINCORE|$_BIOSCHEMAS|$_SCHEMAORG|$_MARC21 
                                    <span
                                class="list-to-remove-comma">
                                #if$_DUBLINCORE Dublin Core, #endif$_DUBLINCORE #if$_DARWINCORE
                                Darwin Core, #endif$_DARWINCORE #if$_SCHEMAORG Schema.org, #endif$_SCHEMAORG #if$_BIOSCHEMAS
                                BioSchemas, #endif$_BIOSCHEMAS #if$_MARC21 MARC 21 #endif$_MARC21 . </span> The metadata standards will
                            thus allow the integration of data across projects and safeguards that reuse established and tested
                            protocols.
                            Additionally, we will use ontology terms to enrich the data sets relying on free and open
                            ontologies. In addition, additional ontology terms might be created and be canonized during the
                            $_PROJECTNAME.
                                    <br>
                            Whenever possible, data will be stored in common and openly defined formats including all the
                            necessary metadata. By
                            default, no proprietary formats will be used. However, Microsoft Excel files (according to
                            ISO/IEC 29500-1:2016) might be used as intermediates by the consortium#if$_DATAPLANT and by some
                            Annotated Research Context (ARC) components#endif$_DATAPLANT. In addition, text files might be
                            edited in text processor files, but will be shared as pdf.
                            

                
                            </span>
                        </li>
                        <li class="c0 li-bullet-0">
                            <span class="c0">
                                <b>Reusability of data/research outputs: Licenses for data
                        sharing and re-use (e.g. Creative Commons, Open Data Commons); availability of
                        tools/software/models for data generation and validation/interpretation /re-use.</b>
                                <br>

                    &ndash; Our data will be made freely available in the public domain to permit the widest re-use
                    possible. Open licenses, such as Creative Commons (CC), will be used whenever possible.
                    text-dataplant-tools-en
                            </li>
                        <li class="c0 li-bullet-0">
                            <span class="c0">
                                <b>Curation and storage/preservation costs; person/team
                    responsible for data management and quality assurance.</b>
                                    <span class="c0"> <br> &ndash; The data related
                    cost of $_PROJECTNAME are covered by the project funding.
                    Pre-existing structures #if$_DATAPLANT such as structures, tools, and knowledge laid down in the
                    DataPLANT consortium #endif$_DATAPLANT will also be used. The responsible person will be
                    $_DATAOFFICER of $_PROJECTNAME.</span>
                                </span>
                            </li>
                            </div>
                        </div>`}