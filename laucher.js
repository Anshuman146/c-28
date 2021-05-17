class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB
        this.launcher = Constraint.create(options);

        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        
        
        
        if(this.launcher.bodyA){
            
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            push ()

            strokeWeight(4);
            
          
          if (pointA.x<220){
            line(pointA.x-20, pointA.y, pointB.x-25, pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+25,pointB.y)
          
          
          }
          else{
            line(pointA.x+20, pointA.y, pointB.x-25, pointB.y);
            line(pointA.x+20,pointA.y,pointB.x+25,pointB.y)
           
          }
    
          
           pop ()

        }
    }
    
}
