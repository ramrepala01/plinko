const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles=[];
var plinko=[];
var division=[];
var divisionBottom;
var ground,groundLeft,groundRight;
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  for(var k=10;k<=width;k=k+82){
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
    }
    
    for(var p=10;p<=width;p=p+70){
    plinko.push(new Plinko(p,80,15))
  }
  for(var h=20;h<=width;h=h+70){
    plinko.push(new Plinko(h,160,15))
  }
  for(var i=0;i<=width;i=i+70){
    plinko.push(new Plinko(i,240,15))
  }
  for(var r=20;r<=width;r=r+70){
    plinko.push(new Plinko(r,320,15))
  }
ground=new Ground(width/2,height,width,10);
groundLeft=new Ground(0,displayHeight/2,10,displayHeight);
groundRight=new Ground(480,displayHeight/2,10,displayHeight);
divisionBottom=new Division(width/2,790,width,10);
}

function draw() {
  background(0);
  Engine.update(engine);
  for(var k=0;k<division.length;k++){
    division[k].display();
   //console.log(division[k]);
    }
  ground.display();
  for(var j=0;j<plinko.length;j++){
    plinko[j].display();

  }
  for(var e=0;e<particles.length;e++){
    particles[e].display();

  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,15))
  }
  groundLeft.display();
  groundRight.display();
  divisionBottom.display();

 
}