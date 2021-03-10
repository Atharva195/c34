const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1,chain2;
var rock1;
var trainSound,crashSound;
var flag=0;
function preload() {
   bg=loadImage("images/bg.jpg") 
   trainSound=loadSound("sound/train.mp3")
   crashSound=loadSound("sound/train_crossing.mp3")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,400,1200,500);
    boggie1=new Boggie(100);
    boggie2=new Boggie(200);
    boggie3=new Boggie(300);
    rock1=new Rock(1100,400,100,100);
    chain1=new Chain(boggie1.body,boggie2.body);
    chain2=new Chain(boggie2.body,boggie3.body);

    
}

function draw(){
    background(bg);
        
    Engine.update(engine);
   boggie1.display(); 
   boggie2.display(); 
   boggie3.display(); 
   rock1.display(); 
   chain1.show();
   chain2.show();  
}








