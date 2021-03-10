class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5            
        }
       
       
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
   
   show(){
        
        
     
            var position1 = this.chain.bodyA.position;
            var position2= this.chain.bodyB.position;
           
                strokeWeight(7);
                line(position1.x , position1.y,position2.x ,position2.y);
               
    }
    
}