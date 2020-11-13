var bullet1,bullet2,wall,line1,line2;


function setup() {
  createCanvas(1600,800);
bullet1=createSprite(175,75,50,50);
wall1=createSprite(1500,75,30,50);
line1=createSprite(1000,200,2000,20);

line1.shapeColor=color(230,230,0);

bullet2=createSprite(175,300,50,50);
wall2=createSprite(1500,300,30,50);  
line2=createSprite(1000,400,2000,20);
line2.shapeColor=color(255,0,0);



}

function draw() {
  background(255,255,255); 
  bullet1.velocityX=7;
  bullet2.velocityX=7;

  if(bullet1.isTouching(wall1)){
    bullet1.shapeColor=color(255,0,0);
    bullet1.velocityX=0;
    wall1.shapeColor=color(230,230,0);  
  } 
  if(bullet2.isTouching(wall2)){
    bullet2.velocityX=0;
    bullet2.shapeColor=color(0,255,0);
    wall2.shapeColor=color(255,0,0);
  } 
  
  drawSprites();
}