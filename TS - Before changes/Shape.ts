class Shape extends Events {

    constructor(size, point, vertices){
        super();

        this.id = 0;
        this.bounds = [];
        this._vertices = vertices;
        this.size = size;
        this._point = point;

        this.color = new Color().white();
        this.borderColor = new Color().black();

        this.UUID();
        this.getBounds();
    }

    setPoint(point){
        this._point = point;
        this.getBounds();
    }

    getPoint(){
        return this._point;
    }

    UUID(){
        this.id = Date.now() + "" + Math.floor(Math.random() * 100000);
    }

    getBounds(){
        this.bounds = [];
        for (let side = 0; side < this._vertices; side++) {
            let point = new Point(this._point.getX() + this.size * Math.cos(side * 2 * Math.PI / this._vertices), this._point.getY() + this.size * Math.sin(side * 2 * Math.PI / this._vertices));
            this.bounds.push( point );
        }
    }

    getPerimeter(){
        return this.size * this._vertices;
    }

    intersect(point){
        var result = false;
        for (let i = 0, j = this.bounds.length - 1; i < this.bounds.length; j = i++) {
            if ((this.bounds[i].getY() > point.getY()) != (this.bounds[j].getY() > point.getY()) &&
                (point.getX() < (this.bounds[j].getX() - this.bounds[i].getX()) * (point.getY() - this.bounds[i].getY()) / (this.bounds[j].getY()-this.bounds[i].getY()) + this.bounds[i].getX())) {
                result = !result;
            }
        }
        return result;
    }

    render(ctx){

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