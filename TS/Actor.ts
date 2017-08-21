/// <reference path="./Hexa.ts"/>
abstract class Actor extends Renderable {

    protected hexa:Hexa;
    protected id:string;

    constructor(){
        super();
        this.UUID();
    }

    UUID():void {
        this.id = Date.now() + "" + Math.floor(Math.random() * 100000);
    }

    setHexa(hexa:Hexa){
        if(this.hexa)
            this.hexa.leave();

        this.hexa = hexa;
        this.hexa.occupe(this);
    }

    getHexa(): Hexa {
        return this.hexa;
    }

    getId():string {
        return this.id;
    }

    protected abstract renderer(ctx: CanvasRenderingContext2D):void;

}