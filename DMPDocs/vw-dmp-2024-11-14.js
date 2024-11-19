


vw_dmp = { "vw-dmp" : `<div id="vw-dmp" class="">
    <div class="content-page" id="text_start">
    <p class="c4"><span class="c6">7 Fragen &ndash; Basis-Datenmanagementplan</span><sup class="c6"><a href="#ftnt1"
                id="ftnt_ref1">[1]</a></sup></p>
    <p class="c13"><span class="c5">Unter den Bedingungen einer Daten intensiven Wissenschaft sind Forschungsdaten heute
            mehr denn je Grundlage und Ergebnis wissenschaftlichen Arbeitens. Die Vielfalt solcher Daten &ndash;
            Rohdaten wie Messdaten, Laborwerte, audiovisueller Informationen, Texte, Umfragedaten etc.;
            Sekund&auml;rdaten wie Softwareergebnisse, Simulationen, Annotationen etc. &ndash; entspricht der Vielfalt
            unterschiedlicher Disziplinen, Verfahren und Erkenntnisinteressen. Die Sicherung von substanziellen und
            relevanten Forschungsdaten ist dabei oft ebenso wichtig f&uuml;r die Replizierbarkeit von Untersuchungen wie
            als Ausgangspunkt f&uuml;r neue Forschungsfragen. Die VolkswagenStiftung unterst&uuml;tzt ganz generell die
            m&ouml;glichst nachhaltige Speicherung und den m&ouml;glichst offenen &ndash; hierbei rechtliche Fragen
            ber&uuml;cksichtigend &ndash; Zugang von Forschungsdaten. </span></p>
    <table class="c15">
        <tr class="c10">
            <td class="c001 c9" colspan="1" rowspan="1">
                <p class="c1"><span class="c8 c7">(1) Welche bestehenden Daten/Kollektionen sollen im Projekt genutzt
                        werden? Sind diese Daten frei zug&auml;nglich oder sind hier Urheber- oder
                        Pers&ouml;nlichkeitsrechte zu ber&uuml;cksichtigen?</span></p>
            </td>
        </tr>
        <tr class="c10">
            <td class="c001" colspan="1" rowspan="1">
                <p class="c0"><span class="c1">#if$_EU Das $_PROJECTNAME ist Teil der Open Data Initiative (ODI) der EU.
                #endif$_EU Um optimal von offenen Daten zu profitieren, ist es notwendig, die Daten nicht nur zu
                speichern, sondern sie auch auffindbar, zugänglich, interoperabel und wiederverwendbar (FAIR) zu
                machen. #if$_PROTECT Wir unterstützen offene und FAIR-Daten, berücksichtigen jedoch auch die
                Notwendigkeit, einzelne Datensätze zu schützen. #endif$_PROTECT
            </span>
        </p>
                <p class="c0"><span class="c1">Das Projekt baut auf vorhandenen Datensätzen auf. Für die Daten des $_STUDYOBJECT werden vorhandene Datensätze sowie zusätzliche Charakterisierungen und Hintergrundwissen aus früheren Veröffentlichungen genutzt. Genomreferenzen können einfach aus Referenzdatenbanken für Genome/Sequenzen abgerufen werden, wie dem National Center for Biotechnology Information: NCBI (USA); Europäisches Bioinformatik-Institut: EBI (EU); DNA-Datenbank von Japan: DDBJ (JP).
            </span>
        </p>

        

            </td>
        </tr>
        <tr class="c10">
            <td class="c001 c9" colspan="1" rowspan="1">
                <p class="c1"><span class="c8 c7">(2) Welche Daten und Datentypen sollen im Projektverlauf generiert
                        werden? Welches Datenvolumen ist zu erwarten?</span></p>
            </td>
        </tr>
        <tr class="c10">
            <td class="c001" colspan="1" rowspan="1">
                <p class="c0">
                    <span class="c1">
                        Das $_PROJECTNAME wird die folgenden Arten von Rohdaten sammeln und/oder generieren:
                        #if$_GENETIC genetische Daten, #endif$_GENETIC  
                #if$_GENOMIC genomische Daten, 
                #if$_PANGENOMIC Pangenomische Daten, #endif$_PANGENOMIC #endif$_GENOMIC
                #if$_CLONED-DNA geklonte DNA Daten, #endif$_CLONED-DNA 
                #if$_TRANSCRIPTOMIC transkriptomische Daten, 
                #if$_SPATIALTRANSCRIPTOMIC räumliche Transkriptomik-Daten, #endif$_SPATIALTRANSCRIPTOMIC  #endif$_TRANSCRIPTOMIC
                #if$_RNASEQ RNA-Seq-Daten,  
                #if$_SCRNASEQ Einzelzell RNA-Seq-Daten, #endif$_SCRNASEQ #endif$_RNASEQ
 
                #if$_METABOLOMIC metabolomische Daten, #endif$_METABOLOMIC  
                #if$_PROTEOMIC proteomische Daten, #endif$_PROTEOMIC 
                #if$_PHENOTYPIC Pflanzenphänotypische Daten, #endif$_PHENOTYPIC  
                #if$_TARGETED gezielte Tests (z. B. Glukose- und Fruktosegehalt), #endif$_TARGETED  
                #if$_IMAGE Bilddatensätze, #endif$_IMAGE  
                #if$_MODELS Modellausgänge, #endif$_MODELS 
                #if$_CODE Rechencode, #endif$_CODE  
                #if$_EXCEL Excel-Daten, #endif$_EXCEL Daten, die sich auf $_STUDYOBJECT
                        beziehen. Zusätzlich werden die Rohdaten auch durch analytische Pipelines verarbeitet und
                        modifiziert, was zu unterschiedlichen Ergebnissen führen kann oder ad-hoc-Datenanalyse-Teile
                        umfassen kann. #if$_DATAPLANT Diese Pipelines werden im DataPLANT ARC
                        verfolgt. #endif$_DATAPLANT Daher wird darauf geachtet, diese Ressourcen (einschließlich der
                        analytischen Pipelines) zu dokumentieren und zu archivieren#if$_DATAPLANT unter Rückgriff
                        auf die Expertise im DataPLANT-Konsortium #endif$_DATAPLANT .
                    </span>
                </p>
                 #if$_PREVIOUSPROJECTS&nbsp;
                <p class="c0"><span class="c1"> Daten aus früheren Projekten wie $_PREVIOUSPROJECTS werden
                        berücksichtigt. </span></p>
                #endif$_PREVIOUSPROJECTS

                <p class="c0"><span class="c1">Wir erwarten die Erzeugung von $_RAWDATA GB Rohdaten und bis zu
                        $_DERIVEDDATA GB verarbeiteten Daten.</span></p>
                <p class="c0"><span class="c3"></span></p>
            </td>
        </tr>
        <tr class="c10">
            <td class="c001 c9" colspan="1" rowspan="1">
                <p class="c1"><span class="c8 c7">(3) Wie werden die Daten organisiert: Nach welchen Standards und
                        Formaten werden die Daten gespeichert? Welche Metadaten werden nach welchen Standards generiert
                        und in welchen Formaten werden sie gespeichert? Bekommen die Daten einen persistenten
                        Identifikator (PID), mit dem sie nachhaltig referenzierbar und zitierf&auml;hig sind?</span></p>
            </td>
        </tr>
        <tr class="c10">
            <td class="c001" colspan="1" rowspan="1">
                <p class="c0"><span class="c1">Öffentliche Daten werden wie im vorherigen Absatz beschrieben
                        extrahiert. Für das $_PROJECTNAME werden spezifische Datensätze von den Konsortialpartnern
                        generiert.</span></p>


                <p class="c0">
                    <span class="c1"> Daten unterschiedlicher Typen oder aus verschiedenen Bereichen werden mit
                        einzigartigen Ansätzen generiert. Zum Beispiel:</span>
                </p>
                <ul style="list-style-type:disc;">
                    
                    #if$_GENETIC&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Genetische Daten werden durch Kreuzungen und Zuchtexperimente
                                generiert und umfassen Rekombinationsfrequenzen und Crossover-Ereignisse, die
                                genetische Marker und quantitative Merkmalsloci positionieren können, die mit
                                physischen genomischen Markern/Varianten assoziiert werden können. </span>
                        </p>
                    </li>
                    #endif$_GENETIC

                                        #if$_GENOMIC&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Genomische Daten werden aus Sequenzdaten erstellt, die verarbeitet
                                werden, um Gene, regulatorische Elemente, transponierbare Elemente und physikalische
                                Marker wie SNPs, Mikrosatelliten und strukturelle Varianten zu identifizieren.
                            </span>
                        </p>
                    </li>
                    
                    #if$_PANGENOMIC&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Pangenomische Daten werden durch Sequenzierung der Genome mehrerer Individuen innerhalb einer Gruppe erhoben. Anschließend werden die Sequenzen zusammengefügt und ausgerichtet, um eine umfassende Genreferenz zu erstellen.
                            </span>
                        </p>
                    </li>
                    #endif$_PANGENOMIC
                    #endif$_GENOMIC
                    #if$_CLONED-DNA&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Der Ursprung und die Zusammenstellung der klonierten DNA umfassen (a)
                                die Quelle der ursprünglichen Vektorsequenz mit Add-Gene-Referenz, sofern verfügbar,
                                und die Quelle der Insert-DNA (z.B. Amplifikation durch PCR aus einer bestimmten
                                Probe oder aus einer vorhandenen Bibliothek), (b) die Klonierungsstrategie (z.B.
                                Restriktionsendonuklease-Verdau/Ligation, PCR, TOPO-Klonierung, Gibson-Assembly,
                                LR-Rekombination), und (c) die verifizierte DNA-Sequenz des finalen rekombinanten
                                Vektors.</span>
                        </p>
                    </li>
                    #endif$_CLONED-DNA

                    #if$_TRANSCRIPTOMIC&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Methoden zur Erfassung von Transkriptomik-Daten werden aus
                                Mikroarrays, quantitativer PCR, Northern Blotting, RNA-Immunpräzipitation und
                                Fluoreszenz-in-situ-Hybridisierung ausgewählt. RNA-Seq-Daten werden mit separaten
                                Methoden gesammelt.</span>
                        </p>
                    </li>
                    

                            #if$_SPATIALTRANSCRIPTOMIC&nbsp; 
                    <li>

                            <span class="c1">Räumliche Transkriptomikdaten werden mit Hilfe von Methoden gesammelt, die RNA-Moleküle räumlich ihren genauen Gewebestandorten zuordnen, wodurch die Erhaltung von RNA-Daten zusammen mit umfassenden Metadaten über ihre Herkunft gewährleistet wird. </span>

                    </li>
                    #endif$_SPATIALTRANSCRIPTOMIC&nbsp; 
                    #endif$_TRANSCRIPTOMIC
                    

                    #if$_RNASEQ&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> RNA-Sequenzierung wird unter Verwendung von Short-Read- oder
                                Long-Read-Plattformen entweder intern oder an akademische Einrichtungen oder
                                kommerzielle Dienste ausgelagert und die Rohdaten werden mit etablierten
                                bioinformatischen Pipelines verarbeitet. </span>
                        </p>
                    </li>
                   
                    #if$_SCRNASEQ&nbsp; 
                    <li>

                            <span class="c1"> Einzelzell-RNA-seq-Daten werden durch die Isolierung einzelner Zellen, die Extraktion und das Barcoding von RNA, die Vorbereitung von Sequenzierungsbibliotheken und die Erzeugung hochwertiger transkriptomischer Daten mit Hilfe von Plattformen wie Illumina gesammelt, wobei die Metadaten sorgfältig aufgezeichnet werden.</span>

                    </li>
                    #endif$_SCRNASEQ&nbsp;
                    #endif$_RNASEQ
                    #if$_METABOLOMIC&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Metabolomische Daten werden durch gekoppelte Chromatographie und
                                Massenspektrometrie unter Verwendung gezielter oder ungezielter Ansätze
                                generiert.</span>
                        </p>
                    </li>
                    #endif$_METABOLOMIC #if$_PROTEOMIC&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Proteomische Daten werden durch gekoppelte Chromatographie und
                                Massenspektrometrie zur Analyse der Proteinmenge und -identifikation sowie durch
                                zusätzliche Techniken zur Strukturanalyse, zur Identifizierung posttranslationaler
                                Modifikationen und zur Charakterisierung von Proteininteraktionen generiert.</span>
                        </p>
                    </li>
                    #endif$_PROTEOMIC

                    #if$_PHENOTYPIC&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Phänotypische Daten werden mit Hilfe von Phänotypisierungsplattformen
                                und entsprechenden Ontologien generiert, einschließlich Anzahl/Größe von Organen wie
                                Blätter, Blumen, Knospen usw., Größe der gesamten Pflanze,
                                Stängel/Wurzel-Architektur (Anzahl der seitlichen Zweige/Wurzeln usw.),
                                Organstrukturen/Morphologien, quantitativen Metriken wie Farbe, Turgor,
                                Gesundheits-/Nährstoffindikatoren und anderen. </span>
                        </p>
                    </li>
                    #endif$_PHENOTYPIC



                    #if$_TARGETED&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Gezielte Assays-Daten (z. B. Glukose- und Fruktosekonzentrationen oder
                                Produktions-/Nutzungsraten) werden mit spezifischen Geräten und Methoden generiert,
                                die im Laborbuch vollständig dokumentiert sind. </span>
                        </p>
                    </li>
                    #endif$_TARGETED

                    #if$_IMAGE&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Bilddaten werden durch Geräte wie Kameras, Scanner und Mikroskope in
                                Kombination mit Software generiert. Originalbilder, die Metadaten wie
                                EXIF-Fotoinformationen enthalten, werden archiviert.</span>
                        </p>
                    </li>
                    #endif$_IMAGE

                    #if$_MODELS&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Modelldaten werden durch Softwaresimulationen generiert. Der
                                vollständige Workflow, einschließlich der Umgebung, Laufzeit, Parameter und
                                Ergebnisse, wird dokumentiert und archiviert. </span>
                        </p>
                    </li>
                    #endif$_MODELS

                    #if$_CODE&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Computercode wird von Programmierern erstellt. </span>
                        </p>
                    </li>
                    #endif$_CODE

                    #if$_EXCEL&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Excel-Tabellen werden durch Ausfüllen spezifischer Dateien erstellt,
                                die Feldbeobachtungen oder andere digitale Erhebungen enthalten. </span>
                        </p>
                    </li>
                    #endif$_EXCEL

                    

                    
                </ul>
                 <p class="c0">
            <span class="c1">Wir verwenden die Investigation, Study, Assay (ISA) Spezifikation zur
                Metadaten-Erstellung. #if$_RNASEQ|$_GENOMIC
 Für spezifische Daten (z.B. RNASeq oder genomische
                Daten) verwenden wir Metadatentemplates der Endpunkt-Repositorien. </span><span
                class="c1">#if$_MINSEQE The Minimum Information About a Next-generation Sequencing Experiment
                (MinSEQe) wird ebenfalls verwendet. #endif$_MINSEQE #endif$_RNASEQ|$_GENOMIC
&nbsp;</span>
            <span class="c1">
                Die folgenden Metadaten-/Mindestinformationsstandards werden zur Sammlung von Metadaten verwendet:
                    <span class="list-to-remove-comma">
                    
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
                        #endif$_PROTEOMIC .
                        </span>

                #if$_METABOLOMIC #if$_METABOLIGHTS Metabolights-Einreichungskonforme Standards werden für
                metabolomische Daten verwendet, wo dies von den Konsortialpartnern akzeptiert wird.#issuewarning
                Einige Metabolomik-Partner betrachten Metabolights nicht als akzeptierten Standard.#endissuewarning
                #endif$_METABOLIGHTS #endif$_METABOLOMIC Als Teil der Pflanzenforschungsgemeinschaft verwenden wir
                #if$_MIAPPE MIAPPE für Phänotypisierungsdaten im weitesten Sinne, werden aber auch auf
                #endif$_MIAPPE spezifische SOPs für zusätzliche Annotationen #if$_DATAPLANT zurückgreifen, die
                fortgeschrittene DataPLANT-Annotationen und Ontologien berücksichtigen. #endif$_DATAPLANT


            </span>
        </p>
        <p class="c0"><span class="c1">
                In dem Fall, dass einige Metadaten noch fehlen, werden diese von den experimentellen
                Wissenschaftlern und dem Datenbeauftragten dokumentiert. #if$_DATAPLANT Rohdaten-Identifier und
                Parser, die von DataPLANT bereitgestellt werden, um
                Metadaten direkt aus der Rohdatei zu extrahieren. Die aus der Rohdatei gesammelten Metadaten können
                auch verwendet werden, um die zuvor gesammelten Metadaten zu validieren, falls Fehler auftreten.
                #endif$_DATAPLANT Wir sehen vor, #if$_RNASEQ|$_GENOMIC
 z.B.#if$_MINSEQE MinSEQe für
                Sequenzierungsdaten zu verwenden und #endif$_MINSEQE #endif$_RNASEQ|$_GENOMIC
 Metabolights-kompatible
                Formulare für Metaboliten sowie MIAPPE für phänotypische Daten.
                Letzteres ermöglicht die Integration von Daten über Projekte hinweg und stellt sicher, dass
                etablierte und getestete Protokolle wiederverwendet werden. Darüber hinaus werden wir
                Ontologiebegriffe verwenden, um die Datensätze mit freien und offenen Ontologien anzureichern.
                Zusätzlich könnten zusätzliche Ontologiebegriffe erstellt und während des $_PROJECTNAME kanonisiert
                werden. #if$_DATAPLANT
                DataPLANT bietet Open-Source-Datenkurationswerkzeuge wie das <a target="_blank" href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/arcitect/">ARC-Verwaltungstool ARCitect</a>, das Kommandozeilentool <a target="_blank" href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/arc-commander/">ARCcommander</a>, die <a target="_blank" href="https://github.com/nfdi4plants/nfdi4plants_ontology">DataPLANT Biological Ontology (DPBO)</a>, das <a target="_blank" href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/swate/">Metadaten-Annotationstool Swate</a>, das <a target="_blank" href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/resources/metadata-quiz/">Metadata Quiz</a> und den <a target="_blank" href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/resources/dataplan/">DataPLAN DMP-Generator</a> an.
                #endif$_DATAPLANT</span></p>

            </td>
        </tr>
        <tr class="c10">
            <td class="c001 c9" colspan="1" rowspan="1">
                <p class="c1"><span class="c7 c8">(4) Wie sind die Verwertungs- und Nutzungsrechte (z.B. durch Vergabe
                        von Lizenzen) &ndash; sowohl im Projektverlauf zwischen den einzelnen in kollaborativen
                        Projekten beteiligten Personen als auch nach Projektende f&uuml;r die Wissenschaft &ndash;
                        geregelt?</span></p>
            </td>
        </tr>
        <tr class="c10">
            <td class="c001" colspan="1" rowspan="1">
                <span class="c1">
                Wo möglich, z.B. CC REL wird für Daten verwendet, die nicht an spezialisierte Repositorien übermittelt werden
                wie ENA.
            </span>
            <p class="c0">
            <span class="c1">
                Falls Daten nur innerhalb des Konsortiums geteilt werden, wenn die Daten noch nicht fertig sind oder unter IP stehen
                Bei der Überprüfung werden die Daten intern gehostet und es sind Benutzername und Passwort erforderlich (siehe auch unsere DSGVO).
                Regeln). In dem Fall werden die Daten unter endgültigen EU- oder US-Repositorien veröffentlicht, völlig anonym
                Der Zutritt ist normalerweise gestattet. Dies gilt auch für ENA und beide stehen im Einklang mit der DSGVO
                Anforderungen.
                #if$_DATAPLANT Derzeit basiert die Datenverwaltung auf dem annotierten Forschungskontext ARC. Es ist
                Passwortgeschützt, sodass vor dem Abrufen von Daten oder der Generierung von Proben eine Authentifizierung erforderlich ist
                stattfinden. #endif$_DATAPLANT

            </span>
        </p>
            </td>
        </tr>
        <tr class="c10">
            <td class="c001 c9" colspan="1" rowspan="1">
                <p class="c1"><span class="c8 c7">(5) In welchen Repositorien und wie lange sollen die im Projekt
                        generierten Daten und Metadaten nach Projektende gespeichert und zug&auml;nglich sein?</span>
                </p>
            </td>
        </tr>
        <tr class="c10">
            <td class="c001" colspan="1" rowspan="1">
              <p class="c0">
                    #if$_DATAPLANT Da das $_PROJECTNAME eng mit DataPLANT abgestimmt ist, werden der ARC-Konverter und
                    DataHUB verwendet, um die Endpunkt-Repositories zu finden und die Daten automatisch in die
                    Repositories hochzuladen. #endif$_DATAPLANT

                    <span class="c1"> </span>
                </p>
                <p class="c0">
                    <span class="c1">
                        Die Daten werden über die $_PROJECTNAME-Plattform mit einer benutzerfreundlichen Oberfläche
                        verfügbar gemacht, die eine Datenvisualisierung ermöglicht. Die Endpunkt-Repositories sind:
                        #if$_GENETIC #if$_GENBANK NCBI-GenBank, #endif$_GENBANK
                        #if$_ENA EBI-ENA, #endif$_ENA #if$_ARRAYEXPRESS EBI-ArrayExpress, #endif$_ARRAYEXPRESS
                        #endif$_GENETIC #if$_TRANSCRIPTOMIC|$_GENETIC #if$_SRA NCBI-SRA, #endif$_SRA #if$_GEO
                        NCBI-GEO, #endif$_GEO #endif$_TRANSCRIPTOMIC|$_GENETIC #if$_TRANSCRIPTOMIC #if$_ARRAYEXPRESS
                        EBI-ArrayExpress, #endif$_ARRAYEXPRESS #endif$_TRANSCRIPTOMIC #if$_IMAGE #if$_BIOIMAGE
                        EBI-BioImage Archive, #endif$_BIOIMAGE #if$_IDR IDR, #endif$_IDR
                        #endif$_IMAGE #if$_METABOLOMIC #if$_METABOLIGHTS EBI-MetaboLights, #endif$_METABOLIGHTS
                        #if$_METAWORKBENCH Metabolomics Workbench, #endif$_METAWORKBENCH #if$_INTACT IntAct
                        (Molecular interactions) #endif$_INTACT #endif$_METABOLOMIC #if$_PROTEOMIC #if$_PRIDE
                        EBI-PRIDE, #endif$_PRIDE #if$_PDB PDB, #endif$_PDB #if$_CHEBI
                        Chebi, #endif$_CHEBI #endif$_PROTEOMIC #if$_PHENOTYPIC #if$_EDAL e!DAL-PGP,
                        #endif$_EDAL #endif$_PHENOTYPIC.

                        #if$_OTHEREP und $_OTHEREP werden auch verwendet, um Daten zu speichern und die Daten werden
                        dort ebenfalls verarbeitet. #endif$_OTHEREP

                    </span>
                </p>
                <p class="c0">
                    <span class="c1">
                        Die Einreichung ist kostenlos, und es ist das Ziel (zumindest von ENA), so viele Daten wie
                        möglich zu erhalten. Daher sind Absprachen weder notwendig noch sinnvoll.
                        Catch-all-Repositories sind nicht erforderlich.
                        #if$_DATAPLANT Für DataPLANT wurde dies vereinbart. #endif$_DATAPLANT #issuewarning Wenn
                        keine Datenmanagementplattform wie DataPLANT verwendet wird, müssen Sie ein geeignetes
                        Repository finden, um Ihre Daten nach der Veröffentlichung zu speichern oder zu archivieren.
                        #endissuewarning

                    </span>
                </p>
            </td>
        </tr>
        <tr class="c10">
            <td class="c001 c9" colspan="1" rowspan="1">
                <p class="c1"><span class="c8 c7">(6) Wer ist im Projekt f&uuml;r den ad&auml;quaten Umgang mit den
                        Forschungsdaten verantwortlich? Bitte Angabe der verantwortlichen Person.</span></p>
            </td>
        </tr>
        <tr class="c10">
            <td class="c001" colspan="1" rowspan="1">
                <p class="c0"><span class="c1"><b>Projektkoordinator</b>: #if$_PROJECTCOORDINATOR $_ADDPROJECTCOORDINATOR #endif$_PROJECTCOORDINATOR &nbsp;</span></p>
        <p class="c0"><span class="c1"><b>Kontaktperson Datenmanagement</b>: $_DATAOFFICER&nbsp;</span></p>
         <p class="c0"><span class="c1"><b>Kontakt</b>: $_EMAIL&nbsp;</span></p>
            </td>
        </tr>
        <tr class="c10">
            <td class="c001 c9" colspan="1" rowspan="1">
                <p class="c1"><span class="c8 c7">(7) Ab wann sollen die Daten der Wissenschaft unter welcher Lizenz zur
                        Verf&uuml;gung stehen?</span></p>
            </td>
        </tr>
        <tr class="c10">
            <td class="c001" colspan="1" rowspan="1">
                 <p class="c20">
                    <span class="c1">
                        Falls Daten nur innerhalb des Konsortiums geteilt werden, wenn die Daten noch nicht fertig
                        sind oder sich in der IP-Prüfung befinden, werden die Daten intern gehostet und der
                        Benutzername und das Passwort werden benötigt (siehe auch unsere GDPR-Regeln).
                        Wenn Daten unter finalen EU- oder US-Repositorys öffentlich gemacht werden, ist
                        normalerweise ein vollständig anonymer Zugang erlaubt. Dies ist auch bei ENA der Fall und
                        beide entsprechen den GDPR-Anforderungen.

                    </span>
                </p>
                <p class="c0">
                    <span class="c1">Es wird keine Einschränkungen geben, sobald die Daten öffentlich gemacht
                        werden.</span>
                    <span class="c1">
                        #if$_EARLY Einige Rohdaten werden sofort nach ihrer Erfassung und Verarbeitung öffentlich
                        gemacht. #endif$_EARLY #if$_BEFOREPUBLICATION Relevante verarbeitete Datensätze werden
                        öffentlich gemacht, wenn die Forschungsergebnisse veröffentlicht
                        werden. #endif$_BEFOREPUBLICATION #if$_ENDOFPROJECT Am Ende des Projekts werden alle Daten
                        ohne Sperrfrist veröffentlicht. #endif$_ENDOFPROJECT #if$_EMBARGO Daten, die einer Sperrfrist
                        unterliegen, sind bis zum Ende der Sperrfrist nicht öffentlich zugänglich. #endif$_EMBARGO
                        #if$_REQUEST Daten werden auf Anfrage verfügbar gemacht, was eine kontrollierte Weitergabe
                        ermöglicht und gleichzeitig eine verantwortungsvolle Nutzung sicherstellt. #endif$_REQUEST
                        #if$_IPISSUE IP-Probleme werden vor der Veröffentlichung überprüft. #endif$_IPISSUE Alle
                        Konsortialpartner werden ermutigt,
                        Daten vor der Veröffentlichung zugänglich zu machen, offen und/oder unter
                        Vorveröffentlichungsvereinbarungen #if$_GENOMIC wie die in Fort Lauderdale gestarteten und
                        durch den Toronto International Data Release Workshop festgelegten Vereinbarungen
                        #endif$_GENOMIC . Dies wird umgesetzt, sobald die IP-bezogenen Überprüfungen abgeschlossen
                        sind.
                    </span>
                </p>


                <p class="c0">
                    <span class="c1">
                        Die Daten werden zunächst den $_PROJECTNAME Partnern zugutekommen, aber auch ausgewählten
                        Stakeholdern, die eng in das Projekt eingebunden sind, und dann der wissenschaftlichen
                        Gemeinschaft, die an $_STUDYOBJECT arbeitet. $_DATAUTILITY Darüber hinaus können auch die
                        allgemeine Öffentlichkeit, die an $_STUDYOBJECT interessiert ist, die Daten nach der
                        Veröffentlichung nutzen. Die Daten werden gemäß dem Verbreitungs- und Kommunikationsplan des
                        $_PROJECTNAME verbreitet, #if$_DATAPLANT der sich mit der DataPLANT-Plattform oder anderen
                        Mitteln abstimmt #endif$_DATAPLANT.

                    </span>
                </p>
            </td>
        </tr>
    </table>
    <p class="c4 c2"><span class="c5"></span></p>
    <hr class="c12">
    <div>
        <p class="c14"><a href="#ftnt_ref1" id="ftnt1">[1]</a><span class="c3">&nbsp;Wenn Sie in Ihrem Projekt Daten
                generieren wollen, aber noch nicht wissen, in welchem Repositorium Sie ihre Daten speichern wollen,
                nutzen Sie bitte diesen Basis-Datenmanagementplan. Ansonsten nutzen Sie den Datenmanagementplan des
                Zielrepositoriums.</span></p>
    </div></div>
</div>` };