function run (pages) {
    let params = new URLSearchParams(window.location.search);

    let curPage;

    for (let i = 0; i < pages.length; i++) {
        if (pages[i].date == params.get('date') && pages[i].title == params.get('title')) {
            curPage = pages[i];
        }
    }

    document.getElementById('title').innerText = curPage.title;

    let pageFile = "https://dragonthorne.github.io/blog/articles/" + curPage.date + " " + curPage.title +".txt";
    fetch(pageFile)
        .then((response) => response.text())
        .then((text) => document.getElementById('body').innerText = text)
}

function load () {
    fetch("https://dragonthorne.github.io/blog/pages.json")
        .then((response) => response.json())
        .then((json) => run(json));
}