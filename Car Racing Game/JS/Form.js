class Form {
    constructor() {
      this.titleImg = createImg('./assets/title.png');
      //for logging into an account
      this.login = createInput('').attribute('placeholder', 'user');
      this.signup = createInput('').attribute('placeholder', 'enter a username');
      this.button1 = createButton('Join');
      this.button2 = createButton("Don't have an account? click here");
      this.button3 = createButton('Already have an account? click here');

      this.option = 1;
    }

    hide(){
      this.button1.hide();
      this.button2.hide()
      this.login.hide();
      this.signup.hide();
      this.titleImg.hide();
    }

    show() {
      this.button1.show();
      this.button2.show()
      this.login.show();
      this.signup.show();
      this.titleImg.show();
    }
    setElementsStyle() {
      this.signup.hide();
      this.button3.hide();
      
      this.titleImg.position(30, 30);
      this.signup.position(300, 150);
      this.login.position(300, 150);
      this.button1.position(360, 230);
      this.button2.position(360, 280);
      this.button3.position(360, 280);

    }

    setCustomClasses() {
      this.titleImg.class("gameTitle");
      this.login.class("customInput");
      this.signup.class("customInput");
      this.button1.class("customButton");
      this.button2.class("customButton2");
      this.button3.class("customButton3");
    }
      
    handleMousePressed() {
      this.button1.mousePressed(()=>{
          this.login.hide();
          this.signup.hide
          this.button1.hide();
          if (option === 1) {
            player.name = this.login.value();
          } else if (option === 2) {
            player.name = this.login.value();
          }
          playerCount+=1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
        });
      this.button2.mousePressed(()=>{
        this.signup.show();
        this.button2.hide();
        this.login.hide();
        this.button3.show();
        this.option = 2;
      });

      this.button3.mousePressed(()=>{
        this.button3.hide();
        this.button2.show();
        this.login.show();
        this.signup.hide();
        this.option = 1;
      })
    }

    display() {
      this.setElementsStyle();
      this.handleMousePressed();
      this.setCustomClasses();
    }
}
