class Grid {
    
    constructor(game, size, startX, startY, width, height){
        this.game = game;
        this.size = size;
        this.startX = startX;
        this.startY = startY;
        this.width = width;
        this.height = height;
        this.hexas = []; 
        this.lastMouseOvered = null;
        this.generateGrid();
        this.bindEvents();
    }

    generateGrid(){

        for( var i=0; i < this.height; i++ ){

            for( var j=0; j < this.width; j++ ){

                let hexa = new Hexa(this.size, new Point(0, 0));
                var Y = this.startY + i * 2 * hexa.getInnerCircleRadius();
                var X = this.startX + j * 2 * (1/2 + 1/4) * hexa.size;
                
                if(j%2)
                    Y += hexa.getInnerCircleRadius();

                var point = new Point(X, Y);
                hexa.setPoint( point );
                this.hexas.push(hexa);

            }

        }
    }

    bindEvents(){
        this.game.canvas.addEventListener("mousemove", () => {
            let currentHexa = this.getHexa(this.game.mousePos);

            if( !currentHexa && this.lastMouseOvered ){
                this.lastMouseOvered.unhover();
                this.lastMouseOvered = false;
            }

            else if( currentHexa && !this.lastMouseOvered){
                currentHexa.hover();
                this.lastMouseOvered = currentHexa;
            }

            else if( currentHexa && currentHexa.id != this.lastMouseOvered.id ) {
                this.lastMouseOvered.unhover();
                currentHexa.hover();
                this.lastMouseOvered = currentHexa;
            }
                
        });

        this.game.canvas.addEventListener("click", () => {
            let currentHexa = this.getHexa(this.game.mouseClick);
            if( currentHexa )
                currentHexa.click();
                
        });

    }

    globalOnunhover(callback){
        this.hexas.forEach((hexa) => {
            hexa.onunhover(callback);
        });
    }

    globalOnhover(callback){
        this.hexas.forEach((hexa) => {
            hexa.onhover(callback);
        });
    }

    globalOnclick(callback){
        this.hexas.forEach((hexa) => {
            hexa.onclick(callback);
        });
    }

    globalOnunclick(callback){
        this.hexas.forEach((hexa) => {
            hexa.onunclick(callback);
        });
    }

    getHexa(point){

        for(let hexa of this.hexas) {
            
            if( hexa.intersect(point) )
                return hexa;

        }

        return false;

    }

    areNext(hexa_1, hexa_2){
        if(hexa_1.getPoint().distance(hexa_2.getPoint()) <= this.size*2)
            return true;

        return false;
    }

    render(){
        for( let hexa of this.hexas ){
            hexa.render(this.game.ctx);
        }
    }

}