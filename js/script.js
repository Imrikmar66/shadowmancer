var game = new Shadowmancer("#game", window.innerWidth, window.innerHeight);
var grid = new Grid(game, 50, 50, 50, 20, 10);
var enemies = EnemiesManager.getInstance();
var decors = DecorsManager.getInstance();
var hero = new Hero();
var ray = null;
grid.globalOnunhover(function (hexa) {
    hexa.getEvents().unclick();
});
grid.globalOnclick(function (hexa) {
    hexa.setColor(new Color().red());
    if (!hero.getHexa()) {
        hero.setHexa(hexa);
        game.getCamera().moveTo(hexa.getPoint());
    }
    else if (grid.areNext(hexa, hero.getHexa()) && hero.getWeapon() == "sword") {
        var occuper = hexa.isOccuped();
        ray = new Ray(hero.getHexa().getPoint(), hexa.getPoint());
        ray.cast(200);
        console.log(ray);
    }
});
grid.globalOnhover(function (hexa) {
    if (!hexa.getEvents().isClicked())
        hexa.setColor(new Color().grey());
});
decors.randomGenerated(grid, 30);
enemies.randomGenerated(grid, 30);
game.main(function () {
    grid.render(game);
    decors.render(game);
    enemies.render(game);
    hero.render(game.getCtx(), game.getCamera());
    if (ray)
        ray.render(game.getCtx(), game.getCamera());
});
//# sourceMappingURL=script.js.map