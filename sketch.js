const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperObject;
var world;
var dustbimObj;
var groundObject;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)
//ground=createSprite(400,680,10000,20);
//wall1=createSprite(1200,640,200,20);
//wall2=createSprite(1100,600,20,100);
//wall3=createSprite(1300,600,20,100);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperObject = new Paper(425,700,20);
	dustbimObj=new Dustbin(1200,650)
	groundObject=new Ground(width/2,670,width,20)
	var render= Render.create({
		element: document.body,
		engine: engine,
		options:{
			width: 1200,
			height: 700,
			wireframes:false
		}
	})


	Engine.run(engine);
	Render.run(render);
	
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObject.display();
  dustbimObj.display();
  groundObject.display();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
	}
}