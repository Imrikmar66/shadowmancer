class Camera {

    private canvas:HTMLCanvasElement;
    private ctx:CanvasRenderingContext2D;
    private offset:Point;

    constructor(canvas:HTMLCanvasElement, ctx:CanvasRenderingContext2D){
        this.canvas = canvas;
        this.ctx = ctx;
        this.offset = new Point(0, 0);
    }

    getOffset():Point {
        return this.offset;
    }

    moveTo(point:Point){
        var offsetX = - ( point.getX() - this.canvas.width/2 );
        var offsetY = - ( point.getY() - this.canvas.height/2 );

        const step = 20;
        const animationDistX =  ( offsetX - this.offset.getX() )/step;
        const animationDistY =  ( offsetY - this.offset.getY() )/step;
        var counter = 0;
        let animate = () => {
            let currentOffsetX = this.offset.getX();
            let currentOffsetY = this.offset.getY();

            currentOffsetX += animationDistX;
            currentOffsetY += animationDistY;
            
            if(counter++ == step)
                this.offset = new Point(offsetX, offsetY);
            else{
                this.offset = new Point(currentOffsetX, currentOffsetY);
                requestAnimationFrame(animate);
            }
        }
        requestAnimationFrame(animate);
        
    }

}