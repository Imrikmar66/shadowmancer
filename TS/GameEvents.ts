class GameEvents extends GlobalEvents {

    protected ishover:boolean;
    protected isclick:boolean;

    constructor(listener:GameEventListener){
        super(listener);
        this.ishover = false;
        this.isclick = false;
    }

    onhover(callback:Function):void{
        this.on("hover", callback);
    }

    onunhover(callback:Function):void{
        this.on("unhover", callback);
    }

    hover():void{
        this.ishover = true;
        this.trigger("hover");
    }

    unhover():void{
        this.ishover = false;
        this.trigger("unhover")
    }

    isHovered():boolean{
        return this.ishover;
    }

    onclick(callback:Function):void{
        this.on("click", callback);
    }

    onunclick(callback:Function):void{
        this.on("unclick", callback);
    }

    click():void{
        this.isclick = true;
        this.trigger("click");
    }

    unclick():void{
        this.isclick = false;
        this.trigger("unclick");
    }

    isClicked():boolean{
        return this.isclick;
    }


}