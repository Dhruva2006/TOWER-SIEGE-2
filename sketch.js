const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


  ground1 = new Ground(400, 350, 400, 20);
  stand1 = new Ground(600, 300, 100, 20);

  box1 = new Box(600, 300, 20, 20);
  box2 = new Box(620, 300, 20, 20);
  box3 = new Box(640, 300, 20, 20);
  box4 = new Box(660, 300, 20, 20);
  box5 = new Box(680, 300, 20, 20);
  box6 = new Box(700, 300, 20, 20);

  // level 2 

  box7 = new Box(620, 280, 20, 20);
  box8 = new Box(640, 280, 20, 20);
  box9 = new Box(660, 280, 20, 20);
  box10 = new Box(680, 280, 20, 20);

  //level 3
  
  box11 = new Box(640, 260, 20, 20);
  box12 = new Box(660, 260, 20, 20);

  //level 4 

  box13 = new Box(650, 240, 20, 20);


  polygon = Bodies.cicle(50,200,20);
  World.add(world, polygon);

  slingShot = new SlingShot(this.polygon, {x: 100, y: 200});

  imageMode(CENTER);
  image(polygon_img, polygon.positon.x, polygon.positon.y, 40, 40)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  drawSprites();
  ground1.display();
  stand1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  Slingshot.fly();
}

function keyPressed() {
  if(keyCode == 32) {
      slingshot.attach(this.polygon);
  }
}