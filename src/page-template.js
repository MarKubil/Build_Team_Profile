// creates the team
const generateTeam = team => {

    // creates the manager html
    const generateManager = manager => {
        return `
        <div class="card employee-card m-1 col-md-4 col-lg-3">
        <div class="card-header" style="
                background-image: url('https://img.freepik.com/free-vector/modern-flowing-colorful-wave-banner-background_1035-19861.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                border-radius: 5%;">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // creates the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card m-1 col-md-4 col-lg-3">
        <div class="card-header" style="
                background-image: url('https://img.freepik.com/free-vector/modern-flowing-colorful-wave-banner-background_1035-19861.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                border-radius: 5%;">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // creates the html for interns
    const generateIntern = intern => {
        return `
        <div class="card employee-card m-1 col-md-4 col-lg-3">
        <div class="card-header" style="
                background-image: url('https://img.freepik.com/free-vector/modern-flowing-colorful-wave-banner-background_1035-19861.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                border-radius: 5%;">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// exports function to generate entire page
module.exports = (teamMembers, teamName) => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>${teamName}</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <header class="container-fluid">
        <section class="row justify-content-center ">
        <article  style="
        background-image: url('https://img.freepik.com/free-vector/modern-flowing-blue-wave-banner-background_1035-19862.jpg');
        background-repeat: no-repeat;
        background-size: cover;"
        class="col-12 jumbotron mb-3 team-heading">
                <h1 style="font-size: 3rem; font-family: 'Tilt Warp', cursive;" class="text-center">${teamName}</h1>
            </article>
        </section>
    </header>
    <main class="container-fluid">
        <section class="row justify-content-center">
                ${generateTeam(teamMembers)}
        </section>
    </main>
</body>
</html>
    `;
};