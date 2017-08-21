class Hexa extends Shape {

    constructor(size, point){
        super(size, point, 6);
    }

    getArea(){
        return ( 3 * Math.sqrt( 3 ) / 2 ) * Math.pow(this.size, 2);
    }

    getInnerCircleRadius(){
        //return Math.sqrt( this.getArea() / ( 2 * Math.sqrt(3) ) );
        return this.size * Math.abs( Math.cos(360/16) );
    }

    render(ctx){
        super.render(ctx);
        if(!this._isclick && !this._ishover)
            this.recolor();
    }

    recolor(){
        if(this.color.r < 255)
            this.color.r += 18;

        if(this.color.g < 255)
            this.color.g += 18;

        if(this.color.b < 255)
            this.color.b += 18;
    }

}