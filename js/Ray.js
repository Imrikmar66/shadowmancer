var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ray = (function (_super) {
    __extends(Ray, _super);
    function Ray(origin, target) {
        var _this = _super.call(this) || this;
        _this.directional = 1;
        _this.origin = origin;
        var deltaY = (target.getY() - origin.getY());
        var deltaX = (target.getX() - origin.getX());
        _this.a = deltaY / deltaX;
        _this.b = origin.getY() - _this.a * origin.getX();
        if (target.getX() < origin.getX())
            _this.directional *= -1;
        return _this;
    }
    Ray.prototype.cast = function (range) {
        var angle = Math.atan(this.a);
        var dX = Math.cos(angle) * range;
        var X;
        var Y;
        if (this.a == Infinity) {
            X = this.origin.getX();
            Y = this.origin.getY() + range;
        }
        else if (this.a == -Infinity) {
            X = this.origin.getX();
            Y = this.origin.getY() - range;
        }
        else {
            X = dX * this.directional + this.origin.getX();
            Y = this.a * X + this.b;
        }
        this.target = new Point(X, Y);
        return this.target;
    };
    Ray.prototype.renderer = function (ctx) {
        ctx.beginPath();
        ctx.moveTo(this.origin.getX(), this.origin.getY());
        ctx.lineTo(this.target.getX(), this.target.getY());
        ctx.strokeStyle = "#f00";
        ctx.lineWidth = 3;
        ctx.stroke();
    };
    return Ray;
}(Renderable));
//# sourceMappingURL=Ray.js.map