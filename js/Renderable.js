var Renderable = (function () {
    function Renderable() {
    }
    Renderable.prototype.beforeRender = function (ctx, camera) {
        ctx.save();
        ctx.translate(camera.getOffset().getX(), camera.getOffset().getY());
    };
    Renderable.prototype.afterRender = function (ctx) {
        ctx.restore();
    };
    Renderable.prototype.render = function (ctx, camera) {
        this.beforeRender(ctx, camera);
        this.renderer(ctx);
        this.afterRender(ctx);
    };
    return Renderable;
}());
//# sourceMappingURL=Renderable.js.map