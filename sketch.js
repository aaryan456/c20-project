
var canvas1,canvas2,canvas3,box;


function setup(){

  createCanvas(1400,800);
  canvas1 = createSprite(250,500,600,1000)
  
  canvas2 = createSprite(800,500,600,1000)
  
  canvas3 = createSprite(1300,500,600,1000)

  canvas1.shapeColor = "black";
  canvas2.shapeColor = "black";
  canvas3.shapeColor = "black";
  box = createSprite(200,100,20,20);
  box.shapeColor = "yellow"
}


function draw(){
   background(0);
  drawSprites();
  box.x = mouseX;
  box.y = mouseY;
  if(box.isTouching(canvas1)){
    canvas1.shapeColor = "red";
  canvas2.shapeColor = "black";
  canvas3.shapeColor = "black";
  }
  if(box.isTouching(canvas2)){
    canvas1.shapeColor = "black";
  canvas2.shapeColor = "green";
  canvas3.shapeColor = "black";
  }
  if(box.isTouching(canvas3)){
    canvas1.shapeColor = "black";
  canvas2.shapeColor = "black";
  canvas3.shapeColor = "blue";
  }
 
  
}