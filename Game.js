class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value")
      if(playerCountRef.exists())
      {
        playerCount=playerCountRef.val()
        player.getCount()
      }
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play()
  {
    form.hide()
    textSize(30)
    text("GAME START",120,100)
    Player.getPlayerInfo()
    if(all_players!==undefined)
    {
      var displayPos = 130
      for(var plr in all_players)
      {
        if(plr==="player" +player.index)
          fill("red")
          else
          fill("black")

      }
      displayPos = displayPos+20
      textSize(15)
      text(all_players[plr].name+":"+all_players[plr].distance,120,displayPos)
    }
    if(keyIsDown(UP_ARROW)&& player.index!==null)
    {
      player.distance=player.distance+50
      player.update()
    }
  }
}
