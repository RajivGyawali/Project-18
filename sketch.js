
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground, groundImage;
var backImage

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backImage = loadImage("jungle.jpg")
  
}



function setup() {
  createCanvas(400,400);
  
   
  
  //creating monkey and ground
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.X=ground.width/2;
  ground.visible=false
  console.log(ground.x)
  
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  score=0;
  
}


function draw() {
  
 //creating background
  background(backImage)
  
  
  

  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score, 300,50);
  
  if(FoodGroup.isTouching(monkey)){
      FoodGroup.destroyEach();
    score = score + 2;
    }
   switch(score){
  case 10: monkey.scale=0.12
      break;
  case 20: monkey.scale=0.14
      break;
  case 30: monkey.scale=0.16
      break;
  case 40: monkey.scale=0.18
      break;
  default: break;    
  }

    if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.08;
     }
  
  if(ground.x<0){
    ground.x= ground.width/2
  }
  console.log(monkey.y)
  
  
    if(keyDown("space")) {//monkey.y>=314){
    monkey.velocityY = -15;
  }
  monkey.velocityY = monkey.velocityY + 0.9;
  
  
  monkey.collide(ground)
 
  spawnobstacles();
  spawnFood();
  //spawnScore();
  
  drawSprites();
}
  function spawnFood(){
  
    if (World.frameCount % 80 == 0) {
    food=createSprite(400,240,20,20)
    food.scale=0.1
    var r=Math.round(random(1,4))
    food.velocityX=-6;
    food.addImage(bananaImage)
    food.lifetime=67
    monkey.depth = food.depth
    monkey.depth = monkey.depth+1
    FoodGroup.add(food)
      
    }
}
function spawnobstacles(){
   if (World.frameCount % 300 == 0) {
    obstacle=createSprite(400,330,20,20)
    obstacle.scale=0.1
    var r=Math.round(random(1,4))
    obstacle.velocityX=-6;
    obstacle.addImage(obstacleImage)
    obstacle.lifetime=67
    obstacleGroup.add(obstacle)
     
   
}
  
}