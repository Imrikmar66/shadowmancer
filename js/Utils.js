var Utils = (function () {
    function Utils() {
    }
    Utils.roundX = function (value, x) {
        return Math.round(value * x) / x;
    };
    Utils.getClass = function (instance) {
        return instance.constructor.name;
    };
    return Utils;
}());
//# sourceMappingURL=Utils.js.map