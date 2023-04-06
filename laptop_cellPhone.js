img="";

function preload(){
    img = loadImage("Laptop_cell-phone.jpg");
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
    rect(200,150,140,180);
    text("Cell Phone",210,170);

    fill("red");
    stroke("red");
    noFill();
    rect(120,5,420,430);
    text("Laptop",130,20);
}