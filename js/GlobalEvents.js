var GlobalEvents = (function () {
    function GlobalEvents(listener) {
        this.triggers = {};
        this.listener = listener;
    }
    GlobalEvents.prototype.on = function (name, callback) {
        if (!this.triggers[name])
            this.triggers[name] = [];
        this.triggers[name].push(callback);
    };
    GlobalEvents.prototype.trigger = function (name) {
        if (!this.triggers[name])
            return;
        for (var _i = 0, _a = this.triggers[name]; _i < _a.length; _i++) {
            var f = _a[_i];
            f(this.listener);
        }
    };
    return GlobalEvents;
}());
//# sourceMappingURL=GlobalEvents.js.map