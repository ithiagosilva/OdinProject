// https://stackoverflow.com/questions/23585320/how-to-move-object-with-keyboard-in-javascript
// https://www.w3schools.com/tags/ref_canvas.asp

// 37 = right
// 38 = up
// 39 = left
// 40 = down

let btnEsq = document.querySelector('#btn-esquerda')
let btnDir = document.querySelector('#btn-direita')
let btnCima = document.querySelector('#btn-cima')
let btnBaixo = document.querySelector('#btn-baixo')
let btn = document.querySelectorAll('.btn')

let body = document.querySelector('body')

let x = 150
let y = 75
let esq = 0
let baixo = 0
let valorParadaX = x;
let valorParadaY = y;

const c = document.getElementById('myCanvas');
const ctx = c.getContext("2d");
ctx.fillRect(x,y,esq,baixo);


let tecla;
body.addEventListener('keydown', (event) => {
    tecla = event.keyCode
    return move();
})

body.addEventListener('keyup', () => {
    return stop();
})

function move() {
    function right() {
        if (tecla === 37) {
            esq = esq - 1
            baixo = 1
            valorParadaX = x + esq
        } 
    }

    right();

    function up() {
        if (tecla === 38) {
            baixo = baixo -1
            esq = 1
            valorParadaY = y + baixo
        } 
    }

    up();

    function left() {
        if (tecla === 39) {
            esq = esq + 1
            baixo = 1
            valorParadaX = x + esq
        } 
    }

    left();

    function down() {
        if (tecla === 40) {
            baixo = baixo + 1
            esq = 1
            valorParadaY = y + baixo
        }

    }

    down();

    ctx.fillRect(x,y,esq,baixo);
}


function stop() {
    x = valorParadaX
    y = valorParadaY
    esq = 0
    baixo = 0
}

