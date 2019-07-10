document.getElementById("square").style.display = "none";
let startTime;
let squareheight =[100,150,200,250];
let shape = ["0%" , "50%"];
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let showShape = function() {
    let topRandom = Math.floor(Math.random()*400);
    let leftRandom = Math.floor(Math.random()*1000);
    let sizaRandom = Math.floor(Math.random()* squareheight.length);
    let shapeRandom = Math.floor(Math.random()* 2);
    document.getElementById("square").style.height = squareheight[sizaRandom] + "px";
    document.getElementById("square").style.width = squareheight[sizaRandom] + "px";
    document.getElementById("square").style.borderRadius = shape[shapeRandom];
    document.getElementById("square").style.top = topRandom + "px";
    document.getElementById("square").style.left = leftRandom + "px";
    document.getElementById("square").style.backgroundColor = getRandomColor();
    document.getElementById("square").style.display = "block";
    startTime = new Date().getTime();
}
let setTimeOut = function() {
        setTimeout(showShape,Math.floor(Math.random()*2000));
    }
    setTimeOut();


document.getElementById("square").onclick = function () {
    const endTime = new Date().getTime(); 
    let time = (endTime - startTime)/1000; //time in seconds
    document.getElementById("timeCounter").innerHTML = "Your time: " + time + " sec";
    document.getElementById("square").style.display = "none";
    if(time < 1){ 
        document.getElementById("comment").innerHTML = "not bad!";
        document.getElementById("comment").style.color = "green";

    } else {
        document.getElementById("comment").innerHTML = "Bad Bad!";
        document.getElementById("comment").style.color = "red";


    }
    setTimeOut();
    

}
