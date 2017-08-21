/// <reference path="./Renderable.ts"/>
class Ray extends Renderable {

    private origin:Point;
    private target:Point;
    private a:number;
    private b:number;
    private directional:number = 1;

    constructor(origin:Point, target:Point){
        super();
        this.origin = origin;
        let deltaY:number = (target.getY() - origin.getY());
        let deltaX:number = (target.getX() - origin.getX());
        this.a = deltaY / deltaX;
        this.b = origin.getY() - this.a * origin.getX();

        if(target.getX() < origin.getX())
            this.directional *= -1;
    }

    cast(range:number): Point {
        
        let angle:number = Math.atan(this.a);
        let dX:number = Math.cos(angle) * range;
        let X:number;
        let Y:number;

        if( this.a == Infinity ){
            X = this.origin.getX();
            Y = this.origin.getY() + range;
        }
        else if( this.a == -Infinity ){
            X = this.origin.getX();
            Y = this.origin.getY() - range;
        }
        else{
            X = dX * this.directional + this.origin.getX();
            Y = this.a * X + this.b;
        }

        this.target = new Point(X, Y);
        return this.target;
    }

    renderer(ctx:CanvasRenderingContext2D){
        ctx.beginPath();
        ctx.moveTo(this.origin.getX(), this.origin.getY());
        ctx.lineTo(this.target.getX(), this.target.getY());
        ctx.strokeStyle = "#f00";
        ctx.lineWidth = 3;
        ctx.stroke();
    }

}