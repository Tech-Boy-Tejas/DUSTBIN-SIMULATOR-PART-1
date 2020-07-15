
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,690,800,20);
	dustbin_left = new Dustbin(540,630,20,100);
	dustbin_base = new Dustbin(630,670,160,20);
	dustbin_right = new Dustbin(720,630,20,100);

	paper = new Paper(100,400);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  dustbin_left.display();
  dustbin_base.display();
  dustbin_right.display();

  paper.display();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
	    Body.applyForce(paper.body,paper.body.position,{x :60, y : -60});
	}
}


