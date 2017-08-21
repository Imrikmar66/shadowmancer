class Shadowmancer extends Game {

    constructor(canvas, width, height){
        super(canvas, width, height);
        this.enemies = [];
    }

    hasEnemy(hexa){
        for(let enemy of this.enemies){
            if(enemy.hexa.id == hexa.id){
                return enemy;
            }
        }
        return false;
    }

}