var fixedRect, movingRect, rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1= createSprite(800,500,90,50);
  rect1.shapeColor = "red"
  rect2 = createSprite(500,300,50,80);
  rect2.shapeColor = "blue"
}

function draw() {
  background(0,0,0);  
  rect1.x = World.mouseX;
  rect1.y = World.mouseY;

  if(isTouching(rect1,rect2)) {
    rect1.shapeColor = "yellow";
    rect2.shapeColor = "yellow";
  } else {
    rect1.shapeColor = "red";
    rect2.shapeColor = "blue";
  }
  

  drawSprites();
}


