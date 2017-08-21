class Game {

    constructor(canvas, width, height){
        this.canvas = document.querySelector(canvas);
        this.ctx = this.canvas.getContext('2d');
        
        this.canvas.width = width;
        this.canvas.height = height;

        this.mousePos = new Point(0, 0);
        this.mouseClick = new Point(0, 0);

        this._main = false;
        this.bindEvents();

        window.requestAnimationFrame( this.loop.bind(this) );
    }

    bindEvents(){

        this.canvas.addEventListener("mousemove", function(event){
            game.mousePos = new Point(event.clientX, event.clientY);
        });

        this.canvas.addEventListener("click", function(event){
            game.mouseClick = new Point(event.clientX, event.clientY);
        });

    }

    clear(){
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
    }

    click(callback){
        game.canvas.addEventListener("onmousedown", function(event){
            callback(event);
        });
    }

    main(callback){
        this._main = callback;
    }

    loop(){
        if(this._main) {
            this.clear();
            this._main();
        }
        window.requestAnimationFrame( this.loop.bind(this) );
    }

}