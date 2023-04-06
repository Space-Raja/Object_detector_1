img="";

function preload(){
    img = loadImage("ac_tv.jpg");
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
    rect(180,200,320,180);
    text("T.V.",190,220);

    fill("red");
    stroke("red");
    noFill();
    rect(100,60,320,100);
    text("A.C.",110,80);
}