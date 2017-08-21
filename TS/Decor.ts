class Decor extends Actor {

    private traversable:boolean;
    
    constructor(){
        super();
        this.traversable = false;
    }

    setTraversable(traversable:boolean){
        this.traversable = traversable;
    }

    isTraversable():boolean {
        return this.traversable ;
    }

    protected renderer(ctx:CanvasRenderingContext2D){
        
        if(!this.hexa)
            return;

        ctx.beginPath();
        ctx.arc(this.hexa.getPoint().getX(),this.hexa.getPoint().getY(),10,0,2*Math.PI);
        
        if(this.isTraversable())
            ctx.fillStyle = "#0f0";
        else
            ctx.fillStyle = "#000";

        ctx.fill();
        
    }

}