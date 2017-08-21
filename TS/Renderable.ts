abstract class Renderable {

    private beforeRender(ctx:CanvasRenderingContext2D, camera:Camera){
        ctx.save();
        ctx.translate(camera.getOffset().getX(), camera.getOffset().getY());
    }

    protected abstract renderer(ctx:CanvasRenderingContext2D):void;

    private afterRender(ctx:CanvasRenderingContext2D){
        ctx.restore();
    }

    render(ctx:CanvasRenderingContext2D, camera:Camera){
        this.beforeRender(ctx, camera);
        this.renderer(ctx);
        this.afterRender(ctx);
    }

}