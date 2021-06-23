var backgroundImg
var snowFlake

function preload(){
  backgroundImg = loadImage("snow1.jpg");

}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  snowFlake = new Snow(200,300,20);

}

function draw() {
  background(backgroundImg);  

  if(frameCount % 80 == 0){
    snowFlake.display();
  }
  drawSprites();
}