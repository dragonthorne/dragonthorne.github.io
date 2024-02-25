function listProjects (projects) {
    for (let i = 0; i < projects.length; i++) {
        let listItem = projects[i];

        
        let listItemHTML = '<br><a href="/projects/'+ listItem.name +'">'+ listItem.name+'</a><p class="desc">'+ listItem.desc +'</p>';
        document.getElementById("body").innerHTML += listItemHTML;
    }
}

fetch("https://dragonthorne.github.io/projects/projects.json")
    .then((response) => response.json())
    .then((json) => listProjects(json));