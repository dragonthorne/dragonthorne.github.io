function placeWebring (sites) {//if i place a comment here will you update the file please?
    let prev;
    let curIndex = 0;
    let next;

    for (let i = 0; i < sites.length; i++) {
        if (sites[i].url == window.location.hostname) {
            curIndex = i;
            break;
        }
    }

    if (sites[0].url == window.location.hostname) {
        prev = sites[sites.length-1];
    } else {
        prev = sites[curIndex-1];
    }

    if (sites[sites.length-1].url == window.location.hostname) {
        next = sites[0];
    } else {
        next = sites[curIndex+1];
    }

    let html = '<nav style="a {font-size: 12px; padding: initial; text-decoration: none; margin: 0px;}">|<a href="https://'+ prev.url +'">'+ prev.name +'</a>|\n<a href="https://dragonthorne.github.io/webring/">[placeholder] Webring</a>|\n<a href="https://'+ next.url +'">'+ next.name +'</a>|</nav>';

    document.getElementById('footer').innerHTML += html;
}

fetch("https://dragonthorne.github.io/webring/webring.json")
    .then((response) => response.json())
    .then((json) => placeWebring(json));