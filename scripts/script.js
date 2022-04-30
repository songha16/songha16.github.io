//TODO: create a loop with innerHTML to avoid repeated code
function randomize(){
    //Shuffle the lines
    const lines = ["The quiet shade", "Across old bark", "In the ancient shade", "It's always dark"];
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line3 = document.getElementById("line3");
    var line4 = document.getElementById("line4");

    let index = lines.length, randomIndex;
    while (index != 0){
        randomIndex = Math.floor(Math.random()*index);
        index--;

        [lines[index], lines[randomIndex]] = [lines[randomIndex], lines[index]];
    }

    line1.textContent = lines[0];
    line2.textContent = lines[1];
    line3.textContent = lines[2];
    line4.textContent = lines[3];

    //Randomize the location
    var poem = document.getElementById("poem");
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;

    var randomTop = Math.abs(Math.random()*(winHeight-200));
    var randomLeft = Math.abs(Math.random()*(winWidth-200));

    poem.style.top = randomTop + "px";
    poem.style.left = randomLeft + "px";
}

document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState != "visible"){
        console.log("Poem is not being observed");
        randomize();
    }
    else{
        console.log("Poem is being observed");
    }
})