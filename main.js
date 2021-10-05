img="";
function preLoad()
{
    img = loadImage("dog_cat.jpg");
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw()
{
    image(img,0,0,640,420);
    fill("red");
    text("Dog" , 45,75);
    rect(30,60,450,350); 
}

