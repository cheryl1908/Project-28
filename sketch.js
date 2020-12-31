
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
	var boy=createSprite(200,200,100,400);
	boy.addImage="Picture/boy.png";
	ground = new Ground(400,height,800,20);
	tree = new Tree(600,390,250,600);
	stone = new Stone(300,390,250,600);

	mango1 = new Mango(400,10,300,100);
	mango2 = new Mango(600,10,400,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
   
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
}



