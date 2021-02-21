var gameState=0;
var fampic
var family
var trainimg
var link
var train;
var start;
var startimg;
var clue1;
var a1;
var dogbelt;
var footprints;
var dogprints;
var clap;
var trainSound;
function preload(){
 family=loadImage("sd game/family.png");
 trainimg=loadImage("sd game/Train-Station.jpg");
 startimg=loadImage("sd game/start.png")
 dogbelt=loadImage("sd game/dogbelt.png")
 footprints=loadImage("sd game/footprints.png");
 trainSound=loadSound("train whistle.wav");
 clap=loadSound("applause.wav");
}
function setup() {
  createCanvas(1400,700);
 fampic= createSprite(300,500);
 fampic.addImage("fam",family);
  start=createSprite(1000,600);
  start.addImage("gamestart",startimg);
  
}

function draw() {
  if(gameState===0){
  background("pink");
  textSize(40);
  fill("black");
  textStyle("bold");
 //textFont('Helvetica');
  text("Goal - Save the pet!",520,65);
  textSize(20);
  fill("green");
  textStyle("georgia");
  text("This little girl named Venziya lost her pet dog named Tommy. She wants you to save her pet.",270,400);
  textStyle("italic");
  fill("red");

  if(mousePressedOver(start)){
    gameState=1;
  }
}

if(gameState===1){
  background(trainimg);
  //trainSound.play();
  fampic.visible=false;
  start.visible=false;
   textSize(25);
   fill("black");
   textStyle("italic")
  text("CLUE :1 Find me on the thing which has  seats but , Its not a living room , ",100,100)
  text("Its sometimes a bullet but Its not fired out of a gun , It can be found in a subway but Its not a sandwich",100,130);

clue1=createSprite(1000,500,50,50);
clue1.addImage("belt",dogbelt);
clue1.scale=1/9;
  
if(mousePressedOver(clue1) && gameState===1) { 
  clap.play();
  textSize(25);
  fill("red");
  textStyle("bold");
  text("WOW!! YOU ARE RIGHT.NOW TRY TO FIND THE FOOTPRINTS OF THE DOG FOR NEXT CLUE! ",200,180)
  gameState=2;
}
}
if(gameState===2){
dogprints=createSprite(1300,641,50,50);
dogprints.addImage("foot",footprints);
dogprints.scale=1/20;

if(mousePressedOver(dogprints) && gameState===2) { 
  clap.play();
  textSize(25);
  fill("red");
  textStyle("bold");
  text("GREAT! THAT'S A CORRECT ANSWER.NOW LOOK FOR THE NEXT CLUE AND GET READY TO RESCUE THE DOG ",30,210);
gameState=3;
}
}
drawSprites();

}
  