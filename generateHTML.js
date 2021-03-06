const Manager = require("./lib/Manager");

function buildCore(data) {
    let M = new Manager(data.mngName, data.mngID, data.mngEmail, data.officeNumber);

    return    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link rel="stylesheet" href="style.css">
        <title>Team Set-Up</title>
    </head>
    <body>
        <header class="jumbotron">
            <h1>My Team</h1>
        </header>
        <article class="container">
            <div class="row">
            <div class="card bg-light mb-3 col-4 mx-3" style="max-width: 18rem;">
                <div class="card-header text-white bg-primary">
                <h4>${M.name}</h4>
                <h5 class="card-title text-white"><i class="fas fa-mug-hot"></i> Manager</h5>    
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${M.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${M.email}">${M.email}</a></li>
                        <li class="list-group-item">Office Number: ${M.officeNumber}</li>
                      </ul>
                </div>
              </div>
        `
}



module.exports = buildCore;
