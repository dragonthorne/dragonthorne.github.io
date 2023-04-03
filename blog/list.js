function run (pages) {
    for (let i = 0; i < pages.length; i++) {
        let listItem = pages[i];

        let date = listItem.date;
        date = date.substring(0,4) + "-" + date.substring(4,6) + "-" + date.substring(6,8);
        
        let listItemHTML = '<br><a href="/blog/read?date='+ listItem.date +'&title='+ listItem.title +'">'+ date +' | '+ listItem.title +'</a>';
        document.getElementById("body").innerHTML += listItemHTML;
    }
}

fetch("https://dragonthorne.github.io/blog/pages.json")
    .then((response) => response.json())
    .then((json) => run(json));
