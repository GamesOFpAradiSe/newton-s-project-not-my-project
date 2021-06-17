  
class Ss {
    constructor (){
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(1,1,1,1 , options);
        this.width = width;
        this.height = height;

        this.image = loadImage("ss.png");
        
        World.add(world, this.body);
    }
    display () {
        
        imageMode(CENTER)
        //strokeWeight(4);
        fill(128,128,128)
        image(this.image,225,325,500, 250);
        
        
    }
}