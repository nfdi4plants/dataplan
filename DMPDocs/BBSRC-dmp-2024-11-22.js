BBSRC_dmp = {"BBSRC-dmp" : `<div id="BBSRC-dmp" class="">
    <div class="content-page" id="text_start">
        <span class="c2">Data management plan of $_PROJECTNAME for BBSRC</span>
        <ul class="c0 ">

            <li class="c0 li-bullet-0"><span class="c0">Data Areas and Data Types <br> &ndash; list-dataCollection-en </span></li>

            <span class="c0">We expect to generate raw data in the range of $_RAWDATA GB of data. The size of the
                derived data will be about $_DERIVEDDATA GB.</span>
            <p class="c0"><span class="c0"></span></p>
            <li class="c0 li-bullet-0"><span class="c0">Standards and Metadata <br> &ndash;&nbsp;                
           text-standards-long-en

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
            <li class="c0 li-bullet-0"><span class="c0">Secondary Use <br> &ndash; The data will not only initially benefit the
                    $_PROJECTNAME partners, but will also be made available to selected stakeholders closely involved in
                    the project, and then the scientific community working on $_STUDYOBJECT. $_DATAUTILITY In
                    addition, the general public interested in $_STUDYOBJECT can also use the data after
                    publication. The data will be disseminated according to $_PROJECTNAME&#39;s dissemination and
                    communication plan, #if$_DATAPLANT which aligns with DataPLANT platform or other means #endif$_DATAPLANT.</span></li>

            <li class="c0 li-bullet-0"><span class="c0">Methods for Data Sharing  <p class="c0">
                        <span class="c1">
                        text-repository-long-en
                        text-dataplant-tools-en
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
                    files, but will be shared as pdf.</span></li>
    </div>
</div>`}