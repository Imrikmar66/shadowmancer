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
var ActionEvents = (function (_super) {
    __extends(ActionEvents, _super);
    function ActionEvents(listener) {
        return _super.call(this, listener) || this;
    }
    ActionEvents.prototype.onmove = function (callback) {
        this.on("move", callback);
    };
    ActionEvents.prototype.move = function () {
        this.trigger("move");
    };
    return ActionEvents;
}(GlobalEvents));
//# sourceMappingURL=ActionEvents.js.map