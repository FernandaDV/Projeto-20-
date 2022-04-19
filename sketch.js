
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var solo 
var block1, block2, block3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var soloOptions = {
	isStatic: true
}
solo = Bodies.rectangle(400,680,800,20,soloOptions);
World.add(world,solo);

var block1options = {
	restitution:0,
	friction:1.5,
	frictionAir:0.5,

}
var block2options = {
	restitution:1,
	friction:1,
	frictionAir:0,

}
var block3options = {
	restitution:0,
	friction:0.2,
	frictionAir:0,

}

block1 = Bodies.rectangle(300,0,70,50,block1options);
World.add(world,block1);
block2 = Bodies.circle(320,0,50,block2options);
World.add(world,block2);
block3 = Bodies.rectangle(340,0,120,40,block3options);
World.add(world,block3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  
  drawSprites();

  Engine.update(engine);

  rect(solo.position.x,solo.position.y,800,20)
  rect(block1.position.x,block1.position.y,70,50)
  ellipse(block2.position.x,block2.position.y,50)
  rect(block3.position.x,block3.position.y,120,40)
 
}



