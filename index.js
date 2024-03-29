const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide any tests for your project and how to run them:'
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((responses) => {
      const markdown = generateMarkdown(responses);
      writeToFile("README.md", markdown);
      console.log("README.md has been successfully generated!");
    })
    .catch((error) => console.error("Error occurred:", error));

}

// function call to initialize program
init();
