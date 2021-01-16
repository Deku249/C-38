class Player 
{
  constructor(){

    this.index = null
    this.name = null
    this.distance = 0
  }

   getCount()
   {
      var PlayerCountRef = database.ref('PlayerCount')
      PlayerCountRef.on("value",function(data)
      {
        PlayerCount = data.val()

      })
   }
   updateCount(count)
   {
       database.ref('/').update({
           PlayerCount : count
       })
   }
   update(name)
   {
       var playerIndex ="player"+PlayerCount;
    database.ref(playerIndex).set({
        name : name
   })
}
update()
{
  var playerIndex="players/player"+PlayerCount;
  database.ref(playerIndex).set({
   name:this.name,
   distance:this.distance
  })
}

static getPlayerInfo()
{
  var playerInfoRef= database.ref('players');
  playerInfoRef.on("value",data=>{
  allPlayers=data.val();
  })
}
}