class Color {

    r:number;
    g:number;
    b:number;
    a:number;

    constructor(r = 0, g = 0, b = 0, a = 1){
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    white():Color {
        this.r = 255;
        this.g = 255;
        this.b = 255;
        return this;
    }

    black():Color {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        return this;
    }

    grey():Color {
        this.r = 125;
        this.g = 125;
        this.b = 125;
        return this;
    }

    red():Color {
        this.r = 255;
        this.g = 0;
        this.b = 0;
        return this;
    }

    toString():string {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }

}