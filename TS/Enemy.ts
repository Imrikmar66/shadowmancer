/// <reference path="./Actor.ts"/>
class Enemy extends Actor {

    constructor(){
        super();
    }

    protected renderer(ctx:CanvasRenderingContext2D){
        
        if(!this.hexa)
            return;

        ctx.beginPath();
        ctx.arc(this.hexa.getPoint().getX(),this.hexa.getPoint().getY(),10,0,2*Math.PI);
        ctx.fillStyle = "#ff0";
        ctx.fill();
        
    }

}