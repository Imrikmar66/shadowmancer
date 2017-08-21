var Events = (function () {
    function Events(listener) {
        this.ishover = false;
        this.isclick = false;
        this.listener = listener;
    }
    Events.prototype.onhover = function (callback) {
        this._onhover = callback;
    };
    Events.prototype.onunhover = function (callback) {
        this._onunhover = callback;
    };
    Events.prototype.hover = function () {
        this.ishover = true;
        if (this._onhover)
            this._onhover(this.listener);
    };
    Events.prototype.unhover = function () {
        this.ishover = false;
        if (this._onunhover)
            this._onunhover(this.listener);
    };
    Events.prototype.isHovered = function () {
        return this.ishover;
    };
    Events.prototype.onclick = function (callback) {
        this._onclick = callback;
    };
    Events.prototype.onunclick = function (callback) {
        this._onunclick = callback;
    };
    Events.prototype.click = function () {
        this.isclick = true;
        if (this._onclick)
            this._onclick(this.listener);
    };
    Events.prototype.unclick = function () {
        this.isclick = false;
        if (this._onunclick)
            this._onunclick(this.listener);
    };
    Events.prototype.isClicked = function () {
        return this.isclick;
    };
    return Events;
}());
//# sourceMappingURL=Events.js.map