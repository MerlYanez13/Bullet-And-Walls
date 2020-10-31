var wall, bullet;
var speed, weight, thickness;

function setup() {
  createCanvas(1400,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  wall=createSprite(1300, 200, 50, 300);
  bullet=createSprite(50, 200, 25, 5);
  wall.shapeColor="grey";
  bullet.shapeColor="gold";
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
 if(wall.x-bullet.x<wall.width/2+bullet.width/2){
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(damage>10){
     wall.shapeColor="red";
   }
  if(damage<10){
    wall.shapeColor="green";
  }
 }

 
  drawSprites();
}