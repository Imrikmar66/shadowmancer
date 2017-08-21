var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.distance = function (point) {
        return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2));
    };
    Point.prototype.isEqualTo = function (point) {
        return this.x == point.x && this.y === point.y;
    };
    return Point;
}());
//# sourceMappingURL=Point.js.map