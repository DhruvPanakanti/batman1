const Engine=Matter.Engine;
const World =Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var dr=[]
function preload(){
    thunder1=loadImage("images/thunderbolt/1.png");
    thunder2=loadImage("images/thuderbolt/2.png");
    thunder3=loadImage("images/thunderbolt/3.png");
    thunder4=loadImage("images/thunderbolt/4.png");
    

}

function setup(){
  var canvas=createCanvas(400,400)
  engine=Engine.create(); 
  world=engine.world  
}

function draw(){
   background(0,0,0);
   
   if(frameCount%150===0){
     for(var i=0;i<100;i=i+1){
       dr.push(new Drops(random(0,400),random(1,400)));
     }
   }
  drawSprites();
}   

