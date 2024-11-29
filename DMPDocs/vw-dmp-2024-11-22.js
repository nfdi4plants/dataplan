


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
                <p class="c0"><span class="c1">basicInfo-isEu-de text-not-only-but-fair-de basicInfo-isProtected-de
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
                        list-dataCollection-de
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
                list-dataType-de
                 <p class="c0">
                     text-standards-long-de
                 </p>

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
                    text-repository-short-de
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
                        text-made-public-de
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