const inquirer = require('inquirer');
const fs = require('fs');
const coreHTML = require("./generateHTML");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
var employees = 1;

const mngQuestions = [{ type: "input", name: "mngName", message: "What's the manager's name?" }, { type: "input", name: "mngID", message: "What's the manager's ID number?" }, { type: "input", name: "mngEmail", message: "What's the manager's email address?" }, { type: "input", name: "officeNumber", message: "What's the manager's office phone number?" }, { type: "list", name: "mngOthers", message: "Do you want to add another team member?", choices: ['Add an Engineer', 'Add an Intern', 'I do not want to add anyone else'] }];
const engQuestions = [{ type: "input", name: "engName", message: "What's the engineer's name?" }, { type: "input", name: "engID", message: "What's the engineer's ID number?" }, { type: "input", name: "engEmail", message: "What's the engineer's email address?" }, { type: "input", name: "engGithub", message: "What's the engineer's GitHub username?" }, { type: "list", name: "engOthers", message: "Do you want to add another team member?", choices: ['Add an Engineer', 'Add an Intern', 'I do not want to add anyone else'] }];
const intQuestions = [{ type: "input", name: "intName", message: "What's the intern's name?" }, { type: "input", name: "intID", message: "What's the interns's ID number?" }, { type: "input", name: "intEmail", message: "What's the intern's email address?" }, { type: "input", name: "school", message: "What school does the intern go to?" }, { type: "list", name: "intOthers", message: "Do you want to add another team member?", choices: ['Add an Engineer', 'Add an Intern', 'I do not want to add anyone else'] }];

function init() {
    inquirer.prompt(mngQuestions)
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
    inquirer.prompt(engQuestions)
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
        .prompt(intQuestions)
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
    if (employees > 3 && employees % 3 == 0) {
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
