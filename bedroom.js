img="";

function preload(){
    img = loadImage("bedroom.jpg");
}

function setup(){
    canvas = createCanvas(700,440);
    canvas.center();
}

function draw(){
    image(img,0,0,700,500);

    fill("red");
    stroke("red");
    noFill();
    rect(180,230,430,280);
    text("Bed",190,250);

    
}