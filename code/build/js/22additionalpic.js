
$('#addPicSize1').bind('input propertychange', function() { addPic1.resize(); });
$('#addpicrounded1').bind('change', function() {addPic1.draw(); }) ;
$('#addpicdelete1').bind('click', function() {addPic1.delete(); });

const addPic1 = {
    svg: draw.circle(0),
    circleMask: 0,
    pic: 0,

    draw: function () {
        this.svg.remove();
        this.svg = draw.group().addClass('draggable').draggable();
        this.svg.on('dragmove.namespace', function (event) {
             circleMask.move(pic.x(), pic.y());
        });

        circleMask = draw.circle(0).fill({color: '#fff'});
        pic = draw.image($('#addpicfile1').val(), () => {
            let radius = pic.height();
            if( pic.height() > pic.width() ){
                radius = pic.width();
            }

            if( $('#addpicrounded1').prop("checked")) {
                circleMask.move(pic.width()/2, pic.height() / 2 ).radius( radius / 2  - 3).back();
                pic.maskWith(circleMask);
            }else{
                circleMask.size(0);
            }
            this.svg.add(pic);
            this.resize();

            text.svg.front();
            logo.svg.front();
        });

    },



    delete: function(){
        this.svg.remove();
        this.svg = draw.circle(0);
    },

    resize: function () {
        let percentage = draw.width() * parseInt($('#addPicSize1').val()) / 100;
        this.svg.size(percentage);
    }

};




