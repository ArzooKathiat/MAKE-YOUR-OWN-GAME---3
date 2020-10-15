
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas, backgroundImage;
var wall,wall2, wallImg;
var obsruction, obstructionImg;
var player,playerImg;
var walkFront, walkBack,backStop, walkLeft, walkRight;
var ground, groundImg;
var exit, exitImg;
var shadow;
var gem, gemImg;
var gem2, gem2Img;
var enemy, enemyImg;

function preload()
{
	enemyImg = loadImage("images/enemyWalk.png");
	backgroundImage = loadImage("../images/background.png")
	
	wallImg = loadImage("../images/wallStone_fence.png")
	obstructionImg = loadImage("../images/wallBreakable.png")
	playerImg= loadImage("../images/idle.png")
	groundImg = loadImage("../images/ground.png")
	exitImg = loadImage("../images/groundExit.png")
	walkFront = loadImage("../images/walk.png");
	walkRight = loadImage("../images/rightWalk.png");
	walkBack = loadImage("../images/backwalk.png");
	backStop = loadImage("../images/back.png");
	walkLeft = loadImage("../images/leftWalk.png");
	gemImg = loadImage("../images/gem1.png");
	gem2Img = loadImage("../images/gem2.png");

}

function setup() {

	canvas = createCanvas(displayWidth, displayHeight-150);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);


//create maze walls
	obstruction = createSprite(85,280,50,50)
	obstruction.addImage(obstructionImg)

	obstruction = createSprite(570,270,50,50)
	obstruction.addImage(obstructionImg)
	

 shadow = createSprite(1190,460,100,100)
shadow.shapeColor = "#7E481C"

//create player
	player= createSprite(100,100,50,50)
    player.addImage(playerImg)
	player.velocityY = 0;
	player.velocityX = 0;

	//create gems
	gem = createSprite(200,100,20,20)
	gem.addImage(gemImg)

	gem = createSprite(200,400,20,20)
	gem.addImage(gemImg)

	gem = createSprite(600,100,20,20)
	gem.addImage(gemImg)

	//gem = createSprite(900,400,20,20)
	//gem.addImage(gemImg)

	gem = createSprite(600,400,20,20)
	gem.addImage(gemImg)

	gem = createSprite(700,270,20,20)
	gem.addImage(gemImg)

	gem = createSprite(800,95,20,20)
	gem.addImage(gemImg)

	//create more gems
	gem2 = createSprite(570,320,20,20)
	gem2.addImage(gem2Img)

	gem2 = createSprite(770,380,20,20)
	gem2.addImage(gem2Img)

	gem2 = createSprite(230,180,20,20)
	gem2.addImage(gem2Img)

	gem2 = createSprite(1100,170,20,20)
	gem2.addImage(gem2Img)

	//create enemies
	enemy = createSprite(900,400,20,20)
	enemy.addImage(enemyImg);
	
	enemy = createSprite(950,190,20,20)
	enemy.addImage(enemyImg);

	enemy = createSprite(300,300,20,20)
	enemy.addImage(enemyImg);

	enemy = createSprite(530,170,20,20)
	enemy.addImage(enemyImg);

	enemy = createSprite(130,370,20,20)
	enemy.addImage(enemyImg);
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);


	
	exit = createSprite(1165,450,40,40)
	exit.addImage(exitImg)

	//make maze walls
	for (var i = 85; i < 150; i=i+50) {
		obstruction = createSprite(i,280,50,i+10)
		obstruction.addImage(obstructionImg)
				
		}

			
		for (var i = 300; i < 500; i=i+50) {
			obstruction = createSprite(i,400,50,i+10)
			obstruction.addImage(obstructionImg)
					
			}
	 
		for (var i = 400; i < 500; i=i+50) {
			obstruction = createSprite(500,i,i+10,50)
			obstruction.addImage(obstructionImg)
					
			}

			for (var i = 400; i < 500; i=i+50) {
				obstruction = createSprite(700,i,i+10,50)
				obstruction.addImage(obstructionImg)
						
				}

				for (var i = 1000; i < 10000; i=i+50) {
					obstruction = createSprite(i,280,50,i+10)
					obstruction.addImage(obstructionImg)
							
					}

for (var i = 1000; i < 1500; i=i+50) {
obstruction = createSprite(i,110,50,i+10)
obstruction.addImage(obstructionImg)
							
					}

					for (var i = 100; i < 200; i=i+50) {
						obstruction = createSprite(700,i,i+10,50)
						obstruction.addImage(obstructionImg)
								
						}




						for (var i = 100; i < 200; i=i+50) {
							obstruction = createSprite(450,i,i+10,50)
							obstruction.addImage(obstructionImg)
									
							}

							for (var i = 300; i < 500; i=i+50) {
								obstruction = createSprite(i,200,50,i+10)
								obstruction.addImage(obstructionImg)
										
								}	

								for (var i = 700; i < 850; i=i+50) {
									obstruction = createSprite(i,200,50,i+10)
									obstruction.addImage(obstructionImg)
											
						
								}
								
								for (var i = 200; i < 350; i=i+50) {
									obstruction = createSprite(850,i,i+10,50)
									obstruction.addImage(obstructionImg)
											
									}
								

  //boundary creation
  for (var i = 0; i < 1500; i=i+50) {
	wall = createSprite(i,20,i+10,50)
	wall.addImage(wallImg)

	}

	for (var i = 70; i < 500; i=i+50) {
	wall = createSprite(20,i,60,i+10)
	wall.addImage(wallImg)
			
	}
	
	for (var i = 70; i < 500; i=i+50) {
	wall = createSprite(1250,i,60,i+10)
	wall.addImage(wallImg)
				
	}

	for (var i = 0; i < 1500; i=i+50) {
	wall = createSprite(i,500,i+10,50)
	wall.addImage(wallImg)
					
	}


//player movement
  if(keyDown(UP_ARROW)){
	player.velocityY = -5;
	player.addImage(walkBack);
  }
  if(keyWentUp(UP_ARROW)){
	player.velocityY = 0;
	player.addImage(backStop);
  }

  if(keyDown(DOWN_ARROW)){
	player.velocityY = 5;
	player.addImage(walkFront);
  }
  if(keyWentUp(DOWN_ARROW)){
	player.velocityY = 0;
	player.addImage(playerImg);
  }

  if(keyDown(LEFT_ARROW)){
	player.velocityX = -5;
	player.addImage(walkLeft);
  }
  if(keyWentUp(LEFT_ARROW)){
	player.velocityX = 0;
	player.addImage(playerImg);
  }

  if(keyDown(RIGHT_ARROW)){
	player.velocityX = 5;
	player.addImage(walkRight);
  }
  if(keyWentUp(RIGHT_ARROW)){
	player.velocityX = 0;
	player.addImage(playerImg);
  }
 
 
 
 
 
  
  

	
  drawSprites();


 
}

