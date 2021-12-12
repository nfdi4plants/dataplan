## Introduction
"Data management plan generator" can create a data management plan automatically. 
This tool is purely web-based, front end and written in javascript. 

Input files can be 

To try this tool, you can go to [this link](https://nfdi4plants.de/plan-generator/)

You can also try an edited document through saved answers in JSON format. [try this link](https://nfdi4plants.de/plan-generator/?https://raw.githubusercontent.com/nfdi4plants/plan-generator/main/saved_json/example2.json)


### Features:
the generator can:
1. Replace *$_PLACEHOLDER* in the text. It avoids replacing *$_PLACEHOLDER-EXTENDED* or *$_PLACEHOLDER1|PLACEHOLDER2* or *#if_$PLACEHOLDER*. This is wrapped in find_replace function.
2. Removes *#if_* and *#endif_* around the *$_PLACEHOLDER* in the all checkboxes but keep the text if the checkbox is checked and removes the text in between if the checkbox option is unchecked. It can also replace the selected keywords and handle "|" and "no" operator in the text. 
3. Automatic expose hidden sub-question in question 5., if user does not use DataPLANT, then she/he need to answer question 5a.
4. Individual "undo" button for every question. Each question can return to original placeholders no matter how many other questions the user has answered.
5. User can save and load answered questions in JSON format. The saved JSON formats keeps the document undo-able at any time point.
6. The user can share a link with "/?" + "URL of saved JSON answers", the receiver of the link can directly open an edited document and continue editing.
7. Highlight removed text in *find_replace*.
8. Scroll to view the location of warning in the *issue warning*.


An example output is generated and stored as "output.odt" in the root folder.
The "What you see is what you get" editor is from WEBODF developed by a Germany company KO GmbH https://webodf.org/. After trying many online docx editor or generator, I found using javascript to modify the webodf is the best way.

Tools I had a look at:

1. docx.js https://docx.js.org a good library, but no GUI web editor. As we already had a document, we don't need to generate a document from ground up.
2. docxtemplater https://github.com/open-xml-templating/docxtemplater the most similar project. It has both open source and commercial version. Well designed template and good maintenance. However, a. they use a different type of place holder; b. Their input is json, which means that another json generation layer need to be used; c. no "What you see is what you get" editor. 
3. docx4j https://www.docx4java.org/trac/docx4j use java backend. For handling a small document, it seems a overkill, it has no "What you see is what you get" editor.
4. redocx https://github.com/nitin42/redocx did not try it, but seem similar to docx.js and with a react interface. It runs only on backends and no GUI
5. onlyoffice https://www.onlyoffice.com/ could be a good combination with docx.js. But it has at least 1500 $ fee to use and seems quite heavy lifting. Could be give a try if current solution is too hard.



###libraries:
Bootstrap
WEBODF
FileSaver.js


### Missing functions and TODO.
UI change.
