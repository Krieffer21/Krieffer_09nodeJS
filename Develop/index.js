const inquirer = require("inquirer");
const genMark = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
    // {
    //     type: "",
    //     message: "",
    //     name: "badge"
    //   },
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
    //   {
    //     type: "",
    //     message: "",
    //     name: "contents"
    //   },
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
    
     let readMe = genMark.generateMarkdown(data);
     fs.writeFile(fileName, readMe, function(err) {
        if (err) {
          throw err;
        }
    });
}

function init() {
    inquirer.prompt(questions)
    .then(function(data) {

        writeToFile("README.md", data);
    });
}

init();
