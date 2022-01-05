
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var world;
var ball;
var ground;
var rightSide;
var leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);

	ball = new Ball(300,100, 20 ,20)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,670,width,20)
	leftSide = new Ground(1100,600,20,100)
	rightSide = newGround(1300, 600,20,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW)
	Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05})
}



