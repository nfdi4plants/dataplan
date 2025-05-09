    /********** Section variables and data structures ***********/

    /**  
     * @name is_firefox  
     * @global
     * @static
     * @description to log if the browser is Firefox
     **/
    var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;// check if the browser is firefox. For firefox, an argument in window.find() function is different
    /**  
     * @name is_ie  
     * @global
     * @static
     * @description to log if the browser is IE
     **/




function textReform(template){
    const t0 = performance.now();


    for (ele of dmpBlocks){
        
        template = template.replaceAll(ele[0],"<span class='dmpblocks-"+ele[0]+"'>"+ ele[1]+"</span>" );
    }
    const t1 = performance.now();
    //console.log(`Call to textReform took ${t1 - t0} milliseconds.`);
    return template;
    
}
    const dmpStrings = {
        "Horizon2020_DMP" : textReform(Horizon2020_DMP.Horizon2020_DMP),
        "horizon_europe" : textReform(horizon_europe.horizon_europe),
        "dfg-dmp" : textReform(dfg_dmp["dfg-dmp"]),
        "bmbf-dmp" : textReform(bmbf_dmp["bmbf-dmp"]),
        "BBSRC-dmp": textReform(BBSRC_dmp["BBSRC-dmp"]),
        "NSF-dmp": textReform(NSF_dmp["NSF-dmp"]),
        "bmel-dmp": textReform(bmel_dmp["bmel-dmp"]),
        "cz-dmp": textReform(cz_dmp["cz-dmp"]),
        "vw-dmp": textReform(vw_dmp["vw-dmp"]),
        "msca-dmp": textReform(msca_dmp["msca-dmp"]),
        "practical-guide": textReform(practical_guide["practical-guide"]),
        "user-defined": window.localStorage.getItem("fulltext_user"),

    }

    const dmpFunders = {
        "Horizon2020_DMP" : "Horizon 2020",
        "horizon_europe" : "Horizon Europe",
        "dfg-dmp" : "DFG (Deutschforschungsgemeinschaft)",
        "bmbf-dmp" : "BMBF (Bundes Ministerium für Bildung und Forschung)",
        "msca-dmp" : "Marie Skłodowska-Curie Actions",
        "BBSRC-dmp": "BBSRC",
        "NSF-dmp": "NSF",
        "bmel-dmp": "BMEL",
        "cz-dmp": "Carl-Zeiss Stiftung",
        "vw-dmp": "Volkswagen Foundation",
        "practical-guide": "Practical Guide",
        "user-defined": "Userdefined",

    }

    const dmpLanguage = {
        "Horizon2020_DMP" : "en",
        "horizon_europe" : "en",
        "dfg-dmp" : "en",
        "bmbf-dmp" : "de",
        "msca-dmp" : "en",
        "BBSRC-dmp": "en",
        "NSF-dmp": "en",
        "bmel-dmp": "de",
        "vw-dmp": "de",
        "cz-dmp": "de",
        "practical-guide": "en",
        "user-defined": "en",

    }
    var is_ie = navigator.userAgent.toLowerCase().indexOf('MSIE ') > -1;// check if the browser is firefox. For firefox, an argument 
    if (is_ie > 0) // If Internet Explorer, return version number
    {
        alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))) + ", this browser is not supported");
    }
    else  // If another browser, return 0
    {
        //verbose  console.log("browser is supported");
    }
    var debug;
    var doc_name = 'Horizon2020_DMP'; // default document to use at the first page load
    var user_info = window.localStorage.getItem("user_info"); // store user information in local storage
    var wordcloud = window.localStorage.getItem("wordcloud") || "false";
    var scroll_y = window.localStorage.getItem("scroll_y");
    //console.log("scroll_y read from cache is " + scroll_y);
    var inputHistory = JSON.parse(window.localStorage.getItem("inputHistory")) || { "replace":{}, "checkbox":{} };
    var cached_template = window.localStorage.getItem("template"); // try to get the saved templates from local storage
    var datepicker_list = []; // initialize a list to store DMP update reminder
    var toast_list;
    var cookie_modal;
    var old_percentage;
    var scroll_marker;
    var punctualReplaced = false;
    var dmpEle;
    var convertedEle;
    var reminders;
    var reminderModal;
    var classicMode = true;
    var initialed = false; // set the initialed status to false
    const JSONString = '{"dmp":{"title":"DMP of Example Project","contact":{"contact_id":{"identifier":"http://orcid.org/0000-0000-0000-0000","type":"orcid"},"mbox":"email","name":"Example User"},"created":"2024-06-19T16:45:09.7","dmp_id":{"identifier":"https://doi.org/10.0000/00.0.1234","type":"doi"},"dataset":[{"dataset_id":{"identifier":"https://doi.org/10.0000/00.0.5678","type":"doi"},"title":"Placeholder dataset","personal_data":"unknown","sensitive_data":"unknown"}],"ethical_issues_exist":"unknown","language":"eng","modified":"2024-07-09T10:53:50.4","submission":"2024-07-09T10:53:50.4","version":"1.0"},"replace":{"$_PROJECTNAME":"Example Project","$_STUDYOBJECT":"Example Topic","$_PROJECTAIM":"aims at Example Aim","$_DMPVERSION":"1.0","$_USERNAME":"Example User","$_EMAIL":"email","$_DATAOFFICER":"Example data officer name","$_DATAUTILITY":"Industry, politicians and students can also use the data for different purposes.","$_UPDATEMONTH":"Example Month","$_PREVIOUSPROJECTS":"Previous Project Name","$_PROPRIETARY":"Proprietary Software","$_RAWDATA":"???","$_DERIVEDDATA":"???","$_FUNDINGPROGRAMME":"action number or funding programme name","$_CREATIONDATE":"xxxx-xx-xx","$_MODIFICATIONDATE":"xxxx-xx-xx","$_OTHERSTANDARDINPUT":"other standards","$_OTHEREP":"Other repositories","$_PARTNERS":"partner name", "$_ADDPROJECTCOORDINATOR": "project coordinator", "$_ADDACRONYM": "add an acronym", "$_OTHERDATATYPETEXT":"Other data type", "$_OTHERDATAFORMATS": "other data formats"},"checkbox":{"checkbox_1":{"checked":["check_dataplant"],"unchecked":[ "check_acronym","check_protect","check_update","check_previousprojects","check_industry","check_proprietary","check_partners","check_eu", "check_projectcoordinator"]},"checkbox_2":{"checked":[],"unchecked":[ "check_otherdatatype","check_transcriptomic", "check_genetic","check_genomic","check_cloned-dna","check_rnaseq","check_metabolomic","check_proteomic","check_phenotypic","check_targeted","check_image","check_models","check_code", "check_scrnaseq", "check_spatialtranscriptomic", "check_pangenomic"]},"checkbox_3":{"checked":[],"unchecked":["check_miappe","check_minseqe","check_otherstandards","check_dublincore","check_marc21", "check_darwincore", "check_bioschemas", "check_schemaorg" ,"check_early","check_ipissue","check_vvisualization","check_mixs","check_migseu","check_migsorg","check_mims","check_mimarksspecimen","check_mimarkssurvey","check_misag","check_mimag","check_miame","check_mmiamet","check_rembi","check_miape","check_mimix","check_beforepublication","check_endofproject","check_embargo","check_request","check_nfdi","check_french","check_eosc"]},"checkbox_4":{"checked":[],"unchecked":["check_formatfastq", "check_formatfast5", "check_formatfasta", "check_formatbcl", "check_formatsambam", "check_formatvcfbcf", "check_formatcram", "check_formatgbk", "check_formatembl", "check_formatgffgtf", "check_formatmzml", "check_formatmgf", "check_formatmzidentml", "check_formatmzquantml", "check_formatpepxml", "check_formatraw", "check_formatimzml", "check_formatcdf", "check_formatxlsx", "check_formattxt", "check_formatcsvtsvpsv", "check_formatpdf", "check_formatjson", "check_formatxmlhtml", "check_formathdf5", "check_formatometiff", "check_formatpng", "check_formatjpeg", "check_formattiff", "check_otherdataformats"]},"checkbox_5":{"checked":[],"unchecked":["check_genbank","check_sra","check_geo","check_ena","check_arrayexpress","check_metabolights","check_pride","check_bioimage","check_idr","check_edal","check_metaworkbench","check_intact","check_pdb","check_chebi","check_otherep"]}},"update":{"timeline":[],"storage":[{"answer":[],"name":[]},{"answer":[],"name":[]},{"answer":[],"name":[]},{"answer":[],"name":[]},{"answer":[],"name":[]},{"answer":[],"name":[]}]}}';

    const JSONStringDe = '{ "dmp": { "title": "DMP des Beispielprojekts", "contact": { "contact_id": { "identifier": "http://orcid.org/0000-0000-0000-0000", "type": "orcid" }, "mbox": "E-Mail des DMP", "name": "DMP des Beispielbenutzers" }, "created": "2024-06-19T16:45:09.7", "dmp_id": { "identifier": "https://doi.org/10.0000/00.0.1234", "type": "doi" }, "dataset": [ { "dataset_id": { "identifier": "https://doi.org/10.0000/00.0.5678", "type": "doi" }, "title": "Platzhalter-Datensatz", "personal_data": "unbekannt", "sensitive_data": "unbekannt" } ], "ethical_issues_exist": "unbekannt", "language": "eng", "modified": "2024-07-09T10:53:50.4", "submission": "2024-07-09T10:53:50.4", "version": "1.0" }, "replace": { "$_PROJECTNAME": "Beispielprojekt", "$_STUDYOBJECT": "Beispielthema", "$_PROJECTAIM": "Beispielziel", "$_DMPVERSION": "1.0", "$_USERNAME": "Beispielbenutzer", "$_EMAIL": "E-Mail", "$_DATAOFFICER": "Name des Datenbeauftragten", "$_DATAUTILITY": "Industrie, Politiker und Studenten können die Daten auch für verschiedene Zwecke nutzen.", "$_UPDATEMONTH": "Beispielmonat", "$_PREVIOUSPROJECTS": "Name des vorherigen Projekts", "$_PROPRIETARY": "Proprietäre Software", "$_RAWDATA": "???", "$_DERIVEDDATA": "???", "$_FUNDINGPROGRAMME": "Aktionsnummer oder Name des Förderprogramms", "$_CREATIONDATE": "xxxx-xx-xx", "$_MODIFICATIONDATE": "xxxx-xx-xx", "$_OTHERSTANDARDINPUT": "andere Standards", "$_OTHEREP": "Andere Repositorien", "$_PARTNERS": "Name des Partners", "$_ADDPROJECTCOORDINATOR": "Projektkoordinator", "$_ADDACRONYM": "Fügen Sie hier das Akronym ein", "$_OTHERDATATYPETEXT":"Andere Datenarten", "$_OTHERDATAFORMATS": "andere Datenformate"  },"checkbox":{"checkbox_1":{"checked":["check_dataplant"],"unchecked":[  "check_acronym","check_protect","check_update","check_previousprojects","check_industry","check_proprietary","check_partners","check_eu", "check_projectcoordinator"]},"checkbox_2":{"checked":[],"unchecked":["check_otherdatatype","check_transcriptomic", "check_genetic","check_genomic","check_cloned-dna","check_rnaseq","check_metabolomic","check_proteomic","check_phenotypic","check_targeted","check_image","check_models","check_code", "check_scrnaseq", "check_spatialtranscriptomic", "check_pangenomic"]},"checkbox_3":{"checked":[],"unchecked":["check_miappe","check_minseqe","check_otherstandards","check_dublincore","check_marc21", "check_darwincore", "check_bioschemas", "check_schemaorg" ,"check_early","check_ipissue","check_vvisualization","check_mixs","check_migseu","check_migsorg","check_mims","check_mimarksspecimen","check_mimarkssurvey","check_misag","check_mimag","check_miame","check_mmiamet","check_rembi","check_miape","check_mimix","check_beforepublication","check_endofproject","check_embargo","check_request","check_nfdi","check_french","check_eosc"]},"checkbox_4":{"checked":[],"unchecked":["check_formatfastq", "check_formatfast5", "check_formatfasta", "check_formatbcl", "check_formatsambam", "check_formatvcfbcf", "check_formatcram", "check_formatgbk", "check_formatembl", "check_formatgffgtf", "check_formatmzml", "check_formatmgf", "check_formatmzidentml", "check_formatmzquantml", "check_formatpepxml", "check_formatraw", "check_formatimzml", "check_formatcdf", "check_formatxlsx", "check_formattxt", "check_formatcsvtsvpsv", "check_formatpdf", "check_formatjson", "check_formatxmlhtml", "check_formathdf5", "check_formatometiff", "check_formatpng", "check_formatjpeg", "check_formattiff", "check_otherdataformats"]},"checkbox_5":{"checked":[],"unchecked":["check_genbank","check_sra","check_geo","check_ena","check_arrayexpress","check_metabolights","check_pride","check_bioimage","check_idr","check_edal","check_metaworkbench","check_intact","check_pdb","check_chebi","check_otherep"]}},"update":{"timeline":[],"storage":[{"answer":[],"name":[]},{"answer":[],"name":[]},{"answer":[],"name":[]},{"answer":[],"name":[]},{"answer":[],"name":[]},{"answer":[],"name":[]}]}}';
    var cached_a_en = window.localStorage.getItem("saved_a") || JSONString; // try to get the saved answers from local storage
    var cached_a_de = window.localStorage.getItem("saved_a_de") || JSONStringDe; // try to get the saved answers from local storage
    const templateJSON = '{"replace":{"$_PROJECTNAME":"Example Project","$_STUDYOBJECT":"Example Topic","$_PROJECTAIM":"aims at Example Aim","$_USERNAME":"Example User","$_EMAIL":"email","$_DATAOFFICER":"Example data officer name","$_RAWDATA":"???","$_DERIVEDDATA":"???","$_FUNDINGPROGRAMME":"action number or funding programme name","$_CREATIONDATE":"xxxx-xx-xx","$_MODIFICATIONDATE":"xxxx-xx-xx"}}';

    const templateJSONDe = '{"replace": { "$_PROJECTNAME": "Beispielprojekt", "$_STUDYOBJECT": "Beispielthema", "$_PROJECTAIM": "Beispielziel", "$_USERNAME": "Beispielbenutzer", "$_EMAIL": "E-Mail", "$_DATAOFFICER": "Name des Datenbeauftragten", "$_RAWDATA": "???", "$_DERIVEDDATA": "???", "$_FUNDINGPROGRAMME": "Aktionsnummer oder Name des Förderprogramms", "$_CREATIONDATE": "xxxx-xx-xx", "$_MODIFICATIONDATE": "xxxx-xx-xx"}}';
    var temp_a_en = JSON.parse(templateJSON); // template answers used to compare with saved answers 
    var temp_a_de = JSON.parse(templateJSONDe); // template answers used to compare with saved answers 
    var temp_a;

    var optional_temp = {
        "en": {
        "$_UPDATEMONTH":"Example Month",
        "$_PREVIOUSPROJECTS":"Previous Project Name",
        "$_PROPRIETARY":"Proprietary Software",
        "$_PARTNERS":"partner name" ,
        "$_OTHEREP":"" ,
        "$_ADDACRONYM":"Add the acronym here",
        "$_ADDPROJECTCOORDINATOR":"Project Coordinator",
        "$_OTHERDATATYPETEXT":"Other data type",
        },
        
        "de": {
        "$_UPDATEMONTH":"Beispielmonat",
        "$_PREVIOUSPROJECTS":"Name des vorherigen Projekts",
        "$_PROPRIETARY":"Proprietäre Software",
        "$_PARTNERS":"Name des Partners" ,
        "$_OTHEREP":"" ,
        "$_ADDACRONYM":"Fügen Sie hier das Akronym ein",
        "$_ADDPROJECTCOORDINATOR":"Projektkoordinator",
        "$_OTHERDATATYPETEXT":"Andere Datenarten",
        }

    }

    function initJSON(json0) {
    
        if (json0 !== null) { // if there is an answer saved in local storage
            let json1 = JSON.parse(json0); // load the cached answers to webpage
            try {
                json1["update"];
                json1["update"]["timeline"];
                json1["dmp"];
                json1["update"]["storage"]["0"]["answer"]["$_PROJECTNAME"]
            } // If some answers are missing, re-initialize the answers.
            catch (e) {

                json1["update"] = {
                    "timeline": [
                    ], "storage": [
                        { "answer": { "replace": json1["replace"], "checkbox": json1["checkbox"] }, "name": [], },
                        { "answer": {}, "name": "" , },
                        { "answer": {}, "name": "" , },
                        { "answer": {}, "name": "" , },
                        { "answer": {}, "name": "" , },
                        { "answer": {}, "name": "" , },

                    ]
                };

                json1["dmp"] = {
                    "title": "Minimal DMP",
                
                    "created": "2018-07-23T10:10:23.6",
                    "ethical_issues_exist": "no",
                    "language": "eng",
                    "modified": "2019-02-06T15:30:42.1",
                    "contact": {
                        "mbox": "cc@example.com",
                        "name": "Charlie Chaplin",
                        "affiliation":"",
                    },
                    "project":{
                        "title":"project name",
                        "description":"description",
                        "start":"starting date",
                        "funding":{
                            "funder_id":"funder_id",
                            "status":"status"
                        }
                        
                    },
                    "dataset": [{
                        "title":"titile",
                        "type":"",
                        "personal_data": "no",
                        "sensitive_data": "no",
                        "distribution":{
                            "host":{
                                "description":"description"
                            }
                        }
                    }
                    ],
                    
                    "submission": {
                        "time": "2022-07-06T15:30:42.1",
                        "funding": "Horizon Europe ",
                    },

                };

            }
            return json1;
        } else { // if there is no saved answer, initiate a new saved answer
            return JSON.parse(JSONString);
        }
    }
    var saved_a_en = initJSON(cached_a_en) || initJSON(cached_a_en);
    var saved_a_de = initJSON(cached_a_de) || initJSON(cached_a_de);
    /*============== tutorial ==============*/
    // a tutorial to help users get familiar with the DataPLAN tool.
    var steps = [{
        title: "DataPLAN ",
        content: `
                        <div class="row">
                           
                    
                        <div class="col  mt-1">
                            
                        <p> Welcome to the DataPLAN tool! This tool is designed to help you quickly generate five Data Management Plans (DMPs) in just two minutes. This work has been featured in the journal <a  href="https://doi.org/10.3390/data8110159" target="_blank" > Data</a>. </p>

                        </div>
                        <div class="col " >
                        <a href="https://www.mdpi.com/2306-5729/8/11/159" target="_blank" ><img src="https://nfdi4plants.github.io/dataplan/images/cover.webp" class="img-fluid" alt="issueCover" ></a>
                        </div>
                        </div>
                        `
        //
    }, {
        id: "navbar-interface",
        content: "<p>The questionnaire consists of five easy-to-navigate sections.</p>"
    }, {
        id: "intro-tour-input",
        content: "<p>All five sections are conveniently organized on a single page for a seamless experience.</p>"
    }, {
        id: "form_projectname",
        content: "<p>Please enter your project name in the highlighted input box. For example, you can type: 'An awesome project.' Once you've entered the name, click anywhere else or press the tab key to proceed. Your answers will be saved automatically.</p>"
    }, {
        id: "split-0",
        content: "<p>The document content has now been updated with your input.</p>"
    }, {
        id: "save_button",
        content: "<p>You can save your answers as a JSON file or copy the generated document from the left-hand side.</p>"
    }, {
        id: "upload_button",
        content: "<p> If you've saved your progress, you can upload the 'JSON' file to continue where you left off. </p>"
    }, {
        id: "change_template",
        content: `<p>You can choose from a variety of templates, including those for Horizon 2020, Horizon Europe, DFG, BMBF, and more. <a href="#" onclick=' document.querySelector("#change_template").click();document.querySelector(".tour-exit").click();'>Click here to browse all available templates</a>.</p>`
    }
    ];
    var maxWidth = 1100;
    var tour = new Tour(steps); // initialize the guided tour
    var upload_json1, 
    upload_json2, 
    upload_maDMP,
    import_history,
    current_input_answer, 
    uploaded_input_answer, 
    current_origin=0, 
    uploaded_origin=0, 
    uploaded_input_all;
    const prefix = '$_';





    /********** functions ***********/
    
     /**
     * @function addCheckboxOpt( missing, otherMissing )
     * @description Update the previous saved answers to make it compatible to the newest version of software.
     * @global
     */


    /**
     * @function updateSavedAnswers2
     * @description Update the previous saved answers to make it compatible to the newest version of software.
     * @global
     */

    function answersManagement(name){
        saved_a_de = answerStorageUpdate(saved_a_de);
        saved_a_en = answerStorageUpdate(saved_a_en);
        if (dmpLanguage[name] == "en"){
            window.temp_a =  temp_a_en;
            window.saved_a =  saved_a_en;
        }else if(dmpLanguage[name] == "de"){
            window.temp_a = temp_a_de;
            window.saved_a = saved_a_de;
        }
       
    }


    function modifyArrays(A, B) {
            // Add elements from A to B if they are not present in B
            for (const elem of A) {
                if (!B.includes(elem)) {
                B.push(elem);
                }
            }

            // Remove elements from B that are not present in A
            for (let i = B.length - 1; i >= 0; i--) {
                if (!A.includes(B[i])) {
                B.splice(i, 1);
                }
            }
            }
 

    function updateSavedAnswers2() {
        const target = JSON.parse(JSONString);
        try {
            let A = Object.keys(target.replace) ;
            let B = Object.keys(saved_a.replace) ;
            for (const elem of A) {
                if (!B.includes(elem)) {
                B.push(elem);
                saved_a.replace[elem] = target.replace[elem];
                console.log(elem+" has been added, because it is a part of the template");
                 
                }
            }

            // Remove elements from B that are not present in A
            for (let i = B.length - 1; i >= 0; i--) {
                if (!A.includes(B[i])) {
                delete saved_a.replace[B[i]];
                console.log(B[i]+" has been removed, because it is not a part of the template");

                
                }
            }
        } catch (error) {
            console.log(error);
        }
        for(const[key,value] of Object.entries(target.checkbox)){
            
             
                
        try {
            
            let A = target.checkbox[key].checked.concat(target.checkbox[key].unchecked) ;
            let B = saved_a.checkbox[key].checked.concat(saved_a.checkbox[key].unchecked) ;
            for (const elem of A) {
                if (!B.includes(elem)) {
                B.push(elem);
                saved_a.checkbox[key].unchecked.push(elem);
                console.log(elem+" has been added, because it is a part of the template");
                 
                }
            }

            // Remove elements from B that are not present in A
            for (let i = B.length - 1; i >= 0; i--) {
                if (!A.includes(B[i])) {
                saved_a.checkbox[key].checked.pop(B[i]);   
                saved_a.checkbox[key].unchecked.pop(B[i]);
                console.log(B[i]+" has been removed, because it is NOT a part of the template");
                
                }
            }
        } catch (error) {
            console.log(error);
        }
        if (dmpLanguage[doc_name] == "en"){
            
            window.saved_a_en =  saved_a;
        }else if(dmpLanguage[doc_name] == "de"){
            
            window.saved_a_de = saved_a;
        }
    }
    }
   

    function extractJSONCodeBlock(text) {
    // Regular expression to match JSON code blocks enclosed in triple backticks with optional language specifier
                const jsonCodeBlockRegex = /```json\s*([\s\S]*?)\s*```/;

                // Execute the regex on the input text
                const match = text.match(jsonCodeBlockRegex);

                if (match && match[1]) {
                    // Parse the matched JSON string into an actual JavaScript object
                    try {
                        const jsonObject = JSON.parse(match[1]);
                        return jsonObject;
                    } catch (error) {
                        console.error("Error parsing JSON:", error.message);
                        return null;
                    }
                } else {
                    console.error("No JSON code block found in the provided text.");
                    return null;
                }
            }




    async function proposal2dmp() {
            loading.show();
            const proposal2dmpBtn = document.getElementById("proposal2dmpBtn");
            proposal2dmpBtn.disabled = true;
            const proposal = document.getElementById("proposalText").value;
            const answer = document.getElementById("aiGeneratedJSON");
            answer.value = "";
            
            try {
                const response = await fetch('https://h.dataplan.top/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Host': 'h.dataplan.top',
                        'institution':'IBG-4'
                    },
                    body: JSON.stringify({
                        model: "deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free",
                        messages: [{
                            role: "user",
                            content: `review the following proposal provided. Extract the project name, project acronym, project topic, project aim. Generate a JSON file in the following JSON format: {""replace": {
                            "$_PROJECTNAME": "Example Project",
                            "$_STUDYOBJECT": "Example Topic",
                            "$_PROJECTAIM": "aims at Example Aim",
                            "$_DMPVERSION": "1.0",
                            "$_USERNAME": "Example User",
                            "$_EMAIL": "email",
                            "$_DATAOFFICER": "Example data officer name",
                            "$_DATAUTILITY": "Industry, politicians and students can also use the data for different purposes.",
                            "$_UPDATEMONTH": "Example Month",
                            "$_PREVIOUSPROJECTS": "Previous Project Name",
                            "$_PROPRIETARY": "Proprietary Software",
                            "$_RAWDATA": "??? GB (The volume of raw data)",
                            "$_DERIVEDDATA": "??? GB (The volume of derived data)",
                            "$_FUNDINGPROGRAMME": "action number or funding programme name",
                            "$_CREATIONDATE": "xxxx-xx-xx",
                            "$_MODIFICATIONDATE": "xxxx-xx-xx",
                            "$_OTHERSTANDARDINPUT": "other standards",
                            "$_OTHEREP": "Other repositories",
                            "$_PARTNERS": "partner name",
                            "$_ADDPROJECTCOORDINATOR": "project coordinator",
                            "$_ADDACRONYM": "add an acronym",
                            "$_OTHERDATATYPETEXT": "Other data type",
                            "$_OTHERDATAFORMATS": "other data formats"
                        }}\n
                        Proposal is: \n\n${proposal}`
                        }],
                        stream: "true"
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const reader = response.body.getReader();
                const decoder = new TextDecoder('utf-8');
                let buffer = '';

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    
                    buffer += decoder.decode(value, { stream: true });
                    const lines = buffer.split('\n');
                    buffer = lines.pop() || ''; // Keep incomplete line
                    
                    for (const line of lines) {
                        if (!line.trim() || !line.startsWith('data: ')) continue;
                        
                        try {
                            // Remove 'data: ' prefix and parse
                            const data = JSON.parse(line.slice(6));
                            const content = data.choices?.[0]?.delta?.content || '';
                            answer.value += content;
                            answer.scrollTop =answer.scrollHeight;
                            //console.log(content); // Visible in console
                        } catch (err) {
                            console.error('Streaming parse error:', err);
                        }
                    }
                }
                proposal2dmpBtn.disabled = false;
                loading.hide();
            } catch (error) {
                console.error('Error:', error);
                loading.hide();
            }
        }
            

    // const proposal2dmp = async function(){
    //     loading.show();
    //     const proposal = document.getElementById("proposalText").innerHTML;
    //     const answer = document.getElementById("aiGeneratedJSON");
    //     fetch('https://h.dataplan.top/v1/chat/completions', {
    //             method: 'POST', // HTTP method
    //             headers: {
    //                 'Content-Type': 'application/json', // Specify JSON content type
    //                 'Host': 'h.dataplan.top' // Host header
    //             },
    //             body: JSON.stringify({
    //                 model: "deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free",
    //                 messages: [
    //                     {
    //                         role: "user",
    //                         content: 
    //                     },
                    
    //                 ],
    //                 stream :"true",
    //             })
    //         })
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //             return response.json(); // Parse the JSON response
    //         })
    //         .then(data => {
    //             console.log('Response:', data); // Handle the parsed JSON data
    //             answer.innerHTML= data.choices[0].message.content;
    //             loading.hide();
                
    //         })
    //         .catch(error => {
    //             console.error('Error:', error); // Handle any errors
    //         });
    // }


    function maDMPUpdate(saved_a, dmpFunders, windowDocName) {
      try {
          const date = new Date(); // record the time
  
          // Ensure base structure exists
          saved_a.dmp ??= {};
          saved_a.dmp.contact ??= {};
          saved_a.dmp.project ??= {};
          saved_a.dmp.project.funding ??= {};
  
          // Update dmp metadata
          saved_a.dmp.title = "DMP of " + (saved_a.replace?.$_PROJECTNAME ?? "Default Project");
          saved_a.dmp.contact.name = saved_a.replace?.$_USERNAME ?? "Unknown User";
          saved_a.dmp.contact.mbox = saved_a.replace?.$_EMAIL ?? "example@example.com";
  
          // Handle created and modified timestamps
          saved_a.dmp.created = saved_a.dmp.created === "2018-07-23T10:10:23.6"
              ? saved_a.replace?.$_CREATIONDATE ?? "xxxx-xx-xx"
              : saved_a.dmp.created ?? "xxxx-xx-xx";
  
          saved_a.dmp.modified = saved_a.replace?.$_MODIFICATIONDATE ?? "xxxx-xx-xx";
          saved_a.dmp.submission = date.toISOString().slice(0, -3); // current timestamp
          saved_a.dmp.version = saved_a.replace?.$_DMPVERSION ?? "1.0";
  
          // Update project details
          saved_a.dmp.project.title = saved_a.replace?.$_PROJECTNAME ?? "Default Project";
          saved_a.dmp.project.contact = saved_a.replace?.$_ADDPROJECTCOORDINATOR ?? "Project Coordinator";
  
          // Set funder_id safely using external dmpFunders map
          saved_a.dmp.project.funding.funder_id = dmpFunders?.[windowDocName] ?? "Unknown Funder";
  
          return saved_a;
  
      } catch (error) {
          console.error("Error during maDMP update:", error);
          return saved_a; // return unchanged object on failure
      }
  }

    /**
     * @function load_dmp
     * @description General function for replace place holders in the document text.
     * @param {reload_answers} a callback function that reloads all the answers.
     * @param {string} the name of the template used for replacement.
     * @global
     */

    function load_dmp(callback = reload_answers, name = cached_template) {
        translatePage(name);
        
        punctualReplaced = false;
        initialed ? scroll_y = document.getElementById("split-0").scrollTop + "" : {};
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        Object.keys(saved_a["replace"]).includes("$_DMPVERSION") ? {} : saved_a["replace"]["$_DMPVERSION"] = "1.0";
        //document.getElementById("today_date").innerHTML = "<h3>"+date.toLocaleDateString('en-US', options)+"</h3>";
        let frame = document.getElementById("doc3");
        updateSavedAnswers2();
        if (convertedEle ==undefined){
            callback(name);
        }else if (doc_name == "user-defined"){
            callback(name);
        }
        else if (doc_name != name){
            callback(name);
        }
        else{
            frame.innerHTML = convertedEle;
            allCheckbox(), htmlFind_replace();
            
        }
        window.doc_name = name; // overwrite global variable doc_name
        
        saved_a["update"]["storage"][0]["answer"]= {"replace": saved_a["replace"], "checkbox": saved_a["checkbox"] };
        initialed = true;
        syn_load_cache();
        document.getElementById("editTemplate").href = "https://github.com/nfdi4plants/dataplan/blob/main/DMPDocs/"+doc_name+"-2025-04-22.js";
        maDMPUpdate();
        runWordCloud();
        setTimeout(() => {
            
            classicMode ? punctual(): {};
            document.getElementById("split-0").scrollTop = scroll_y,
            console.log("the window is scrolled to: " + scroll_y);
        }, "150");

        
        
    }


    /**
     * @function enter2tab
     * @description press enter is equal to press tab
     * 
     * @global
     */
    function deb(log){
        if (debug){
            console.log(log)
        }
    }
    function enter2tab() { // let enter function like tab

        if (window.event && window.event.keyCode == 13) {

            window.event.keyCode = 9;
        }
    }
    ////verbose  console.log("is firefox ?"+is_firefox); // check if the firefox check works

    /**
     * @function consent
     * @description show cookie consent page
     * 
     * @global
     */

    function consent() {
        window.localStorage.setItem("cookie_consent", "yes");
        if (user_info == null) {
            setTimeout(function () {
                window.innerWidth>maxWidth? tour.show() : {};
            }, 500);

        }
    }

    /**
     * @function save_json
     * @description save answers to JSON
     * 
     * @global
     */
    function save_json() {
        saved_a["templateName"] = doc_name;
        saved_a["templateText"] = dmpStrings[doc_name].replaceAll('"', "\"");
        aJSONString = JSON.stringify(saved_a);

        const blob = new Blob([aJSONString], {
            type: "application/json"
        });
        saveAs(blob, "DataPLAN_DMP");

    }

    function save_rdmoxml() {
        // saved_a["templateName"] = doc_name;
        // saved_a["templateText"] = dmpStrings[doc_name];
        issue_warning_show(),
        remove_all_warnings();
        let newxml = rdmo_dmp["rdmo-dmp"];

        for (ele1 of Object.entries(saved_a.replace)){
        try {
            newxml = newxml.replaceAll(ele1[0],ele1[1]);
        } catch (error) {
            console.error(ele1[0]+" is not found")
        };
    }
        for (ele of dmpBlocks){
        try {
            newxml = newxml.replaceAll(ele[0],document.querySelector(".dmpblocks-"+ele[0]).innerText);
        } catch (error) {
            console.error(ele[0]+" is not found")
        }
            
    }
        

        const blob = new Blob([newxml], {
            type: "application/XML"
        });
        saveAs(blob, "DataPLAN_DMP");

    }
    /**
     * @function save_json
     * @description save answers to JSON
     * 
     * @global
     */
     function exportHistory() {
        aJSONString = JSON.stringify(inputHistory);

        const blob = new Blob([aJSONString], {
            type: "application/json"
        });
        saveAs(blob, "inputHistory");

    }
    /*============== tutorial initialization ends ==============*/

    // event listener for text input (no need to press submit button anymore)


    // compare updated answers and the original answers
    /**
     * @function compare_answers
     * @description compare the previous answers and new answers
     * @param old_a old answers
     * @param new_a new answers
     * @global
     */
    function compare_answers(old_a, new_a) {
        
        let unreplaced_keys = [];
        let unsubmitted_checkbox = [];
        let total_keywords = 0,
            changed_keywords = 0,
            total_checkboxes = 0,
            changed_checkboxes = 0;
        const old_replace = Object.entries(old_a["replace"]);
        for (const [key, value] of old_replace) {
            total_keywords++;
            if ((new_a["replace"][key] != value) && (new_a["replace"][key] != "") && (new_a["replace"][key] != undefined)) {
                changed_keywords++;

                //verbose  console.log(new_a["replace"][key]);
            } else {
                unreplaced_keys.push(key);
            }

        }

        const old_checkbox = Object.entries(old_a["checkbox"]);
        for (const [key, value] of old_checkbox) {
            total_checkboxes++;
            if (JSON.stringify(new_a["checkbox"][key]) != JSON.stringify(value)) {
                //verbose  console.log(new_a["checkbox"][key]);

                changed_checkboxes++;

            } else {
                unsubmitted_checkbox.push(key);
            }
        }
        const unchecked_options = new_a["checkbox"]["checkbox_1"]["unchecked"];

        const uncheck_update = unchecked_options.includes("check_update");
        if (uncheck_update) {
            unreplaced_keys = unreplaced_keys.filter(item => item !== "$_UPDATEMONTH");
            new_a["replace"]["$_UPDATEMONTH"] = "";
        }
        const check_previousprojects = unchecked_options.includes("check_previousprojects");
        if (check_previousprojects) {
            unreplaced_keys = unreplaced_keys.filter(item => item !== "$_PREVIOUSPROJECTS");
            new_a["replace"]["$_PREVIOUSPROJECTS"] = "";
        }
        const check_proprietary = unchecked_options.includes("check_proprietary");
        if (check_proprietary) {
            unreplaced_keys = unreplaced_keys.filter(item => item !== "$_PROPRIETARY");
            new_a["replace"]["$_PROPRIETARY"] = ""
        }
        let no_need_to_answer = uncheck_update + check_previousprojects + check_proprietary;
        total_keywords = total_keywords - no_need_to_answer;
        //verbose  console.log("total_keys: " + total_keywords + "; changed_keywords: " + changed_keywords + "\n ;  total_box  " + total_checkboxes + ", changed_checkbox: " + changed_checkboxes + ", unreplaced_keys " + unreplaced_keys);
        return [total_keywords, total_checkboxes, changed_keywords, changed_checkboxes, unreplaced_keys, unsubmitted_checkbox];


    }

    function compare_replace(old_a, new_a) {
        let locala = JSON.parse(JSON.stringify(old_a["replace"]));
        let unreplaced_keys = [];
        let replaced_keys = [];
        let total_keywords = 0,
            changed_keywords = 0;
        const language = dmpLanguage[doc_name]
        document.getElementById("check_update").checked? locala["$_UPDATEMONTH"]=optional_temp[language]["$_UPDATEMONTH"] : {} ;
        document.getElementById("check_previousprojects").checked? locala["$_PREVIOUSPROJECTS"]=optional_temp[language]["$_PREVIOUSPROJECTS"] : {} ;
        document.getElementById("check_proprietary").checked? locala["$_PROPRIETARY"]=optional_temp[language]["$_PROPRIETARY"] : {} ;
        document.getElementById("check_partners").checked? locala["$_PARTNERS"]=optional_temp[language]["$_PARTNERS"] : {} ;
        document.getElementById("check_otherep").checked? locala["$_OTHEREP"]=optional_temp[language]["$_OTHEREP"] : {} ;
        document.getElementById("check_acronym").checked? locala["$_ADDACRONYM"]=optional_temp[language]["$_ADDACRONYM"] :  {};
        document.getElementById("check_projectcoordinator").checked? locala["$_ADDPROJECTCOORDINATOR"]=optional_temp[language]["$_ADDPROJECTCOORDINATOR"] :  {};
        document.getElementById("check_otherdatatype").checked? locala["$_OTHERDATATYPETEXT"]=optional_temp[language]["$_OTHERDATATYPETEXT"] :  {};
        document.getElementById("check_otherdataformats").checked? locala["$_OTHERDATAFORMATS"]=optional_temp[language]["$_OTHERDATAFORMATS"] :  {};
        
        for (const [key, value] of Object.entries(locala)) {
            total_keywords++;
            if ((new_a["replace"][key] != value) && (new_a["replace"][key] != "") && (new_a["replace"][key] != undefined)) {
                changed_keywords++;
                replaced_keys.push(key);
                //verbose  console.log(new_a["replace"][key]);
            } else {
                unreplaced_keys.push(key);
            }

        }
        //unreplaced_keys = unreplaced_keys.filter(item => item !== "$_PROPRIETARY").filter(item => item !== "$_PREVIOUSPROJECTS").filter(item => item !== "$_UPDATEMONTH").filter(item => item !== "$_DATAUTILITY");
        return [total_keywords, 0, changed_keywords, 0, unreplaced_keys, [], replaced_keys];
    }

    function saveToLocalStorage(name = window.doc_name){
        if (dmpLanguage[name] == dmpLanguage[doc_name]){
            window["saved_a_"+dmpLanguage[name]]=saved_a;
        }
        window.localStorage.setItem("inputHistory", JSON.stringify(window.inputHistory));
        dmpLanguage[name]=="en"? window.localStorage.setItem("saved_a", JSON.stringify(window.saved_a)): window.localStorage.setItem("saved_a_de", JSON.stringify(window.saved_a)) ;
    }

    /**
     * @function onchange_replace
     * @description old replace based on buttons
     * @param child the element it was in
     * @global
     */
    function onchange_replace(child) {
        const before = child.name.toUpperCase();
        const after1 = child.value;
        after = answerPunctual(after1)
        child.value=after;
        saved_a["replace"][before] = after;
        inputReplace =  inputHistory["replace"];
        try{
            inputReplace[before][0];
        }catch(e){
            inputReplace[before]= [];
        }
        inputBefore = inputReplace[before];
        const now =  new Date();
        singleInputContent = [after, saved_a["replace"]["$_PROJECTNAME"], now.toISOString().slice(0,19), dmpLanguage[doc_name]];
        inputBefore.push(singleInputContent);
        //inputHistory["replace"][before] = inputBefore.filter((value, index, array) => array.indexOf(value) === index);
        trim_saved_a(saved_a);
        
        eleName = before.split("_")[1]+"-to-";
        document.getElementsByName(eleName).forEach(e=>{e.innerText=after});
        let unfinished = compare_replace(temp_a, saved_a);
        let p_bar = document.getElementById("p-bar");

        let percentage = (unfinished[2] + unfinished[3]) / (unfinished[0] + unfinished[1]) * 100;
        if (percentage === 100 && old_percentage != 100) {
            toast_list[6].show();
        }
        old_percentage = percentage;
        p_bar.style.setProperty("width", Math.ceil(percentage) + "%");
        p_bar.innerHTML = Math.ceil(percentage) + "%";
        p_bar.setAttribute("aria-valuenow", Math.ceil(percentage));
        saveToLocalStorage(doc_name);

    }


    function htmlFind_replace(){
        for (const [key, value] of Object.entries( saved_a["replace"])){
            eleName = key.split("_")[1]+"-to-";
            document.getElementsByName(eleName).forEach(e=>{e.innerText=value});
            let unfinished = compare_replace(temp_a, saved_a);
            let p_bar = document.getElementById("p-bar");

        let percentage = (unfinished[2] + unfinished[3]) / (unfinished[0] + unfinished[1]) * 100;
        if (percentage === 100 && old_percentage != 100) {
            toast_list[6].show();
        }
        old_percentage = percentage;
        p_bar.style.setProperty("width", Math.ceil(percentage) + "%");
        p_bar.innerHTML = Math.ceil(percentage) + "%";
        p_bar.setAttribute("aria-valuenow", Math.ceil(percentage));
            //console.log(key+" " + value)
            }

    }
    function onchange_replace1(child) {
        const before = child.name;
        const after = child.value;
        saved_a["replace"][before] = after;
        load_dmp(reload_answers, doc_name);

    }

    
    function updateWC(status){
        window.wordcloud = (status).toString();
        localStorage.setItem("wordcloud", status);
        load_dmp(reload_answers, doc_name);

    }

    function runWordCloud(){
        if (window.wordcloud =="true"){
            parseText();
            console.log("word cloud")
        }else{
            try {
                document.querySelector("#doc3").querySelector("#vis").remove();
            } catch (error) {
                
            }
            
        }
    }


    /**
     * @function trim_saved_a
     * @description function to remove the "$_" of the text to avoid replace errors
     * @param saved_a the element it was in
     * @global
     */
    // trim the "$_" to avoid infinite loops
    function trim_saved_a(saved_a) {
        const replace = Object.entries(saved_a["replace"]);
        for (const [key, value] of replace) {
            saved_a["replace"][key] = value.replace("$_", "")
        }

    }

    // reload all the answers and save the answers to local storage
    /**
     * @function reload_answers	
     * @description function to reload all answers and refresh the document
     * @global
     */
    function reload_answers(name) {
        answersManagement(name);
        window.localStorage.setItem("template", name);
        dmpEle.innerHTML = dmpStrings[name];
        //let content = dmpEle.querySelector("#"+name);
        //content.classList.add("content-page");
        let frame = document.getElementById("doc3");

        frame.innerHTML = dmpEle.innerHTML;

        const selection = window.getSelection();
        selection.removeAllRanges();
        trim_saved_a(saved_a);

        saveToLocalStorage(name);
        const now =  new Date();
        const replace_input = Object.entries(saved_a["replace"]);
        const history_replace = inputHistory.replace;
        for (const [key, value1] of replace_input) {            
            singleInputContent = [value1, replace_input["$_PROJECTNAME"], now.toISOString().slice(0,19), dmpLanguage[doc_name]];
            history_replace[key] ?history_replace[key].push(singleInputContent): history_replace[key]= [singleInputContent];
            value = answerPunctual(value1);
            if (key !== "$_VISUALIZATION") {
               
                let element = document.getElementsByName(key.toUpperCase())[0];
                //verbose  console.log(key + " "+value);
                try {
                    
                    element.value = value;
                    
                } catch (error) {
                    console.error(error);

                    element.value = "Error, can not parse the value, please first export the JSON and then import"
                }
                
            }
        }
        const checkbox_input = Object.entries(saved_a["checkbox"]);
        for (const [key, value] of checkbox_input) {
            let checkboxes = value;
            try {
                const checked = Object.entries(checkboxes["checked"]);
                for (const [key, value] of checked) {
                    let element = document.getElementById(value.toLowerCase());
                    try {
                        element.checked = true;

                            } catch (error) {
                                console.error(error);

                                element.checked = false;
                            }
                    

                };
            } catch (e) {
                //verbose  console.log("checked is null");

            }

            try {
                const unchecked = Object.entries(checkboxes["unchecked"]);
                for (const [key, value] of unchecked) {
                    //console.log("value = "+ value)
                    let element = document.getElementById(value.toLowerCase());
                    try {
                        element.checked = false;
                    } catch (error) {
                        console.error(error);
                        console.log(value.toLowerCase());
                    }
                   
                    

                };
            } catch (e) {
                
                console.error(e)
                //verbose  console.log("unchecked is null");

            }

        }

        checkboxConversion();
 

        for (let answers in saved_a["replace"]) {
            let singleOption = {};
            singleOption[answers] = saved_a["replace"][answers];
            //verbose  console.log(singleOption);
            const before = "$_" + answers.split("_")[1].toUpperCase() ;
            find_replace(before, singleOption[answers]);

        }
        //verbose  console.log("answer reload is finished");
        issue_warning(name);

        let unfinished = compare_replace(window.temp_a, saved_a);
        let p_bar = document.getElementById("p-bar");

        let percentage = (unfinished[2] + unfinished[3]) / (unfinished[0] + unfinished[1]) * 100;
        if (percentage === 100 && old_percentage != 100) {
            toast_list[6].show();
        }
        old_percentage = percentage;
        p_bar.style.setProperty("width", Math.ceil(percentage) + "%");
        p_bar.innerHTML = Math.ceil(percentage) + "%";
        p_bar.setAttribute("aria-valuenow", Math.ceil(percentage));

        let checkboxes = document.querySelectorAll(".form-check-input");
        checkboxes.forEach(e => {

            const classList = Array.from(e.classList);
            const class_name = classList.filter((word)=> word.includes("checkbox_"))
            if(class_name.length>0){
            e.setAttribute("onfocusin", 'checkboxOnfocusin(this)');
            e.setAttribute("onfocusout", 'checkboxOnfocusout(this)');
            e.setAttribute("onmouseover", 'this.focus()');
            e.setAttribute("onclick", ' sc1(this)');
            e.setAttribute("name", e.id);
            e.setAttribute("onchange", "get_option(this)");
            }
            
        }

        );
        
        checkboxSelection(),
        allCheckbox();
        
        
        convertedEle = document.getElementById("doc3").innerHTML;
        //window.doc_name = name;
        // e.setAttribute("onchange", "const col1 = new bootstrap.Collapse('."+id+"Repo', {toggle: false});if(this.checked == true){col1.show();}else{col1.hide();}");
        try {
            window.wordcloud =="true" ? {}: document.querySelector("#doc3").querySelector("#vis").remove();
        } catch (error) {
            
        }
        
    }
    function checkboxOnfocusin(ele){
        const elem1 = document.querySelectorAll("."+ele.id); 
        elem1.forEach(e =>{ e.classList.add("border-highlight"); 
        if(e.querySelector("li")!=null){e.querySelector("li").classList.add("border-highlight")}  });
         set_scrollbar_marker( scroll_marker,elem1 )
    }

    function checkboxOnfocusout(ele){
        const elem2 = document.querySelectorAll("."+ele.id);
        elem2.forEach(e => {e.classList.remove("border-highlight"); 
        if(e.querySelector("li")!=null){e.querySelector("li").classList.remove("border-highlight")}}); 
        let remove = Array.from(document.getElementsByName("scroll-bar-span")); 
        remove.forEach(e => {e.remove()})
    }

    function checkboxSelection(){
        let c2Checked = [];
        let c2Unchecked = [];
        document.querySelectorAll(".checkbox_2").forEach((e) => {
            if (e.checked) {
                c2Checked.push(e);
            } else {
                c2Unchecked.push(e);
            }



        });
        c2Unchecked.forEach(
            (e) => {
                const id = e.getAttribute("id");
                try {
                    let repolist = document.querySelectorAll('.' + id + 'repo');
                    repolist.forEach(item => {
                        //console.log(item.id);
                        const col1 = new bootstrap.Collapse("#" + item.id, { toggle: false });
                        col1.hide();
                    });
                } catch (e) { 
                console.log(e) 
                };
            }
        );
        c2Checked.forEach(
            (e) => {
                const id = e.getAttribute("id");
                try {
                    let repolist = document.querySelectorAll('.' + id + 'repo');
                    repolist.forEach(item => {
                        const col1 = new bootstrap.Collapse("#" + item.id, { toggle: false });
                        col1.show();
                    });
                } catch (e) { 
                    //console.log(e)
                 };
            }
        );


    }
    /**
* @function upload_image
* @description function to upload an image
* @global
*/
    function upload_image() {
        try { document.getElementById('vis').children[0].remove(); } catch (e) { }


        document.getElementById('vis').innerHTML = '<img id="front_page" src="" width="100%" height="100%" viewBox="0 0 600 600 alt="Image preview..." >';
        let front_page = document.getElementById('front_page');
        let image = document.getElementById('image_upload').files[0];
        let reader = new FileReader();

        reader.addEventListener("load", function () {

            front_page.src = reader.result;
        }, false);

        if (image) {
            reader.readAsDataURL(image);
        }
    }


    /** 
     * @function get_option	
     * @description checkbox submission function, 
     * @global
     */

     function get_option(this_element) {

        const classList = Array.from(this_element.classList);
        const class_name = classList.filter((word)=> word.includes("checkbox_"))
        console.log("class name for question is " + class_name);
        const checked = document.querySelectorAll(`.${class_name}:checked`);
        const unchecked = document.querySelectorAll(`.${class_name}:not(:checked)`);
        const checked_list = [];
        checked.forEach(element => checked_list.push(element.id));
        const unchecked_list = [];
        unchecked.forEach(element => unchecked_list.push(element.id));
        console.log("uncheck and checked \n" + checked_list + "\n"+  unchecked_list)
        saved_a["checkbox"][class_name] = {
            "checked": checked_list,
            "unchecked": unchecked_list
        };
        let singleOption = {};
        singleOption[class_name] = {
            "checked": checked_list,
            "unchecked": unchecked_list
        };

        //verbose  console.log("+++++++++++++++++" + checked_list);


        load_dmp(reload_answers, doc_name);

        }


        function sc1(ele){
            checkboxOnfocusout(ele); setTimeout(()=> {
                scroll_y  = document.getElementById("split-0").scrollTop;
            punctualReplaced || classicMode ? load_dmp(reload_answers, doc_name)  :singleCheckbox(ele.id);}, "0"); 
            setTimeout(()=> { checkboxOnfocusin(ele), saveToLocalStorage(doc_name)}, "500")
            
            
        }
    function allCheckbox(){
        let allchecked = [];
        setTimeout(e=>{
            //document.querySelectorAll(".checkboxConverted").forEach(e=>{e.classList.add("d-none")});
            for (const [index, boxes] of Object.entries(saved_a["checkbox"])){
            allchecked.push(...boxes["checked"]);
            
        }
        for (const check of allchecked){
            singleCheckbox(check.toLowerCase());
        }

        

        let allunchecked = [];
        for (const [index, boxes] of Object.entries(saved_a["checkbox"])){
            allunchecked.push(...boxes["unchecked"]);
            
        }
        allunchecked= allunchecked.map(v => v.toLowerCase());
        for (const uncheck of allunchecked){
            //singleCheckbox(check.toLowerCase());
            const checkboxContent = document.querySelectorAll("."+uncheck);
            checkboxContent.forEach(
            e=>{
                const operator = e.dataset.operator.split("|");
                const found = operator.slice(0,-1).every(e=> allunchecked.includes(e));
                if (operator.length >= 2){
                   
               if(found){
                e.classList.add("d-none");
               }else{
                e.classList.remove("d-none");
               }
             }else{
                e.classList.remove("d-none");
             }
            }
        ) ;
        }

        }, "100")
    }

    function singleCheckbox(ele){
        
        checkboxSelection();
        let allchecked = [];
        for (const [index, boxes] of Object.entries(saved_a["checkbox"])){
            allchecked.push(...boxes["checked"])
            
        }
        //console.log(ele);
        allchecked = allchecked.map(v => v.toLowerCase());
        const checkboxContent = document.querySelectorAll("."+ele);
        
        checkboxContent.forEach(
            e=>{
                //debug=e.classList.contains("check_genomic");
                const operator = e.dataset.operator.split("|");
                const found = allchecked.some(ele=> e.classList.contains(ele));
                //console.log(e)
                
                if (operator.length == 2){
                    
               if(found){
                e.classList.remove("d-none");
               }else{
                e.classList.add("d-none");
               }
                }
             else if (operator.length > 2){

               if(found){
                e.classList.remove("d-none");
               }else{
                e.classList.add("d-none");
               }

             }else{
               
                if(found){
                   
                e.classList.add("d-none");
               }else{
                e.classList.remove("d-none");
               }
             }
            }
        ) ;
        
    

    }
        function answerPunctual(textall){
            textall= textall.replaceAll("and.", "."),
            textall= textall.replaceAll(", .", "."), 
            textall= textall.replaceAll("..", "."),
            textall= textall.replaceAll("..", ""),
            textall= textall.replaceAll(". .", "."),
            textall= textall.replaceAll(" ,", ","),
            textall= textall.replaceAll(",,", ","), 
            textall= textall.replaceAll(",,", ""),
            textall= textall.replaceAll(" .", ".");
            return textall
        }
        function punctual(){
            let noDisplay = document.getElementById("doc3").querySelectorAll(".d-none");
        noDisplay.forEach(e=>{ e.innerHTML= "" });
            punctualReplaced = true;
            removeArtifact("and.", "."),
            removeArtifact(", .", "."), 
            removeArtifact("..", "."),
            removeArtifact("..", ""),
            removeArtifact(". .", "."),
            removeArtifact(" ,", ","),
            removeArtifact(",,", ","), 
            removeArtifact(",,", ""), 
            removeArtifact(" .", ".");
            setTimeout(() => {
            removeComma("list-to-remove-comma", " and"),
                document.getElementById("split-0").scrollTop = scroll_y,
                console.log("the window is scrolled to: " + scroll_y);
            }, "50");
        }



        function removeComma(className, text){

            const allSpan = document.getElementById("doc3").querySelectorAll("."+className);
            allSpan.forEach( ele=> {
                if (ele.innerHTML.includes(" and</span>") ){
                    console.log("and exist, pass")

                }else{
                    ele.innerHTML = ele.innerHTML.replace(/,(?=[^,]+$)/, ' '+text);
                }
            }   )

            }

        function removeArtifact(text1, text2){
            
            while (window.find(text1, aCaseSensitive = 0, aBackwards = is_firefox, aWrapAround = 1,
                    aWholeWord = 0, aSearchInFrames = is_firefox, aShowDialog = 0)) {
                    let last_letter;
                    const w_selection = window.getSelection();
                    const range = w_selection.getRangeAt(0);
                    //console.log(range.toString());
                    const cloned_range = range.extractContents();
                    
                    //console.log(cloned_range);
                
                   // range.deleteContents();
                    range.insertNode(document.createTextNode(text2))
                
                }

            }

        
    // function get_option(this_element) {


    //     const class_name = this_element.dataset.checkbox;
    //     //verbose  console.log("class name for question is " + class_name);
    //     const checked = document.querySelectorAll(`.${class_name}:checked`);
    //     const unchecked = document.querySelectorAll(`.${class_name}:not(:checked)`);
    //     const checked_list = [];
    //     checked.forEach(element => checked_list.push(element.id));
    //     const unchecked_list = [];
    //     unchecked.forEach(element => unchecked_list.push(element.id));
    //     //verbose  console.log("uncheck and checked" + checked_list, unchecked_list)
    //     saved_a["checkbox"][class_name] = {
    //         "checked": checked_list,
    //         "unchecked": unchecked_list
    //     };
    //     trim_saved_a(saved_a);
    //     window.localStorage.setItem("saved_a", JSON.stringify(saved_a));

    //     //verbose  console.log("+++++++++++++++++" + checked_list);


    //     //load_dmp(reload_answers, name = doc_name);


    // }

    // go to the highlighted location
    function go_to(element1) {
        const warning = element1.value;
        //verbose  console.log("the warning text tag is " + warning);
        const element = document.getElementById(warning);
        try {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        } catch (error) {
            alert("warning issue is already resolved, please close this warning");
            console.error("element not found");
        };
        try {
            const caused_ele = element;
            caused_ele.setAttribute("class", "c1 text-danger border-highlight");
            //verbose  console.log("highlited");
            setTimeout(() => {
                caused_ele.setAttribute("class", "c1 text-danger")
            }, 3000);
            //verbose  console.log("back to normal");
        } catch (error) {

            consloe.log(error);
        };

    }
    function remove_warning(element) {

        let warning_no = element.value;
        let warning = document.getElementById(warning_no).parentElement;
        try {
            warning.remove();
        } catch (error) {

            console.error("element not found");
        }

    }

    function remove_all_warnings() {

        const warning_notification = document.getElementsByName("_warning_notification");
        while (warning_notification.length > 0) {
            //verbose  console.log(warning_notification[0] + " is removed");
            remove_warning(warning_notification[0].children[2]);
            warning_notification[0].remove();

        }

    }

    function issue_warning_show() {
        const all_warning_alert = document.querySelectorAll('[name="issueWarningContent"]');
        const warning_text_location = document.getElementById("warningText");
        warning_text_location.innerHTML = "";
        var warning_notification_text;
        if (all_warning_alert.length >0){
            all_warning_alert.forEach(
            e=>{


                
                const warning_no ="warning_number" +  e.dataset.id;


                let html1 = '<div class="alert alert-danger" role="alert" name="_warning_notification"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>' +  e.dataset.text + '<button type="button" value = "' + warning_no + '" class="btn btn-primary"  onclick ="go_to(this)" >click to check what caused the warning</button><button type="button" value = "' + warning_no + '" class=" btn-close" data-bs-dismiss="alert" aria-label="Close" onclick=remove_warning(this) ></button> </div>';

                
                warning_text_location.innerHTML += html1  ;
                




            }
        )
        }
       
        

        //all_warning_alert.forEach((element) => { element.classList.remove("d-none") });
        //all_warning_text.forEach( (element) => { element.classList.remove("d-none")}  );
        setTimeout(
            e=>{
                document.getElementById("warningText").scrollIntoView({ behavior: "smooth", block: "center" });
            }, "200"
        )
       
    }


    function issue_warning(name) {

        const warning_notification = document.getElementsByName("_warning_notification");
        
        const selection = window.getSelection();
        selection.removeAllRanges();
        let text;
        if (window.find) {

            ns = window.find("#issuewarning", aWrapAround = 1);
            let warning_number = 0;

            if (ns) {
                //remove all elements by the name of warning notification
                while (warning_notification.length > 0) {
                    //verbose  console.log(warning_notification[0] + " is removed");
                    warning_notification[0].remove();
                }

            }
            while (ns) {
                // text range is the text between #issuewarning and #endissuewarning without the tag
                let text_range = window.getSelection().getRangeAt(0).cloneRange();
                // full range is the text between #issuewarning and #endissuewarning include the tag
                let full_range = window.getSelection().getRangeAt(0).cloneRange();
                // relate range is the text related to the warning.
                text_range.setStart(window.getSelection().focusNode, window.getSelection().focusOffset);
                window.find("#endissuewarning");
                let end_range = window.getSelection().getRangeAt(0).cloneRange();
                text_range.setEnd(window.getSelection().anchorNode, window.getSelection().anchorOffset);
                full_range.setEnd(window.getSelection().focusNode, window.getSelection().focusOffset);
                text = text_range.toString();
                //verbose console.log("full range issuewarning text is" + full_range.toString());
                full_range.deleteContents();
                
                let newText = document.createElement("span");
                newText.setAttribute("name" , "issueWarningContent");
                newText.setAttribute("data-id" , warning_number);
                newText.setAttribute("data-text" , text);
                console.log("doc_name is : " + name)
                if (dmpLanguage[name] == "de" ){
                    newText.innerHTML = '<span id= "warning_number' + warning_number + '" name="warning_elements" class = "text-warning"><-- Bitte achten Sie auf den vorhergehenden Satz. ' + text + '</span>';
                }else {
                    newText.innerHTML = '<span id= "warning_number' + warning_number + '" name="warning_elements" class = "text-warning"><-- Please pay attention to the sentence before. ' + text + '</span>';
                }
                
                full_range.insertNode(newText);
                
                ns = window.find("#issuewarning", aWrapAround = 1);
                warning_number = warning_number + 1;
            }

        }

        
    }



    function match_mod(in_range, holders, operator = "") {

        
        //verbose   console.log("mach_mod function: check_box_item: " + before);
        //console.log("holders are : "+ holders);
        const parent_node = document.createElement("span");
        parent_node.classList.add("text-primary");
        let onmouseoverText="", onclickText="", dataOperatorText="", onmouseleaveText="";
        
        for (const holder of holders){
            const idText = "check_" + holder.split("_")[1].toLowerCase();
            const eleName = idText.split("-")[0];
            onmouseoverText += 'const '+eleName+' = document.getElementById("' + idText + '") ;'+eleName+'.parentElement.classList.add("border-highlight");'+eleName+'.focus({preventScroll: true}); ';
            onclickText+= 'document.getElementById("' + idText + '").parentElement.scrollIntoView({  block: "center" });document.getElementById("' + idText + '").focus(); '
            onmouseleaveText += 'document.getElementById("' + idText + '").parentElement.classList.remove("border-highlight");  '
            parent_node.classList.add(idText);
            let after;
            
            if (operator=="!"){
                dataOperatorText = "!"
            }else{
                dataOperatorText += idText +"|";
                //dataOperatorText += idText
            }
        }
        parent_node.classList.add("checkboxConverted");
        parent_node.setAttribute("onmouseover", onmouseoverText);

        parent_node.setAttribute("onclick", onclickText );
        parent_node.setAttribute("onmouseleave",onmouseleaveText );
        parent_node.setAttribute("onclick", onclickText );
        //parent_node.setAttribute("name", idText + "-to-");
        parent_node.setAttribute("data-operator", dataOperatorText);
            const doc_frag = in_range.extractContents();
            //console.log(" doc_frag: " + doc_frag.textContent );
            //const node1 = document.createTextNode(doc_frag);
            parent_node.appendChild(doc_frag);
            //verbose   console.log("mach_mod function: parent_node: " + parent_node.innerHTML);
        
        in_range.insertNode(parent_node);
        in_range.detach();
        //verbose   console.log("in_range is :" + in_range.toString());

        }


    function checkboxConversion(){
    const selection= window.getSelection();
    selection.removeAllRanges();
            // this is very tedious but necessary, because the find and replace of multiple character words in DOI is not trivial.

            if (window.find) //for chrome, firefox
            {
                let ns = window.find("#if", aCaseSensitive = 0, aBackwards = 0, aWrapAround = 1,
                    aWholeWord = 0, aSearchInFrames = is_firefox, aShowDialog = 0);
                while (ns) {
                    // this is very tedious but necessary, because the find and replace of multiple character words in DOM is not trivial.
                    //verbose  console.log("found");
                    
                    let if_range = window.getSelection().getRangeAt(0).cloneRange();
                    window.find(" ", aCaseSensitive = 0, aBackwards = 0, aWrapAround = 0,aWholeWord = 0, aSearchInFrames = is_firefox, aShowDialog = 0);

                    if_range.setEnd(window.getSelection().anchorNode, window.getSelection().anchorOffset);
                    const endif_range_string = "#endif" + if_range.toString().split("#if").slice(-1)[0];

                    window.find(endif_range_string , aCaseSensitive = 0, aBackwards = 0, aWrapAround = 1,
                    aWholeWord = 0, aSearchInFrames = is_firefox, aShowDialog = 0);
                    let endif_range = window.getSelection().getRangeAt(0).cloneRange();
                    //debug = if_range.toString().includes( "#if$_GENOMIC|$_GENETIC");
                    
                    let in_range = document.createRange();                    
                    in_range.setStart(if_range.endContainer, if_range.endOffset);                    
                    try{
                        in_range.setEnd(endif_range.startContainer, endif_range.startOffset-1);
                    } catch(e){
                        //console.error(e);
                        in_range.setEnd(endif_range.startContainer.previousSibling, endif_range.startContainer.previousSibling.length );
                    }
                    
                    const placeholder_strings = if_range.toString().split("#if").slice(-1)[0];
                    const if_type_string = placeholder_strings.slice(0,1);
                    const holders = placeholder_strings.split("|");
                    
                    //console.log("placeholder_strings :"+ placeholder_strings+ " holders: "+ holders + " if_type_string:"+ if_type_string);
                    
                    var if_in = false;
  
                    if (if_type_string == "$"){
                        
                                match_mod(in_range, holders );
                                in_range.detach();
                            //match_remove(in_range);
                    } else if (if_type_string == "!" ){

                                    match_mod(in_range, holders, "!");
                                    in_range.detach();
                                    
                    }else{                        
                    }
                                  
                    //in_range.deleteContents();
                    in_range.detach();
                    if_range.deleteContents();
                    if_range.detach();
                    endif_range.deleteContents();
                    endif_range.detach();
                ns = window.find("#if", aCaseSensitive = 0, aBackwards = 0, aWrapAround = 1,
                    aWholeWord = 0, aSearchInFrames = is_firefox, aShowDialog = 0);
                }
            }



            //else if (document.body.createTextRange) //for ie etc.
            //{
            //	let range_if = document.body.createTextRange();
            //	while (range_if.findText(match_name)) {
            //		range_if.pasteHTML('atest');
            //	}
            //}

            //verbose  console.log("check for loop, ends " + match_name);

        
    }


    /**
     * match a place holder and then remove it.
     * @param {string} right_range - the extended keyword (includes #if and #endif) need to be removed.
     *
     */
    function match_remove(in_range) {
       deb("in range is " + in_range);
        
        in_range.deleteContents();
        in_range.detach();
        

    }

    function HtmlEncode(s) {
        var el = document.createElement("div");
        el.innerText = el.textContent = s;
        s = el.innerHTML;
        return s;
    }

    /**
     * replace a keyword by its formal meaning.
     * @param {string} before - the keyword need to be replaced.
     * @param {string} after - the formal text represented by the keyword.
     */
    function find_replace(before, after, holder=undefined) {

        const selection = window.getSelection();
        selection.removeAllRanges();

        //verbose  console.log("before: " + before + ", after: " + after);

        if (window.find) //for chrome, firefox
        {
            //verbose  console.log("window.find is: " + window.find);
            while (window.find(before, aCaseSensitive = 0, aBackwards = is_firefox, aWrapAround = is_firefox,
                aWholeWord = 0, aSearchInFrames = 0, aShowDialog = 0)) {
                let last_letter;
                let range = window.getSelection().getRangeAt(0).cloneRange();
                    range.extractContents();

                    let newText = document.createElement("span");
                    //debug= before == "$_PROPRIETARY";
                    //deb("before = <"+ before +">");
                    //deb("range = <"+ range.toString() +">");
                    newText.setAttribute("class", "text-warning text-center");
                    if (holder=== undefined){
                        newText.setAttribute("name", (before).split("_")[1] + "-to-");
                        newText.setAttribute("onmouseover", 'const e = document.getElementsByName("' + (before) + '"); e[0].classList.add("border-highlight"); e[0].focus({preventScroll:true})  ');
                        newText.setAttribute("onmouseleave", 'document.getElementsByName("' + (before) + '")[0].classList.remove("border-highlight");  ');
                    }else{

                        newText.setAttribute("name", (holder) + "-to-");
                        newText.setAttribute("onmouseover", 'const e = document.getElementById("' + (holder) + '"); e.parentElement.classList.add("border-highlight"); e.focus({preventScroll:true})  ');
                        newText.setAttribute("onmouseleave", 'document.getElementById("' + (holder) + '").parentElement.classList.remove("border-highlight");  ');
                    }
                    
                    
                    newText.setAttribute("onclick", 'document.getElementsByName("' + (holder||before) + '")[0].parentElement.scrollIntoView({ behavior: "smooth", block: "center" });document.getElementsByName("' + (holder||before) + '")[0].focus(); ');
                    newText.innerHTML = HtmlEncode(after) ;
                    range.insertNode(newText);

                    // }   else{
                    //     debug=true;
                    //     deb("rangeText = <" +rangeText+ ">");


                    // }
            }
        } else if (document.createTextRange) //for ie etc.
        {
            var range = document.createTextRange();
            while (range.findText(before)) {
                range.pasteHTML(after);
            }
        }

    }
    

    
    
    
    
    //progress-bar
    var x = 0;

    window.addEventListener('beforeunload', function (e) {
        // Cancel the event
        e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
        // Chrome requires returnValue to be set
        e.returnValue = '';

    });

    window.addEventListener('pagehide', (event) => {
        scroll_y = document.getElementById("split-0").scrollTop;
        window.localStorage.setItem("scroll_y", scroll_y);
        //verbose console.log("scroll_y page hide to cache is " + scroll_y);
    });


    function loadFromJson(cached_template) {
        dmpEle = document.createElement( "div" );
        dmpEle.innerHTML = dmpStrings[cached_template];

    }
    

    function csvJSON(tsv){

        var lines=tsv.split("\n");

        var result = {};
        var headers=lines[1].split("\t");

        for(var i=1;i<lines.length;i++){

            var obj;
            var currentline=lines[i].split("\t");

            result[currentline[0]] = {"de": currentline[1]};

        }

        //return result; //JavaScript object
        return JSON.stringify(result); //JSON
        }

        async function fetchGoogleCSV(){
        try {
            //read .csv file on a server
            const target = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSFe3-xGgq1a9c2vPKF2v6LQSLQX3t-EPUY-Q-_XYXHwgSBTU4l3R22GVFsl6wVXO4ebiJakEUXCF8K/pub?gid=0&single=true&output=tsv`;

            const res = await fetch(target, {
            
                method: 'get',
                headers: {
                
                    'content-type': 'text/csv;charset=UTF-8',
                }
            });

            if (res.status === 200) {
                const data = await res.text();
                const result = JSON.parse(csvJSON(data));
                return result;
                //document.getElementById("submission").disabled = false;

            } else {
                console.log(`Error code ${res.status}`);
            }
        } catch (err) {
            console.log(err)
        }

        }


    async function translatePage(name){
        googleJSON = await fetchGoogleCSV();
        var list = document.querySelectorAll('span[name="translateTarget"]');
        if (dmpLanguage[name] == "de"){
            list.forEach(e=>{
            try {
                
                e.innerHTML = googleJSON[e.dataset.en].de;
                
            } catch (error) {
              console.log(e.dataset.en);
                console.error(error)
            }
        }); }else{
            list.forEach(e=>{
            try {
                e.innerHTML = e.dataset.en;
            } catch (error) {
                console.error(error)
            }})
        }
        
    }

    // initialization
    window.addEventListener("load", function () {
        cookie_modal = new bootstrap.Modal(document.getElementById('cookie_modal'), {
            keyboard: false
        })
        if (cached_template == null) {
            cached_template = doc_name;
        } else if (cached_template == "user-defined") {
            //doc_name = "user-defined";
            document.getElementById("user-defined").innerHTML = window.localStorage.getItem("fulltext_user");
        } else if (cached_template =="dmp1"){
            cached_template = "Horizon2020_DMP"
        };
        loadFromJson(cached_template);
        if (window.localStorage.getItem("cookie_consent") !== "yes") {

           // cookie_modal.show();
        }
        var toast_el_list = [].slice.call(document.querySelectorAll('.toast'));
        toast_list = toast_el_list.map(function (toast_el) {
            return new bootstrap.Toast(toast_el, { animation: true, dely: 0 })
        });
        window.localStorage.setItem("user_info", "visited");
        answersManagement(cached_template),

        
        load_dmp(reload_answers,cached_template);
        //document.getElementById("split-0").scrollTop= scroll_y;

        //verbose  console.log("current url is: " + window.location.href);
        const urls = window.location.href.split("?");
        if (urls.length > 1) {

            fetch(urls[1])
                .then(response => response.json())
                .then(json => {
                    saved_a = json;
                    updateSavedAnswers2();
                    load_dmp(reload_answers, cached_template);
                })

        }
        const urlroute = window.location.href.split("#");
        switch (urlroute.slice(-1)[0]) {
            case "tutorial":
            window.innerWidth>maxWidth? tour.show() : {};
                break;
            case "Tutorial":
            window.innerWidth>maxWidth? tour.show() : {};
                break;
            case "t":
            window.innerWidth>maxWidth? tour.show() : {};
                break;
            case "Horizon2020":
                load_dmp(reload_answers, "Horizon2020_DMP");
                break;
            case "HorizonEurope":
                load_dmp(reload_answers, "horizon_europe");
                break;
            case "DFG":
                load_dmp(reload_answers, "dfg-dmp");
                break;
            case "dfg":
                load_dmp(reload_answers,"dfg-dmp");
                break;
            case "bmbf":
                load_dmp(reload_answers, "bmbf-dmp");
                break;
            case "PracticeGuide":
                load_dmp(reload_answers, "practical-guide");
                break;
            case "msca":
                load_dmp(reload_answers, "msca-dmp");
                break;



        }
        
        window.upload_json1 = document.getElementById("upload");
        window.upload_json2 = document.getElementById("upload_menu");
        window.upload_maDMP = document.getElementById("upload_maDMP");
        window.import_history = document.getElementById("import_history");

        
        // function openStorageModal() {

        //     const list1 = document.getElementById("current_input");
        //     current_input_answer = JSON.parse(JSON.stringify(saved_a));
            
        //     current_input_answer["update"]["storage"][0]["answer"]= {"replace": saved_a["replace"], "checkbox": saved_a["checkbox"] };
        //     list1.innerHTML = "";
        //     uploaded_origin = 0;
        //     current_origin = 0;

        //     document.getElementById("current_answer_link").innerHTML = "Current input";
        //     document.getElementById("uploaded_answer_link").innerHTML = "Uploaded input";
        //     for (let [key, value] of Object.entries(saved_a["update"]["storage"])) {


        //         const new_option = document.createElement("li");
        //         const option_link = document.createElement("a");

        //         option_link.setAttribute("class", "dropdown-item");
        //         option_link.setAttribute("href", "#");
        //         option_link.setAttribute("onclick", "assign_current_input(this)");
        //         option_link.setAttribute("data-option-no", key);
        //         if (key == 0) {
        //             option_link.innerHTML = "Default cache";
        //             new_option.appendChild(option_link);
        //             list1.appendChild(new_option);
        //         } else if (value["answer"]["timestamp"] != undefined) {

        //             option_link.innerHTML = "Slot " + key + " " + value["answer"]["timestamp"];
        //             new_option.appendChild(option_link);
        //             list1.appendChild(new_option);

        //         }
        //     }

        //     let a2;
        //     try {
        //         upload_json1.files[0].text().then(text => (a2 = JSON.parse(text))).then(a2 => (uploaded_input_answer = a2, update_storage_dropdown(a2), cache_management.show(),
        //             update_table()));

        //     } catch (e) {
        //         upload_json2.files[0].text().then(text => (a2 = JSON.parse(text))).then(a2 => (uploaded_input_answer = a2, update_storage_dropdown(a2), cache_management.show(),
        //             update_table()));
        //     }
            
        //     this.value = null;
        //     return false;

        // }
       
        document.getElementById("word_cloud_switchl").checked = window.wordcloud === "true";
        runWordCloud();
        const dmp1_vis = document.getElementById("wordCloud").querySelector("#vis").childNodes[0].childNodes[1];
        // Options for the observer (which mutations to observe)
        const config = { attributes: true, childList: false, subtree: false };

        var classicSwitch = document.getElementById("classicModeBtn");
        classicSwitch.checked= true;
        classicSwitch.addEventListener('change', function () {
                if (classicSwitch.checked) {
                    classicMode = classicSwitch.checked == true;
                console.log('classic mode on');
                } else {
                    classicMode = classicSwitch.checked == true;
                console.log('classic mode off');
                }
            });

        // Callback function to execute when mutations are observed
        const callback = (mutationList, observer) => {
            for (const mutation of mutationList) {
                var canvas = document.createElement('canvas');
                canvas.setAttribute("width", "600px");
                canvas.setAttribute("height", "600px");

                var ctx = canvas.getContext('2d');
                // instead of using raw xml text, XMLSerializer can produce better html text
                var data = (new XMLSerializer()).serializeToString( document.getElementById("wordCloud").querySelector("#vis").childNodes[0]);
                var DOMURL = window.URL || window.webkitURL || window;
                var img = new Image();
                var svg = new Blob([data], { type: 'image/svg+xml;charset=utf-8' });
                var url = DOMURL.createObjectURL(svg);
                var png = new Image();
                img.onload = function () {
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    DOMURL.revokeObjectURL(url);
                    const png_url = canvas.toDataURL('image/png');
                    png.src = png_url;
                }

                img.src = url;
                try {
                    document.getElementById("doc3").querySelector("#vis").innerHTML = "";
                } catch (error) {

                }

                if (mutation.type === 'childList') {
                    //verbose  console.log('A child node has been added or removed.');
                    try {
                        document.getElementById("doc3").querySelector("#vis").appendChild(png);
                        png.setAttribute("style", "max-width:100%");
                        png.setAttribute("class", "mx-auto d-block");
                    } catch (error) {

                    }

                } else if (mutation.type === 'attributes') {
                    //verbose  console.log(`The ${mutation.attributeName} attribute was modified.`);
                    try {
                        document.getElementById("doc3").querySelector("#vis").appendChild(png);
                        png.setAttribute("style", "max-width:100%");
                        png.setAttribute("class", "mx-auto d-block");
                    } catch (error) {

                    }
                } else if (mutation.type === 'subtree') {
                    //verbose  console.log(`subtree`);
                    try {
                        document.getElementById("doc3").querySelector("#vis").appendChild(png);
                        png.setAttribute("style", "max-width:100%");
                        png.setAttribute("class", "mx-auto d-block");
                    } catch (error) {

                    }
                }
            }

        };
        const proposalEle = document.getElementById("proposalText");
        proposalEle.value = `
        Proposal for Horizon Europe Funding Programme
Project Title: GreenTech Innovations
Acronym: GTI-2024
Project Coordinator: Dr. Jane Doe
Funding Programme: Horizon Europe - Action Number 101095
Proposal Creation Date: 2023-10-15
Last Modification Date: 2023-11-01

Executive Summary
The project titled GreenTech Innovations focuses on an innovative study of sustainable energy solutions and aims at reducing carbon emissions by 30% in urban environments . This initiative builds upon the successes and insights gained from EcoFuture 2020 , leveraging advanced methodologies and cutting-edge technologies to achieve its ambitious goals.
Our team, comprising Green Energy Corp., UrbanSolutions Ltd., and EcoNova Research Institute , is committed to delivering impactful results that will benefit a wide range of stakeholders, including industry leaders, policymakers, and academic researchers who can also use the data for different purposes . The project is set to commence in March 2024 and will adhere to rigorous data management practices as outlined in our Data Management Plan (DMP) version 1.0 .

Objectives and Aims
The primary aim of GreenTech Innovations is to reduce carbon emissions by 30% in urban environments . By doing so, we hope to address key challenges in sustainable energy solutions , leading to significant advancements in the field. Our objectives include:
Developing new methodologies for urban energy efficiency .
Enhancing existing tools and utilizing MATLAB and AutoCAD software to maximize efficiency.
Ensuring that both raw (sensor data from IoT devices ) and derived data (carbon emission models ) are meticulously documented and accessible for future research.
3. Methodology
To achieve our objectives, we will employ a multi-disciplinary approach that integrates various scientific methods and standards, including ISO 14001 for environmental management . Our strategy involves:

Collaboration with Green Energy Corp., UrbanSolutions Ltd., and EcoNova Research Institute to gather comprehensive datasets.
Regular updates and modifications tracked via 2023-11-01 .
Utilizing other repositories such as Zenodo and Figshare for data storage and sharing.
4. Data Management Plan (DMP)
4.1 Data Utility
The data generated by GreenTech Innovations will be highly valuable not only to researchers but also to industry leaders, policymakers, and academic researchers who can also use the data for different purposes . We will ensure that all data types, including time-series sensor data , are well-documented and available in formats like CSV, JSON, and proprietary binary formats .

4.2 Roles and Responsibilities
Data Officer: Dr. Sarah Johnson
Primary Contact: Dr. Jane Doe (Email: jane.doe@greentechinnovations.eu )
4.3 Data Storage and Sharing
We will utilize a combination of proprietary and open-source software solutions to manage sensor data from IoT devices and carbon emission models . Regular backups and version control will be maintained to prevent data loss and ensure data integrity.

Expected Impact
GreenTech Innovations is expected to have a transformative impact on sustainable energy solutions . By achieving a 30% reduction in carbon emissions in urban environments , we anticipate:
Advancements in industry practices.
Enhanced policy-making capabilities for politicians.
Educational benefits for students and academic institutions.
6. Conclusion
In summary, GreenTech Innovations represents a significant step forward in understanding and addressing challenges related to sustainable energy solutions . With the support of the Horizon Europe funding programme, we are confident in our ability to deliver groundbreaking results that will benefit a diverse array of stakeholders.

For further information or inquiries, please contact:

Dr. Jane Doe
Email: jane.doe@greentechinnovations.eu

Note: All details provided above are fictional and intended for illustrative purposes only.
        
        `
        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations


        observer.observe(dmp1_vis, config);


    });
    function importHistory(){
            try {
                import_history.files[0].text().then(text => (history = JSON.parse(text))).then((history) => {exportHistory(); inputHistory=history; window.localStorage.setItem("inputHistor", history), updateHistoryHTML(import_history.dataset.elename)});

            } catch (e) {
                console.log(e);}
        }

        function AIToDataPLAN(){
            const textarea = document.getElementById("aiGeneratedJSON");
            const json = extractJSONCodeBlock(textarea.value);
            if (json){
                handleInputJson(json);
                document.getElementById("proposal2dmp_modal_close").click();
            }
           

        }


     /**
         * Opens the storage modal and initializes the dropdown with saved or uploaded data.
         * 
         * @param {string|Object} [inputJson] - Optional input JSON (string or object). If not provided, uses `upload_json1.files[0]`.
         */
         function openStorageModal(inputJson = null) {
            try {
                // Reset UI elements
                const list1 = document.getElementById("current_input");
                list1.innerHTML = "";
                uploaded_origin = 0;
                current_origin = 0;

                // Set default links
                document.getElementById("current_answer_link").innerHTML = "Current input";
                document.getElementById("uploaded_answer_link").innerHTML = "Imported input";

                // Initialize current input answer
                current_input_answer = JSON.parse(JSON.stringify(saved_a));
                current_input_answer["update"]["storage"][0]["answer"] = {
                    replace: saved_a["replace"],
                    checkbox: saved_a["checkbox"]
                };

                // Populate the dropdown with saved data
                populateDropdown(list1, saved_a["update"]["storage"]);

                // Handle input JSON (either from argument or file upload)
                handleInputJson(inputJson);
            } catch (error) {
                console.error("Error in openStorageModal:", error.message);
            }
        }

        /**
         * Populates the dropdown list with the given storage data.
         * 
         * @param {HTMLElement} listElement - The dropdown list element to populate.
         * @param {Object[]} storageData - Array of storage data objects.
         */
        function populateDropdown(listElement, storageData) {
            for (const [key, value] of Object.entries(storageData)) {
                const newOption = document.createElement("li");
                const optionLink = document.createElement("a");

                optionLink.setAttribute("class", "dropdown-item");
                optionLink.setAttribute("href", "#");
                optionLink.setAttribute("onclick", "assign_current_input(this)");
                optionLink.setAttribute("data-option-no", key);

                if (key == 0) {
                    optionLink.innerHTML = "Cache No.1";
                } else if (value["answer"]["timestamp"] !== undefined) {
                    optionLink.innerHTML = `Slot ${key} ${value["answer"]["timestamp"]}`;
                }

                newOption.appendChild(optionLink);
                listElement.appendChild(newOption);
            }
        }

        /**
         * Handles the input JSON, either from the argument or file upload.
         * 
         * @param {string|Object} inputJson - Input JSON (string or object). If null, uses `upload_json1.files[0]`.
         */
        async function handleInputJson(inputJson) {
            let parsedJson;

            try {
                if (inputJson) {
                    // Use provided input JSON
                    parsedJson = typeof inputJson === "string" ? JSON.parse(inputJson) : inputJson;
                    window.uploaded_input_answer = JSON.parse(JSON.stringify(saved_a));
                    
                    window.uploaded_input_answer.replace = parsedJson.replace;
                } else {
                    // Use file upload
                    const file = upload_json1.files[0] || upload_json2.files[0];
                    if (!file) {
                        throw new Error("No file selected.");
                    }
                    const fileText = await file.text();
                    parsedJson = JSON.parse(fileText),
                    window.uploaded_input_answer = parsedJson;
                    
                }

                // Process the parsed JSON
                
                    update_storage_dropdown(window.uploaded_input_answer);
                cache_management.show();
                    update_table();
                
            } catch (error) {
                console.error("Error handling input JSON:", error.message);
            }
        }

    function answerStorageUpdate(answers) {
        try {
            answers["update"];
            answers["update"]["storage"];
            answers["update"]["storage"][0]["answer"]["replace"]["$_PROJECTNAME"];
        } catch (e) {
            answers.update = {};
            answers.update.storage = [
                { "answer": {}, "name": "", },
                { "answer": {}, "name": "", },
                { "answer": {}, "name": "", },
                { "answer": {}, "name": "", },
                { "answer": {}, "name": "" , },
                { "answer": {}, "name": "" , },

            ];
            answers["update"]["storage"][0]["answer"]["replace"] = answers["replace"];
            answers["update"]["storage"][0]["answer"]["checkbox"] = answers["checkbox"];
        };
        if (answers["update"]["storage"].length < 5) {
            answers["update"]["storage"] = [
                { "answer": {}, "name": "" , },
                { "answer": {}, "name": "" , },
                { "answer": {}, "name": "" , },
                { "answer": {}, "name": "" , },
                { "answer": {}, "name": "" , },
                { "answer": {}, "name": "" , },

            ];
            answers["update"]["storage"][0]["answer"]["replace"] = answers["replace"];
            answers["update"]["storage"][0]["answer"]["checkbox"] = answers["checkbox"];
        } else if (answers["update"]["storage"].length == 5) {
            answers["update"]["storage"].push({ "answer": [], "name": [], });
            answers["update"]["storage"][5] = answers["update"]["storage"][4];
            answers["update"]["storage"][4] = answers["update"]["storage"][3];
            answers["update"]["storage"][3] = answers["update"]["storage"][2];
            answers["update"]["storage"][2] = answers["update"]["storage"][1];
            answers["update"]["storage"][1] = answers["update"]["storage"][0];
            answers["update"]["storage"][0]["answer"]["replace"] = answers["replace"];
            answers["update"]["storage"][0]["answer"]["checkbox"] = answers["checkbox"];
        } else {
            answers["update"]["storage"][0]["answer"]["replace"] = answers["replace"];
            answers["update"]["storage"][0]["answer"]["checkbox"] = answers["checkbox"];
        }
        return answers;
    }
    function update_storage_dropdown(a2) {
        const list2 = document.getElementById("uploaded_input");
        list2.innerHTML = "";

        uploaded_input_all = answerStorageUpdate(a2);
        for (let [key, value] of Object.entries(uploaded_input_all["update"]["storage"])) {

            const new_option = document.createElement("li");
            const option_link = document.createElement("a");


            option_link.setAttribute("class", "dropdown-item");
            option_link.setAttribute("href", "#");
            option_link.setAttribute("onclick", "assign_uploaded_input(this)");
            option_link.setAttribute("data-option-no", key);
            if (key == 0) {
                option_link.innerHTML = "Cache No.1";
                new_option.appendChild(option_link);
                list2.appendChild(new_option);


            } else if (value["answer"]["timestamp"] === undefined) {



            } else {
                option_link.innerHTML = "Slot " + key + " " + value["answer"]["timestamp"];
                new_option.appendChild(option_link);
                list2.appendChild(new_option);

            }



        }
        // at the initiation, the top level answer is used.	





    }

    function assign_current_input(element) {
        let a = saved_a;
        element.parentElement.parentElement.previousElementSibling.innerHTML = element.innerHTML.split(",")[0];
        const no = element.getAttribute("data-option-no");
        current_origin = no;

        update_table();
        saved_a["replace"] = saved_a["update"]["storage"][current_origin]["answer"]["replace"];

    }


    function assign_uploaded_input(element) {
        const no = element.getAttribute("data-option-no");
        element.parentElement.parentElement.previousElementSibling.innerHTML = element.innerHTML.split(",")[0];
        uploaded_origin = no;
        uploaded_input_answer = uploaded_input_all["update"]["storage"][uploaded_origin]["answer"];
        update_table();


    }

    function update_table() {

        const compare_list = compare_answers(saved_a["update"]["storage"][current_origin]["answer"], uploaded_input_all["update"]["storage"][uploaded_origin]["answer"]);

        const body = document.getElementById("cache_management_modal_body");
        const table = document.createElement("div");

        for (let [key, value] of Object.entries(saved_a["update"]["storage"][current_origin]["answer"]["replace"])) {
            const row = document.createElement("div");

            const key_pool = compare_list["4"];
            row.setAttribute("class", "row border-bottom border border-1 mb-1");
            
            
            row.setAttribute("name", "input_table_row");
            const col1 = document.createElement("div");
            col1.setAttribute("class", "col-3");
            col1.setAttribute("style", "overflow-wrap: break-all; word-break: break-all;");
            col1.innerHTML = key.toUpperCase().split("_")[1];
            const col2 = document.createElement("div");
            col2.innerHTML = value;
            col2.setAttribute("class", "col-4");
            const col3 = document.createElement("div");
            col3.setAttribute("class", "col-4");
            col3.innerHTML = uploaded_input_answer["replace"][key];
            const col4 = document.createElement("div");
            col4.setAttribute("class", "col-1");

            const col4_button = document.createElement("input");

            col4_button.setAttribute("class", "form-check-input");
            col4_button.setAttribute("type", "checkbox");
            col4_button.setAttribute("aria-label", "...");
            col4_button.setAttribute("id", "storage_checkbox_" + key);
            //verbose  console.log(key);



            col4_button.addEventListener("change", function () {
                if (this.checked) {
                    saved_a["update"]["storage"][current_origin]["answer"]["replace"][key] =
                        uploaded_input_all["update"]["storage"][uploaded_origin]["answer"]["replace"][key];
                    row.setAttribute("style", "background-color: #f0f5e6");
                    col2.innerHTML = uploaded_input_answer["replace"][key];

                    saved_a["replace"][key] = saved_a["update"]["storage"][current_origin]["answer"]["replace"][key];

                    const now = new Date();
                    saved_a["update"]["storage"][current_origin]["answer"]["timestamp"] = now.toLocaleString();
                    load_dmp(reload_answers, doc_name);
                    reload_answers(doc_name);
                } else {
                    saved_a["update"]["storage"][current_origin]["answer"]["replace"][key] = value;
                    row.setAttribute("style", "background-color: #E6A5B0");
                    col2.innerHTML = value;
                    saved_a["replace"][key] = value;
                    load_dmp(reload_answers,doc_name);
                    reload_answers(doc_name);



                }
            }

            );


            if (Object.values(key_pool).includes(key)) {
                row.setAttribute("style", "background-color: #f0f5e6")

            } else {
                col4.append(col4_button);
                row.setAttribute("style", "background-color: #E6A5B0");
            }

            row.append(col1, col2, col3, col4);
            value == "" ? console.log("empty input") : table.append(row);



        }

        for (let [key, value] of Object.entries(saved_a["update"]["storage"][current_origin]["answer"]["checkbox"])) {
            const row = document.createElement("div");
            const key_pool = compare_list["5"];
            row.setAttribute("class", "row border-bottom border border-1 mb-1");
            row.setAttribute("name", "input_table_row");
            const col1 = document.createElement("div");
            col1.setAttribute("class", "col-3");
            col1.innerHTML = key.toUpperCase().split("_")[1];
            const col2 = document.createElement("div");
            col2.innerHTML = JSON.stringify(value, null, "\t");
            col2.setAttribute("class", "col-4");
            const col3 = document.createElement("div");
            col3.setAttribute("class", "col-4");
            col3.innerHTML = JSON.stringify(uploaded_input_answer["checkbox"][key], null, "\t");
            const col4 = document.createElement("div");
            col4.setAttribute("class", "col-1");

            const col4_button = document.createElement("input");

            col4_button.setAttribute("class", "form-check-input");
            col4_button.setAttribute("type", "checkbox");
            col4_button.setAttribute("aria-label", "...");
            col4_button.setAttribute("id", "storage_checkbox_checkbox_" + key);
            //verbose  console.log(key);



            col4_button.addEventListener("change", function () {
                if (this.checked) {
                    saved_a["update"]["storage"][current_origin]["answer"]["checkbox"][key] =
                        uploaded_input_all["update"]["storage"][uploaded_origin]["answer"]["checkbox"][key];
                    row.setAttribute("style", "background-color: #f0f5e6");
                    col2.innerHTML = JSON.stringify(uploaded_input_answer["checkbox"][key], null, "\t");
                    this.checked = true;
                    saved_a["checkbox"][key] = saved_a["update"]["storage"][current_origin]["answer"]["checkbox"][key];

                    const now = new Date();
                    saved_a["update"]["storage"][current_origin]["answer"]["timestamp"] = now.toLocaleString();
                    load_dmp(reload_answers,cached_template);
                } else {
                    saved_a["update"]["storage"][current_origin]["answer"]["checkbox"][key] = current_input_answer["update"]["storage"][current_origin]["answer"]["checkbox"][key];
                    row.setAttribute("style", "background-color: #E6A5B0");
                    col2.innerHTML = JSON.stringify(value, null, "\t");
                    saved_a["checkbox"][key] = saved_a["update"]["storage"][current_origin]["answer"]["checkbox"][key];
                    load_dmp(reload_answers,cached_template);
                }
            }
            );
            if (Object.values(key_pool).includes(key)) {
                row.setAttribute("style", "background-color: #f0f5e6")

            } else {
                col4.append(col4_button);
                row.setAttribute("style", "background-color: #E6A5B0");
            }

            row.append(col1, col2, col3, col4);
            value == "" ? console.log("empty input") : table.append(row);
        }
        try { document.querySelectorAll('[name="input_table_row"]').forEach(e => e.remove()); }
        catch (e) { };
        body.append(table);
    }

    function overwrite_all() {
        toast_list[2].show();
        window.saved_a["replace"] = uploaded_input_all["replace"];
        window.saved_a["checkbox"] = uploaded_input_all["checkbox"];
        window.saved_a = uploaded_input_all;
        updateSavedAnswers2();
        window["saved_a_"+dmpLanguage[doc_name]]=window.saved_a;
        document.getElementById("template-input-content").innerHTML = uploaded_input_all["templateText"];
        window.localStorage.setItem("fulltext_user",uploaded_input_all["templateText"] );
        setTimeout(
        e =>{    
            load_dmp(reload_answers,doc_name);reload_answers(doc_name);}, 100

        )
        
        
        ////verbose  console.log(JSON.stringify(saved_a));


    }
    function overwrite_current() {
        const now = new Date();
        saved_a["replace"] = uploaded_input_all["update"]["storage"][uploaded_origin]["answer"]["replace"];
        saved_a["update"]["storage"][current_origin]["answer"]["replace"] = uploaded_input_all["update"]["storage"][uploaded_origin]["answer"]["replace"];
        saved_a["update"]["storage"][current_origin]["answer"]["timestamp"] = uploaded_input_all["update"]["storage"][uploaded_origin]["answer"]["timestamp"];

        saved_a["checkbox"] = uploaded_input_all["update"]["storage"][uploaded_origin]["answer"]["checkbox"];
        saved_a["update"]["storage"][current_origin]["answer"]["checkbox"] = uploaded_input_all["update"]["storage"][uploaded_origin]["answer"]["checkbox"];
        saved_a["update"]["storage"][current_origin]["answer"]["timestamp"] = now.toLocaleString();
        updateSavedAnswers2();
        window["saved_a_"+dmpLanguage[doc_name]]=window.saved_a;
        setTimeout(
        e =>{        
            load_dmp(reload_answers,doc_name);reload_answers(doc_name);}, 100

        )
        syn_load_cache();
        toast_list[1].show();
        ////verbose  console.log(JSON.stringify(saved_a));

    }
    function syn_load_cache() {

        const cached_timestamp = saved_a["update"]["storage"].map((e) => e["answer"]);
        const saved_timestamp = document.querySelectorAll('[name="load_from_cache"]');

        saved_timestamp.forEach((e, index) => {
            if (cached_timestamp[index + 1]["timestamp"] != undefined) { e.innerHTML = cached_timestamp[index + 1]["timestamp"] } else {
                e.innerHTML = "Empty Slot";

            }
        });



    }


    function copy_doc() {
        punctual();
        const compared_list = compare_replace(temp_a, saved_a);
        let warning_element_children = Array.from(Array(99).keys());

        if ((compared_list[2] == compared_list[0]) && (compared_list[3] == compared_list[1])) {
            issue_warning_show();
            warning_element_children = document.getElementById("warningText").children;
            if (warning_element_children[0] == undefined) {
                dmp_update(saved_a);
                copy_doc1();
            } else {
                update_reminder(compared_list, warning_element_children);
            }

        } else {

            update_reminder(compared_list, warning_element_children);
        }

    }

    function copy_doc1() {
        try {
            document.querySelector(".tour-exit").click();

        } catch (e) { };
        runWordCloud();
        const text = document.getElementById("doc3");
        const text_start = text.querySelector("#text_start");

        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        //range.setStart(text_start,0);
        selection.addRange(range);
        try {



            document.execCommand("copy");  // Security exception may be thrown by some browsers.
            toast_list[0].show();




        } catch (error) {
            console.warn("Copy to clipboard failed.", error);


            return false;
        }

    }

    function printDiv() {
        const compared_list = compare_replace(temp_a, saved_a);
        let warning_element_children = Array.from(Array(99).keys());

        if ((compared_list[2] == compared_list[0]) && (compared_list[3] == compared_list[1])) {
            issue_warning_show();
            warning_element_children = document.getElementById("warningText").children;
            if (warning_element_children[0] == undefined) {
                try {
                    dmp_update(saved_a);
                    return printDiv1("doc3"); // Security exception may be thrown by some browsers.
                    const selection = window.getSelection();

                } catch (error) {
                    console.warn("print failed.", error);
                    return false;
                }
            } else {
                update_reminder(compared_list, warning_element_children);
            }

        } else {

            update_reminder(compared_list, warning_element_children);
        }

    }

    function save_to_cache(id, name = " ") {
        if (saved_a["update"]["storage"].length < 5) {
            saved_a["update"]["storage"] = [
                { "answer": { "replace": saved_a["replace"], "checkbox": saved_a["checkbox"] }, "name": [], },
                { "answer": {}, "name": "" , },
                { "answer": {}, "name": "" , },
                { "answer": {}, "name": "" , },
                { "answer": {}, "name": "" , },
                { "answer": {}, "name": "" , },



            ];


        } else if (saved_a["update"]["storage"].length == 5) {
            saved_a["update"]["storage"].push({ "answer": [], "name": [], });
            saved_a["update"]["storage"][5] = saved_a["update"]["storage"][4];
            saved_a["update"]["storage"][4] = saved_a["update"]["storage"][3];
            saved_a["update"]["storage"][3] = saved_a["update"]["storage"][2];
            saved_a["update"]["storage"][2] = saved_a["update"]["storage"][1];
            saved_a["update"]["storage"][1] = saved_a["update"]["storage"][0];
            saved_a["update"]["storage"][0] = { "answer": { "replace": saved_a["replace"], "checkbox": saved_a["checkbox"] }, "name": [], };
        }
        if (Object.keys(saved_a["update"]["storage"][id]["answer"]).includes("replace")) {
            let confirm_overwrite = confirm("There is already a saved answer, do you want to overwrite saved answer here?");
            if (confirm_overwrite) {
                save_to_cache1(id, name);
                toast_list[3].show();
            } else {
                toast_list[4].show();
            }


        } else {

            save_to_cache1(id, name);
        }



    }

    function save_to_cache1(id, name = " ") {
        const now = new Date();
        saved_a["update"]["storage"][id]["answer"] = { "replace": JSON.parse(JSON.stringify(saved_a["replace"])), "checkbox": JSON.parse(JSON.stringify(saved_a["checkbox"])), "timestamp": now.toLocaleString() };
        saved_a["update"]["storage"][id]["name"] = name;
        trim_saved_a(saved_a);
        saveToLocalStorage(doc_name);
        let update_element = document.querySelector("#load_from_cache_menu_" + id);
        update_element.innerHTML = now.toLocaleString();
        toast_list[3].show();
    }

    function load_from_cache(id) {
        if (Object.keys(saved_a["update"]["storage"][id]["answer"]).length > 0) {
            saved_a["replace"] = saved_a["update"]["storage"][id]["answer"]["replace"]
            saved_a["checkbox"] = saved_a["update"]["storage"][id]["answer"]["checkbox"];
            load_dmp(reload_answers, doc_name);
            reload_answers(doc_name);
            toast_list[5].show();
        } else {
            toast_list[7].show();
        }


    }
    function dmp_update(saved_a) {
        try {
            saved_a["update"]["timeline"].length;
        } catch (error) {
            saved_a["update"]["timeline"] = [];
        }

        if (saved_a["update"]["timeline"].length == 0) {
            clear_dmp_updates();
            document.getElementById("dmp-update-modal").click();


        } else {
            clear_dmp_updates();
            document.getElementById("dmp-update-modal").click();
            saved_a["update"]["timeline"].forEach(
                function (e) {
                    add_date_div(e["name"], e["date"])

                }


            )


        }



    }

    function clear_dmp_updates() {

        document.querySelector("#dmp-update-content").innerText = "";

        try { datepicker_list.forEach(e => e.remove()); }
        catch (e) { }
        datepicker_list = [];

    }


    function slist(target) {


        let items = target.getElementsByTagName("li"), current = null;


        for (let i of items) {

            // Drag start
            i.ondragstart = (ev) => {
                current = i;
                for (let it of items) {
                    if (it != current) { it.classList.add("hint"); }
                }
            };

            // Drag enter
            i.ondragenter = (ev) => {
                if (i != current) {
                    setTimeout(() => { i.classList.add("active"), "10" });
                    //verbose  console.log("entering and adding active"); 
                }

            };


            // drag leave
            i.ondragleave = () => {
                i.classList.remove("active");
                //verbose  console.log("leaving and removing active");
            };

            // drag end
            i.ondragend = () => {
                for (let it of items) {
                    it.classList.remove("hint");
                    it.classList.remove("active");
                }
            };

            // drag over stop default
            i.ondragover = (evt) => { evt.preventDefault(); };
            [].slice.call(i.children).forEach((e) => e.ondragover = (evt) => {
                evt.preventDefault();
            }
            );


            // when drop, insert the element
            i.ondrop = (evt) => {
                evt.preventDefault();
                if (i != current) {
                    let currentpos = 0, droppedpos = 0;
                    for (let it = 0; it < items.length; it++) {
                        if (current == items[it]) { currentpos = it; }
                        if (i == items[it]) { droppedpos = it; }
                    }
                    if (currentpos < droppedpos) {
                        i.parentNode.insertBefore(current, i.nextSibling);
                    } else {
                        i.parentNode.insertBefore(current, i);
                    }
                }
            };
        }
    }



    function add_date_div(name = "", date1 = Date()) {

        const parent = document.querySelector("#dmp-update-content");
        const length = datepicker_list.length;
        let reminder_row = document.createElement("li");
        reminder_row.setAttribute("class", "input-group justify-content-between");
        reminder_row.setAttribute("draggable", "true");
        const id = length + 1;
        const reminder_id = "reminder" + id;
        reminder_row.setAttribute("id", reminder_id);
        //reminder_row.innerText=reminder_id;

        const svg = document.createElement("svg");
        svg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="m-2"><title>draggable</title><path d="M2 11h16v2H2zm0-4h16v2H2zm8 11l3-3H7l3 3zm0-16L7 5h6l-3-3z"></path></svg>'

        const name_input = document.createElement("input");
        name_input.setAttribute("id", "name_" + reminder_id);
        name_input.setAttribute("placeholder", "name your reminder");
        name_input.setAttribute("name", "update_name_input");
        name_input.setAttribute("onfocusin", "this.select()");
        name_input.setAttribute("class", "bg-transparent border-white")
        name_input.setAttribute("onfocusout", 'datepicker_list[' + length + ']["name"]= this.value');
        name_input.setAttribute("value", name);

        const date_input = document.createElement("input");
        date_input.setAttribute("type", "date");
        date_input.setAttribute("id", "update_date_input" + reminder_id);
        date_input.setAttribute("name", "update_date_input");
        date_input.setAttribute("placeholder", "click to select date");
        date_input.setAttribute("data-list", length);
        date_input.setAttribute("value", date1);
        date_input.setAttribute("class", "bg-transparent border-white")
        date_input.setAttribute("onfocusout", 'datepicker_list[' + length + ']["date"]= this.value');

        const delete_button = document.createElement("button");

        delete_button.setAttribute("class", "btn-close m-2");
        delete_button.setAttribute("onclick", "this.parentElement.remove();datepicker_list[" + length + "]=null");


        reminder_row.appendChild(svg);
        reminder_row.appendChild(name_input);
        reminder_row.appendChild(date_input);
        reminder_row.appendChild(delete_button);
        parent.appendChild(reminder_row);


        slist(document.getElementById("dmp-update-content"));
        datepicker_list.push({ "name": name_input.value, "date": date_input.value, });

    }

    function datepicker_list_to_JSON() {

        datepicker_list = [];
        [].slice.call(document.querySelectorAll("#dmp-update-content li")).forEach((e) => datepicker_list.push({ "name": e.children[1].value, "date": e.children[2].value, }));

        const filtered_list = datepicker_list.filter(function (i) { return i != null; });
        try { saved_a["update"]["timeline"] = filtered_list; }
        catch (e) { saved_a["update"]["timeline"] = [] }
        trim_saved_a(saved_a);

        saveToLocalStorage(doc_name);
        generate_vcal(saved_a);
        document.querySelector("#update_date_close").click();
    }

    function generate_vcal(saved_a) {

        const vcal_begin = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//DataPLAN//NONSGML Reminder of DMP update//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH`;
        const vcal_end = "END:VCALENDAR";
        const filtered_list = datepicker_list.filter(function (i) { return i != null; });
        let vcal = vcal_begin + " ";
        now = new Date();
        filtered_list.forEach(function callback(e, index) {
            const cal_date = new Date(e["date"]);
            const current_time = `${cal_date.getFullYear()}${String(cal_date.getMonth() + 1).padStart(2, '0')}${String(cal_date.getDate() + 1).padStart(2, '0')}T${String(cal_date.getHours() + 1).padStart(2, '0')}${String(cal_date.getMinutes() + 1).padStart(2, '0')}${String(cal_date.getSeconds() + 1).padStart(2, '0')}Z`;
            vcal += `
BEGIN:VEVENT
DTSTART:${cal_date.getFullYear()}${String(cal_date.getMonth() + 1).padStart(2, '0')}${String(cal_date.getDate()).padStart(2, '0')}T080000Z
DTEND:${cal_date.getFullYear()}${String(cal_date.getMonth() + 1).padStart(2, '0')}${String(cal_date.getDate() + 1).padStart(2, '0')}T110000Z
DTSTAMP:${current_time}
UID:${current_time}@nfdi4plants.org
CREATED:${cal_date.getFullYear()}${String(cal_date.getMonth() + 1).padStart(2, '0')}${String(cal_date.getDate()).padStart(2, '0')}T000000Z
DESCRIPTION:Name of the reminder: ${e["name"]}; 
LAST-MODIFIED:${cal_date.getFullYear()}${String(cal_date.getMonth() + 1).padStart(2, '0')}${String(cal_date.getDate()).padStart(2, '0')}T000000Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:No. ${index + 1} Reminder to write DMP of ${saved_a["replace"]["$_PROJECTNAME"]} (created by DataPLAN)
TRANSP:OPAQUE
END:VEVENT`;

        }

        );

        vcal += vcal_end;

        var blob = new Blob([vcal], {
            type: "text/plain;charset=utf-8;",
        });
        if (filtered_list.length != 0) { // no need to download file without calendar event
            saveAs(blob, "calendar.ics");

        }

        return vcal;
    }

    function printDiv1(id = "doc3") {
        var divContents = document.getElementById(id).innerHTML;
        var a = window.open('', '', 'height=800, width=600');
        a.document.write('<html>');
        a.document.write('<body> ');
        a.document.write(divContents);
        a.document.write('</body></html>');
        a.document.close();
        a.print();
    }


    function update_reminder(compared_list, warning_element_children, callback) {
        const question_n = compared_list[1] + compared_list[0] - compared_list[2] - compared_list[3];
        const issue_n = warning_element_children.length;
        let question_reminder, issue_reminder;
        switch (question_n) {
            case 0:
                question_reminder = "Congrats, all questions are answered.";
                break;
            case 1:
                question_reminder = "Only 1 question is left to be answered. <br> Please click the next button to finish answering the questions.";
                break;
            default:
                question_reminder = "There are " + String(question_n) + " questions not answered. <br> Please click the \"next\" button to finish answering the questions.";

        }
        switch (issue_n) {
            case 0:
                issue_reminder = "Congrats, all warnings are resolved.";
                break;
            case 1:
                issue_reminder = "Only 1 issue left.";
                break;
            // 99 means that there are questions not answered.
            case 99:
                issue_reminder = " ";
                break;
            default:
                issue_reminder = "There are " + String(issue_n) + " issues not resolved." + ' If you are aware of all the issues and you want to remove all the warnings, please click:  <button type="button" class="badge btn-primary"  onclick="remove_all_warnings(), toast_list[6].show()" > remove all the warnings</button>';

        }
        reminders = [{
            title: "Question reminders",
            content: question_reminder + " <br> " + issue_reminder +
                `
                        <br>  <br> If you need a <b>unchecked</b> or <b>unfinished</b> DMP, <br> you can still <button class="badge btn-primary" href="#" onclick="issue_warning_show(),remove_all_warnings(),export2word1('doc3', ' `+doc_name+ Date().toLocaleString().slice(0,24)+`') ">export to word</button>.
                        `

            //
        }
        ];

        for (const [index, element] of compared_list[4].entries()) {
            const ele_id = "form_" + element.split("_")[1];


            //verbose  console.log("element id is " + ele_id); // ,

            const id_and_content = {
                id: String(ele_id.toLowerCase()),
                content: "this question was default value or empty, please revise it "
            };
            reminders.push(id_and_content);
            //verbose  console.log("id_is " + Object.values(id_and_content));

        }

        //verbose  console.log(compared_list[5].entries());
        for (const [index, element] of compared_list[5].entries()) {
            const ele_id = "form_" + element;

            //const ele = document.getElementById(ele_id);
            //verbose  console.log("element id is " + ele_id); // ,

            const id_and_content = {
                id: String(ele_id.toLowerCase()),
                content: "this question was default value or empty, please revise it "
            };
            reminders.push(id_and_content);
            //verbose  console.log("id_is " + Object.values(id_and_content));

        }
        window.reminderModal = new Tour(reminders);
        try{window.reminderModal.show();}
        catch(e){
            console.error(e);
            alert("The DMP is not finished and our answer checking system is having problems, please check the answers manually. You will still be able to copy the text or download the document.");
            document.querySelectorAll("div[role=tooltip ]")[0].remove();
            document.querySelectorAll("[class='modal-backdrop show']")[0].remove();
            document.querySelector("body").classList.remove("tour-active-element");
            issue_warning_show(), remove_all_warnings(), callback;
        }
        return reminders;
    }

    function tab_next(ele) {
        var total_list = document.querySelectorAll('form[class~="show"] input:not([class~="d-none"])');
        //var list = Array.from(total_list).filter( single => single.tabIndex >= "0" );
        var index = Array.from(total_list).indexOf(ele);
        return total_list[index + 1] || total_list[0];



    }

    function set_scrollbar_marker(scroll_marker, elements) {
        scroll_marker = document.querySelector('.scroll-marker');
        const doc = document.getElementById("split-0");
        let doc_height = doc.offsetHeight;
        let doc_top = doc.scrollHeight;



        elements.forEach(e => {
            
            if (e.classList.contains("d-none")){

            }else{
            let e_top = e.offsetTop;
            let e_bot = e_top + e.offsetHeight;
            let parent_top;
            try {
                parent_top = e.offsetParent.offsetTop;
            } catch (error) {
               parent_top = 0;
            }
            
            let marker_top = Math.ceil((e_top + parent_top) / doc_top * doc_height);
            let marker_bot = Math.ceil((e_bot + parent_top) / doc_top * doc_height);
            let marker_e = document.createElement("span");
            marker_e.style.backgroundColor = "#E08F9C";
            marker_e.style.top = marker_top + "px";
            marker_e.style.height = (marker_bot - marker_top) + "px";
            marker_e.setAttribute("name", "scroll-bar-span");
            scroll_marker.appendChild(marker_e);
            }


        }

        )

    }



    function export2word(element, filename = '') {
        
        punctual();
        runWordCloud();
        const compared_list = compare_replace(temp_a, saved_a);
        let warning_element_children = Array.from(Array(99).keys());

        if ((compared_list[2] == compared_list[0]) && (compared_list[3] == compared_list[1])) {
            issue_warning_show();
            warning_element_children = document.getElementById("warningText").children;
            if (warning_element_children[0] == undefined) {
                try {
                    dmp_update(saved_a);
                    return export2word1(element, window.doc_name+ Date().toLocaleString().slice(19)); // Security exception may be thrown by some browsers.
                    const selection = window.getSelection();

                } catch (error) {
                    console.warn("export doc failed.", error);
                    return export2word1(element, window.doc_name+ Date().toLocaleString().slice(19)); // Security exception may be thrown by some browsers.
                    const selection = window.getSelection();
                }
            } else {
                update_reminder(compared_list, warning_element_children);
            }

        } else {

            update_reminder(compared_list, warning_element_children);
        }
    }


    function updateHistoryHTML(ele_name){
        import_history.vlaue=ele_name;
        let historyHTML = `<table  table-striped class="table table-hover" style="table-layout:auto; width:100%;">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col"> Date and Time </th>
                    
                    <th scope="col">Project Name</th>
                    <th scope="col">Content</th>
                    <th scope="col">&nbsp;Action&nbsp;&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                `;
                //console.log(historyHTML);
            inputHistory.replace[ele_name].forEach((value,index)=>{
                
                historyHTML += `
                <tr>
                    <td >${index}</td>
                    <td>${value[2]}</td>
                    <td>${value[1]}</td>
                    <td>${value[0]}</td>
                    
                    <td><button class="btn btn-primary btn-sm" value="${ele_name}" onclick="const replace =document.getElementsByName('${ele_name}')[0]; replace.value = '${value[0]}'; onchange_replace(replace);"> Reload </button><button class="btn btn-warning btn-sm" value="${ele_name}" onclick="inputHistory.replace['${ele_name}'].splice(${index},1) ;updateHistoryHTML('${ele_name}');saveToLocalStorage(doc_name)"> Delete </button></td>
                </tr>
                
                `;
                //console.log(historyHTML);

            });

                

            historyHTML+= "</tbody> </table>";
            //console.log(historyHTML);
            document.getElementById("historyContent").innerHTML = historyHTML;
    }

    function thisOnfocus(ele){
        ele_name = ele.name;
        const name1 = ele_name.split("_")[1]+"-to-";const elem1 = document.getElementsByName(name1); elem1.forEach(e => e.classList.add("border-highlight")); set_scrollbar_marker( scroll_marker,elem1 );
        console.log("ele.name" +ele_name)  
        try {
            updateHistoryHTML(ele_name);
            
        } catch (error) {
            console.error(error);
            document.getElementById("historyContent").innerHTML = "No history for this question.";
        } 
    }
    function thisOnfocusout(ele){
        const name1 = ele.name.split("_")[1]+"-to-";const elem1 = document.getElementsByName(name1);elem1.forEach(e => e.classList.remove("border-highlight")); document.querySelectorAll("[name=\"scroll-bar-span\"]").forEach(e => {e.remove()})
    }

    function export2word1(element, filename = '') {
        var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
        var postHtml = "</body></html>";
        var html = preHtml + document.getElementById(element).innerHTML + postHtml;

        var blob = new Blob(['\ufeff', html], {
            type: 'application/msword'
        });

        // Specify link url
        var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

        // Specify file name
        filename = filename ? filename + '.doc' : 'document.doc';

        // Create download link element
        var downloadLink = document.createElement("a");

        document.body.appendChild(downloadLink);

        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            // Create a link to the file
            downloadLink.href = url;

            // Setting the file name
            downloadLink.download = filename;

            //triggering the function
            downloadLink.click();
        }

        document.body.removeChild(downloadLink);
    }
