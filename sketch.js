const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

var con1,con2,con3,con4,con5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true		
	}

	var bob1_options={
		isStatic:true		
	}

	var bob2_options={
		isStatic:true		
	}

	var bob3_options={
		isStatic:true		
	}

	var bob4_options={
		isStatic:true		
	}

	var bob5_options={
		isStatic:true		
	}

	roof = Bodies.rectangle(400,100,250,20,roof_options);
    World.add(world,roof);

    bob1 = Bodies.circle(250,350,100,bob1_options);
	World.add(world,bob1);
	bob2 = Bodies.circle(325,350,100,bob2_options);
	World.add(world,bob2);
	bob3 = Bodies.circle(400,350,100,bob3_options);
	World.add(world,bob3);
	bob4 = Bodies.circle(475,350,100,bob4_options);
	World.add(world,bob4);
	bob5 = Bodies.circle(550,350,100,bob5_options);
	World.add(world,bob5);
	

	rope1=new rope(bob1,roof,-80,0);
	World.add(world,rope1);
	rope2=new rope(bob2,roof,-80,0);
	World.add(world,rope2);
	rope3=new rope(bob3,roof,-80,0);
	World.add(world,rope3);
	rope4=new rope(bob4,roof,-80,0);
	World.add(world,rope4);
	rope5=new rope(bob5,roof,-80,0);
	World.add(world,rope5);


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,360,20);

  //call display() to show ropes here
  

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,75);
  ellipse(bob2.position.x,bob2.position.y,75);
  ellipse(bob3.position.x,bob3.position.y,75);
  ellipse(bob4.position.x,bob4.position.y,75);
  ellipse(bob5.position.x,bob5.position.y,75);

  line(con1.pointA.x,con1.pointA.y,bob1.position.x,bob1.position.y);
  line(con2.pointA.x,con2.pointA.y,bob2.position.x,bob2.position.y);
  line(con3.pointA.x,con3.pointA.y,bob3.position.x,bob3.position.y);
  line(con4.pointA.x,con4.pointA.y,bob4.position.x,bob4.position.y);
  line(con5.pointA.x,con5.pointA.y,bob5.position.x,bob5.position.y);

  keyPressed();

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed(){
  if(keyCode === UP_ARROW){
	 Matter.Body.applyForce(bob1,{x:0,y:0},{x:0,y:-0.05});
}
}