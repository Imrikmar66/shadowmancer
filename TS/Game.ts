/// <reference path="./Point.ts"/>
/// <reference path="./Camera.ts"/>
class Game {
    
    canvas: HTMLCanvasElement;
    private ctx:CanvasRenderingContext2D;
    private mousePos:Point;
    private mouseClick:Point;
    private _main: Function;
    private camera:Camera;

    constructor(canvas:string, width: number, height:number){
        this.canvas = document.querySelector(canvas) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        
        this.canvas.width = width;
        this.canvas.height = height;

        this.mousePos = new Point(0, 0);
        this.mouseClick = new Point(0, 0);

        this._main = null;

        this.camera = new Camera(this.canvas, this.ctx);

        this.bindEvents();

        window.requestAnimationFrame( this.loop.bind(this) );
    }

    getCtx():CanvasRenderingContext2D {
        return this.ctx;
    }

    getMousePos():Point {
        return this.mousePos;
    }

    getMouseClick():Point {
        return this.mouseClick;
    }

    getCamera():Camera {
        return this.camera;
    }

    bindEvents():void{

        this.canvas.addEventListener("mousemove", (event) => {
            this.mousePos = new Point(event.clientX - this.camera.getOffset().getX(), event.clientY - this.camera.getOffset().getY());
        });

        this.canvas.addEventListener("click", () => {
            this.mouseClick = this.mousePos;
        });

    }

    clear():void{
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
    }

    click(callback:Function):void{
        this.canvas.addEventListener("onmousedown", function(event){
            callback(event);
        });
    }

    main(callback:Function):void{
        this._main = callback;
    }

    loop():void{
        if(this._main) {
            this.clear();
            this._main();
        }
        window.requestAnimationFrame( this.loop.bind(this) );
    }

}