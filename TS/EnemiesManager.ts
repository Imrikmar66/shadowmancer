class EnemiesManager {

    static instance:EnemiesManager = null;
    static getInstance():EnemiesManager {
        if(!EnemiesManager.instance)
            EnemiesManager.instance = new EnemiesManager();
        return EnemiesManager.instance;
    }

    private enemies:Enemy[];

    private constructor(){
        this.enemies = [];
    }

    randomGenerated(grid:Grid, n:number):void {
        var rands:number[] = [];
        for(var i=0; i < n; i++){
            let rand = Math.round(Math.random() * grid.getHexas().length);
            if(
                rands.indexOf(rand) > -1 
                || DecorsManager.getInstance().getDecorOnHexa(grid.getHexas()[rand])
            )
                i--;
            else{
                rands.push(rand);
                let enemy = new Enemy();
                enemy.setHexa(grid.getHexas()[rand]);
                this.enemies.push(enemy);
            }
        }
    }

    addEnemy(enemy:Enemy):void {
        this.enemies.push(enemy);
    }

    getEnemies():Enemy[]{
        return this.enemies;
    }

    getEnemyOnHexa(hexa:Hexa):Enemy {
        for(var enemy of this.enemies){
            if(enemy.getHexa().getId() == hexa.getId())
                return enemy;
        }
        return null;
    }

    remove(enemy:Enemy){
        for(let index in this.enemies){
            if(this.enemies[index].getId() == enemy.getId()){
                enemy.getHexa().leave();
                this.enemies.splice(parseInt(index), 1);
                return;
            }
        }
    }

    render(game:Game){
        for( let enemy of this.enemies ){
            enemy.render(game.getCtx(), game.getCamera());
        }
    }

}