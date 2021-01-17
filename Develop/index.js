// TODO: Include packages needed for this application
 const inquirer = require('inquirer');
 const fs = require('fs');
 const util = require('util');

 const api = require('./utils/api.js');
 const generateMarkdown = require('./util/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    message: "What is GitHub username? AbuyeM1",
    name: "username",
    Validate: function(answer){
        if (answer.length < 1){
            return console.log("A valid GitHub username is required");
        } return true;

    }
    },
    {
        type: 'input',
        message: 'What is project name?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
