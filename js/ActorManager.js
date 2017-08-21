var ActorManager = (function () {
    function ActorManager() {
        this.actors = [];
    }
    ActorManager.getInstance = function () {
        if (!ActorManager.instance)
            ActorManager.instance = new ActorManager();
        return ActorManager.instance;
    };
    ActorManager.prototype.randomGenerated = function (grid, n) {
        var rands = [];
        for (var i = 0; i < n; i++) {
            var rand = Math.round(Math.random() * grid.getHexas().length);
            if (rands.indexOf(rand) > -1)
                i--;
            else {
                rands.push(rand);
                var actor = new Actor();
                console.log(rand);
                enemy.setHexa(grid.getHexas()[rand]);
                this.actors.push(enemy);
            }
        }
    };
    ActorManager.prototype.addEnemy = function (enemy) {
        this.enemies.push(enemy);
    };
    ActorManager.prototype.getEnemies = function () {
        return this.enemies;
    };
    ActorManager.prototype.getEnemyOnHexa = function (hexa) {
        for (var _i = 0, _a = this.enemies; _i < _a.length; _i++) {
            var enemy = _a[_i];
            if (enemy.getHexa().getId() == hexa.getId())
                return enemy;
        }
        return null;
    };
    ActorManager.prototype.render = function (game) {
        for (var _i = 0, _a = this.enemies; _i < _a.length; _i++) {
            var enemy = _a[_i];
            enemy.render(game.getCtx(), game.getCamera());
        }
    };
    return ActorManager;
}());
ActorManager.instance = null;
//# sourceMappingURL=ActorManager.js.map