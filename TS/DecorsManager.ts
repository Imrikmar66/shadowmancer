class DecorsManager {

    static instance:DecorsManager = null;
    static getInstance():DecorsManager {
        if(!DecorsManager.instance)
            DecorsManager.instance = new DecorsManager();
        return DecorsManager.instance;
    }

    private decors:Decor[];

    private constructor(){
        this.decors = [];
    }

    randomGenerated(grid:Grid, n:number):void {
        var rands:number[] = [];
        for(var i=0; i < n; i++){
            let rand = Math.round(Math.random() * grid.getHexas().length);
            if(rands.indexOf(rand) > -1 )
                i--;
            else{
                rands.push(rand);
                let decor = new Decor();
                decor.setHexa(grid.getHexas()[rand]);
                this.decors.push(decor);
            }
        }
    }

    addDecor(decor:Decor):void {
        this.decors.push(decor);
    }

    getDecors():Decor[]{
        return this.decors;
    }

    getDecorOnHexa(hexa:Hexa):Decor {
        for(var decor of this.decors){
            if(decor.getHexa().getId() == hexa.getId())
                return decor;
        }
        return null;
    }

    render(game:Game){
        for( let decor of this.decors ){
            decor.render(game.getCtx(), game.getCamera());
        }
    }

}