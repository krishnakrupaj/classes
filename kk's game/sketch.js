var capseller,cap1,cap2,cap3,cap4,cap5
var b1,b2,b3,b4,b5
var monkey_img1,monkey_img2,monkey_img3,monkey_img4

function preload(){
  monkey_img1 = loadImage("m1.png");
  monkey_img2 = loadImage("m2.png");
  monkey_img3 = loadImage("m3.png");
  monkey_img4 = loadImage("m4.png");
  b = loadImage("bg.png")
}

function setup() {
  createCanvas(1200,800);

  capseller = createSprite(600,775,30,50);
 
}

function draw() {
  background(b);
  textSize(20)
  text(mouseX+","+mouseY,mouseX,mouseY);
  
  monkey();
  drawSprites();
}
function monkey(){
 
  if(frameRate%60===0){
    var m = createSprite(720,27,30,40);
    var mx = Math.round(random(1,6));
    var mv = Math.round(random(1,2));
    if (mv === 1){
      m.x=400
    m.velocityX = -3;
    }
    else if(mv === 2){
      m.x= 0
      m.velocityX = 3
    }
    switch (mx) {
       case 1:
       // m2.x = 150; 
        m.addImage(monkey_img1);    
        break;
       case 2:
      // m2.x =325;
       m.addImage(monkey_img2);    
       break;
       case 3:
      // m2.x = 450
       m.addImage(monkey_img3);    
       break;
       case 4:
      // m2.x = 520
       m.addImage(monkey_img2);    
       break;
       case 5:
     //  m2.x = 680
       m.addImage(monkey_img4);    
       break;
       case 6:
      // m2.x = 750
       m.addImage(monkey_img1);    
       break;
       
      default:
        break;
    }
   }
}