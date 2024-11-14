BBSRC_dmp = {"BBSRC-dmp" : `<div id="BBSRC-dmp" class="">
    <div class="content-page" id="text_start">
        <span class="c2">Data management plan of $_PROJECTNAME for BBSRC</span>
        <ul class="c0 ">

            <li class="c0 li-bullet-0"><span class="c0">Data Areas and Data Types <br> &ndash; $_PROJECTNAME will collect
                    and/or generate the following types of raw data: #if$_GENETIC genetic data, #endif$_GENETIC  
                    #if$_GENOMIC genomic data, 
                    #if$_PANGENOMIC Pangenomic data, #endif$_PANGENOMIC 
                    #endif$_GENOMIC
                    #if$_CLONED-DNA cloned DNA data, #endif$_CLONED-DNA 
                    #if$_TRANSCRIPTOMIC transcriptomic data,
                    #if$_SPATIALTRANSCRIPTOMIC spatial transcriptomic data, #endif$_SPATIALTRANSCRIPTOMIC
                     #endif$_TRANSCRIPTOMIC
                    #if$_RNASEQ RNAseq data, 
                    #if$_SCRNASEQ single cell RNAseq data, #endif$_SCRNASEQ 
                    #endif$_RNASEQ
                    #if$_METABOLOMIC Metabolomic data, #endif$_METABOLOMIC  
                    #if$_PROTEOMIC proteomic data, #endif$_PROTEOMIC 
                    #if$_PHENOTYPIC phenotypic data, #endif$_PHENOTYPIC  
                    #if$_TARGETED targeted assays (e.g. glucose and fructose content), #endif$_TARGETED  
                    #if$_IMAGE image datasets, #endif$_IMAGE  
                    #if$_MODELS modelling data, #endif$_MODELS 
                    #if$_CODE computational code, #endif$_CODE  
                    #if$_EXCEL excel files, #endif$_EXCEL
                    which are related to $_STUDYOBJECT. In addition, the raw data will also be processed and
                    modified using analytical pipelines, which may yield different results or include ad hoc data
                    analysis parts. #if$_DATAPLANT These pipelines will be tracked in the DataPLANT
                    ARC. #endif$_DATAPLANT Therefore, care will be taken to document and archive these resources
                    (including the analytical pipelines) as well#if$_DATAPLANT relying on the expertise in the
                    DataPLANT consortium #endif$_DATAPLANT. </span></li>

            <span class="c0">We expect to generate raw data in the range of $_RAWDATA GB of data. The size of the
                derived data will be about $_DERIVEDDATA GB.</span>
            <p class="c0"><span class="c0"></span></p>
            <li class="c0 li-bullet-0"><span class="c0">Standards and Metadata <br> &ndash;&nbsp;                <span class="c1">
                All datasets will be associated with unique identifiers and will be annotated with metadata. We will
                use Investigation, Study, Assay (ISA) specification for metadata creation. $_PROJECTNAME will rely
                on community standards plus additional recommendations applicable in the plant science, such as the
                <span class="list-to-remove-comma">
                    The following metadata/ minimum information standards will be used to collect metadata:
                    #if$_GENOMIC|$_GENETIC #if$_MIXS MIxS (Minimum Information about any (X) Sequence), #endif$_MIXS
                    #if$_MIGSEU MigsEu (Minimum Information about a Genome Sequence: Eucaryote), #endif$_MIGSEU
                    #if$_MIGSORG MigsOrg (Minimum Information about a Genome Sequence: Organelle), #endif$_MIGSORG
                    #if$_MIMS MIMS (Minimum Information about Metagenome or Environmental), #endif$_MIMS
                    #if$_MIMARKSSPECIMEN MIMARKSSpecimen (Minimal Information about a Marker Specimen:
                    Specimen), #endif$_MIMARKSSPECIMEN
                    #if$_MIMARKSSURVEY MIMARKSSurvey (Minimal Information about a Marker Specimen:
                    Survey), #endif$_MIMARKSSURVEY
                    #if$_MISAG MISAG (Minimum Information about a Single Amplified Genome), #endif$_MISAG
                    #if$_MIMAG MIMAG (Minimum Information about Metagenome-Assembled Genome), #endif$_MIMAG
                    #endif$_GENOMIC|$_GENETIC
                    #if$_TRANSCRIPTOMIC
                    #if$_MINSEQE MINSEQE (Minimum Information about a high-throughput SEQuencing
                    Experiment), #endif$_MINSEQE 
                     #if$_MIAME MIAME (Minimum Information About a Microarray
                    Experiment), #endif$_MIAME #endif$_TRANSCRIPTOMIC
                    #if$_IMAGE
                    #if$_REMBI REMBI (Recommended Metadata for Biological Images), #endif$_REMBI
                    #endif$_IMAGE
                    #if$_RNASEQ|$_GENOMIC
                    #if$_MINSEQE
                        MinSEQe (Minimum Information about a high-throughput Sequencing Experiment),
                    #endif$_MINSEQE 
                    #endif$_RNASEQ|$_GENOMIC

                    #if$_METABOLOMIC
                    #if$_MMIAMET
                    MIAMET (Minimum Information About a METabolomics experiment),
                    #endif$_MMIAMET
                    #endif$_METABOLOMIC
                    #if$_PROTEOMIC
                    #if$_MIAPE MIAPE (Minimum Information About a Proteomics Experiment), #endif$_MIAPE
                    #if$_MIMIX MIMix (The Minimum Information required for reporting a Molecular Interaction Experiment), #endif$_MIMIX
                    #endif$_PROTEOMIC 
                    #if$_PHENOTYPIC #if$_MIAPPE MIAPPE (Minimum Information about Plant Phenotyping Experiment) #endif$_MIAPPE  #endif$_PHENOTYPIC .
                    </span>
            </span>
            <span class="c1">#if$_METABOLOMIC #if$_METABOLIGHTS The Metabolights submission compliant standards are used for metabolomic data. #issuewarning Some metabolomics partners considers Metabolights
                not an accepted standard. #endissuewarning #endif$_METABOLIGHTS #endif$_METABOLOMIC These specific standard unlike cross-domain minimal sets such as the Dublin core, which
                mostly define the submitter and the general type of data, allow reusability by other researchers by
                defining properties of the plant (see the preceding section). However, $_PROJECTNAME also implement minimal cross-domain annotations #if$_DUBLINCORE|$_DARWINCORE|$_BIOSCHEMAS|$_SCHEMAORG|$_MARC21 such as #endif$_DUBLINCORE|$_DARWINCORE|$_BIOSCHEMAS|$_SCHEMAORG|$_MARC21 <span class="list-to-remove-comma"> #if$_DUBLINCORE Dublin Core, #endif$_DUBLINCORE #if$_DARWINCORE Darwin Core, #endif$_DARWINCORE #if$_SCHEMAORG Schema.org, #endif$_SCHEMAORG #if$_BIOSCHEMAS BioSchemas, #endif$_BIOSCHEMAS #if$_MARC21 MARC 21 #endif$_MARC21 . </span> #if$_DATAPLANT The core integration with DataPLANT will also allow
                individual releases to be tagged with a Digital Object Identifier (DOI).
                #endif$_DATAPLANT #if$_OTHERSTANDARDS Other standards such as $_OTHERSTANDARDINPUT are also adhered
                to. #endif$_OTHERSTANDARDS
            </span>

                </span>
            </li>
            <li class="c0 li-bullet-0"><span class="c0">Reuse of published data <br> &ndash; The project builds on
                    existing data sets and relies on them. #if$_RNASEQ For example, without a proper genomic
                    reference it is very difficult to analyze next-generation sequencing (NGS) data
                    sets. #endif$_RNASEQ It is also important to include existing data-sets on the expression and
                    metabolic behavior of the $_STUDYOBJECT, and on existing background knowledge. #if$_PARTNERS of
                    the partners: $_PARTNERS #endif$_PARTNERS Genomic references can be gathered from reference databases for
                    genomes/ and sequences, like the NCBI (US National Center for Biotechnology Information),
                    EBI (European Bioinformatics Institute) and DDBJ (DNA Data Bank of Japan). Furthermore, prior
                    &#39;unstructured&#39; data in the form of publications and data contained therein will be used
                    for decision making.</span></li>
        </ul>
        <p class="c0 c0"><span class="c0"></span></p>
        <ul class="c0 ">
            <li class="c0 li-bullet-0"><span class="c0">Secondary Use <br> &ndash; The data will not only initially benefit the
                    $_PROJECTNAME partners, but will also be made available to selected stakeholders closely involved in
                    the project, and then the scientific community working on $_STUDYOBJECT. $_DATAUTILITY In
                    addition, the general public interested in $_STUDYOBJECT can also use the data after
                    publication. The data will be disseminated according to $_PROJECTNAME&#39;s dissemination and
                    communication plan, #if$_DATAPLANT which aligns with DataPLANT platform or other means #endif$_DATAPLANT.</span></li>

            <li class="c0 li-bullet-0"><span class="c0">Methods for Data Sharing  <p class="c0">
                        <span class="c1">
                            &ndash; Data will be made available via the $_PROJECTNAME platform or a public platform using a user-friendly frontend
                            that allows data visualization. Besides this it will be ensured that data which can be
                            stored in
                            international discipline related repositories which use specialized technologies:
                        


                            <p class="c0">
                                <span class="c1 list-to-remove-comma"> #if$_GENETIC|$_GENOMIC|$_RNASEQ For genetic or genomic data: #if$_GENBANK NCBI-GenBank, #endif$_GENBANK #if$_ENA EBI-ENA, #endif$_ENA #endif$_GENETIC|$_GENOMIC|$_RNASEQ #if$_GENETIC #if$_SRA NCBI-SRA (Sequence Read Archive), #endif$_SRA #if$_ARRAYEXPRESS EBI-ArrayExpress, #endif$_ARRAYEXPRESS
                                    #if$_GEO NCBI-GEO (Gene Expression Omnibus), #endif$_GEO #endif$_GENETIC #if$_GENETIC|$_GENOMIC|$_RNASEQ . #endif$_GENETIC|$_GENOMIC|$_RNASEQ </span>
                            </p>

                            <p class="c0">
                                <span class="c1  list-to-remove-comma">#if$_TRANSCRIPTOMIC For Transcriptomic data: #if$_SRA
                                    NCBI-SRA (Sequence Read Archive), #endif$_SRA #if$_GEO NCBI-GEO (Gene Expression Omnibus), #endif$_GEO #if$_ARRAYEXPRESS
                                    EBI-ArrayExpress, #endif$_ARRAYEXPRESS . #endif$_TRANSCRIPTOMIC$_SPATIALTRANSCRIPTOMIC</span>
                            </p>

                            <p class="c0">
                                <span class="c1 list-to-remove-comma">#if$_IMAGE For image data: #if$_BIOIMAGE EBI-BioImage
                                    Archive, #endif$_BIOIMAGE #if$_IDR IDR (Image Data Resource), #endif$_IDR .
                                    #endif$_IMAGE </span>
                            </p>

                            <p class="c0">
                                <span class="c1 list-to-remove-comma">#if$_METABOLOMIC For metabolomic data: #if$_METABOLIGHTS
                                    EBI-Metabolights, #endif$_METABOLIGHTS #if$_METAWORKBENCH Metabolomics
                                    Workbench, #endif$_METAWORKBENCH #if$_INTACT IntAct (Molecular
                                    interactions), #endif$_INTACT . #endif$_METABOLOMIC </span>
                            </p>
                            <p class="c0">
                                <span class="c1 list-to-remove-comma">#if$_PROTEOMIC For proteomics data: #if$_PRIDE
                                    EBI-PRIDE (PRoteomics IDEntifications Database), #endif$_PRIDE #if$_PDB PDB (Protein Data Bank), #endif$_PDB
                                    #if$_CHEBI Chebi (Chemical Entities of Biological Interest), #endif$_CHEBI .
                                    #endif$_PROTEOMIC </span>
                            </p>

                            <p class="c0">
                                <span class="c1 list-to-remove-comma">#if$_PHENOTYPIC For phenotypic data: #if$_EDAL e!DAL-PGP (Plant
                                    Genomics & Phenomics Research Data Repository), #endif$_EDAL . #endif$_PHENOTYPIC
                                </span>
                            </p>
                            #if$_OTHEREP $_OTHEREP will also be used to store data and the data will be
                            processed there as well. #endif$_OTHEREP

                            #if$_DATAPLANT DataPLANT offers opensource data curation tools such as the <a target="_blank" href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/arcitect/">ARC management tool ARCitect </a>, command line tool <a target="_blank" href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/arc-commander/">ARCcommander </a>, <a target="_blank" href="https://github.com/nfdi4plants/nfdi4plants_ontology"> DataPLANT Biological Ontology (DPBO)</a>, <a target="_blank" href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/swate/">metadata annotation tool swate</a>, <a target="_blank" href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/resources/metadata-quiz/">the Metadata Quiz</a> and <a target="_blank" href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/resources/dataplan/">DataPLAN DMP generator</a>. #endif$_DATAPLANT
                        </span>
                    </p></span></li> <li class="c0 li-bullet-0"><span class="c0">Proprietary Data <br> &ndash; Open public
                data will be used whenever possible. </span></li>
            <li class="c0 li-bullet-0"><span class="c0">Timeframes <br>
                    &ndash; #if$_EARLY Some raw data is made public as soon as it is collected and processed. #endif$_EARLY
                    #if$_BEFOREPUBLICATION Relevant processed datasets are made public when the research findings
                    are published. #endif$_BEFOREPUBLICATION #if$_ENDOFPROJECT At the end of the project, all data
                    without embargo period will be published. #endif$_ENDOFPROJECT #if$_EMBARGO Data, which is
                    subject to an embargo period, is not publicly accessible until the end of embargo
                    period. #endif$_EMBARGO #if$_REQUEST Data is made available upon request, allowing controlled
                    sharing while ensuring responsible use. #endif$_REQUEST #if$_IPISSUE IP issues will be checked
                    before publication. #endif$_IPISSUE All consortium partners will be
                    encouraged to make data available before publication, openly and/or under pre-publication
                    agreements #if$_GENOMIC such as those started in Fort Lauderdale and set forth by the Toronto
                    International Data
                    Release Workshop #endif$_GENOMIC . This will be implemented as soon as IP-related checks are
                    complete.
                </span></li>
            <li class="c0 li-bullet-0"><span class="c0">Format of the Final Dataset <br> &ndash; Whenever possible, data
                    will be stored in common and openly defined formats including all the necessary metadata. By
                    default, no proprietary formats will be used. However, Microsoft Excel files (according to
                    ISO/IEC 29500-1:2016) might be used as intermediates by the consortium#if$_DATAPLANT and by some
                    Annotated Research Context (ARC) components#endif$_DATAPLANT. In addition, text files might be edited in text processor
                    files, but will be shared as pdf.</span>
    </div>
</div>`}