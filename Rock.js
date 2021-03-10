class Rock{
    constructor(x,y,width,height){
        var options={
            isStatic:false
        }
 this.body=Bodies.rectangle(x,y,width,height,options);
this.width=100
this.height=100
this.image= loadImage("images/rock1.png");
World.add(world,this.body);
    }
    display(){
        imageMode(CENTER)
    image (this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}