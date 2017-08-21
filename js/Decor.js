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
var Decor = (function (_super) {
    __extends(Decor, _super);
    function Decor() {
        return _super.call(this) || this;
    }
    Decor.prototype.setTraversable = function (traversable) {
        this.traversable = traversable;
    };
    Decor.prototype.getTraversable = function () {
        return this.traversable;
    };
    Decor.prototype.renderer = function (ctx) {
        if (!this.hexa)
            return;
        ctx.beginPath();
        ctx.arc(this.hexa.getPoint().getX(), this.hexa.getPoint().getY(), 10, 0, 2 * Math.PI);
        ctx.fillStyle = "#0ff";
        ctx.fill();
    };
    return Decor;
}(Actor));
//# sourceMappingURL=Decor.js.map