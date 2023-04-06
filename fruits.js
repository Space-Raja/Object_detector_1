img="";

function preload(){
    img = loadImage("fruits.jpg");
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
    rect(200,80,240,260);
    text("Banana",210,100);

    fill("red");
    stroke("red");
    noFill();
    rect(120,350,470,90);
    text("Bowl",130,370);
}