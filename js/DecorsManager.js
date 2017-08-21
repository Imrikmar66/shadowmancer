var DecorsManager = (function () {
    function DecorsManager() {
        this.decors = [];
    }
    DecorsManager.getInstance = function () {
        if (!DecorsManager.instance)
            DecorsManager.instance = new DecorsManager();
        return DecorsManager.instance;
    };
    DecorsManager.prototype.randomGenerated = function (grid, n1, n2) {
        var rands = [];
        for (var i = 0; i < n1; i++) {
            var rand = Math.round(Math.random() * (grid.getHexas().length - 1));
            if (rands.indexOf(rand) > -1)
                i--;
            else {
                rands.push(rand);
                var decor = new Decor();
                decor.setTraversable(true);
                decor.setHexa(grid.getHexas()[rand]);
                this.decors.push(decor);
            }
        }
        for (var i = 0; i < n2; i++) {
            var rand = Math.round(Math.random() * (grid.getHexas().length - 1));
            if (rands.indexOf(rand) > -1)
                i--;
            else {
                rands.push(rand);
                var decor = new Decor();
                decor.setHexa(grid.getHexas()[rand]);
                this.decors.push(decor);
            }
        }
    };
    DecorsManager.prototype.addDecor = function (decor) {
        this.decors.push(decor);
    };
    DecorsManager.prototype.getDecors = function () {
        return this.decors;
    };
    DecorsManager.prototype.getDecorOnHexa = function (hexa) {
        for (var _i = 0, _a = this.decors; _i < _a.length; _i++) {
            var decor = _a[_i];
            if (decor.getHexa().getId() == hexa.getId())
                return decor;
        }
        return null;
    };
    DecorsManager.prototype.render = function (game) {
        for (var _i = 0, _a = this.decors; _i < _a.length; _i++) {
            var decor = _a[_i];
            decor.render(game.getCtx(), game.getCamera());
        }
    };
    return DecorsManager;
}());
DecorsManager.instance = null;
//# sourceMappingURL=DecorsManager.js.map