class Events {

    constructor(){
        this._ishover = false;
        this._onhover = null;
        this._onunhover = null;

        this._isclick = false;
        this._onclick = null;
        this._onunclick = null;
    }

    onhover(callback){
        this._onhover = callback;
    }

    onunhover(callback){
        this._onunhover = callback;
    }

    hover(){
        this._ishover = true;7
        if(this._onhover)
            this._onhover();
    }

    unhover(){
        this._ishover = false;
        if(this._onunhover)
            this._onunhover();
    }

    isHovered(){
        return this._ishover;
    }

    onclick(callback){
        this._onclick = callback;
    }

    onunclick(callback){
        this._onunclick = callback;
    }

    click(){
        this._isclick = true;
        if(this._onclick)
            this._onclick();
    }

    unclick(){
        this._isclick = false;
        if(this._onunclick)
            this._onunclick();
    }

    isClicked(){
        return this._isclick;
    }


}