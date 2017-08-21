let game = new Shadowmancer("#game", 800, 600);
let grid = new Grid(game, 50, 50, 50, 9, 5);

let hero = new Hero(game);

grid.globalOnunhover(function(){
    this.unclick();
});

grid.globalOnclick(function(event){
    this.color = new Color().red();
    let hexa = grid.getHexa(game.mousePos);
    if(!hero.hexa)
         hero.hexa = hexa;
    else if(grid.areNext(hexa, hero.hexa) && hero.weapon == "sword")
        if(game.hasEnemy(hexa) == false)
            hero.hexa = hexa;
        else
            null;
});

grid.globalOnhover(function(){
    if( !this.isClicked() )
        this.color = new Color().grey();
});

game.main(function(){

    grid.render(); 
    hero.render(game.ctx);
    
});