const inquirer = require("inquirer");
const genMark = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
    {
        type: "input",
        message: "Please enter your github username to create a badge",
        name: "username"
      },
     {
        type: "input",
        message: "What is your project title?",
        name: "title"
      },
      {
        type: "input",
        message: "Please describe your project.",
        name: "description"
      },
      {
        type: "input",
        message: "Please describe your installation procedures, including software requirments.",
        name: "installation"
      },
      {
        type: "input",
        message: "Please describe the usage of your project.",
        name: "usage"
      },
      {
        type: "input",
        message: "What is your license?",
        name: "license"
      },
      {
        type: "input",
        message: "Please describe how others can contribute.",
        name: "contribution"
      },
      {
        type: "input",
        message: "Describe how you would test your application.",
        name: "tests"
      },
      {
        type: "input",
        message: "Please enter you GitHub email so that users can ask questions.",
        name: "questions"
      }
];


function writeToFile(fileName, data) {

     let readMe = genMark(data);
     fs.writeFile(fileName, readMe, err => {
        if (err) {
          throw err;
        }
    });
}

function init() {
    inquirer.prompt(questions)
    .then(data => {

        writeToFile("README.md", data);
    })
    .catch(error => {
        throw error; 
    });
}

init();
