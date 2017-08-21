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
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        return _super.call(this) || this;
    }
    Enemy.prototype.renderer = function (ctx) {
        if (!this.hexa)
            return;
        ctx.beginPath();
        ctx.arc(this.hexa.getPoint().getX(), this.hexa.getPoint().getY(), 10, 0, 2 * Math.PI);
        ctx.fillStyle = "#ff0";
        ctx.fill();
    };
    return Enemy;
}(Actor));
//# sourceMappingURL=Enemy.js.map