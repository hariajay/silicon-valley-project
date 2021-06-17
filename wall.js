class Wall{
  constructor(x,y,c){
     this.body = Bodies.rectangle(x,y,45,70,{density:5})
     this.c = c
     this.x = x
     this.y = y
     this.i=1
     this.h=1
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
     if(this.h==1){
     fill(this.c)
     rect(0,0,44,74)
     }
     pop()
     if(c==1){
      if(kg==1 && player.rn==0){
       image(b1,ball.x,ball.y,100,100)
      }
      pos.x = this.x
      pos.y = this.y
     }
     if(c==2){
      if(kg==1 && player.rn==0){
       image(b2,ball.x,ball.y,100,100)
      }
      pos.x = pos.x
      pos.y = pos.y
     }
     if(pos.x>this.x || pos.x<this.x){
      this.i=2
     }
  }
}