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
        game.getCamera().follow(hero);
        hero.setHexa(hexa);
    }
    else if( grid.areNext(hexa, hero.getHexa()) ){

        if( hero.getWeapon() == "sword" ){

            let occuper:Actor = hexa.isOccuped();
            let ray:Ray = new Ray(hero.getHexa().getPoint(), hexa.getPoint());
            if( occuper == null){
                hero.setHexa(hexa);
            }
            else if(Utils.getClass(occuper) == "Enemy"){
                    
                let point:Point = ray.cast(grid.getSize() * 2/*r to d*/ * 2/*nbr of case*/);
                hexa = grid.getHexa(point);

                if(hexa && !hexa.isOccuped()){
                    enemies.remove(occuper as Enemy);
                    //go to the next
                    hero.setHexa(hexa);
                }
            }
            else if(Utils.getClass(occuper) == "Decor"){
                
                let decor:Decor = occuper as Decor;
                if(decor.isTraversable()){
                    hero.setHexa(hexa);
                }

            }
        }
    }
});

grid.globalOnhover(function(hexa:Hexa){
    if( !hexa.getEvents().isClicked() )
        hexa.setColor(new Color().grey());
});

decors.randomGenerated(grid, 15, 15);
enemies.randomGenerated(grid, 30);

game.main(function(){

    grid.render(game); 
    decors.render(game);
    enemies.render(game);
    hero.render(game.getCtx(), game.getCamera());

    if(ray)
        ray.render(game.getCtx(), game.getCamera());
    
});