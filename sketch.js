function setup() {
  createCanvas(800,400);
 fixed = createSprite(200, 200, 50, 80);
 moving = createSprite(400,200,80,30)
 fixed.shapeColor="green"
 moving.shapeColor="green"
 fixed.debug=true
 moving.debug=true
 gameobject1=createSprite(100,100,50,50)
 gameobject1.shapeColor="green"
 gameobject2=createSprite(200,100,50,50)
 gameobject2.shapeColor="green"
 gameobject3=createSprite(300,100,50,50)
 gameobject3.shapeColor="green"
 gameobject4=createSprite(400,100,50,50)
 gameobject4.shapeColor="green"
}

function draw() {
  background("orange");  

  moving.x=World.mouseX
  moving.y=World.mouseY

  if(isTouching(moving,gameobject3)){
    gameobject3.shapeColor="red"
    moving.shapeColor="red"
  }
  else{
    gameobject3.shapeColor="green"
      moving.shapeColor="green"
    
  }
  
  bounceoff(moving,fixed)  

  drawSprites();
}

