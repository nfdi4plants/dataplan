bmbf_dmp = { "bmbf-dmp" : `<div id="bmbf-dmp" class="">
    <div  class="content-page" id="text_start">
        <h1 class="text-center">
            <p class="text-center h1">
                <center>Datenmanagementplan für BMBF</center>
            </p>
        </h1>
        <p class="c0"><span class="c3"><b>Projektname: $_PROJECTNAME&nbsp;</b></span></p>
        <p class="c0"><span class="c3"><b>Forschungsf&ouml;rderer</b>: Bundesministerium f&uuml;r Bildung und
                Forschung</span></p>
        <p class="c0"><span class="c3"><b>F&ouml;rderprogramm:</b> $_FUNDINGPROGRAMME&nbsp;</span></p>
        <p class="c0"><span class="c3"><b>FKZ: $_DMPVERSION&nbsp;</b></span></p>

        <p class="c0"><span class="c3"><b>Projektkoordinator</b>: #if$_PROJECTCOORDINATOR $_ADDPROJECTCOORDINATOR #endif$_PROJECTCOORDINATOR &nbsp; #if!$_PROJECTCOORDINATOR $_DATAOFFICER #endif!$_PROJECTCOORDINATOR</span></p>
        <p class="c0"><span class="c3"><b>Kontaktperson Datenmanagement</b>: $_DATAOFFICER&nbsp;</span></p>

        <p class="c0"><span class="c3"><b>Kontakt</b>: $_EMAIL&nbsp;</span></p>
        <p class="c0"><span class="c3"><b>Projektbeschreibung</b>:


                <p class="c0"> <span class="c1">
                        Das $_PROJECTNAME hat folgendes Ziel: $_PROJECTAIM. Um dieses Ziel zu erreichen, sind Datenerhebung #if!$_VVISUALIZATION und -integration #endif!$_VVISUALIZATION #if$_VVISUALIZATION , -integration und -visualisierung
                        #endif$_VVISUALIZATION #if$_DATAPLANT unter Verwendung eines standardisierten Datenmanagementsystems wie der DataPLANT ARC-Struktur absolut
                        notwendig #endif$_DATAPLANT #if!$_DATAPLANT durch einen standardisierten
                        Datenmanagementprozess absolut notwendig #endif!$_DATAPLANT. Das strukturierte Datenmanagement ist nicht nur essentiell, um die Daten zur Aufdeckung von Mechanismen verwenden zu können, sondern auch um über die Herkunft der analysierten
                        Daten zu informieren. Die Erhebung der Daten und Beschreibung mit Metadaten wird unter Verwendung offener Standards durchgeführt, wie im nächsten Abschnitt dargelegt.

                    </span></p>

                <p class="c0">
                    <span class="c1">
                        list-dataCollection-de
                    </span>
                </p>
            </span></p>
        <p class="c0 c2"><span class="c1"></span></p>
        <p class="c0"><span class="c3"><b>Erstellungsdatum:</b> $_CREATIONDATE&nbsp; </span></p>
        <p class="c0"><span class="c3"><b>&Auml;nderungsdatum:</b> $_MODIFICATIONDATE&nbsp;</span></p>
        <p class="c0"><span class="c3"><b>Zu beachtende Vorgaben:</b> </span></p>

        <p class="c0"><span class="c1"> basicInfo-isEu-de text-not-only-but-fair-de basicInfo-isProtected-de
            </span>
        </p>
        <p class="c0"><span class="c1">#if$_DATAPLANT Durch die Implementierung von DataPLANT können Forscher
                sicherstellen, dass alle relevanten Richtlinien und Anforderungen im Zusammenhang mit dem
                Datenmanagement eingehalten werden, was zu einer höheren Qualität und Zuverlässigkeit der
                Forschungsdaten führt. #endif$_DATAPLANT&nbsp; </span>
        </p>



        <p class="c0 c2"><span class="c3"><b>Datenerhebung</b></span></p>

        <p class="c0 c2"><span class="c1">
                <p class="c0"><span class="c1">Für das $_PROJECTNAME werden öffentliche Daten genutzt und spezifische Datensätze von den Konsortialpartnern
                        generiert.</span></p>


                <p class="c0">
                    <span class="c1"> Diese umfassen Daten unterschiedlicher Typen, aus verschiedenen Bereichen und werden mit
                        spezifischen Ansätzen generiert, zum Beispiel:</span>
                </p>
                list-dataType-de

                #if$_PREVIOUSPROJECTS&nbsp;
                <p class="c0"><span class="c1"> Daten aus früheren Projekten wie $_PREVIOUSPROJECTS werden
                        berücksichtigt. </span></p>
                #endif$_PREVIOUSPROJECTS

                <p class="c0"><span class="c1">text-data-size-de</span></p>
                <p class="c0"><span class="c3"></span></p>

            </span></p>


        <p class="c0"><span class="c3"><b>Datenspeicherung:</b> </span></p>

        <p class="c0">
            <span class="c1">
                #if$_DATAPLANT In DataPLANT basiert die Datenspeicherung auf dem Annotated Research Context (ARC).
                Dieser ist passwortgeschützt, daher muss vor dem Erhalt von Daten oder der Generierung von Proben
                eine Authentifizierung erfolgen. #endif$_DATAPLANT
            </span>
        </p>


        <p class="c0 ">
            <span class="c1">
                Online-Plattformen werden durch Schwachstellen-Scans, Zwei-Faktor-Authentifizierung und tägliche
                automatische Backups geschützt, die eine sofortige Wiederherstellung ermöglichen. Alle Partner, die
                vertrauliche Projektdaten speichern, nutzen sichere Plattformen mit automatischen Backups und sicheren
                externen Kopien.
                #if$_DATAPLANT ARCs werden in DataPLANT's DataHUB gespeichert, dort wird Datensicherheit gewährleistet.
                Dies umfasst die sichere Speicherung und dass Passwörter und Benutzernamen über separate sichere Leitungen übertragen werden. #endif$_DATAPLANT
            </span>
        </p>

        <p class="c0 "><span class="c1">
                text-repository-long-de


            </span></p>

        <p class="c0"><span class="c3"><b>Die Dateibenennung erfolgt nach folgendem Standard</b>:</span></p>
        <p class="c0">
            <span class="c1">
                Datenvariablen werden mit Standardnamen versehen. Zum Beispiel werden Gene, Proteine und Metaboliten
                gemäß anerkannter Nomenklatur und Konventionen benannt. Diese werden nach Möglichkeit auch mit
                funktionalen Ontologien verknüpft. Datensätze werden ebenfalls sinnvoll benannt, um die Lesbarkeit
                durch Menschen zu gewährleisten. Pflanzennamen umfassen traditionelle Namen, Binomialnamen und alle
                Stamm-/Kultivar-/Unterart-/Sortenbezeichnungen.
            </span>
        </p>

        <p class="c0"><span class="c1"></span></p>
        <p class="c0"><span class="c3"><b>Datendokumentation</b></span></p>
        <p class="c0">
            text-standards-long-de
            </p>


        <p class="c0"><span class="c3"><b>Legitimit&auml;t</b></span></p>
        <p class="c0"><span class="c1">
                <p class="c0">
                    <span class="c1">
                        Im Moment erwarten wir keine ethischen oder rechtlichen Probleme beim Datenaustausch. Da es sich um Pflanzendaten handelt, ist kein Ethikkomitee erforderlich, jedoch wird die Sorgfaltspflicht bei der Aufteilung der Vorteile aus Pflanzenressourcen eingehalten.
                        #issuewarning Sie müssen sicherstellen, dass Sie die erforderliche Sorgfaltspflicht erfüllen. Derzeit warten wir auf eine Klärung, ob das Nagoya-Protokoll (🡺 siehe Nagoya-Protokoll) auch Sequenzinformationen umfasst. Unabhängig davon kann die Nutzung von Material aus einem anderen Land als Ihrem eigenen (oder dem Ihres Partners) und dessen physikalische oder biochemische Charakterisierung (z.B. Metaboliten, Proteom, RNASeq, etc.) eine relevante Handlung im Sinne des Nagoya-Protokolls darstellen. Ausnahmen könnten Materialien aus Ländern wie den USA (Nicht-Partner), Irland (hat nicht unterzeichnet—trotzdem kontaktieren), usw. sein, wobei jedoch andere Gesetze Anwendung finden könnten. #endissuewarning
                    </span>
                </p>
                <p class="c0">
                    <span class="c1">
                        Die einzigen personenbezogenen Daten, die möglicherweise gespeichert werden, sind der Name
                        und die Affiliation des Einreichers in den Metadaten der Daten. Darüber hinaus werden
                        personenbezogene Daten für Verbreitungs- und Kommunikationsaktivitäten gesammelt, wobei
                       die $_PROJECTNAME-Partner sicherstellen, dass der Datenschutz eingehalten wird. #issuewarning Sie müssen die Betroffenen informieren und
                        besser eine SCHRIFTLICHE Zustimmung einholen, wenn Sie E-Mail-Adressen und Namen oder sogar
                        Pseudonyme wie Twitter-Handles speichern. #endissuewarning
                    </span>
                </p>


            </span></p>

        <p class="c0"><span class="c3"><b>Data Sharing</b></span></p>
        <p class="c0 c2"><span class="c1">
                <p class="c20">
                    <span class="c1">
                        Falls Daten nur innerhalb des Konsortiums geteilt werden, weil die Daten noch nicht vollständig
                        sind oder sich in der IP-Prüfung befinden, werden die Daten intern gehostet und es werden
                        Benutzername und Passwort für den Zugriff benötigt (siehe auch unsere GDPR-Regeln).
                        Wenn Daten unter finalen EU- oder US-Repositorien öffentlich gemacht werden, ist
                        normalerweise ein vollständig anonymer Zugang erlaubt. Dies ist auch bei ENA der Fall und
                        beide entsprechen den GDPR-Anforderungen.

                    </span>
                </p>
                <p class="c0">
                    <span class="c1">Es wird keine Einschränkungen geben, sobald die Daten öffentlich gemacht
                        werden.</span>
                    <span class="c1">
                        text-made-public-de
                    </span>
                </p>


                <p class="c0">
                    <span class="c1">
                        Die Daten werden zunächst den $_PROJECTNAME Partnern zugutekommen, aber auch ausgewählten
                        Stakeholdern, die eng in das Projekt eingebunden sind, und dann der wissenschaftlichen
                        Gemeinschaft, die an $_STUDYOBJECT arbeitet. $_DATAUTILITY Darüber hinaus kann auch die
                        allgemeine Öffentlichkeit, die an $_STUDYOBJECT interessiert ist, die Daten nach der
                        Veröffentlichung nutzen. Die Daten werden gemäß dem Verbreitungs- und Kommunikationsplan des
                        $_PROJECTNAME verbreitet, #if$_DATAPLANT der sich mit der DataPLANT-Plattform oder anderen
                        Mitteln abstimmt #endif$_DATAPLANT.

                    </span>
                </p>
            </span></p>
        <p class="c0"><span class="c3"><b>Datenerhalt</b></span></p>
        <p class="c0 c2"><span class="c1">

                <p class="c0">
                    <span class="c1">text-data-size-de
                    </span>
                </p>


                <p class="c0">
                    #if$_DATAPLANT Da das $_PROJECTNAME eng mit DataPLANT abgestimmt ist, werden der ARC-Konverter und
                    DataHUB verwendet, um die Endpunkt-Repositorien zu finden und die Daten automatisch in die
                    Repositorien hochzuladen. #endif$_DATAPLANT

                    <span class="c1"> </span>
                </p>
                <p class="c0">
                    text-repository-short-de
                </p>
                <p class="c0">
                    <span class="c1">
                        Die Einreichung ist kostenlos, und es ist das Ziel (zumindest von ENA), so viele Daten wie
                        möglich zu erhalten. Daher sind Absprachen weder notwendig noch sinnvoll.
                        Catch-all-Repositorien sind nicht erforderlich.
                        #if$_DATAPLANT Für DataPLANT wurde dies vereinbart. #endif$_DATAPLANT #issuewarning Wenn
                        keine Datenmanagementplattform wie DataPLANT verwendet wird, müssen Sie ein geeignetes
                        Repository finden, um Ihre Daten nach der Veröffentlichung zu speichern oder zu archivieren.
                        #endissuewarning

                    </span>
                </p>

            </span></p>
    </div>
</div>
</div>`};