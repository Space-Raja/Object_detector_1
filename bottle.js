img="";

function preload(){
    img = loadImage("bottle.jpg");
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
    rect(120,130,480,307);
    text("Bottles",130,150);
}