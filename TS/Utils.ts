class Utils{

    static roundX(value:number, x:number):number{
        return Math.round(value*x)/x;
    }

    static getClass(instance:Object):string {
        return instance.constructor.name;
    }
}