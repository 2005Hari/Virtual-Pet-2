//Create variables here
var dog, happyDog, database, foodS, foodStock 
var foodS, foodStock;
var addfood,FeedDog
function preload()
{
	dog=loadImage("dogImg.png")
  happyDog=loadImage("dogImg1.png")

}

function setup() {
	createCanvas(500, 500);
  Dog = createSprite(200,200,50,50)
  Dog.addImage(happyDog)
  Dog.scale = 0.4;
 
database=firebase.database();
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)

addfood=createButton("ADD Food ")
addfood.position(520,50)
FeedDog=createButton("Feed Dog")
FeedDog.position(600,50)


}


function draw() {  
  background(46, 139, 87)
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    Dog.addImage(happyDog)
  }
 
  drawSprites();

  strokeWeight()
  stroke("red");  
  text("Food Remaining:" + foodS, 250,480);
  //add styles here
}
function readStock(data){
  foodS=data.val()
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  }

  )
}




