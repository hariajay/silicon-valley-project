const Engine = Matter.Engine
const world = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint

var gameState = 2
var bg1,bg2,bg3
var eng,wld
var red,b1,volley,b2,foot,b3
var carbon,arrow,light,acid,rand
var star,rec,start,button,green,award
var collide,water,sharp,weapon,lava,witch,last
var j,k1,h1,h2,h3,firegroup,v1,v2,thunder
var gs=[],fs=[],cs=[],ws=[],ss=[],ks=[]
var c1,c2,c3,c4,c5,count=0,bsgroup
var collect,season=1,rand2,rand3,sharpgroup,btn
var dis=0,coinum=0,mins=0,gems=0,e1=10650,e2=10900,t1=1,t2=1,s=1,l=1,p=1,j=1,n=1,g=1,k=1,o=1,b=1,a=1,c=1,m=1,d=1,q=1,z=1,x=1,y=1,w=1,r=22200,u=1
var si=1,jk=1,v=1,cv=1,kg=1,py=-200,sh=1,it=1,e=1,bs=[],h=1,we=0,ar=1
var jp=0,mj=0,by=0,ip=0,pi=0,df=0,ipt=1

function preload(){
  bg1 = loadImage("brown.jpg")
  bg2 = loadImage("hills.png")
  bg3 = loadImage("mount.png")
  bg4 = loadImage("shadow.png")
  b1 = loadImage("v1.png")
  b2 = loadImage("o1.png")
  thunder = loadImage("thunder.png")
  energy = loadImage("power.png")
  award = loadImage("award.png")
  over = loadImage("out.png")
  whimg = loadImage("witch.png")
  arrow = loadImage("arrow.png")
  st1 = loadImage("stand1.png")
  breaker = loadImage("breaker.png")
  people = loadImage("people.png")
  st2 = loadImage("stand2.png")
  st3 = loadImage("stand3.png")
  st4 = loadImage("stand4.png")
  change = loadImage("flash.png")
  man = loadImage("man.png")
  st5 = loadImage("stand5.png")
  st6 = loadImage("stand6.png")
  lava = loadImage("lava.png")
  wimg = loadImage("weapon.png")
  water1 = loadImage("water1.png")
  flash = loadImage("thunder.png")
  paper = loadImage("paper.png")
  acid = loadImage("acid.jpg")
  light = loadImage("light.png")
  lr1 = loadAnimation("lr1.png")
  lr2 = loadAnimation("lr2.png")
  carbon = loadImage("diamond.png")
  sh1 = loadImage("blade1.png")
  sh2 = loadImage("blade2.png")
  ins = loadImage("ins2.png")
  intro = loadImage("intro.png")
  story = loadImage("story2.png")
  stick = loadImage("stk1.png")
  stk2 = loadImage("stk2.png")
  star = loadImage("c1.png")
  frame = loadImage("frame.png")
  rec = loadImage("rect.png")
  laser = loadImage("laser.png")
  box = loadImage("box.png")
  blast = loadAnimation("e1.png","e2.png","e3.png","e4.png","e5.png","e6.png")
  burst1 = loadAnimation("v1.png","v2.png","v3.png","v4.png","v5.png","v6.png")
  burst2 = loadAnimation("o1.png","o2.png","o3.png","o4.png","o5.png","o6.png")
  btn = loadImage("button.png")
}
function setup(){
    createCanvas(510,460)
    eng = Engine.create()
    wld = eng.world

    fm = new Form()
    blue = createSprite(20,300,40,40)
    blue.addImage("ele",thunder)
    blue.scale=0.02
    player = new Ball(20,300)
    ball = createSprite(20,380,56,56)
    ball.visible = false
    collide = Bodies.rectangle(-30,170,10,460,{isStatic:true})
    world.add(wld,collide)
    iron1 = Bodies.circle(3713,0,40)
    world.add(wld,iron1)
    iron2 = Bodies.circle(16400,0,40)
    world.add(wld,iron2)
    lb1 = Bodies.circle(7450,100,25,{isStatic:true})
    world.add(wld,lb1)
    lb2 = Bodies.circle(7450,380,25,{isStatic:true})
    world.add(wld,lb2)
    lb3 = Bodies.circle(17150,100,25,{isStatic:true})
    world.add(wld,lb3)
    lb4 = Bodies.circle(17150,380,25,{isStatic:true})
    world.add(wld,lb4)
    v1 = Bodies.rectangle(14500,350,15,110,{isStatic:true})
    world.add(wld,v1)
    last = Bodies.rectangle(21575,230,10,460,{isStatic:true})
    world.add(wld,last)
    up1 = Bodies.rectangle(20720,340,70,135,{isStatic:true})
    world.add(wld,up1)
    up2 = Bodies.rectangle(20920,340,70,135,{isStatic:true})
    world.add(wld,up2)
    up3 = Bodies.rectangle(21120,340,70,135,{isStatic:true})
    world.add(wld,up3)
    nds = Bodies.rectangle(20475,400,50,50,{isStatic:true})
    world.add(wld,nds)
    go = Bodies.rectangle(7700,230,10,460,{isStatic:true})
    world.add(wld,go)
    knife(300,560)
    knife(1115,1600)
    knife(2235,2900)
    knife(5160,5660)
    knife(8315,8755)
    coins(155,305,380)
    coins(725,875,250)
    coins(825,975,380)
    coins(1875,2025,250)
    coins(1775,1925,380)
    coins(1715,1865,150)
    coins(3125,3275,250)
    coins(3225,3375,380)
    coins(3860,4010,270)
    coins(4575,4725,150)
    coins(4775,4925,250)
    coins(4775,4925,380)
    coins(5700,5850,380)
    coins(6450,6600,380)
    coins(7100,7250,250)
    coins(7900,8050,250)
    coins(8000,8150,380)
    coins(8950,9100,250)
    coins(8940,9090,150)
    coins(8950,9100,380)
    coins(10250,10400,380)
    coins(11240,11390,380)
    coins(12770,12895,250)
    coins(12800,12900,380)
    coins(11840,11990,380)
    coins(16200,16350,250)
    coins(16220,16370,380)
    coins(18800,18950,380)
    coins(19300,19450,150)
    coins(19500,19650,250)
    coins(17350,17500,150)
    dia(1500,200)
    dia(3000,350)
    dia(4300,250)
    dia(6750,300)
    dia(9610,370)
    dia(11050,300)
    dia(12320,425)
    dia(13800,160)
    wall(8150,"brown")
    wall(12700,"orange")
    wall(21400,"yellow")

    firegroup = new Group()
    g1 = new Ground(110,415,350)
    g2 = new Ground(832,415,530)
    g3 = new Ground(1912,415,625)
    g4 = new Ground(4035,415,2225)
    g5 = new Ground(5788,415,270)
    g6 = new Ground(6700,415,2100)
    g7 = new Ground(8005,415,600)
    g8 = new Ground(9035,415,580)
    g9 = new Ground(12218,455,450)
    g10 = new Ground(12791,415,630)
    g11 = new Ground(14360,415,680)
    g12 = new Ground(15163,415,925)
    g13 = new Ground(16950,415,1740)
    g14 = new Ground(19265,415,1000)
    g15 = new Ground(21275,415,2100)
    g16 = new Ground(20000,455,460)
    g17 = new Ground(10850,415,2350)

    std1 = new Stand(800,310,260,44,st1)
    std2 = new Stand(1350,310,20,44,st3)
    std3 = new Stand(1900,310,260,44,st1)
    std4 = new Stand(1800,190,260,44,st1)
    std5 = new Stand(3200,310,260,44,st1)
    std6 = new Stand(4650,190,260,44,st1)
    std7 = new Stand(4850,310,260,44,st1)
    std8 = new Stand(5400,310,20,44,st3)
    std9 = new Stand(2375,310,180,10,stick)
    std10 = new Stand(2560,260,180,10,stick)
    std11 = new Stand(2740,210,180,10,stick)
    std12 = new Stand(7900,310,260,44,st2)
    std13 = new Stand(8525,305,20,44,st4)
    std14 = new Stand(9000,190,260,44,st2)
    std15 = new Stand(9035,310,260,44,st2)
    std16 = new Stand(12870,310,260,44,st2)
    std17 = new Stand(7125,300,260,44,st1)
    std18 = new Stand(14350,300,300,10,stick)
    std19 = new Stand(15810,300,20,40,st6)
    std20 = new Stand(16300,300,260,44,st5)
    std21 = new Stand(17400,190,260,44,st5)
    std22 = new Stand(17600,305,260,44,st5)
    std23 = new Stand(19400,200,260,44,st5)
    std24 = new Stand(19560,305,260,44,st5)
    ss.push(std1,std2,std3,std4,std5,std6,std7,std8,std9,std10,std11,std12,std13,std14,std15,std16,std17,std18,std19,std20,std21,std22,std23,std24)

    gate1 = new Gate(10100,275,280)
    gate2 = new Gate(10180,275,280)
    gate3 = new Gate(11110,275,280)
    gate4 = new Gate(15220,275,280)
    gate5 = new Gate(15300,275,280)
    gate6 = new Gate(15380,275,280)
    light1 = createSprite(3600,200,50,420)
    light2 = createSprite(10480,200,50,420)
    lazer1 = createSprite(7450,240,15,280)
    lazer2 = createSprite(17150,240,15,280)
    k1 = createSprite(6650,505,20,200)
    k2 = createSprite(6700,505,20,200)
    k3 = createSprite(6750,505,20,200)
    k4 = createSprite(19050,505,20,190)
    k5 = createSprite(19100,400,20,190)
    k6 = createSprite(19150,505,20,190)
    h1 = createSprite(2465,300,180,10)
    h2 = createSprite(2620,250,180,10)
    h3 = createSprite(2775,200,180,10)
    h1.visible = false
    h2.visible = false
    h3.visible = false
    light2.visible = false
    light1.visible = false
    lazer1.visible = false
    lazer2.visible = false
    k1.shapeColor = "brown"
    k2.shapeColor = "brown"
    k3.shapeColor = "brown"
    k4.shapeColor = "brown"
    k5.shapeColor = "brown"
    k6.shapeColor = "brown"
    bl1 = new Sharp(k1.x,45,sh1)
    bl2 = new Sharp(k2.x,45,sh1)
    bl3 = new Sharp(k3.x,45,sh1)
    bl4 = new Sharp(k4.x,45,sh1)
    bl5 = new Sharp(k5.x,45,sh1)
    bl6 = new Sharp(k6.x,45,sh1)
    chain1 = new Chain(iron1,{x:4050,y:15})
    chain2 = new Chain(iron2,{x:16745,y:15})
   
    z1 = createSprite(3910,275,10,60)
    z2 = createSprite(0,0,78,62)
    z4 = createSprite(0,0,78,62)
    z3 = createSprite(4190,275,10,60)
    z1.visible = false
    z2.visible = false
    z3.visible = false
    z4.visible = false
    bl1.visible = true
    bl1.debug = true
    r1 = new Lever(9800,"lt1","lt2")
    r2 = new Lever(10000,"lt3","lt4")
    r3 = new Lever(14870,"lt5","lt6")
    r4 = new Lever(15000,"lt7","lt8")
    r5 = new Lever(15150,"lt9","lt10")
    he1 = createSprite(10760,400,40,10)
    he2 = createSprite(11010,400,40,10)
    la1 = createSprite(11480,405,304,10)
    la2 = createSprite(6050,405,304,10)
    la1.visible = false
    la2.visible = false
    he1.visible = false
    he2.visible = false
    obs2 = createSprite(20000,438,450,62)
    obs2.visible=false
    power1 = createSprite(7550,285,50,50)
    power1.addImage("po",energy)
    power1.scale = 0.07
    power2 = createSprite(14550,285,50,50)
    power2.addImage("po",energy)
    power2.scale = 0.07
    obs1 = createSprite(12250,438,450,62)
    obs1.visible = false
    wd1 = new Wood(13195)
    wd2 = new Wood(13435)
    wd3 = new Wood(13640)
    wd4 = new Wood(13875)
    wd5 = new Wood(17950)
    wd6 = new Wood(18165)
    wd7 = new Wood(18380)
    wd8 = new Wood(18595)
    s1 = new Sharp(14270,190,sh2)
    s2 = new Sharp(14367,190,sh2)
    s3 = new Sharp(14465,190,sh2)
    q1 = createSprite(20475,450,50,250)
    q2 = createSprite(20475,70,50,250)
    q1.shapeColor = "brown"
    q2.shapeColor = "brown"
    s4 = new Sharp(20462,162,sh2)
    s5 = new Sharp(20488,162,sh2)
    s6 = new Sharp(20462,288,sh1)
    s7 = new Sharp(20488,288,sh1)
    s8 = new Sharp(20720,100,sh2)
    s9 = new Sharp(20920,100,sh2)
    s10 = new Sharp(21120,100,sh2)
    s8.sprite.scale = 0.27
    s9.sprite.scale = 0.27
    s10.sprite.scale = 0.27
    witch = createSprite(21700,110,125,125)
    witch.addImage("witch",whimg)
    witch.scale = 0.22

    re = createSprite(300,-295,129,35)
    re.visible = false
    play = createSprite(134,253,85,30)
    tale = createSprite(135,312,95,30)
    inst = createSprite(134,365,155,30)
    back = createSprite(289,440,80,28)
    buy = createSprite(camera.position.x,305,60,30)
    buy.visible = false
}
function draw(){
  background(0)
   Engine.update(eng)
  
   imageMode(CENTER)
   image(bg2,3750,180,7800,610)
   image(bg3,11180,217,7100,550)
   image(bg4,18600,207,7800,550)
   image(water1,425,440,275,67)
   image(water1,1350,440,500,67)
   image(water1,2567,440,690,67)
   image(water1,5400,437,500,67)
   image(lava,la2.x,438,290,60)
   image(lava,13570,438,900,62)
   rectMode(CENTER)
   fill("brown")
   rect(v1.position.x,v1.position.y,15,110)
   rect(up1.position.x,up1.position.y,70,140)
   rect(up2.position.x,up2.position.y,70,140)
   rect(up3.position.x,up3.position.y,70,140)
   if(ball.x>20 && ball.x<7650){
     season=1
   }
   if(jk==1){
    rect(21575,230,10,460)
   }
   g+=1
   if(g<60){
     k=1
   }
   if(g>60){
     k=2
   }
   if(g>88){
     g=1
   }
   if(k==1){
    image(light,3600,200,75,420)
    image(light,10480,200,75,420)
    image(laser,7445,240,20,280)
    image(laser,17145,240,20,280)
   }
   image(wimg,iron1.position.x,iron1.position.y,80,80)
   image(wimg,iron2.position.x,iron2.position.y,80,80)
   image(water1,8525,438,440,65)
   image(lava,15850,433,450,60)
   image(lava,18290,433,930,60)
   image(lava,9500,438,350,62)
   image(lava,la1.x,438,300,62)
  
   ball.x = player.body.position.x
   ball.y = player.body.position.y
   z2.x = iron1.position.x
   z2.y = iron1.position.y
   z4.x = iron2.position.x
   z4.y = iron2.position.y
   if(h==1){
     blue.visible = false
     blue.x = ball.x
     blue.y = ball.y
   }
   if(h==2){
     blue.y = blue.y
     blue.x = blue.x
     blue.visible = true
   }
   buy.x = camera.position.x
   if(z2.isTouching(z1)){
     m=2
   }
   if(m==2){
    Matter.Body.applyForce(iron1,iron1.position,{x:0.0045,y:0})
    Matter.Body.applyForce(iron2,iron2.position,{x:0.0045,y:0})
   }
   if(z2.isTouching(z3)){
     m=3
  }
  if(m==3){
   Matter.Body.applyForce(iron1,iron1.position,{x:-0.0045,y:0})
   Matter.Body.applyForce(iron2,iron2.position,{x:-0.0045,y:0})
  }
   if(la1.x<11500){
    la1.velocityX+=2
   }
   if(la1.x>11625){
    la1.velocityX-=2
   }
   if(la2.x<6070){
    la2.velocityX+=2
   }
   if(la2.x>6200){
    la2.velocityX-=2
   }
   if(s1.sprite.y<220){
    s1.sprite.velocityY+=1.3
    s2.sprite.velocityY+=1.3
    s3.sprite.velocityY+=1.3
   }
   if(s1.sprite.y>265){
    s1.sprite.velocityY-=1.3
    s2.sprite.velocityY-=1.3
    s3.sprite.velocityY-=1.3
  }
  s4.sprite.position.y = q2.y+128
  s5.sprite.position.y = q2.y+128
  s6.sprite.position.y = q2.y+235
  s7.sprite.position.y = q2.y+235

  if(witch.y<120){
    witch.velocityY+=5
  }
  if(witch.y>350){
    witch.velocityY-=5
  }
  wd1.display()
  wd2.display()
  wd3.display()
  wd4.display()
  wd5.display()
  wd6.display()
  wd7.display()
  wd8.display()
  if(jp==3){
   b+=0.1
  }
   if(o==1 && jp==3){
     image(frame,150,120,300,60)
     textSize(20)
     fill("brown")
     stroke(0)
     strokeWeight(0.5)
     text("Season1: Blue mounts",47,127)
   }
   for(var i=0; i<ss.length; i++){
    ss[i].display()
   }
   if(b>12){
     o=2
     b=1
   }
   if(x==1){
   camera.position.x = player.body.position.x+130
   camera.position.y = 230
   }
   if(ball.x>21380){
     x=2
   }
   if(ball.x<21380){
    x=1
   }
   dis = Math.round(player.body.position.x/50)
   bl1.sprite.position.y=k1.y-115
   bl2.sprite.position.y=k2.y-115
   bl3.sprite.position.y=k3.y-115
   bl4.sprite.position.y=k4.y-115
   bl5.sprite.position.y=k5.y-115
   bl6.sprite.position.y=k6.y-115
   h1.y = std9.body.position.y
   h2.y = std10.body.position.y
   h3.y = std11.body.position.y

   if(k1.y<405){
    k1.velocityY+=4
    k2.velocityY+=4
    k3.velocityY+=4
   }
   if(k1.y>487){
    k1.velocityY=-4
    k2.velocityY=-4
    k3.velocityY=-4
   }
   if(k4.y<425){
    k4.velocityY+=4
    k6.velocityY+=4
   }
   if(k4.y>504){
    k4.velocityY-=4
    k6.velocityY-=4
   }
   if(k5.y<490){
     k5.velocityY+=3.4
   }
   if(k5.y>430){
    k5.velocityY-=3.4
   }
   if(s8.sprite.y<120){
     s8.sprite.velocityY+=1.3
     s9.sprite.velocityY+=1.3
     s10.sprite.velocityY+=1.3
   }
   if(s8.sprite.y>240){
    s8.sprite.velocityY-=1.3
    s9.sprite.velocityY-=1.3
    s10.sprite.velocityY-=1.3
  }
   fill(50)
   strokeWeight(0)

  if(s==1){
   ellipse(he1.x,410,100,20)
   ellipse(he2.x,410,100,20)
   }
   ellipse(7450,100,50,50)
   ellipse(7450,380,50,50)
   ellipse(17150,100,50,50)
   ellipse(17150,380,50,50)
   chain1.display()
   chain2.display()
   gate1.display()
   gate2.display()
   gate3.display()
   gate4.display()
   gate5.display()
   gate6.display()

  if(keyDown("space") && n==1 && jp==3){
    Matter.Body.applyForce(player.body,player.body.position,{x:0,y:-22})
    j+=0.1
  }
  if(jp==3){
   if(keyDown("left")){
    Matter.Body.applyForce(player.body,player.body.position,{x:-1.75,y:0})
  }
   if(keyDown("right")){
    Matter.Body.applyForce(player.body,player.body.position,{x:1.75,y:0})
  }
}
  if(j>1.5){
    n=2
    j=1
  }
  if(keyCode == 67 && by==1){
    c=2
  }
  if(keyCode == 66 && by==1){
    c=1
  }
  if(ball.isTouching(h1)){
    Matter.Body.setStatic(std9.body,false)
  }
  if(ball.isTouching(h2)){
    Matter.Body.setStatic(std10.body,false)
  }
  if(ball.isTouching(h3)){
    Matter.Body.setStatic(std11.body,false)
  }
  for(var i=0; i<cs.length; i++){
    cs[i].touching1()
  }
  for(var i=0; i<gs.length; i++){
    gs[i].touching2()
  }
  if(ball.isTouching(r2.ler)){
    r2.ler.changeAnimation("lt4",lr1)
    p=2
  }
  if(ball.isTouching(r1.ler) && p==2){
    p=3
  }
  if(p==3){
   r1.ler.changeAnimation("lt2",lr1)
   Matter.Body.setStatic(gate1.body,false)
   Matter.Body.setStatic(gate2.body,false)
   gate1.body.position.y-=0.6
   gate2.body.position.y-=0.6
  }
  if(gate1.body.position.y<140){
    p=1
    Matter.Body.setStatic(gate1.body,true)
    Matter.Body.setStatic(gate2.body,true)
  }
  if(he1.x < 10770){
    he1.velocityX+= 3.5
    he2.velocityX-= 3.5
   }
   if(he1.x > 11000){
     he1.velocityX-= 3.5
     he2.velocityX+= 3.5
   }
   if(ball.x>10570){
    t1+=0.1
   } 
   if(t1 > 5){
    t2 = 2
   }
   if(t2 == 1){
     fill(150)
     textSize(20)
     text("hell",he1.x-13,415)
     text("open",he2.x-13,415)
   }
  if(ball.isTouching(he2) && s==1){
    s=2
  }
  if(s==2){
    Matter.Body.setStatic(gate3.body,false)
    gate3.body.position.y-=0.6
  }
  if(gate3.body.position.y<140){
    s=3
    Matter.Body.setStatic(gate3.body,true)
  }
  if(ball.isTouching(r4.ler) && q==1){
    r4.ler.changeAnimation("lt8",lr2)
    q=2
  }
  if(ball.isTouching(r3.ler) && q==2){
    r3.ler.changeAnimation("lt6",lr2)
    q=3
  }
  if(ball.isTouching(r5.ler) && q==3){
    r5.ler.changeAnimation("lt10",lr2)
    Matter.Body.setStatic(gate4.body,false)
    Matter.Body.setStatic(gate5.body,false)
    Matter.Body.setStatic(gate6.body,false)
    gate4.body.position.y-=0.6
    gate5.body.position.y-=0.6
    gate6.body.position.y-=0.6
  }
  if(gate4.body.position.y<140){
    q=1
    Matter.Body.setStatic(gate4.body,true)
    Matter.Body.setStatic(gate5.body,true)
    Matter.Body.setStatic(gate6.body,true)
  }
  if(frameCount % 15 == 0 && z==1){
    rand3 = Math.round(random(1,3))
  }
  textSize(24)
  strokeWeight(0.2)
  if(rand3 == 1){
    image(water1,12250,438,450,60)
    text("water",12250,438)
    image(water1,20000,438,450,60)
    text("water",20000,438)
  }
  if(rand3 == 2){
    image(lava,12250,438,450,60)
    text("lava",12250,438)
    image(lava,20000,438,450,60)
    text("lava",20000,438)
  }
  if(rand3 == 3){
    image(acid,12250,438,450,60)
    text("acid",12250,438)
    image(acid,20000,438,450,60)
    text("acid",20000,438)
  }
  if(ball.isTouching(obs1) && rand3==1){
    z=2
  }
  if(ball.isTouching(obs2) && rand3==1){
    z=3
  }
  if(z==2){
    image(water1,12250,438,450,60)
    text("water",12250,438)
  }
  if(z==3){
    image(water1,20000,438,450,60)
    text("water",20000,438)
  }
  re.x = camera.position.x-10
  if(ball.isTouching(power1) && we==0){
    we=1
    power1.destroy()
  }
  if(ball.isTouching(power2) && we==1){
    we=2
    power2.destroy()
  }
  if(mousePressedOver(blue) && we==2){
    h=2
    blue.velocityX = 4
  }
  if(blue.x>21800){
    h=1
  }
  if(blue.isTouching(witch)){
    count+=1
    h=1
  }
  if(u==1 && ball.x>21400){
  flame()
  }
  for(var i=0; i<ws.length; i++){
    ws[i].display()
  }
  if((ball.x<12025 || ball.x>12475) || (ball.x<19775 || ball.x>20225)){
    ar=1
  }
  if(ball.isTouching(obs1) && (rand3==2 || rand3==3)){
    ar=1
  }
  if(ball.isTouching(obs2) && (rand3==2 || rand3==3)){
    ar=1
  }
  if((ball.x>12025 || ball.x<12475) && (ball.isTouching(obs1) && rand3==1)){
    ar=0
  }
  if((ball.x>19775 || ball.x<20225) && (ball.isTouching(obs2) && rand3==1)){
    ar=0
  }
  if((ball.y>400 && ball.x<7750) || ball.isTouching(z2) || (ball.isTouching(light1) && k==1) || ball.isTouching(la2) || (ball.isTouching(lazer1) && k==1) || ball.isTouching(bl1.sprite) || ball.isTouching(bl2.sprite) || ball.isTouching(bl3.sprite)){
    jp=4
    mj=1
    player.rn=1
  }
  if((ball.y>400 && ball.x>7850 && ball.x<14730 && ar==1) || (ball.isTouching(light2) && k==1) || (ball.isTouching(he1) && s==1) || ball.isTouching(la1) || ball.isTouching(s1.sprite) || ball.isTouching(s2.sprite) || ball.isTouching(s3.sprite)){
    jp=4
    mj=1
    player.rn=1
  }
  if((ball.y>400 && ball.x>14850 && ball.x<21500 && ar==1) || (ball.isTouching(lazer2) && k==1) || ball.isTouching(z4) || ball.isTouching(bl4.sprite) || ball.isTouching(bl5.sprite) || ball.isTouching(bl6.sprite) || ball.isTouching(s4.sprite) || ball.isTouching(s5.sprite) || ball.isTouching(s6.sprite) || ball.isTouching(s7.sprite) || ball.isTouching(s8.sprite) || ball.isTouching(s9.sprite) || ball.isTouching(s10.sprite)){
    jp=4
    mj=1
    player.rn=1
  }
  if(mousePressedOver(re)){
    jp=3
    mj=0
    player.rn=0
    replay()
  }
  if(count == 5){
    blue.destroy()
    y+=1
   if(w==1){
   animation(blast,21700,witch.y,100,100)
   }
   witch.destroy()
  }
  if(y>60){
    si=2
    image(people,r,313,400,175)
    r-=9
    ball.x=21530
    for(var f=0; f<ws.length; f++){
      ws[f].h=2
      ws[f].i=2
    }
  }
  if(y>150){
    image(box,ball.x+5,230,200,70)
    image(box,ball.x-165,230,120,70)
    image(box,ball.x+160,230,100,70)
    image(paper,camera.position.x,py,400,400)
    py+=5
    textSize(17)
    text("thank you for changing",ball.x-80,220)
    text("me into man",ball.x-30,240)
    text("thanks for",ball.x-200,220)
    text("saving us",ball.x-200,240)
    text("you are a",ball.x+120,220)
    text("hero",ball.x+140,240)
    fill("green")
    stroke("yellow")
    textSize(25)
    strokeWeight(1.5)
    text("You are champ!",camera.position.x-70,115)
    strokeWeight(3)
    textSize(30)
    text("Completed the game",camera.position.x-120,70)
  }
  if(y>25){
    w=2
    Matter.Body.setStatic(player.body,true)
    image(man,ball.x,330,120,150)
    sh=2
    if(si==1){
    image(change,ball.x,ball.y-30,400,450)
    }
    jk=2
    kg=2
  }
  if(r<21500){
    r=21500
  }
  drawSprites() 
  if(sh==1){
    image(rec,camera.position.x-177,30,140,45)
    image(rec,camera.position.x+182,30,120,42)
    image(star,camera.position.x-223,30,28,28)
    image(carbon,camera.position.x-157,30,28,24)
    image(arrow,camera.position.x+153,30,30,10) 
    textSize(22)
    fill(0)
    strokeWeight(0.2)
    text(gems,camera.position.x-138,38)
    text(coinum,camera.position.x-203,38)
    text(dis+" m",camera.position.x+170,38)
  } 
  if(mj==1){
    end()
  }
  if(mousePressedOver(back) && (jp==1 || jp==2)){
    jp=0
  }
  if(jp==0){
    image(intro,150,230,510,460)
    fm.display()
    if(fm.np==1){
      fm.input.show()
      fm.save.show()
    }
    if(fm.np==2){
      fm.greet.show()
    }
  }
  if(mousePressedOver(tale) && jp==0){
    jp=1
  }
  if(jp==1){
    image(story,150,230,510,460)
    fm.hide()
  } 
  if(mousePressedOver(inst) && jp==0){
    jp=2
  }
  if(jp==2){
    image(ins,150,230,510,460)
    fm.hide()
  }
  if(mousePressedOver(play) && jp==0){
    jp=3
  }
  if(jp==3){
    play.destroy()
    tale.destroy()
    inst.destroy()
    back.destroy()
    fill(0)
    text(fm.input.value(),player.body.position.x-40,player.body.position.y-35)
    fm.hide()
  }
  if(ball.x>7650){
    season = 2
    cv+=0.1
  }
    if(ball.x>7650 && ball.x<7680 && df==0){
      image(breaker,camera.position.x,260,220,195)
    }
    if(mousePressedOver(buy) && coinum>44 && gems>3 && ball.x>7650 && ball.x<7700 && df==0){
      by=1
      df=1
      coinum=0
      gems=0
      world.remove(wld,go)
    }
  if(ball.x>14730){
    season=3
    it+=0.1
  }
  if(season==3 && e==1){
    image(frame,camera.position.x+2,113,300,60)
    textSize(19)
    fill("brown")
    stroke(0)
    strokeWeight(0.5)
    text("Season2: Dark shadows",camera.position.x-100,120)
  }
  if(it>7){
    e=2
    it=1
  }
  if(season==2 && v==1){
    image(frame,camera.position.x,113,300,95)
    textSize(19)
    fill("brown")
    stroke(0)
    strokeWeight(0.5)
    text("Buy ball to continue",camera.position.x-90,107)
    text("Season2: Countryside",camera.position.x-90,137)
  }
  if(cv>7){
    v=2
    cv=1
  }
}
function dia(x,y){
  gs.push(new Gem(x,y))
}
function coins(x1,x2,y){
  for(var a=x1; a<x2; a+=50){
    cs.push(new Coin(a,y))
   }
}
function flame(){
 if(frameCount % 60 == 0 && season==2){
   fs.push(new Fires(camera.position.x+400,random(150,390)))
 }
}
function wall(ax,f){
  for(var i=100; i<425; i+=70){
  ws.push(new Wall(ax,i,f))
  }
}
function knife(x1,x2){
 for(var i=x1; i<x2; i+=27){
   ks.push(new Sharp(i,445,sh1))
 }
}  
function end(){
  gameState=2
  ip+=1
  if(ip<20){
    pi=0
  }
  if(gameState == 2){
  firegroup.setVelocityXEach(0)
  re.y = 295
  if(pi==0 && c==1){
    animation(burst1,ball.x,ball.y,70,70)
  }
  if(pi==0 && c==2){
    animation(burst2,ball.x,ball.y,70,70)
  }
  image(over,camera.position.x-5,200,320,250)
  if(dis<50 || (dis>150 && dis<198) || (dis>300 && dis<343)){
    image(award,camera.position.x,165,50,50)
  }
  if((dis>50 && dis<100) || (dis>198 && dis<246) || (dis>343 && dis<386)){
    image(award,camera.position.x-27,165,50,50)
    image(award,camera.position.x+27,165,50,50)
  }
  if((dis>100 && dis<150) || (dis>246 && dis<294) || (dis>386 && dis<429)){
    image(award,camera.position.x-50,165,50,50)
    image(award,camera.position.x,165,50,50)
    image(award,camera.position.x+50,165,50,50)
  }
  if(ip>20){
    pi=1
  }
  textSize(22)
  strokeWeight(0.2)
  fill(0)
  text(coinum,camera.position.x-40,220)
  text(gems,camera.position.x+87,220)
  text(dis+" m",camera.position.x+20,255)
 }
}
function replay(){
  gameState=1
  re.y=-295
  player.rn=0
  ip=0
    if(season==1){
      Matter.Body.setPosition(player.body,{x:20,y:300})
      if(std9.body.isStatic==false){
       std9.replace(2375,310)
      }
      if(std10.body.isStatic==false){
       std10.replace(2560,260)
      }
      if(std11.body.isStatic==false){
       std11.replace(2740,210)
      }
    }
    if(season==2){
     Matter.Body.setPosition(player.body,{x:7700,y:300})
     z=1
     if(wd1.body.position.x>13195 || wd1.body.position.x<13195){
       Matter.Body.setAngle(wd1.body,PI)
       Matter.Body.setAngle(wd2.body,PI)
       Matter.Body.setAngle(wd3.body,PI)
       Matter.Body.setAngle(wd4.body,PI)
       Matter.Body.setPosition(wd1.body,{x:13195,y:225})
       Matter.Body.setPosition(wd2.body,{x:13435,y:225})
       Matter.Body.setPosition(wd3.body,{x:13640,y:225})
       Matter.Body.setPosition(wd4.body,{x:13875,y:225})
     }
    }
    if(season==3){
      z=1
      if(wd5.body.position.x>19750 || wd5.body.position.x<19750){
        Matter.Body.setAngle(wd5.body,PI)
        Matter.Body.setAngle(wd6.body,PI)
        Matter.Body.setAngle(wd7.body,PI)
        Matter.Body.setAngle(wd8.body,PI)
        Matter.Body.setPosition(wd5.body,{x:17950,y:225})
        Matter.Body.setPosition(wd6.body,{x:18165,y:225})
        Matter.Body.setPosition(wd7.body,{x:18380,y:225})
        Matter.Body.setPosition(wd8.body,{x:18595,y:225})
        Matter.Body.setPosition(player.body,{x:14750,y:300})
      }
   }
}
