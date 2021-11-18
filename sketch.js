var PLAY = 1;
var END = 0;
var gameState = PLAY;

var block
var ground

var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score;


function preload(){

}

function setup() {
    createCanvas(windowWidth, windowHeight);

   
    block = createSprite(50,height-30,20,50);
    
    
  
    block.scale = 0.5;
    
    ground = createSprite(width/2,height-70,width,2);
    ground.x = ground.width /2;
    
   
        
        
    
        restart = createSprite(width/2,height/2);
        
  
        
        restart.scale = 0.5;
   
    
    
    invisibleGround = createSprite(width/2,height-10,width,125);  
    invisibleGround.visible = false;
    
    //create Obstacle and Cloud Groups
    obstaclesGroup = createGroup();
   
  
    
    block.setCollider("rectangle",0,0,block.width,block.height);
    block.debug = true
    
    score = 0;
}

function draw() {
    background(180);
    
    text("Score: "+ score, width-100,50);
    
    
    
    if(gameState === PLAY){
  
      restart.visible=false
     
      
      ground.velocityX = -(4 + 3* score/100)
      //scoring
      score = score + Math.round(getFrameRate()/60);
      
      
      
      if (ground.x < 0){
        ground.x = ground.width/2;
      }
      
      //jump when the space key is pressed
      if((touches.length > 0 || keyDown("SPACE")) && block.y  >= height-120) {
        
        trex.velocityY = -10;
         touches = [];
      }
      
      
      block.velocityY = block.velocityY + 0.8
    
      
      
    
      
      spawnObstacles();
      
      if(obstaclesGroup.isTouching(block)){  
        gameState = END; 
      }
    }
     else if (gameState === END) {
        
       
       
        
      
        
        
        restart.visible=true
        
       
        ground.velocityX = 0;
        block.velocityY = 0
  
        if(mousePressedOver(restart)) {
          reset();
        }
    
        
       
        //set lifetime of the game objects so that they are never destroyed
      obstaclesGroup.setLifetimeEach(-1);
      
       
       obstaclesGroup.setVelocityXEach(0);
           
     }
    
   
    //stop trex from falling down
    block.collide(invisibleGround);
    
    
  
    drawSprites();
}

function reset(){
    restart.visible=false
    gameState= PLAY
    obstaclesGroup.destroyEach()
    score=0
  }
  
  function spawnObstacles(){
    if (frameCount % 60 === 0){
    obstacle1 = createSprite(600,height-95,20,30);
    obstacle2 = createSprite(600,height-95,20,30);
    obstacle3 = createSprite(600,height-95,20,30);
    obstacle4 = createSprite(600,height-95,20,30);
    obstacle5 = createSprite(600,height-95,20,30);
    obstacle6 = createSprite(600,height-95,20,30);
      obstaclesGroup.setVelocityXEach = -(6 + score/100);
      
       
       var rand = Math.round(random(1,6));
       switch(rand) {
         case 1: obstacle1
                 break;
         case 2: obstacle2
                 break;
         case 3: obstacle3
                 break;
         case 4: obstacle4
                 break;
         case 5: obstacle5
                 break;
         case 6: obstacle6
                 break;
         default: break;
       }
      
                 
       obstacle1.scale = 0.5;
       obstacle1.lifetime = 300;
      
       obstacle2.scale = 0.5;
       obstacle2.lifetime = 300;
    
       obstacle3.scale = 0.5;
       obstacle3.lifetime = 300;
       
       obstacle4.scale = 0.5;
       obstacle4.lifetime = 300;

       obstacle5.scale = 0.5;
       obstacle5.lifetime = 300;

       obstacle6.scale = 0.5;
       obstacle6.lifetime = 300;

       
      
    }
   }