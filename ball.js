class Ball{
    constructor(x,y,r){
        var options = {
            'density':20,
            'frictionAir':0.005,
            
        }
        //this.body = Bodies.rectangle(x,y,width,height,options);
        //this.witdh = width;
        //this.height = height;
        this.x = x;
        this.y=y;
        this.r=r;
        this.image = loadImage("superhero1.png");
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
        World.add(world,this.body);

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER)
        fill(225,0,225)
        imageMode(CENTER);
        //rotate(angle);
        image(this.image,0,0,this.r+150,this.r)
        pop();
    }
}