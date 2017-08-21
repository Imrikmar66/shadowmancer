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
var Shape = (function (_super) {
    __extends(Shape, _super);
    function Shape(size, point, vertices) {
        var _this = _super.call(this) || this;
        _this.id = "";
        _this.bounds = [];
        _this.vertices = vertices;
        _this.size = size;
        _this.point = point;
        _this.color = new Color().white();
        _this.borderColor = new Color().black();
        _this.UUID();
        _this.getBounds();
        return _this;
    }
    Shape.prototype.getId = function () {
        return this.id;
    };
    Shape.prototype.getSize = function () {
        return this.size;
    };
    Shape.prototype.setPoint = function (point) {
        this.point = point;
        this.getBounds();
    };
    Shape.prototype.getPoint = function () {
        return this.point;
    };
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Shape.prototype.UUID = function () {
        this.id = Date.now() + "" + Math.floor(Math.random() * 100000);
    };
    Shape.prototype.getBounds = function () {
        this.bounds = [];
        for (var side = 0; side < this.vertices; side++) {
            var point = new Point(this.point.getX() + this.size * Math.cos(side * 2 * Math.PI / this.vertices), this.point.getY() + this.size * Math.sin(side * 2 * Math.PI / this.vertices));
            this.bounds.push(point);
        }
    };
    Shape.prototype.getPerimeter = function () {
        return this.size * this.vertices;
    };
    Shape.prototype.intersect = function (point) {
        var result = false;
        for (var i = 0, j = this.bounds.length - 1; i < this.bounds.length; j = i++) {
            if ((this.bounds[i].getY() > point.getY()) != (this.bounds[j].getY() > point.getY()) &&
                (point.getX() < (this.bounds[j].getX() - this.bounds[i].getX()) * (point.getY() - this.bounds[i].getY()) / (this.bounds[j].getY() - this.bounds[i].getY()) + this.bounds[i].getX())) {
                result = !result;
            }
        }
        return result;
    };
    Shape.prototype.renderer = function (ctx) {
        ctx.beginPath();
        ctx.moveTo(this.bounds[0].getX(), this.bounds[0].getY());
        for (var _i = 0, _a = this.bounds; _i < _a.length; _i++) {
            var bound = _a[_i];
            ctx.lineTo(bound.getX(), bound.getY());
        }
        ctx.lineTo(this.bounds[0].getX(), this.bounds[0].getY());
        ctx.strokeStyle = this.borderColor.toString();
        ctx.stroke();
        ctx.fillStyle = this.color.toString();
        ctx.fill();
    };
    return Shape;
}(Renderable));
//# sourceMappingURL=Shape.js.map