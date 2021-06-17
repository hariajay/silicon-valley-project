class Ball{
  constructor(x,y){
    this.body = Bodies.circle(x,y,27,{density:1,friction:0,restitution:0.5,frictionAir:0.04})
    world.add(wld,this.body)
    this.rn=0
  }
  display(){
    var pos = this.body.position
    push()
    imageMode(CENTER)
    if(this.rn==0 && c==1){
      image(b1,pos.x,pos.y,100,100)
    }
    if(this.rn==0 && c==2){
      image(b2,pos.x,pos.y,100,100)
    }
    pop()
  }
}