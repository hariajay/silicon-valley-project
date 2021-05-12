class Time{
  constructor(x,y){
     this.sprite = createSprite(x,y,50,50)
     this.sprite.addImage("clock",timer)
     this.sprite.scale = 0.1
     this.sprite.debug=true
  }
  increase(){
        if(ball.isTouching(this.sprite) && this.sprite.visible == true){
        count+5
        this.sprite.visible = false
    }
  }
}