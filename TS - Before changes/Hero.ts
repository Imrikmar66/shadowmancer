class Hero {

    constructor(){
        this.hexa = null;
        this.weapon = "sword";
    }

    switchWeapon(){
        if(this.weapon == "sword") 
            this.weapon = "hammer";
        else if(this.weapon == "hammer") 
            this.weapon = "anchor";
        else 
            this.weapon = "sword";
    }

    render(ctx){
        if(!this.hexa)
            return;

        ctx.beginPath();
        ctx.arc(this.hexa.getPoint().getX(),this.hexa.getPoint().getY(),10,0,2*Math.PI);
        ctx.fillStyle = "#000";
        ctx.fill();
    }

}