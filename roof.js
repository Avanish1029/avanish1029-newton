class roof{
    
    constructor(x,y,w,h){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.x=x;
        this.y=y;
        this.h=h;
        this.w=w;
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);

    }
    display(){
        var groundpos=this.body.position;
        push();
        translate(groundpos.x,groundpos.y);
        rectMode(CENTER);
        fil(255,0,255);
    rect(0,0,this.w,this.h);
    pop();
    
    }
}
