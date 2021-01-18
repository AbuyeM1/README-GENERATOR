// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//  console.log('hello');
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');
// console.log("hi");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
        default: 'AbuyeM1',
        Validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required");
            } return true;
        }
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email address',
        default: 'abuyeye3@gmail.com',
        Validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required");
            } return true;
        }
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'name',
        default: 'COVID-19 Tracker',
        Validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project name required");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Write a description of your project',
        name: 'description',
        default: 'show covid-19 case data',
        validdate: function (answer) {
            if (answer.length < 1) {
                return console.log("A this.valid project decscription is require.")
            }
            return true;
        }
    },
    {
        type: 'list',
        message: 'A lincense for your project.',
        choices: ['MIT License', 'GNU GPLv3', 'Mozilla Public License', 'Boost Software License 1.0'],
        name: 'License',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
        default: 'npm iinstall'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test',
        default: 'NA',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'repo',
        default: 'readme-generator'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success your README.md file has been generated")
    });
}
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        console.log("your responses:", usrerResponses);
        console.log("thank you for your responses! fair your GitHub data next..");

        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);

        const markdown = generateMarkdown(usrerResponses, userInfo);
        console.log(markdown);

        await writeFileAsync('README.md', markdown);
    } catch (error) {
        console.log(error);
    }


};

// Function call to initialize app
init();



