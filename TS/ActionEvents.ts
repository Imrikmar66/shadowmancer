class ActionEvents extends GlobalEvents {

        constructor(listener:ActionEventListener){
            super(listener);
        }
    
        onmove(callback:Function):void{
            this.on("move", callback);
        }
    
        move():void {
            this.trigger("move");
        }
    
    }