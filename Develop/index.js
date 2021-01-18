// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
//  console.log('hello');
// const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { type } = require('os');

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
        default: 'abuye20@yahoo.com',
        Validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required");
            } return true;
        }
    },
    {
        type: 'input',
        message: 'What is your project name',
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
        choices: 'MIT License',
        name: 'License',
    },
    {   
        type:'input',
        message:'What command should be run to install dependencies',
        name:'installation',
        default:'Javascript',

    },
    {
        type:'input'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
