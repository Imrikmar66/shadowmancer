/// <reference path="./Game.ts"/>
/// <reference path="./Hexa.ts"/>
/// <reference path="./Enemy.ts"/>

class Shadowmancer extends Game {

    private enemies:Enemy[];
    
    constructor(canvas:string, width:number, height:number){
        super(canvas, width, height);
        this.enemies = [];
    }

}