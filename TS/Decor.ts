class Decor extends Actor {

    private traversable:boolean;
    
    constructor(){
        super();
    }

    setTraversable(traversable:boolean){
        this.traversable = traversable;
    }

    getTraversable():boolean {
        return this.traversable ;
    }

    protected renderer(ctx:CanvasRenderingContext2D){
        
        if(!this.hexa)
            return;

        ctx.beginPath();
        ctx.arc(this.hexa.getPoint().getX(),this.hexa.getPoint().getY(),10,0,2*Math.PI);
        ctx.fillStyle = "#0ff";
        ctx.fill();
        
    }

}