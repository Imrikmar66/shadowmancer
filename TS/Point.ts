class Point {

    private x:number;
    private y:number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    getX():number {
        return this.x;
    }

    getY():number {
        return this.y;
    }

    distance(point:Point):number {
        return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2));
    }

    isEqualTo(point:Point):boolean {
        return this.x == point.x && this.y === point.y;
    }

}