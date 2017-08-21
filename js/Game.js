var Game = (function () {
    function Game(canvas, width, height) {
        this.canvas = document.querySelector(canvas);
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = width;
        this.canvas.height = height;
        this.mousePos = new Point(0, 0);
        this.mouseClick = new Point(0, 0);
        this._main = null;
        this.camera = new Camera(this.canvas, this.ctx);
        this.bindEvents();
        window.requestAnimationFrame(this.loop.bind(this));
    }
    Game.prototype.getCtx = function () {
        return this.ctx;
    };
    Game.prototype.getMousePos = function () {
        return this.mousePos;
    };
    Game.prototype.getMouseClick = function () {
        return this.mouseClick;
    };
    Game.prototype.getCamera = function () {
        return this.camera;
    };
    Game.prototype.bindEvents = function () {
        var _this = this;
        this.canvas.addEventListener("mousemove", function (event) {
            _this.mousePos = new Point(event.clientX - _this.camera.getOffset().getX(), event.clientY - _this.camera.getOffset().getY());
        });
        this.canvas.addEventListener("click", function () {
            _this.mouseClick = _this.mousePos;
        });
    };
    Game.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Game.prototype.click = function (callback) {
        this.canvas.addEventListener("onmousedown", function (event) {
            callback(event);
        });
    };
    Game.prototype.main = function (callback) {
        this._main = callback;
    };
    Game.prototype.loop = function () {
        if (this._main) {
            this.clear();
            this._main();
        }
        window.requestAnimationFrame(this.loop.bind(this));
    };
    return Game;
}());
//# sourceMappingURL=Game.js.map