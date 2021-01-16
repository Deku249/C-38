class Game
{
    constructor()
    {
    }
   getState()
   {
    var GameStateRef= database.ref('GameState');
    GameStateRef.on("value", function(data){
        GameState=data.val();
    })
}
update(state)
{
   database.ref('/').update(
       {
       GameState:state
   })
}

async start(){
    if(GameState === 0){

      player = new Player();
      var PlayerCountRef = await database.ref('PlayerCount').once("value");
      if(PlayerCountRef.exists())
      {
        PlayerCount = PlayerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200)
    car2 = createSprite(300,200)
    car3 = createSprite(500,200)
    car4 = createSprite(700,200)

    cars = [car1,car2,car3,car4]
    
  }
 
play()
{
    form.hide();
    textSize(30)
    text ("Game Starts", displayWidth/3,100);
    Player.getPlayerInfo();
   if(allPlayers !== undefined){
     var index =0;
     var x =0;
     var y;
     //var ypos =120;
     textSize(15);
     for ( var plr in allPlayers){
       index = index +1;
       x = x+200;
       y = displayHeight- allPlayers[plr].distance;
       cars[index-1].x = x;
       cars[index-1].y = y;

       if(index ===player.index)
       {
         cars[index-1].shapeColor="red";
         camera.position.x = displayWidth/2
         camera.position.y = cars[index-1].y

         //text(allPlayers[plr].name + ":"+ allPlayers[plr].distance, 120, ypos);
        // ypos+=20;
     }
     
   }
  }
   if (keyIsDown(UP_ARROW) && player.index != null)
   {
       player.distance +=10;
       player.update();
   }
   drawSprites();

}

}
