const logo = {
    isLoaded: false,

    svg: draw.image('assets/sonnenblume.svg', function (event) {
        logo.isLoaded = true;
        logo.draw();
    }),

    draw: function (event) {
        if (!logo.isLoaded) return false;
        let width = draw.width() * 0.10;
        this.svg.size(width).x(draw.width() - width - 10).y(10);
    }
};

