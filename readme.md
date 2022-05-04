## introduction
"Data management plan generator" can create a data management plan automatically. 
This is a very simple way to make a DMP. By using this Generator, you can create
1. a full Data Management Plan for H2020 projects;
2. a full Data Management Plan for DFG projects;
3. a summary for funding proposal;
4. a customized practical guide throughout your projects
5. a user defined template that you can edit freely

[click to test](https://nfdi4plants.github.io/dmpg/)  


### folder structure:
./js/: javascripts (mainly for style)  
./css/: css files (mainly for style)  
./docs/: document templates  (currently not used, all documents are included in the index.html)
./saved_json/: json files including saved answers.  
./index.html : functional javascript codes + all the templates

### usage for document generation:
The "Data management plan generator" is serverless. All functions works even if you disconnect the internet after loading the website.
You could even use "control + S" to save the website and use it for a later time. Just remember that the local cache will be different between the different URLs.

### local storage:
- The answer of the question
- The status of usage (first time visitor or not)
- the user defined template