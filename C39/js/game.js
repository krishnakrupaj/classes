class Game{
    constructor(){}
    getState(){
        var gameStateref = database.ref('gameState')
        gameStateref.on("value",function(data){
            gameState = data.val();

        })
    }
    updatestate(state){
        database.ref('/').update({
        gameState:state
        })
    }
    start(){
       if(gameState === 0  ){
           player = new Player()
           player.getCount();
           form = new Form();
           form.display()
       }
    }
    play(){
        form.hide();
        text("GAME STARTS !",120,100);
        Player.getPlayerInfo()
        if(allplayers !== undefined){
            var display_position = 130;
            for(var plr in allplayers){
                if(plr === "player"+player.index)                  
                fill("red")
                else
                fill("black")
                display_position+=20
                textSize(15);
                text(allplayers[plr].name+":"+allplayers[plr].distance,120,display_position);
            }
        }

    }
}