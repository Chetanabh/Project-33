class snowFlake {
    constructor(x,y){
        var options ={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':false 
        }
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);
        this.image = loadImage("snow4.webp");
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      scale(0.2);
      imageMode(CENTER);
      image(this.image,0, 0, 500);
      pop();
    }
}