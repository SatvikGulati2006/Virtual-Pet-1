//Create variables here
var dog , happyDog;
var database , foodS;
var foodStock;

function preload()
{
 dog = loadImage('images'/'dogImg.png');
 dog = loadImage('images'/'dogImg1.png');
	//load images here
}

function setup() {
  createCanvas(500, 500);
  
  dog.addImage(dogImg.png);
  dog.addImage(dogImg1.png);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  
}


function draw() {  
background(46,139,87);

if(keyWentDown(Up_Arrow)) {
  writeStock(foodS);
 dog.addImage(dogHappy);
}

  drawSprites();
  //add styles here
  textSize(20);
  fill(black);
  stroke('blue');

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

if(x<=0){
  x=0;
}else{
  x = x-1;
}
}

  database.ref('/').update({
    Food:x
  })




