class rope{
	constructor(body1,body2,pointA,pointB)
	{

		this.pointA = pointA
		this.pointB=pointB

		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB}
		}

	//create rope constraint here
	con1 = Matter.Constraint.create({
		pointA:{x:250,y:100},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  })
	
	
	  World.add(world,con1);

	  con2 = Matter.Constraint.create({
		pointA:{x:325,y:100},
		bodyB:bob2,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  })
	
	
	  World.add(world,con2);

	  con3 = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:bob3,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  })
	
	
	  World.add(world,con3);

	  con4 = Matter.Constraint.create({
		pointA:{x:475,y:100},
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  })
	
	
	  World.add(world,con4);


	  con5 = Matter.Constraint.create({
		pointA:{x:550,y:100},
		bodyB:bob5,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  })
	
	
	  World.add(world,con5);

	  
	

	}


    //create display() here 

	display(){
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(20);

	}

}
