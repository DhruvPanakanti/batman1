class Umbrella{
    constructor(x,y){ 
        var options={
        isstatic=true    
        }
        this.Umbrella=Bodies.circle(x,y,10,options);
    this.radius=10;
    World.add(this.Umbrella,world);
    w1=loadImage("images/walking_1.png");
    w2=loadImage("images/walking_2.png");
    w3=loadImage("images/walking_3.png");
    w4=loadImage("images/walking_4.png");
    w5=loadImage("images/walking_5.png");
    w6=loadImage("images/walking_6.png");
    w7=loadImage("images/walking_7.png");
    w8=loadImage("images/walking_8.png");
    }
    display(){
        var wal=this.body.position;
        var angle=this.body.angle;
       
        imageMode(CENTER);
       image(this.image,wal.x,wal.y,this.width,this.radius,this.radius);
    
    }
       
    
}