// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of prompt for user input
function promptUser() {
    return inquirer.prompt([
        { type: "input", name: "username", message: "What is your GitHub username?" },

        { type: "input", name: "email", message: "What is your email address?" },

        {
            type: "input", name: "title", message: "What is your project's name?",
        },
        {
            type: "input", name: "description", message: "please write a short description of your project have?"
        },
        {
            type: "list", name: "license", message: "Chose the appropriate license for this project: ", choices: ["GNU", "ISC", "MIT", "Mozilla",
            ]
        },

        {
            type: "input", name: "install", message: "What command should be run to install dependencies?"
        },
        {
            type: "input", name: "test", message: "What command should be run to run tests?"
        },
        {
            type: "input", name: "repo", message: "What does the user need to know about using the repo? "
        },
        {
            type: "input", name: "contribute", message: "What does the user need to know about contributing to the repo? "
        },

    ]);
}

// TODO: Create a function to initialize app
async function init() {
    try {
        
        const answers = await promptUser();
   
        console.log(' Generating README file ...');
        const generatedData= generateMarkdown(answers);
       
       // TODO: Create a function to write README file
        await writeFileAsync('README.md', generatedData);
        console.log(' Successfully wrote to README.md');
    } catch (err) {
        console.log(err);
    }
}
// Function call to initialize app
init();  