const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snowflake
var Snowflakes = [];
var girl,girlImg ;
function preload(){
  bg = loadImage("snow3.jpg"); 
  girlImg = loadImage("girl.png");  
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  girl = createSprite(500,300,20,20);
  girl.addImage(girlImg);
  
}

function draw() {
  background(bg);
  Engine.update(engine);
  if(frameCount % 60 == 0){
    Snowflakes.push(new snowFlake(random(0,width),0));
  }
  
  for (var v = 0; v < Snowflakes.length; v++) {
    Snowflakes[v].display();
  }
  drawSprites();
}