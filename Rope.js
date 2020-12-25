class rope {
    constructor (bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.004,
            pointB : {x:this.offsetX, y:this.offsetY}
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain)
    }
    display(){

        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        strokeWeight(3)

        var roof1x = pointA.x
        var roof1y= pointA.y
        var rope1x = pointB.x + this.offsetX;
        var rope1y = pointB.y + this.offsetY;
        line(roof1x,roof1y,rope1x,rope1y);
    }


}