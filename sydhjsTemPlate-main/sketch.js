var starImg,bgImg;
var star, starBody;
var fairy, fairyImg, fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairyImage1.png","images/fairyImage2.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 600);

	fairyVoice.play();

	fairy = createSprite(300,490)
    fairy.addAnimation("fairyflying",fairyImg);
	fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {

	Engine.update(engine)

  background(bgImg);

  fairy.velocityX = 0;
  fairy.velocityY = 0;

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);


  if(star.y > 470 && starBody.position.y > 470){
	Matter.Body.setStatic(starBody,true); 
	fairy.velocityX = 0;
  }

  keyPressed();

  drawSprites();

}

function keyPressed(){

	if(keyDown(RIGHT_ARROW)){
		fairy.velocityX = 6;
	}
	else if(keyDown(LEFT_ARROW)){
		fairy.velocityX = -6;
	}
	else if(keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(starBody,false); 
	  star.velocityY = 3;
	}
}

