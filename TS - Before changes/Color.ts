class Color {

    constructor(r = 0, g = 0, b = 0, a = 1){
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    white(){
        this.r = 255;
        this.g = 255;
        this.b = 255;
        return this;
    }

    black(){
        this.r = 0;
        this.g = 0;
        this.b = 0;
        return this;
    }

    grey(){
        this.r = 125;
        this.g = 125;
        this.b = 125;
        return this;
    }

    red(){
        this.r = 255;
        this.g = 0;
        this.b = 0;
        return this;
    }

    toString(){
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }

}