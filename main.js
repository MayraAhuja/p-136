status1="";

function setup() {
    canvas=createCanvas();
    canvas.center;
    webcam=createCapture(VIDEO);
    webcam.hide();
}   

function start() {
    model=ml5.objectDetector("cocossd", ml);
    document.getElementById("status").innerHTML="Status: Detecting Objects..."
    input=document.getElementById("name");
}

function ml() {
    console.log("ml yay");
    status1="true";
}

function draw() {
    image(webcam,0,0,700,500);
}