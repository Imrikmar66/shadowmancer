var EnemiesManager = (function () {
    function EnemiesManager() {
        this.enemies = [];
    }
    EnemiesManager.getInstance = function () {
        if (!EnemiesManager.instance)
            EnemiesManager.instance = new EnemiesManager();
        return EnemiesManager.instance;
    };
    EnemiesManager.prototype.randomGenerated = function (grid, n) {
        var rands = [];
        for (var i = 0; i < n; i++) {
            var rand = Math.round(Math.random() * grid.getHexas().length);
            if (rands.indexOf(rand) > -1)
                i--;
            else {
                rands.push(rand);
                var enemy = new Enemy();
                console.log(rand);
                enemy.setHexa(grid.getHexas()[rand]);
                this.enemies.push(enemy);
            }
        }
    };
    EnemiesManager.prototype.addEnemy = function (enemy) {
        this.enemies.push(enemy);
    };
    EnemiesManager.prototype.getEnemies = function () {
        return this.enemies;
    };
    EnemiesManager.prototype.getEnemyOnHexa = function (hexa) {
        for (var _i = 0, _a = this.enemies; _i < _a.length; _i++) {
            var enemy = _a[_i];
            if (enemy.getHexa().getId() == hexa.getId())
                return enemy;
        }
        return null;
    };
    EnemiesManager.prototype.render = function (game) {
        for (var _i = 0, _a = this.enemies; _i < _a.length; _i++) {
            var enemy = _a[_i];
            enemy.render(game.getCtx(), game.getCamera());
        }
    };
    return EnemiesManager;
}());
EnemiesManager.instance = null;
//# sourceMappingURL=EnemiesManager.1.js.map