
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, paper, dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,300,10);
	dustbin1 = new DustBin(720,480,100,10);
	dustbin2 = new DustBin(670,450,10,50);
	dustbin3 = new DustBin(770,450,10,50);
	ground = new Ground(width/2,490,width,10)
		
	Engine.run(engine);
  
}


function draw() {
	background("black");

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  ground.display();
  
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-5});

	}
}



