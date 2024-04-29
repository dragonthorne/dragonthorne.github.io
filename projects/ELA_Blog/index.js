let postJSON = [
    {
        "date": "20240223",
        "title": "Graphics_Fun",
        "content": "I've been bored the past few weeks, as most of my friends have had work or other things going on, so I decided to start a couple new projects, and because I can't be normal about things, for one of them I went with programming a rudimentary graphics engine from scratch using div elements as the pixels. If you know anything about web development, you're probably thinking it runs like garbage, and you'd be 100% correct! Not really my problem, though.<br><br>I started off with the HTML and CSS part, as it was going to be by far the easiest; I just needed to make a container to hold all of the weird shenanigans I did with elements using Javascript, and I needed it to size itself correctly when you resize the browser window so I wouldn't run into issues trying to program it on my chromebook and then moving to a desktop with a different resolution. This was accomplished by setting two variables, the width and height I wanted for the resolution of the engine, and then taking the minimum of the viewport width divided by the resolution width and the viewport height divided by the resolution height. That would give me the length of the side of the pixels, which then was multiplied by the resolution width and height of the engine to get the width and height for the container. I also needed the CSS for the column containers that held the pixels and the CSS for the pixels themselves, which were very easy, as the column containers were one pixel wide and took up the max height, and the pixels were, well, the length and width of one pixel.<br><br>Now comes the harder part, the Javascript code. I started out by making a \"run\" function that would run the program only after the whole thing loaded, and then made it do a \"setup\" function that ran three functions, the first making the column containers, the second filling those column containers with pixels that had an individual id using their coordinates, and a third to fill an array named \"PIXEL_GRID\" with the default color values, using a hard-coded palette as an array and the color value being the index of the desired color.<br><br>From there, I was able to use Chrome's DevTools to manually run code to change the style of a pixel I wanted for testing, but it's much easier to do that with code that I'm not manually writing, so I began the \"draw\" functions, which just break the whole thing down into steps; \"drawPixel\" to do individual pixels, \"drawHelper\" for drawing a column of pixels, and \"draw\" to iterate through the \"PIXEL_GRID\" and call \"drawHelper\" on its arrays. With these, I can make it automatically draw from the \"PIXEL_GRID\", but I still have to update \"PIXEL_GRID\" by hand, so next up is the \"write\" functions, named as they write values to \"PIXEL_GRID\".<br><br>These were pretty easy, though I did later have to update them as I changed \"PIXEL_GRID\" from a 2D array of integers to a 2D array of objects, each with a \"color\" and \"layer\" value, though it wasn't too difficult to update. Just like the \"draw\" functions, the \"write\" functions are broken down into steps: individual pixels, sprites, and the whole \"SPRITE_LIST\", which was yet to be implemented but did exist in order for the code to work.<br><br>Thanks to the write and draw functions working, I was able to move onto coding the sprites, which I decided to move to a different file to make my code cleaner. The first thing I did was change the palette used to be a .txt file of hex codes that gets imported, so you can use your own palette if you wish, though I used the same palette I had hard-coded, just in the import format.<br><br>The rest of the file for sprites is just a couple classes for creating a sprite and a function for adding it to \"SPRITE_LIST\", because all the location and other stuff about the sprite is up to the person programming with the engine to do.<br><br>There's also a program file, which is where the functions for running and setting up the program go, and by default the file has a little test animation, though you can change it to do whatever you want, including making a game, assuming you don't need any kind of good performance, as turning the resolution up utterly destroys your browser, such as 480x270, or 1/16 of full resolution (1920x1080), will be loading almost 130,000 div elements, and as it turns out, the Chrome browser really, really does not like it when you do that. Outside of that though, it functions perfectly as intended!"
    },
    {
        "date": "20240328",
        "title": "Learning_Godot",
        "content": "In this post I'll be talking about the other project I started, shortly after the one in the first blog post. I've been interested in game development for a bit and I've been wanting to program my own game, so I looked at some different engines I could use and decided on Godot. I couldn't just jump straight in though, because I needed to actually learn how to use the engine, so I decided on an intermediate project to get myself familiarized with it, and went with a simple calculator.<br><br>Godot uses \"nodes\", which you then attach other nodes or scripts. To make the calculator, I used a UI node and then attached a label node for the numbers and stuff, and a block node, to which I then attached button nodes for each digit, open and close parenthesis, addition, multiplication, subtraction and division, and the button to process the equation. After getting the layout set up, the next step was to set up the signals.<br><br>Signals in Godot are how you connect node events, such as collisions between physics nodes or a button node is clicked, to your scripts. For my calculator, I made each button send the \"pressed\" signal to the UI node, with an argument to tell the reciever function whether it's adding to the equation or if it's going to process the equation, and an argument for the digit or operator to add to the equation.<br><br>The script on the UI node recieves the signal and runs the \"_on_button_pressed\" function, which then processes the signal and does what it should based on the arguments it recieves. If the signal tells it to parse the equation, it then calls a function I wrote called \"parse\", which will walk through the equation, and if it finds an open parenthesis it will store the index it opens and then when it hits the close parenthesis, the function calls itself on the substring of the equation, and once fully processed, it updates the label node to show the answer.<br><br>I did skip over all of the parts where it has to make sure the user didn't input their equation incorrectly, and the code to make sure it doesn't recurse using the first close parenthesis it finds when there's another set of parenthesis inside of the first, but they're not very interesting and it's just stuff like ensuring there are not operators that are missing operands, which is a little annoying when it comes to the minus, because it can be used both as a unary operator when negating a number and a binary operator when subtracting numbers."
    },
    {
        "date": "20240201",
        "title": "Test3",
        "content": "content of post 3"
    }
]

function content (index) {
    if (index == -1) {aboutme(); return;}

    let title = document.getElementsByClassName("title")[0];
    let date = document.getElementsByClassName("date")[0];
    let content = document.getElementsByClassName("content")[0];

    title.innerText = postJSON[index].title;
    dateRaw = postJSON[index].date;
    date.innerText = dateRaw.slice(0,4) + "-" + dateRaw.slice(4,6) + "-" + dateRaw.slice(6);
    content.innerHTML = postJSON[index].content;
}

function aboutme () {
    let title = document.getElementsByClassName("title")[0];
    let date = document.getElementsByClassName("date")[0];
    let content = document.getElementsByClassName("content")[0];

    title.innerText = "About Me";
    date.innerText = "N/A";
    content.innerHTML = "i'm Thorne and i use she/they pronouns, though honestly as long as it's not masculine you can refer to me with whatever your heart desires. i also go by a couple other names because who doesn't love having multiple first names, and you can find them plus a rough list of what terms i'm comfortable with here <a href=\"https://en.pronouns.page/@dragonthorne\">(link)</a>. i have far too much time on my hands thanks to my awful sleep schedule, and i use it for playing things like Minecraft, Payday 2, Ultrakill, and Deep Rock Galactic, though i do have an obscene number of hours on 4D Minesweeper. i also have a habit of trying to learn languages from video games, such as Payday 2's kataru language, or the dragon language from Skyrim, a game i have never played."
}