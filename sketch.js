var player,game,form
var GameState = 0 
var PlayerCount = 0
var allPlayers;
var distance;
var car1,car2,car3,car4
var cars 

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);

 game = new Game();
 game.getState();
 game.start();


}

function draw(){
  background("white");
  if(PlayerCount===4)
  {
    game.update(1);
  }

  if(GameState===1)
  {
   clear();
    game.play();
  }
    
    drawSprites();
  
}

