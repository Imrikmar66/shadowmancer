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
        game.getCamera().follow(hero);
        hero.setHexa(hexa);
    }
    else if (grid.areNext(hexa, hero.getHexa())) {
        if (hero.getWeapon() == "sword") {
            var occuper = hexa.isOccuped();
            var ray_1 = new Ray(hero.getHexa().getPoint(), hexa.getPoint());
            if (occuper == null) {
                hero.setHexa(hexa);
            }
            else if (Utils.getClass(occuper) == "Enemy") {
                var point = ray_1.cast(grid.getSize() * 2 * 2);
                hexa = grid.getHexa(point);
                if (hexa && !hexa.isOccuped()) {
                    enemies.remove(occuper);
                    hero.setHexa(hexa);
                }
            }
            else if (Utils.getClass(occuper) == "Decor") {
                var decor = occuper;
                if (decor.isTraversable()) {
                    hero.setHexa(hexa);
                }
            }
        }
    }
});
grid.globalOnhover(function (hexa) {
    if (!hexa.getEvents().isClicked())
        hexa.setColor(new Color().grey());
});
decors.randomGenerated(grid, 15, 15);
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