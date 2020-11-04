const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 var ground,stand;
 var block;
 var polygon;
 var score = 0;

  function preload(){
    polygon_img = loadImage("hexagon.png")
  }

 function setup() {
  var canvas = createCanvas(800,600);
  
   engine = Engine.create();
   world = engine.world;
  
   //Create Bodies Here.

   ground = new Ground(400,580,800,35);
   stand1 = new Ground(305,300,230,20);
   stand2 = new Ground(580,220,210,20);

   // level one stand one
   block1 = new Box(270,290,40,40);
   block2 = new Box(290,290,40,40);
   block3 = new Box(310,290,40,40);
   block4 = new Box(330,290,40,40);

   // level two stand one
   block5 = new Box(280,260,40,40);
   block6 = new Box(300,260,40,40);
   block7 = new Box(320,260,40,40);

  // level three stand one
  block8 = new Box(315,240,40,40);
  block9 = new Box(295,240,40,40);

  // level four stand one
  block10 = new Box(303,220,40,40);

  // level one stand two 
  block11 = new Box(560,200,50,40);
  block12 = new Box(580,200,50,40);
  block13 = new Box(600,200,50,40);

  // level two stand two
  block14 = new Box(565,190,50,40);
  block15 = new Box(585,190,50,40);
  
  // level three stand two
  block16 = new Box(575,170,50,40);

  var polygon_options = {
    resitiution: 0.5,
    mass: 5
  }
  polygon = Bodies.circle (48,200,20,polygon_options);
  console.log(polygon);
  World.add(world,polygon);
  slingshot = new Slingshot(this.polygon,{x:100, y:300});

 }

function draw() {
  background(145, 207, 200);
  Engine.update(engine); 

  textSize(20);
  fill("black");
  text("SCORE: "+score,680,40);

  ground.display();
  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score(); 
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  

  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
  
  slingshot.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
} 

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);

     
  }
}