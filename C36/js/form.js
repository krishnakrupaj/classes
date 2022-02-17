class Form {

    constructor(){ }

    display(){

        var title = createElement('h2');
        title.html("car racing game");
        title.position(130,0);

        var Input = createInput("name");
        var button = createButton('play')
        var greeting = createElement('h3');
         
        Input.position(130,160);
        button.position(250,200);
        
        button.mousePressed(function(){

            Input.hide();
            button.hide();

            var name = Input.value();
            playerCount+=1;
            player.update(name);
            player.updatecount(playerCount);



        })

    }

}