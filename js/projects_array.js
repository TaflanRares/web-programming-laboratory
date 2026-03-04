async function readJSON(file) {
    const response = await fetch(file);
    const data = await response.json();
    return data;
}

async function projects_array() {
    let projects;
    try {
        projects = await readJSON('../data/projects.json');
    } catch (error) {
        console.error('Error loading JSON file:', error);
    }
    let array_projects = Array.from(projects);

    //console.log(array_projects);
    document.getElementById("projects-list").innerHTML = 
    array_projects.map(
        project => ` <h3>${project.name}</h3>
        <p>${project.description}</p>
        <p><strong>Technologies used:</strong> ${project.technologies.join(", ")}</p>
        <a href="${project.link}">View Project</a><br><br>`
    ).join("");
}