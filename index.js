// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generate = require('./utils/generateMarkdown');
const { default: Choices } = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "Please input the Title of your Project:"
    },
    {
        type: "input",
        name: "Description",
        message: "Please input the Description of your Project:"
    },
    {
        type: "input",
        name: "Installation",
        message: "Please input the Installation Instructions of your Project:"
    },
    {
        type: "input",
        name: "Usage",
        message: "Please provide the Usage Information of your Project:"
    },
    {
        type: "checkbox",
        message: "Please select the License Type of your Project:",
        choices: ["MIT", "GNU GPL", "Apache License"],
        name: "License",
    },
    {
        type: "input",
        name: "Contributors",
        message: "Please provide the Contributors to this Project:"
    },
    {
        type: "input",
        name: "Tests",
        message: "Please provide a list of associated Tests for this project:"
    },
    {
        type: "input",
        name: "Username",
        message: "Please provide your GitHub Username:"
    },
];

// TODO: Create a function to write README file
function writeReadme(fileName, data) {
    fs.writeFile(fileName, generate(data), function(err){
        if(err) {
            throw err;
        };
        console.log("New README file created with success!");
    });
};



// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(JSON.stringify(data, null, ""));
        writeReadme("./examples/README.md", data);
    })
}

// Function call to initialize app
init();
