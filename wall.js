class Wall{
  constructor(x,y,c){
     this.body = Bodies.rectangle(x,y,45,70,{density:1})
     this.c = c
     this.x = x
     this.i=1
     world.add(wld,this.body)
     angleMode(RADIANS)
  }
  display(){
     var angle = this.body.angle
     var pos = this.body.position
     push()
     strokeWeight(0.5)
     if(this.i==1){
     text("wall",this.x-20,250)
     }
     rectMode(CENTER)
     translate(pos.x,pos.y)
     rotate(angle)
     strokeWeight(1)
     fill(this.c)
     rect(0,0,45,70)
     pop()
     if(c==1){
      if(kg==1){
      image(b1,ball.x,ball.y,55,55)
      }
      Matter.Body.setStatic(this.body,true)
     }
     if(c==2){
      if(kg==1){
      fill(90,190,245)
      ellipse(ball.x,ball.y,53,53)
        }
      Matter.Body.setStatic(this.body,false)
     }
     if(pos.x>this.x || pos.x<this.x){
      this.i=2
     }
  }
}