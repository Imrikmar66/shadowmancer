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
var Actor = (function (_super) {
    __extends(Actor, _super);
    function Actor() {
        var _this = _super.call(this) || this;
        _this.UUID();
        return _this;
    }
    Actor.prototype.UUID = function () {
        this.id = Date.now() + "" + Math.floor(Math.random() * 100000);
    };
    Actor.prototype.setHexa = function (hexa) {
        if (this.hexa)
            this.hexa.leave();
        this.hexa = hexa;
        this.hexa.occupe(this);
    };
    Actor.prototype.getHexa = function () {
        return this.hexa;
    };
    Actor.prototype.getId = function () {
        return this.id;
    };
    return Actor;
}(Renderable));
//# sourceMappingURL=Actor.js.map