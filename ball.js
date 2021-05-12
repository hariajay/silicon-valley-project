class Ball{
  constructor(x,y){
    this.body = Bodies.circle(x,y,27,{density:1,friction:0,restitution:0.3,frictionAir:0.04})
    world.add(wld,this.body)
  }
  display(){
    var pos = this.body.position
    push()
    imageMode(CENTER)
    image(b1,pos.x,pos.y,55,55)
    pop()
  }
}