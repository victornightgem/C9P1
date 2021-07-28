var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,150,150);
  
}

function draw() {
  background(30);
  if(keyIsDown(UP_ARROW)){
    box.y = box.y -1;
  }
  if (keyIsDown(RIGHT_ARROW)){
    box.scale = box.scale + 0.01;
  }
  
  drawSprites();
}






