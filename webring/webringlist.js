function run (json) {
    let sites = json

    for (let i = 0; i < sites.length; i++) {
        let html = '\n<a href="'+ sites[i].url +'">"'+ sites[i].name +'"\'s site</a>'
        document.getElementById('body').innerHTML += html;
    }
}

sites[0].name
sites[0].url

fetch('https://dragonthorne.github.io/webring/webring.json')
    .then((response) => response.json())
    .then((json) => run(json));