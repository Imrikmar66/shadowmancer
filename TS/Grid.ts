/// <reference path="./Game.ts"/>
/// <reference path="./Hexa.ts"/>
/// <reference path="./Point.ts"/>

class Grid {
    
    private game:Game;
    private size:number;
    private startX:number;
    private startY:number;
    private width:number;
    private height:number;
    private hexas:Hexa[];
    private lastMouseHovered:Hexa;

    constructor(game:Game, size:number, startX:number, startY:number, width:number, height:number){
        this.game = game;
        this.size = size;
        this.startX = startX;
        this.startY = startY;
        this.width = width;
        this.height = height;
        this.hexas = []; 
        this.lastMouseHovered = null;
        this.generateGrid();
        this.bindEvents();
    }

    getSize():number {
        return this.size;
    }

    getHexas():Hexa[]{
        return this.hexas;
    }

    generateGrid():void {

        for( var i=0; i < this.height; i++ ){

            for( var j=0; j < this.width; j++ ){

                let hexa:Hexa = new Hexa(this.size, new Point(0, 0));
                var Y:number = this.startY + i * 2 * hexa.getInnerCircleRadius();
                var X:number = this.startX + j * 2 * (1/2 + 1/4) * hexa.getSize();
                
                if(j%2)
                    Y += hexa.getInnerCircleRadius();

                var point:Point = new Point(X, Y);
                hexa.setPoint( point );
                this.hexas.push(hexa);

            }

        }
    }

    bindEvents():void {
        this.game.canvas.addEventListener("mousemove", () => {
            let currentHexa:Hexa = this.getHexa(this.game.getMousePos());

            if( !currentHexa && this.lastMouseHovered ){
                this.lastMouseHovered.getEvents().unhover();
                this.lastMouseHovered = null;
            }

            else if( currentHexa && !this.lastMouseHovered){
                currentHexa.getEvents().hover();
                this.lastMouseHovered = currentHexa;
            }

            else if( currentHexa && currentHexa.getId() != this.lastMouseHovered.getId() ) {
                this.lastMouseHovered.getEvents().unhover();
                currentHexa.getEvents().hover();
                this.lastMouseHovered = currentHexa;
            }
                
        });

        this.game.canvas.addEventListener("click", () => {
            let currentHexa:Hexa = this.getHexa(this.game.getMouseClick());
            if( currentHexa )
                currentHexa.getEvents().click();
                
        });

    }

    globalOnunhover(callback:Function):void {
        this.hexas.forEach((hexa) => {
            hexa.getEvents().onunhover(callback);
        });
    }

    globalOnhover(callback:Function):void {
        this.hexas.forEach((hexa) => {
            hexa.getEvents().onhover(callback);
        });
    }

    globalOnclick(callback:Function):void {
        this.hexas.forEach((hexa) => {
            hexa.getEvents().onclick(callback);
        });
    }

    globalOnunclick(callback:Function):void {
        this.hexas.forEach((hexa) => {
            hexa.getEvents().onunclick(callback);
        });
    }

    getHexa(point:Point):Hexa {

        for(let hexa of this.hexas) {
            
            if( hexa.intersect(point) )
                return hexa;

        }

        return null;

    }

    areNext(hexa_1:Hexa, hexa_2:Hexa):boolean {
        if(hexa_1.getPoint().distance(hexa_2.getPoint()) <= this.size*2)
            return true;

        return false;
    }

    render(game:Game):void {
        for( let hexa of this.hexas ){
            hexa.render(this.game.getCtx(), game.getCamera());
        }
    }

}