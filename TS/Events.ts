class Events {

    protected ishover:boolean;
    protected _onhover:Function;
    protected _onunhover:Function;
    protected isclick:boolean;
    protected _onclick:Function;
    protected _onunclick:Function;
    private listener:GameEventListener;

    constructor(listener:GameEventListener){
        this.ishover = false;
        this.isclick = false;
        this.listener = listener;
    }

    onhover(callback:Function):void{
        this._onhover = callback;
    }

    onunhover(callback:Function):void{
        this._onunhover = callback;
    }

    hover():void{
        this.ishover = true;
        if(this._onhover)
            this._onhover(this.listener);
    }

    unhover():void{
        this.ishover = false;
        if(this._onunhover)
            this._onunhover(this.listener);
    }

    isHovered():boolean{
        return this.ishover;
    }

    onclick(callback:Function):void{
        this._onclick = callback;
    }

    onunclick(callback:Function):void{
        this._onunclick = callback;
    }

    click():void{
        this.isclick = true;
        if(this._onclick)
            this._onclick(this.listener);
    }

    unclick():void{
        this.isclick = false;
        if(this._onunclick)
            this._onunclick(this.listener);
    }

    isClicked():boolean{
        return this.isclick;
    }


}