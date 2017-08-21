/// <reference path="./Hexa.ts"/>
abstract class Actor extends Renderable implements ActionEventListener {

    protected hexa:Hexa;
    protected id:string;
    protected events:ActionEvents;

    constructor(){
        super();
        this.UUID();
        this.events = new ActionEvents(this);
    }

    getEvents():ActionEvents{
        return this.events;
    }

    UUID():void {
        this.id = Date.now() + "" + Math.floor(Math.random() * 100000);
    }

    setHexa(hexa:Hexa){
        if(this.hexa)
            this.hexa.leave();

        this.hexa = hexa;
        this.hexa.occupe(this);
        this.events.move();
    }

    getHexa(): Hexa {
        return this.hexa;
    }

    getId():string {
        return this.id;
    }

    protected abstract renderer(ctx: CanvasRenderingContext2D):void;

}