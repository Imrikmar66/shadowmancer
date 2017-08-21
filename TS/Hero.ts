/// <reference path="./Actor.ts"/>
class Hero extends Actor {

    private weapon:string;

    constructor(){
        super();
        this.hexa = null;
        this.weapon = "sword";
    }

    getWeapon():string {
        return this.weapon;
    }

    switchWeapon():void {
        if(this.weapon == "sword") 
            this.weapon = "hammer";
        else if(this.weapon == "hammer") 
            this.weapon = "anchor";
        else 
            this.weapon = "sword";
    }

    protected renderer(ctx: CanvasRenderingContext2D):void {
        if(!this.hexa)
            return;
        
        ctx.beginPath();
        ctx.arc(this.hexa.getPoint().getX(),this.hexa.getPoint().getY(),10,0,2*Math.PI);
        ctx.fillStyle = "#00f";
        ctx.fill();
    }

}