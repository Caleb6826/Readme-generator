// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fileName = "README.md";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
    
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'GNU'],
        default: ["MIT"],
      
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
     
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
      
    },
    {
        type: 'input',
        name: 'usage', 
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'What does the user need to know about contributing to the repo?'
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {    
    fs.writeFile('README.md', data, err => {
    // if there is an error 
    if (err) {
        console.log(err);
        return;
    // when the README has been created 
    } else {
        console.log("Your README has been successfully created!")
    }
})
}; 

// function to write README file
function writeToFile(fileName, data) {
    // Create Markdown from data
    const markdown = generateMarkdown(data);
    // Write Markdown file
    fs.writeFile(fileName, markdown, function (err) {
        if (err) throw err;
        console.log("Success!");
    });
}

// function to initialize program
function init() {
    // inquirer module
    inquirer
     .prompt(questions)
     .then(function(data) {
         writeToFile(fileName,data)
     })
}

// function call to initialize program
init();