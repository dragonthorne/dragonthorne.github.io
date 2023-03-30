function run (json) {
    let sites = json

    for (let i = 0; i < sites.length; i++) {
        let html = '\n<p><a href="https://'+ sites[i].url +'">"'+ sites[i].name +'"\'s site</a></p>'
        document.getElementById('body').innerHTML += html;
    }
}

fetch('https://dragonthorne.github.io/webring/webring.json')
    .then((response) => response.json())
    .then((json) => run(json));