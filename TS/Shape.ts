/// <reference path="./Events.ts"/>
/// <reference path="./Point.ts"/>
/// <reference path="./Color.ts"/>

class Shape extends Renderable {

    protected id:string;
    protected bounds: Point[];
    protected vertices:number;
    protected size:number;
    protected point:Point;
    protected color:Color;
    protected borderColor:Color;

    constructor(size:number, point:Point, vertices:number){
        super();

        this.id = "";
        this.bounds = [];
        this.vertices = vertices;
        this.size = size;
        this.point = point;

        this.color = new Color().white();
        this.borderColor = new Color().black();

        this.UUID();
        this.getBounds();
    }

    getId():String {
        return this.id;
    }

    getSize():number {
        return this.size;
    }

    setPoint(point:Point):void {
        this.point = point;
        this.getBounds();
    }

    getPoint():Point {
        return this.point;
    }

    setColor(color:Color) {
        this.color = color;
    }

    UUID():void {
        this.id = Date.now() + "" + Math.floor(Math.random() * 100000);
    }

    getBounds():void {
        this.bounds = [];
        for (let side:number = 0; side < this.vertices; side++) {
            let point:Point = new Point(this.point.getX() + this.size * Math.cos(side * 2 * Math.PI / this.vertices), this.point.getY() + this.size * Math.sin(side * 2 * Math.PI / this.vertices));
            this.bounds.push( point );
        }
    }

    getPerimeter():number {
        return this.size * this.vertices;
    }

    intersect(point:Point):boolean{
        var result:boolean = false;
        for (let i = 0, j = this.bounds.length - 1; i < this.bounds.length; j = i++) {
            if ((this.bounds[i].getY() > point.getY()) != (this.bounds[j].getY() > point.getY()) &&
                (point.getX() < (this.bounds[j].getX() - this.bounds[i].getX()) * (point.getY() - this.bounds[i].getY()) / (this.bounds[j].getY()-this.bounds[i].getY()) + this.bounds[i].getX())) {
                result = !result;
            }
        }
        return result;
    }

    protected renderer(ctx:CanvasRenderingContext2D):void {
        ctx.beginPath();
        ctx.moveTo(this.bounds[0].getX(), this.bounds[0].getY());
        for (let bound of this.bounds) {
            ctx.lineTo(bound.getX(), bound.getY());
        }
        ctx.lineTo(this.bounds[0].getX(), this.bounds[0].getY());

        ctx.strokeStyle = this.borderColor.toString();
        ctx.stroke();
        
        ctx.fillStyle = this.color.toString();
        ctx.fill();
    }

}