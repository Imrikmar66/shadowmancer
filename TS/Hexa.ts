/// <reference path="./GameEventListener.ts"/>
/// <reference path="./Shape.ts"/>
/// <reference path="./Point.ts"/>

class Hexa extends Shape implements GameEventListener {
    
    private events:Events;
    private occuped:Actor;

    constructor(size:number, point:Point){
        super(size, point, 6);
        this.events = new Events(this);
        this.occuped = null;
    }

    occupe(actor:Actor){
        this.occuped = actor;
    }

    leave(){
        this.occuped = null;
    }

    isOccuped():Actor {
        return this.occuped;
    }

    getEvents():Events {
        return this.events;
    }

    getArea():number {
        return ( 3 * Math.sqrt( 3 ) / 2 ) * Math.pow(this.size, 2);
    }

    getInnerCircleRadius():number {
        //return Math.sqrt( this.getArea() / ( 2 * Math.sqrt(3) ) );
        return this.size * Math.abs( Math.cos(360/16) );
    }

    protected renderer(ctx:CanvasRenderingContext2D):void {
        super.renderer(ctx);
        if(!this.events.isClicked() && !this.events.isHovered())
            this.recolor();
    }

    recolor():void {
        if(this.color.r < 255)
            this.color.r += 18;

        if(this.color.g < 255)
            this.color.g += 18;

        if(this.color.b < 255)
            this.color.b += 18;
    }

}