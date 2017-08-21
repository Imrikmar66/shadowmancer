var Color = (function () {
    function Color(r, g, b, a) {
        if (r === void 0) { r = 0; }
        if (g === void 0) { g = 0; }
        if (b === void 0) { b = 0; }
        if (a === void 0) { a = 1; }
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    Color.prototype.white = function () {
        this.r = 255;
        this.g = 255;
        this.b = 255;
        return this;
    };
    Color.prototype.black = function () {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        return this;
    };
    Color.prototype.grey = function () {
        this.r = 125;
        this.g = 125;
        this.b = 125;
        return this;
    };
    Color.prototype.red = function () {
        this.r = 255;
        this.g = 0;
        this.b = 0;
        return this;
    };
    Color.prototype.toString = function () {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    };
    return Color;
}());
//# sourceMappingURL=Color.js.map