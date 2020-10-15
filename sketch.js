const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;

function setup() {

	createCanvas(1000, 500);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//roofObject=new roof(width/2,height/4,width/7,20);

	bobDiameter=40;

	bobObject1=new bob(420,600,40);
	bobObject2=new bob(460,600,40);
	bobObject3=new bob(500,600,40);
	bobObject4=new bob(540,600,40);
	bobObject5=new bob(580,600,40);
	
	rope1=new rope(bobObject1.body,{x:420,y:100})
	rope2=new rope(bobObject2.body,{x:460,y:100})
	rope3=new rope(bobObject3.body,{x:500,y:100})
	rope4=new rope(bobObject4.body,{x:540,y:100})
	rope5=new rope(bobObject5.body,{x:580,y:100})
	Engine.run(engine);

}

function draw() {

  rectMode(CENTER);
  background(230);
 // roofObject.display();
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  textSize(20)
text("presss up arrow to move one ball",50,50);
text("presss down arrow to move two balls",50,80);
text("presss left arrow to move 3 balls",50,110);
}

function keyPressed() {

  	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	  }
	  if (keyCode ===  DOWN_ARROW) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-50,y:-45});
	  } 	
	  if (keyCode ===  LEFT_ARROW) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-50,y:-45});
	  }
}