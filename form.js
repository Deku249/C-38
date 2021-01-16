class Form
{
  constructor()
  {
    this.input = createInput("Name");
    this.button = createButton("Play");
    this.greeting = createElement('h3');
    this.title = createElement('h1');
  }

  hide()
  {
    this.input.hide();
    this.button.hide();
    this.greeting.hide()
    this.title.hide()
  }
  display(){
     
      this.title.html("Car Racing Game");
      this.title.position(displayWidth/3-100,80);

      //var input = createInput("Name");
      //var button = createButton("Play");
      //var greeting=createElement('h3');
      
      this.input.position(displayWidth/3-60,160);
      this.button.position(displayWidth/3,210);
      
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        player.name = this.input.value();
        PlayerCount+=1;
        player.index=PlayerCount;
        //we will update both the name and the distance 
        player.update();
        player.updateCount(PlayerCount);
        this.greeting.html("Hello "+ player.name);
        this.greeting.position(displayWidth/3-50,40);



      });




  }

}