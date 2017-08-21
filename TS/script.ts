/// <reference path="./Shadowmancer.ts"/>
/// <reference path="./Grid.ts"/>
/// <reference path="./Hero.ts"/>
/// <reference path="./Color.ts"/>

let game:Shadowmancer = new Shadowmancer("#game", window.innerWidth, window.innerHeight);
let grid:Grid = new Grid(game, 50, 50, 50, 20, 10);
var enemies:EnemiesManager = EnemiesManager.getInstance();
var decors:DecorsManager = DecorsManager.getInstance();

let hero = new Hero();
var ray:Ray = null;

grid.globalOnunhover(function(hexa:Hexa){
    hexa.getEvents().unclick();
});

grid.globalOnclick(function(hexa:Hexa){
    hexa.setColor(new Color().red());

    if(!hero.getHexa()){
        hero.setHexa(hexa);
        game.getCamera().moveTo(hexa.getPoint());
    }
    else if(grid.areNext(hexa, hero.getHexa()) && hero.getWeapon() == "sword"){
        let occuper:Actor = hexa.isOccuped();

        /*if( occuper == null){
            hero.setHexa(hexa);
            game.getCamera().moveTo(hexa.getPoint())
        }
        else if(occuper.constructor.name == "Enemy"){
            enemies.remove(occuper as Enemy);
            //go to the next
        }
        else if(occuper.constructor.name == "Decor"){
            //go to the next
        }*/

        ray = new Ray(hero.getHexa().getPoint(), hexa.getPoint());
        ray.cast(200);
        console.log(ray);
    }
});

grid.globalOnhover(function(hexa:Hexa){
    if( !hexa.getEvents().isClicked() )
        hexa.setColor(new Color().grey());
});

decors.randomGenerated(grid, 30);
enemies.randomGenerated(grid, 30);

game.main(function(){

    grid.render(game); 
    decors.render(game);
    enemies.render(game);
    hero.render(game.getCtx(), game.getCamera());

    if(ray)
        ray.render(game.getCtx(), game.getCamera());
    
});