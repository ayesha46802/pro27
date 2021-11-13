
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var engine,world;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bobDiameter=80

	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(200,500,80)
	bob2=new Bob(280,500,80)
	bob3=new Bob(360,500,80)
	bob4=new Bob(440,500,80)
	bob5=new Bob(520,500,80)

	roof=new Ground(360,100,520,50)

	rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0)
	rope2=new Rope(bob2.body,roof.body,-bobDiameter*1,0)
	rope3=new Rope(bob3.body,roof.body,bobDiameter*0,0)
	rope4=new Rope(bob4.body,roof.body,bobDiameter*1,0)
	rope5=new Rope(bob5.body,roof.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  function keyPressed() { 
	  if (keyCode === UP_ARROW) { 
		  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
		 } 
		}
  
  drawSprites();
 
}



