// constant values
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

//Create variables here
  var dog,Hdog,foods,fStock
  var food = 0
  var database
  var engine,world
  var dogIm,doghappy
function preload()
{
  //load images here
   dogIm = loadImage("Dog.png");
   doghappy = loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500,500);

   engine = Engine.create();
   world = engine.world;

   fStock = database.ref('food');
   fStock.on("value",readstock);

   rectMode(CENTER)
   dog = createSprite(250,300,150,150);
   rectMode(CENTER)
    dog.addImage(dogIm);  
  
}


function draw() {  
  background(46,139,87);

  if(keyDown(UP_ARROW)){

    writeStock(foods);
    dog.addImage(doghappy);
  }
   drawSprites();
  //add styles here
  
  fill("pink")
  textSize(20);
  text("MILK STOCK LEFT ="+foods,20,30);
  fill("lightblue")
  textSize(30);
  text("Note: press Up arrow to feed PUP",40,460);

}
function readstock(data){
  foods=data.val();
}
function writeStock(x){
  if(x<=0){x=0}
  else{x=x-1}
  database.ref('/').update({food:x})
}