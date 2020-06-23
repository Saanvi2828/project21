var bullet,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed;

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="brown";
}

function draw() {
  background(0);  
  
 
  drawSprites();
}
function hasCollided(){
  
}