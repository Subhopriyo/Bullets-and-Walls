var wall,thickness;
var bullet,speed,weight;

function setup(){
  createCanvas(1600,400);
  speed=random(233,321);
  weight=random(30,52);

  bullet=createSprite(50,200,50,20);
  bullet.shapeColor=color("white");
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)
  thickness=random(22,83);
  }

  function draw(){
   
    background("black");
    bullet.velocityX=speed;

    if(hasCollided(bullet,wall)){
      bullet.velocityX=0;
      bullet.velocityY=0;
    }
    if(wall.x-bullet.x<(bullet.width+wall.width)/2){
      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
      if(weight==32&&speed==223&& thickness==70&&damage==3.68){
        bullet.shapeColor=color("green");
      }
      if(weight==32&&speed==223&&thickness==70&&damage==12.43){
        bullet.shapeColor=color("red");
      }
      
    }
  }

  function hasCollided(Lbullet,Lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}
