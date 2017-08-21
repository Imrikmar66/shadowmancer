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
var Hexa = (function (_super) {
    __extends(Hexa, _super);
    function Hexa(size, point) {
        var _this = _super.call(this, size, point, 6) || this;
        _this.events = new Events(_this);
        _this.occuped = null;
        return _this;
    }
    Hexa.prototype.occupe = function (actor) {
        this.occuped = actor;
    };
    Hexa.prototype.leave = function () {
        this.occuped = null;
    };
    Hexa.prototype.isOccuped = function () {
        return this.occuped;
    };
    Hexa.prototype.getEvents = function () {
        return this.events;
    };
    Hexa.prototype.getArea = function () {
        return (3 * Math.sqrt(3) / 2) * Math.pow(this.size, 2);
    };
    Hexa.prototype.getInnerCircleRadius = function () {
        return this.size * Math.abs(Math.cos(360 / 16));
    };
    Hexa.prototype.renderer = function (ctx) {
        _super.prototype.renderer.call(this, ctx);
        if (!this.events.isClicked() && !this.events.isHovered())
            this.recolor();
    };
    Hexa.prototype.recolor = function () {
        if (this.color.r < 255)
            this.color.r += 18;
        if (this.color.g < 255)
            this.color.g += 18;
        if (this.color.b < 255)
            this.color.b += 18;
    };
    return Hexa;
}(Shape));
//# sourceMappingURL=Hexa.js.map