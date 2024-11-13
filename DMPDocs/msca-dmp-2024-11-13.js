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
                    &ndash; $_PROJECTNAME will collect and/or generate the following types of raw data:
                    #if$_GENETIC genetic data, #endif$_GENETIC
                    #if$_GENOMIC genomic data, #endif$_GENOMIC
                    #if$_PANGENOMIC Pangenomic data, #endif$_PANGENOMIC
                    #if$_CLONED-DNA cloned DNA data, #endif$_CLONED-DNA
                    #if$_TRANSCRIPTOMIC transcriptomic data, #endif$_TRANSCRIPTOMIC
                    #if$_SPATIALTRANSCRIPTOMIC spatial transcriptomic data, #endif$_SPATIALTRANSCRIPTOMIC
#if$_SPATIALTRANSCRIPTOMIC spatial transcriptomic data, #endif$_SPATIALTRANSCRIPTOMIC


                    #if$_RNASEQ RNAseq data, #endif$_RNASEQ
#if$_SCRNASEQ single cell RNAseq data, #endif$_SCRNASEQ
                    #if$_METABOLOMIC Metabolomic data, #endif$_METABOLOMIC
                    #if$_PROTEOMIC proteomic data, #endif$_PROTEOMIC
                    #if$_PHENOTYPIC phenotypic data, #endif$_PHENOTYPIC
                    #if$_TARGETED targeted assays (e.g. glucose and fructose content), #endif$_TARGETED
                    #if$_IMAGE image datasets, #endif$_IMAGE
                    #if$_MODELS modelling data, #endif$_MODELS
                    #if$_CODE computational code, #endif$_CODE
                    #if$_EXCEL excel files, #endif$_EXCEL
                    which are related to $_STUDYOBJECT.

                    
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
                                <span class="c0">
                            Data will be made available via the $_PROJECTNAME platform or a public platform
                            using a user-friendly frontend that allows data visualization. Besides this it will be
                            ensured that data which can be
                            stored in international discipline related repositories which use specialized technologies:
                            
                                    <p class="c0">
                                #if$_GENETIC|$_GENOMIC|$_RNASEQ For genetic or genomic data: #if$_GENBANK NCBI-GenBank,
                                #endif$_GENBANK #if$_ENA EBI-ENA, #endif$_ENA #endif$_GENETIC|$_GENOMIC|$_RNASEQ
                                #if$_GENETIC #if$_SRA NCBI-SRA (Sequence Read Archive), #endif$_SRA #if$_ARRAYEXPRESS
                                EBI-ArrayExpress, #endif$_ARRAYEXPRESS
                                #if$_GEO NCBI-GEO (Gene Expression Omnibus), #endif$_GEO #endif$_GENETIC
                                #if$_GENETIC|$_GENOMIC|$_RNASEQ . #endif$_GENETIC|$_GENOMIC|$_RNASEQ
                        
                                    </span>
                                </p>
                                <p class="c0">
                                    <span class="c0  list-to-remove-comma">#if$_TRANSCRIPTOMIC For Transcriptomic data: #if$_SRA
                            NCBI-SRA (Sequence Read Archive), #endif$_SRA #if$_GEO NCBI-GEO (Gene Expression Omnibus),
                            #endif$_GEO #if$_ARRAYEXPRESS
                            EBI-ArrayExpress, #endif$_ARRAYEXPRESS . #endif$_TRANSCRIPTOMIC</span>
                                </p>
                                <p class="c0">
                                    <span class="c0 list-to-remove-comma">#if$_IMAGE For image data: #if$_BIOIMAGE EBI-BioImage
                            Archive, #endif$_BIOIMAGE #if$_IDR IDR (Image Data Resource), #endif$_IDR .
                            #endif$_IMAGE </span>
                                </p>
                                <p class="c0">
                                    <span class="c0 list-to-remove-comma">#if$_METABOLOMIC For metabolomic data: #if$_METABOLIGHTS
                            EBI-Metabolights, #endif$_METABOLIGHTS #if$_METAWORKBENCH Metabolomics
                            Workbench, #endif$_METAWORKBENCH #if$_INTACT IntAct (Molecular
                            interactions), #endif$_INTACT . #endif$_METABOLOMIC </span>
                                </p>
                                <p class="c0">
                                    <span class="c0 list-to-remove-comma">#if$_PROTEOMIC For proteomics data: #if$_PRIDE
                            EBI-PRIDE (PRoteomics IDEntifications Database), #endif$_PRIDE #if$_PDB PDB (Protein Data
                            Bank), #endif$_PDB
                            #if$_CHEBI Chebi (Chemical Entities of Biological Interest), #endif$_CHEBI .
                            #endif$_PROTEOMIC </span>
                                </p>
                                <p class="c0">
                                    <span class="c0 list-to-remove-comma">#if$_PHENOTYPIC For phenotypic data: #if$_EDAL e!DAL-PGP
                            (Plant
                            Genomics & Phenomics Research Data Repository), #endif$_EDAL . #endif$_PHENOTYPIC
                        </span>
                                </p>
                    #if$_OTHEREP $_OTHEREP will also be used to store data and the data will be
                    processed there as well. #endif$_OTHEREP


                
                            </span>
                       
                    </span>
                </li>
                <li class="c0 li-bullet-0">
                    <span class="c0">
                        <b>Interoperability of data/research outputs: Standards, formats
                        and vocabularies for data and metadata. </b>
                        <br> &ndash;

                    $_PROJECTNAME will rely
                    on community standards plus additional recommendations applicable in the plant science, such as the
                    
                            <span class="list-to-remove-comma">
                        the following metadata/ minimum information standards will be used to collect metadata:
                        #if$_GENOMIC|$_GENETIC|$_PANGENOMIC #if$_MIXS MIxS (Minimum Information about any (X) Sequence), #endif$_MIXS
                        #if$_MIGSEU MigsEu (Minimum Information about a Genome Sequence: Eucaryote), #endif$_MIGSEU
                        #if$_MIGSORG MigsOrg (Minimum Information about a Genome Sequence: Organelle), #endif$_MIGSORG
                        #if$_MIMS MIMS (Minimum Information about Metagenome or Environmental), #endif$_MIMS
                        #if$_MIMARKSSPECIMEN MIMARKSSpecimen (Minimal Information about a Marker Specimen:
                        Specimen), #endif$_MIMARKSSPECIMEN
                        #if$_MIMARKSSURVEY MIMARKSSurvey (Minimal Information about a Marker Specimen:
                        Survey), #endif$_MIMARKSSURVEY
                        #if$_MISAG MISAG (Minimum Information about a Single Amplified Genome), #endif$_MISAG
                        #if$_MIMAG MIMAG (Minimum Information about Metagenome-Assembled Genome), #endif$_MIMAG
                        #endif$_GENOMIC|$_GENETIC|$_PANGENOMIC
                        #if$_TRANSCRIPTOMIC
                        #if$_MINSEQE MINSEQE (Minimum Information about a high-throughput SEQuencing
                        Experiment), #endif$_MINSEQE #endif$_TRANSCRIPTOMIC
                        #if$_TRANSCRIPTOMIC #if$_MIAME MIAME (Minimum Information About a Microarray
                        Experiment), #endif$_MIAME #endif$_TRANSCRIPTOMIC
                        #if$_IMAGE
                        #if$_REMBI REMBI (Recommended Metadata for Biological Images), #endif$_REMBI
                        #endif$_IMAGE
                        #if$_RNASEQ|$_GENOMIC|$_SCRNASEQ

                        #if$_MINSEQE
                        MinSEQe (Minimum Information about a high-throughput Sequencing Experiment),
                        #endif$_MINSEQE
                        #endif$_RNASEQ|$_GENOMIC|$_SCRNASEQ

                        #if$_METABOLOMIC
                        #if$_MMIAMET
                        MIAMET (Minimum Information About a METabolomics experiment),
                                #endif$_MMIAMET
                                #endif$_METABOLOMIC
                                #if$_PROTEOMIC
                                #if$_MIAPE MIAPE (Minimum Information About a Proteomics Experiment), #endif$_MIAPE
                                #if$_MIMIX MIMix (The Minimum Information required for reporting a Molecular Interaction
                                Experiment), #endif$_MIMIX
                                #endif$_PROTEOMIC
                                #if$_PHENOTYPIC #if$_MIAPPE MIAPPE (Minimum Information about Plant Phenotyping Experiment)
                                #endif$_MIAPPE #endif$_PHENOTYPIC .
                            </span>
                                </span>
                                <span class="c0">#if$_METABOLOMIC #if$_METABOLIGHTS The Metabolights submission compliant standards are
                            used for metabolomic data. #issuewarning Some metabolomics partners considers Metabolights
                            not an accepted standard. #endissuewarning #endif$_METABOLIGHTS #endif$_METABOLOMIC These specific
                            standard unlike cross-domain minimal sets such as the Dublin core, which
                            mostly define the submitter and the general type of data, allow reusability by other researchers by
                            defining properties of the plant (see the preceding section). However, $_PROJECTNAME also implement
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
                    #if$_DATAPLANT DataPLANT offers opensource data curation tools such as the 
                                    <a target="_blank"
                        href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/arcitect/">ARC
                        management tool ARCitect </a>, command line tool 
                                    <a target="_blank"
                        href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/arc-commander/">ARCcommander
                    </a>, 
                                    <a target="_blank"
                        href="https://github.com/nfdi4plants/nfdi4plants_ontology">
                        DataPLANT Biological Ontology (DPBO)</a>, 
                                    <a target="_blank"
                        href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/swate/">metadata
                        annotation tool swate</a>, 
                                    <a target="_blank"
                        href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/resources/metadata-quiz/">the
                        Metadata Quiz</a> and 
                                    <a target="_blank"
                        href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/resources/dataplan/">DataPLAN
                        DMP generator</a>. #endif$_DATAPLANT

                
                                </span>
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