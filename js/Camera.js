var Camera = (function () {
    function Camera(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.offset = new Point(0, 0);
    }
    Camera.prototype.getOffset = function () {
        return this.offset;
    };
    Camera.prototype.moveTo = function (point) {
        var _this = this;
        var offsetX = -(point.getX() - this.canvas.width / 2);
        var offsetY = -(point.getY() - this.canvas.height / 2);
        var step = 20;
        var animationDistX = (offsetX - this.offset.getX()) / step;
        var animationDistY = (offsetY - this.offset.getY()) / step;
        var counter = 0;
        var animate = function () {
            var currentOffsetX = _this.offset.getX();
            var currentOffsetY = _this.offset.getY();
            currentOffsetX += animationDistX;
            currentOffsetY += animationDistY;
            if (counter++ == step)
                _this.offset = new Point(offsetX, offsetY);
            else {
                _this.offset = new Point(currentOffsetX, currentOffsetY);
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    };
    return Camera;
}());
//# sourceMappingURL=Camera.js.map