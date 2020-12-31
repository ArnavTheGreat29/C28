class SlingShot{

    constructor(objectA , objectB){
        var options = {
         bodyA: objectA,
         pointB: objectB,
         length: 10,
         thickness: 5,
         stiffness: 0.5

        }
       this.slingshot =  Matter.Constraint.create(options)
       World.add (world,this.slingshot)
    }
    display(){
if(this.slingshot.bodyA != null){
        var posA = this.slingshot.bodyA.position
        var posB = this.slingshot.pointB

        line (posA.x,posA.y,posB.x,posB.y)
}
    }
fly(){
    this.slingshot.bodyA = null
}
}
