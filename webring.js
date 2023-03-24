import webringJSON from "/webring.json"
let sites = JSON.parse(webringJSON);

let prev;
let curIndex = 0;
let next;

for (let i = 0; i < sites.length; i++) {
    if (sites[i].url == window.location.href) {
        curIndex = i;
        break;
    }
}

if (sites[0].url == window.location.href) {
    prev = sites[sites.length-1];
} else {
    prev = sites[curIndex-1];
}

if (sites[sites.length-1].url == window.location.href) {
    next = sites[0];
} else {
    next = sites[curIndex+1];
}

let html = '<nav style="a {font-size: 12px; padding: initial; color: black; text-decoration: none; margin: 0px;}">|<a'+ prev.url +'>'+ prev.name +'</a>|\n<p>[placeholder] Webring</p>|<a'+ next.url +'>'+ next.name +'</a>|</nav>';

document.getElementById('footer').innerHTML += html; 