const inquirer = require('inquirer');
const fs = require('fs');
const coreHTML = require("./generateHTML");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
var employees = 1;

const mngQuestions = ["What's the manager's name?", "What's the manager's ID number?", "What's the manager's email?", "What's the manager's office phone number", "Who else do you want to add?"];
const engQuestions = ["What's the engineer's name?", "What's the engineer's ID number?", "What's the engineer's email?", "What's the engineer's GitHub username?", "Who else do you want to add?"];
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
                fs.appendFileSync('./dist/Team-Rota.html', endHTML());
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
        fs.appendFileSync('./dist/Team-Rota.html', addEng(data));

        if (data.engOthers === "Add an Engineer") {
            return engineerQ();
        } 
        else if (data.engOthers === "Add an Intern") {
            return internQ();
        }
        else {
            fs.appendFileSync('./dist/Team-Rota.html', endHTML());
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
            choices: ['Add an Engineer', 'Add an Intern', 'I do not want to add anyone else']
        }
    ])
    .then((data) => {
        fs.appendFileSync('./dist/Team-Rota.html', addInt(data));

        if (data.intOthers === "Add an Engineer") {
            return engineerQ();
        } 
        else if (data.intOthers === "Add an Intern") {
            return internQ();
        }
        else {
            fs.appendFileSync('./dist/Team-Rota.html', endHTML());
            return console.log("Rota generated!");
        }
    });
}

function writeToFile(data) {
    fs.writeFileSync("./dist/Team-Rota.html", coreHTML(data), (err) =>
      err ? console.error(err) : console.log('Manager added!'));
}

function addEng(data) {
    let E = new Engineer(data.engName, data.engID, data.engEmail, data.engGithub);
    newRow();
    employees++;
    return `<div class="card bg-light mb-3 col-4 mx-3" style="max-width: 18rem;">
            <div class="card-header text-white bg-primary">
            <h4>${E.name}</h4>
            <h5 class="card-title text-white"><i class="fas fa-glasses"></i> Engineer</h5>    
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${E.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${E.email}">${E.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${E.github}" target="_blank">${E.github}</a></li>
                  </ul>
            </div>
          </div>`
}

function addInt(data) {
    let I = new Intern(data.intName, data.intID, data.intEmail, data.school);
    newRow();
    employees++;
    return `<div class="card bg-light mb-3 col-4 mx-3" style="max-width: 18rem;">
            <div class="card-header text-white bg-primary">
            <h4>${I.name}</h4>
            <h5 class="card-title text-white"><i class="fas fa-user-graduate"></i> Intern</h5>    
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${I.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${I.email}">${I.email}</a></li>
                    <li class="list-group-item">School: ${I.school}</li>
                  </ul>
            </div>
          </div>`
}

function newRow() {
    if(employees > 3 && employees % 3 == 0) {
    fs.appendFileSync('./dist/Team-Rota.html', `</div>
    <div class="row">
    `);
}
}

function endHTML() {
    return `</div>
    </article>
    </body>
    </html>`
}

init();
