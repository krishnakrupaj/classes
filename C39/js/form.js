class Form {

    constructor(){ 
        //creating name input box
        this.input = createInput("Name");
        //creating play button
        this.button = createButton('play');
        //creating greeting in h3 size of html
        this.greeting = createElement('h3');
    }

    display(){
        //creating title for the screen in h2 size of html
        var title = createElement('h2');
        //giving string val to title
        title.html("car racing game");
        //positioning title
        title.position(130,0);

        //positioning input box and play button
        this.input.position(130,160);
        this.button.position(250,200);
        
        //function to run after pressing play butto
        this.button.mousePressed(()=>{
            //hide innput and button
            this.input.hide();
            this.button.hide();

            
            player.name = this.input.value();
            playerCount+=1;
            player.update();
            player.index = playerCount;
            player.updateCount(playerCount);
            this.greeting.html("hello " + player.name)
            this.greeting.position(130,160)


        })
    }
        
        hide(){
            this.greeting.hide();
            this.button.hide();
            this.input.hide();
            
        }

    

}