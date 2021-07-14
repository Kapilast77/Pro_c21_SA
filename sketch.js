const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ground;
var left;
var right;
var top_wall;
var btn1;
var btn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  //creating buttons to activate force functions
  btn1=createImg('right.png');
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hforce);

  btn2=createImg('push.png');
  btn2.position(50,30);
  btn2.size(50,50);
  btn2.mouseClicked(vforce);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  var options={
    restitution:0.9,
  }
  ball=Bodies.circle(200,100,20);
  World.add(world,ball)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
}
function hforce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vforce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}