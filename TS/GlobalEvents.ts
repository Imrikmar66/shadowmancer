class GlobalEvents {

    private triggers:{ [key: string]:Function[] };
    private listener:GlobalEventListener;

    constructor(listener:GlobalEventListener){
        this.triggers = {};
        this.listener = listener;
    }

    on(name:string, callback:Function){
        if(!this.triggers[name])
            this.triggers[name] = [];
        this.triggers[name].push(callback);
    }

    trigger(name:string){
        if(!this.triggers[name])
            return;

        for(let f of this.triggers[name]){
            f(this.listener);
        }
    }

}