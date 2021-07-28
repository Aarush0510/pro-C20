
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var block1,block2;
var rotator1,rotator2,rotator3;

var angle = 60;
var angle2=60;
var angle3=60;

var particle1,particle2,particle3,particle4,particle5;


function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ground_options={
		isStatic: true
	}
	ground = Bodies.rectangle(300,height,600,20,ground_options);
	World.add(world,ground);

	block1 = Bodies.rectangle(100,400,150,20,ground_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(400,400,150,20,ground_options);
	World.add(world,block2);

	var rotator_options={
		isStatic:true
	}
	rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator1);
	rotator2 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator2);
	rotator3 = Bodies.rectangle(250,200,150,20,rotator_options);
	World.add(world,rotator3);

	var particle_options = {
		restitution:0.4,
		friction:0.02
	}
	particle1 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle1);
	particle2 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle2);
	particle3 = Bodies.circle(225,10,10,particle_options);
	World.add(world,particle3);
	particle4 = Bodies.circle(230,10,10,particle_options);
	World.add(world,particle4);
	particle5 = Bodies.circle(230,10,10,particle_options);
	World.add(world,particle5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightgreen');
  Engine.update(engine);
  fill("brown");  
  rect(ground.position.x,ground.position.y,600,20);
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);

  ellipse(particle1.position.x,particle1.position.y,10)
  ellipse(particle2.position.x,particle2.position.y,10)
  ellipse(particle3.position.x,particle3.position.y,10)
  ellipse(particle4.position.x,particle4.position.y,10)
  ellipse(particle5.position.x,particle5.position.y,10)
  
  Matter.Body.rotate(rotator1,angle)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle);
  rect(0,0,150,20);
  pop();
  angle +=10;

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=20;

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=30;

  
  drawSprites();
 
}



