class Snow {
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
    this.image = loadImage("snow4.webp");
    this.x = x
    this.y = y
    this.r = r
    this.body = Bodies.circle(this.x, this.y,(this.r-20)/2,options);

    World.add(world,this.body);

    }
    display(){
    
        push()
	    pop()
    }
}

