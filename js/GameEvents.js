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
var GameEvents = (function (_super) {
    __extends(GameEvents, _super);
    function GameEvents(listener) {
        var _this = _super.call(this, listener) || this;
        _this.ishover = false;
        _this.isclick = false;
        return _this;
    }
    GameEvents.prototype.onhover = function (callback) {
        this.on("hover", callback);
    };
    GameEvents.prototype.onunhover = function (callback) {
        this.on("unhover", callback);
    };
    GameEvents.prototype.hover = function () {
        this.ishover = true;
        this.trigger("hover");
    };
    GameEvents.prototype.unhover = function () {
        this.ishover = false;
        this.trigger("unhover");
    };
    GameEvents.prototype.isHovered = function () {
        return this.ishover;
    };
    GameEvents.prototype.onclick = function (callback) {
        this.on("click", callback);
    };
    GameEvents.prototype.onunclick = function (callback) {
        this.on("unclick", callback);
    };
    GameEvents.prototype.click = function () {
        this.isclick = true;
        this.trigger("click");
    };
    GameEvents.prototype.unclick = function () {
        this.isclick = false;
        this.trigger("unclick");
    };
    GameEvents.prototype.isClicked = function () {
        return this.isclick;
    };
    return GameEvents;
}(GlobalEvents));
//# sourceMappingURL=GameEvents.js.map