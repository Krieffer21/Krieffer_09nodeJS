var inquirer = require("inquirer");


const questions = [
    {
        type: "",
        message: "",
        name: "badge"
      },
     {
        type: "",
        message: "What is your project title?",
        name: "title"
      },
      {
        type: "",
        message: "Please describe your project.",
        name: "description"
      },
    //   {
    //     type: "",
    //     message: "",
    //     name: "contents"
    //   },
      {
        type: "",
        message: "Please describe your installation procedures, including software requirments.",
        name: "installation"
      },
      {
        type: "",
        message: "Please describe the usage of your project.",
        name: "usage"
      },
      {
        type: "",
        message: "What is your license?",
        name: "license"
      },
      {
        type: "",
        message: "Please list your contributions.",
        name: "contribution"
      },
      {
        type: "",
        message: "",
        name: "tests"
      },
      {
        type: "",
        message: "Please enter you GitHub email so that users can ask questions.",
        name: "questions"
      }
 
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
