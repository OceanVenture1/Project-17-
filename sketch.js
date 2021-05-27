  var garden,rabbit;
  var gardenImg,rabbitImg;
  var apple, appleImg;
  var leaf, leafImg;
  var rand, rand2;
  var life;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}


function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  rabbit.x=World.mouseX;
  rabbit.velocityX = 4;
  
    if(frameCount % 80 === 0){
        if(rand === 1){
          spawnApple();
        }
      else{
        spawnLeaves();
      }
      }

  rand = Math.round(random(1,2));
  rand2 = Math.round(random(1,2));

  drawSprites();
}

function spawnApple(){
  apple = createSprite(Math.round(random(50,350)),30,20,20);
  apple.velocityY = 4;
  apple.addImage(appleImg);
  apple.scale = 0.09;
  apple.depth = 1;
}

function spawnLeaves(){
  leaf = createSprite(Math.round(random(50,350)),30,20,20);
  leaf.velocityY = 4;
  leaf.addImage(leafImg);
  leaf.scale = 0.09;
  leaf.depth = 1;
}