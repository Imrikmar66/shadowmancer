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
var Shadowmancer = (function (_super) {
    __extends(Shadowmancer, _super);
    function Shadowmancer(canvas, width, height) {
        var _this = _super.call(this, canvas, width, height) || this;
        _this.enemies = [];
        return _this;
    }
    return Shadowmancer;
}(Game));
//# sourceMappingURL=Shadowmancer.js.map