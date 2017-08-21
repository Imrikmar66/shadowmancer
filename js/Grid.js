var Grid = (function () {
    function Grid(game, size, startX, startY, width, height) {
        this.game = game;
        this.size = size;
        this.startX = startX;
        this.startY = startY;
        this.width = width;
        this.height = height;
        this.hexas = [];
        this.lastMouseHovered = null;
        this.generateGrid();
        this.bindEvents();
    }
    Grid.prototype.getSize = function () {
        return this.size;
    };
    Grid.prototype.getHexas = function () {
        return this.hexas;
    };
    Grid.prototype.generateGrid = function () {
        for (var i = 0; i < this.height; i++) {
            for (var j = 0; j < this.width; j++) {
                var hexa = new Hexa(this.size, new Point(0, 0));
                var Y = this.startY + i * 2 * hexa.getInnerCircleRadius();
                var X = this.startX + j * 2 * (1 / 2 + 1 / 4) * hexa.getSize();
                if (j % 2)
                    Y += hexa.getInnerCircleRadius();
                var point = new Point(X, Y);
                hexa.setPoint(point);
                this.hexas.push(hexa);
            }
        }
    };
    Grid.prototype.bindEvents = function () {
        var _this = this;
        this.game.canvas.addEventListener("mousemove", function () {
            var currentHexa = _this.getHexa(_this.game.getMousePos());
            if (!currentHexa && _this.lastMouseHovered) {
                _this.lastMouseHovered.getEvents().unhover();
                _this.lastMouseHovered = null;
            }
            else if (currentHexa && !_this.lastMouseHovered) {
                currentHexa.getEvents().hover();
                _this.lastMouseHovered = currentHexa;
            }
            else if (currentHexa && currentHexa.getId() != _this.lastMouseHovered.getId()) {
                _this.lastMouseHovered.getEvents().unhover();
                currentHexa.getEvents().hover();
                _this.lastMouseHovered = currentHexa;
            }
        });
        this.game.canvas.addEventListener("click", function () {
            var currentHexa = _this.getHexa(_this.game.getMouseClick());
            if (currentHexa)
                currentHexa.getEvents().click();
        });
    };
    Grid.prototype.globalOnunhover = function (callback) {
        this.hexas.forEach(function (hexa) {
            hexa.getEvents().onunhover(callback);
        });
    };
    Grid.prototype.globalOnhover = function (callback) {
        this.hexas.forEach(function (hexa) {
            hexa.getEvents().onhover(callback);
        });
    };
    Grid.prototype.globalOnclick = function (callback) {
        this.hexas.forEach(function (hexa) {
            hexa.getEvents().onclick(callback);
        });
    };
    Grid.prototype.globalOnunclick = function (callback) {
        this.hexas.forEach(function (hexa) {
            hexa.getEvents().onunclick(callback);
        });
    };
    Grid.prototype.getHexa = function (point) {
        for (var _i = 0, _a = this.hexas; _i < _a.length; _i++) {
            var hexa = _a[_i];
            if (hexa.intersect(point))
                return hexa;
        }
        return null;
    };
    Grid.prototype.areNext = function (hexa_1, hexa_2) {
        if (hexa_1.getPoint().distance(hexa_2.getPoint()) <= this.size * 2)
            return true;
        return false;
    };
    Grid.prototype.render = function (game) {
        for (var _i = 0, _a = this.hexas; _i < _a.length; _i++) {
            var hexa = _a[_i];
            hexa.render(this.game.getCtx(), game.getCamera());
        }
    };
    return Grid;
}());
//# sourceMappingURL=Grid.js.map