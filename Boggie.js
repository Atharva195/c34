class Boggie{
constructor(x){
var options={
    isStatic:false
}
this.body=Bodies.rectangle(x,200,100,100,options);
this.width=100
this.height=100
this.image= loadImage("images/coach.png");
World.add(world,this.body);
Matter.Body.setMass(this.body, this.body.mass*5);
}
display(){
    imageMode(CENTER)
    image (this.image,this.body.position.x,this.body.position.y,this.width,this.height)
}
}
