class Form{
  constructor(){
    this.input = createInput()
    this.save = createButton("Save")
    this.greet = createElement("h1")
    this.sn=1
    this.np=1
  }
  hide(){
    this.input.hide()
    this.save.hide()
    this.greet.hide()
  }
  display(){
    var name
    if(this.sn==1){
      textSize(23)  
      fill(0)
      text("Name: ",40,445)
    }
    this.input.position(220,420)
    this.input.style('width','110px')
    this.input.style('height','25px')
    this.input.style('background','red')

    this.save.position(400,420)
    this.save.style('width','70px')
    this.save.style('height','30px')
    this.save.style('background','red')

    this.save.mousePressed(()=>{
      this.input.hide()
      this.save.hide()
      name = this.input.value()
      this.sn=2
      this.np=2
      this.greet.html("Hello "+name)
      this.greet.position(150,405)
      this.greet.style("background",'green')
      this.greet.style("font-size","28px")
    })
  }
}