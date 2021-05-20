class Obstacle{
    constructor(x,y,r){
        var options ={
            isStatic:true

        }
      this.body =  Bodies.circle(x,y,this.r,options)
      this.r=r
      World.add(world,this.body);

    }
    display(){

    var pos = this.body.position;
    ellipseMode(RADIUS);
    ellipseMode(pos.x,pos.y,this.r)








    }



}
