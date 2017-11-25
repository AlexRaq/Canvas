class Rect{

    constructor(x, y, w, h, s, c){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.clicked = false;
        this.c = c;
        this.s = s;
    }

    draw(){

        fillRect(this.x, this.y, this.w, this.h, this.c)

    }

    click(){

        this.clicked = !this.clicked

    }

    init(){

        let self = this;
        if(this.clicked){
            this.clear(this.x, this.y, 20, 20)
        } else if(stop == 1){
            console.log('a')
        } else{this.move()}





    }

    move(){


        if(this.y >= canvas.clientHeight - 5){
            this.bye()
            // clearRect();
            // this.newRect()
        }else{
            this.clear(this.x, this.y, 20, 20);
            this.draw();
            this.y += this.s;
            // console.log(this.y)
        }


    }


    random(min, max){

        let num = min - 0.5 + Math.random() * (max - min + 1);
        num = Math.round(num);
        return num;

    }
    clear(x, y, w, h){
        ctx.clearRect(x - 2, y - 2, w + 5, h + 5);


    }
    newRect(){
        cc = `rgb(${this.random(0, 255)}, ${this.random(0, 255)}, ${this.random(0, 255)})`;
        xx = this.random(0, 620);
        // this.y = 0;
        ss = this.random(100, 999) / 1000;


    }
    bye(){
        this.clear(this.x, this.y, 20, 20);
        this.clicked = !this.clicked

    }

}

let fillRect = function (x, y, w, h, c){
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.rect(x,y, w, h);
        ctx.fill();
        ctx.closePath();




    },

    clearRect = function (){
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth)
    },

    pushRect = function() {

        rects.push(new Rect(randomGen(20,610), 0, 20, 20, randomGen(10, 20) / 100, `rgb(${randomGen(0, 255)}, ${randomGen(0, 255)}, ${randomGen(0, 255)})`));

            setInterval(function () {
                if(stop == 1){
                    console.log('u stoped')
                } else{
                    let filrects = rects.filter(function (rect, i, rects) {
                        return !rect.clicked
                    });
                    for (let i = 0; i < rects.length; i++) {


                        if (clickX <= filrects[i].x + 20 && clickX >= filrects[i].x && clickY <= filrects[i].y + 20 && clickY >= filrects[i].y) {
                            filrects[i].bye();
                            a++;
                            score.innerText = a
                        } else {
                            filrects[i].init();
                        }
                    }
                };
            }, 1000 / 60);



    };

let canvas = document.getElementById("canvas"),
    btnStart = document.getElementById("start"),
    btnStop = document.getElementById("stop"),
    ctx = canvas.getContext('2d'),
    onRect,
    score = document.getElementById("score"),
    a = 0,
    randomGen = function(min, max) {
        let num = min - 0.5 + Math.random() * (max - min + 1);
        num = Math.round(num);
        return num;
    },
    rects = [],
    clickX,
    clickY,
    stop = 0;


canvas.onclick = function(){

    clickX = event.pageX - 10;
    clickY = event.pageY - 30

};

btnStart.onclick = function(){
    pushRect();
    setInterval(function(){if(stop == 1){
        console.log('a')
    } else{pushRect()}

    }, 1000 * randomGen(1, 1))
    a = 0;
    stop = 0

};
btnStop.onclick = function(){
    console.log('az');
    stop = 1;
    rects = [];
    ctx.clearRect(0, 0, 9999, 9999);
    score.innerText = 0
}




randomGen(1000, 3000)





