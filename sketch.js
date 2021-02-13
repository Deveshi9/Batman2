const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine ,world;
var maxDrops = 100;
var drops = []
function preload(){
    
}

function setup(){
   createCanvas (400,400)
   engine = Engine .create();
   world = engine .world;
   
   for ( var i=0; i<maxDrops; i++){
      drops.push(new Drops(random(0,400),random(0,400))) ;
   }
    
}

function draw(){
    background("black");
for (var i = 0; i < maxDrops; i ++){
    drops [i].display();
    drops[i].update();
}
drawSprites();

}   

