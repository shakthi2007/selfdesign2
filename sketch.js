
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var backimage, backimage1, backimage2, backimage3, backimage4, backimage5, backimage6,backimage7,backimage8;
var backimage9,backimage10;
var cliksound,score=0;
var clickedbox;

function preload(){
  backimage = loadImage("Capture.JPG");
  backimage1 = loadImage("clover.JPG");
  backimage2 = loadImage("diamonds.JPG");
  backimage3 = loadImage("heart.JPG");
  backimage4 = loadImage("joker.JPG");
  backimage5 = loadImage("spades.JPG"); 
  backimage6 = loadImage("bear.JPG"); 
  backimage7 = loadImage ("butterfly.JPG");
  backimage8 = loadImage ("penguin.JPG");
  backimage9 = loadImage ("pecock.JPG");
  backimage10 = loadImage ("flower.JPG");
  clicksound = loadSound ("mouseclicked.mp3");
  }

function setup() {
createCanvas(2000,600);
box1=new   Box (100,200,50,50);
clickedbox=box1;
box2=new   Box (200,200,50,50);
box3=new   Box (300,200,50,50);
box4=new   Box (400,200,50,50);
box5=new   Box (500,200,50,50);
box6=new   Box (600,200,50,50);
box7=new  Box (700,200,50,50);
box8=new  Box (800,200,50,50);
box9=new  Box (900,200,50,50);
box10=new  Box (1000,200,50,50);
//row two
box11=new   Box (100,400,50,50);
box12=new   Box (200,400,50,50);
box13=new   Box (300,400,50,50);
box14=new  Box (400,400,50,50);
box15=new  Box (500,400,50,50);
box16=new  Box (600,400,50,50);
box17=new  Box (700,400,50,50);
box18=new  Box (800,400,50,50);
box19=new  Box (900,400,50,50);
box20=new  Box (1000,400,50,50);



}



function draw() {
  background("black");
  drawSprites();
  if(mousePressedOver(box1.body)){
    box1.body.addImage(backimage1);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box1;
    
  }
  if(mousePressedOver(box2.body)){
    box2.body.addImage(backimage2);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box2;
    
    
  }
  if(mousePressedOver(box3.body)){
    box3.body.addImage(backimage3);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box3;
  
  }
  if(mousePressedOver(box4.body)){
    box4.body.addImage(backimage4);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box4;
    
  }
  if(mousePressedOver(box5.body)){
    box5.body.addImage(backimage5);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box5;
    
  }
  if(mousePressedOver(box6.body)){
    box6.body.addImage(backimage6);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box6;
    
  }
  if(mousePressedOver(box7.body)){
    box7.body.addImage(backimage1);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box7;
   
  }
  if(mousePressedOver(box8.body)){
    box8.body.addImage(backimage2);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box8;
    
  }
  if(mousePressedOver(box9.body)){
    box9.body.addImage(backimage3);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box9;
    
  }
  if(mousePressedOver(box10.body)){
    box10.body.addImage(backimage4);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box10;
   
  }
  if(mousePressedOver(box11.body)){
    box11.body.addImage(backimage5);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box11;
    
  }
  if(mousePressedOver(box12.body)){
    box12.body.addImage(backimage6);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box12;
    
  }
  if(mousePressedOver(box13.body)){
    box13.body.addImage(backimage7);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box13;
    
  }
  if(mousePressedOver(box14.body)){
    box14.body.addImage(backimage7);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box14;
    
  }
  if(mousePressedOver(box15.body)){
    box15.body.addImage(backimage8);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box15;
    
  }
  if(mousePressedOver(box16.body)){
    box16.body.addImage(backimage8);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box16;
    
  }
  if(mousePressedOver(box17.body)){
    box17.body.addImage(backimage9);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box17;
   
  }
  if(mousePressedOver(box18.body)){
    box18.body.addImage(backimage9);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box18;
    
  }
  if(mousePressedOver(box19.body)){
    box19.body.addImage(backimage10);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box19;
  }
  if(mousePressedOver(box20.body)){
    box20.body.addImage(backimage10);
    clickedbox.body.addImage(backimage);
    clicksound.play();
    clickedbox=box20;
   
  }
}