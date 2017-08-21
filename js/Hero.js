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
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        var _this = _super.call(this) || this;
        _this.hexa = null;
        _this.weapon = "sword";
        return _this;
    }
    Hero.prototype.getHexa = function () {
        return this.hexa;
    };
    Hero.prototype.setHexa = function (hexa) {
        this.hexa = hexa;
    };
    Hero.prototype.getWeapon = function () {
        return this.weapon;
    };
    Hero.prototype.switchWeapon = function () {
        if (this.weapon == "sword")
            this.weapon = "hammer";
        else if (this.weapon == "hammer")
            this.weapon = "anchor";
        else
            this.weapon = "sword";
    };
    Hero.prototype.renderer = function (ctx) {
        if (!this.hexa)
            return;
        ctx.beginPath();
        ctx.arc(this.hexa.getPoint().getX(), this.hexa.getPoint().getY(), 10, 0, 2 * Math.PI);
        ctx.fillStyle = "#000";
        ctx.fill();
    };
    return Hero;
}(Actor));
//# sourceMappingURL=Hero.js.map