const inquirer = require('inquirer');
const fs = require('fs');
const coreHTML = require("./generateHTML");

const mngQuestions = ["What's the manager's name?", "What's the manager's ID number?", "What's the manager's email?", "What's the manager's office phone number", "Who else do you want to add?"];
const engQuestions = ["What's the engineer's name?", "What's the engineer's ID number?", "What's the engineer's email?", "What's the engineer's GitHub url?", "Who else do you want to add?"];
const intQuestions = ["What's the intern's name?", "What's the intern's ID number?", "What's the intern's email?", "What school does the intern go to?", "Who else do you want to add?"];

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: mngQuestions[0],
                name: 'mngName',
            },
            {
                type: 'input',
                message: mngQuestions[1],
                name: 'mngID',
            },
            {
                type: 'input',
                message: mngQuestions[2],
                name: 'mngEmail',
            },
            {
                type: 'input',
                message: mngQuestions[3],
                name: 'officeNumber',
            },
            {
                type: 'list',
                message: mngQuestions[4],
                name: 'mngOthers',
                choices: ['Add an Engineer', 'Add an Intern', 'I do not want to add anyone else']
            }
        ])
        .then((data) => {
            
            writeToFile(data);

            if (data.mngOthers === "Add an Engineer") {
                return engineerQ();
            } 
            else if (data.mngOthers === "Add an Intern") {
                return internQ();
            }
            else {
                return console.log("Rota generated!");
            }
        });
}

engineerQ = () => {
    inquirer
        .prompt([
        {
            type: 'input',
            message: engQuestions[0],
            name: 'engName',
        },
        {
            type: 'input',
            message: engQuestions[1],
            name: 'engID',
        },
        {
            type: 'input',
            message: engQuestions[2],
            name: 'engEmail',
        },
        {
            type: 'input',
            message: engQuestions[3],
            name: 'engGithub',
        },
        {
            type: 'list',
            message: engQuestions[4],
            name: 'engOthers',
            choices: ['Add an Engineer', 'Add an Intern', 'I do not want to add anyone else']
        }
    ])
    .then((data) => {
        if (data.mngOthers === "Add an Engineer") {
            return engineerQ();
        } 
        else if (data.mngOthers === "Add an Intern") {
            return internQ();
        }
        else {
            return console.log("Rota generated!");
        }
    });
}

internQ = () => {
    inquirer
        .prompt([
        {
            type: 'input',
            message: intQuestions[0],
            name: 'intName',
        },
        {
            type: 'input',
            message: intQuestions[1],
            name: 'intID',
        },
        {
            type: 'input',
            message: intQuestions[2],
            name: 'intEmail',
        },
        {
            type: 'input',
            message: intQuestions[3],
            name: 'school',
        },
        {
            type: 'list',
            message: intQuestions[4],
            name: 'intOthers',
            choices: ['Add a Manager', 'Add an Engineer', 'Add an Intern', 'I do not want to add anyone else']
        }
    ])
    .then((data) => {
        if (data.mngOthers === "Add an Engineer") {
            return engineerQ();
        } 
        else if (data.mngOthers === "Add an Intern") {
            return internQ();
        }
        else {
            return console.log("Rota generated!");
        }
    });
}

function writeToFile(data) {
    fs.writeFileSync("./dist/Team-Rota.html", coreHTML(data), (err) =>
      err ? console.error(err) : console.log('Manager added!'));
}

init();
