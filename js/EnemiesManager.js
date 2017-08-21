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
            var rand = Math.round(Math.random() * (grid.getHexas().length - 1));
            if (rands.indexOf(rand) > -1
                || DecorsManager.getInstance().getDecorOnHexa(grid.getHexas()[rand]))
                i--;
            else {
                rands.push(rand);
                var enemy = new Enemy();
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
    EnemiesManager.prototype.remove = function (enemy) {
        for (var index in this.enemies) {
            if (this.enemies[index].getId() == enemy.getId()) {
                enemy.getHexa().leave();
                this.enemies.splice(parseInt(index), 1);
                return;
            }
        }
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
//# sourceMappingURL=EnemiesManager.js.map