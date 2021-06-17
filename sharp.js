class Sharp{
  constructor(x,y,img){
    this.sprite = createSprite(x,y,15,20)
    this.sprite.addImage("s",img)
    this.sprite.scale = 0.18
    this.sprite.setCollider("rectangle",0,0,110,170)
  }
}