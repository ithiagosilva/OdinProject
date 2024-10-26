// https://stackoverflow.com/questions/23585320/how-to-move-object-with-keyboard-in-javascript
// https://www.w3schools.com/tags/ref_canvas.asp

// 37 = right
// 38 = up
// 39 = left
// 40 = down
body = document.querySelector('body')

let x = 150
let y = 75
let esq = 0
let baixo = 0
let valorParadaX = x;
let valorParadaY = y;

const c = document.getElementById('myCanvas');
const ctx = c.getContext("2d");
ctx.fillRect(x,y,esq,baixo); // x, y, esq, baixo


let tecla;
body.addEventListener('keydown', (event) => {
    tecla = event.keyCode
    return move();
})

body.addEventListener('keyup', () => {
    x = valorParadaX
    y = valorParadaY
})


function move() {
    // Move Right
    if (tecla === 37) {
        esq = esq - 1
        baixo = 1
        valorParadaX = x + esq
    } 
    
    //Move UP
    if (tecla === 38) {
        baixo = baixo -1
        esq = 1
        valorParadaY = y + baixo
    } 
    
    // move left
    if (tecla === 39) {
        // x = x + baixo
        esq = esq + 1
        baixo = 1
        valorParadaX = x + esq
    } 
    
    //Move Down
    if (tecla === 40) {
        baixo = baixo + 1
        esq = 1
        valorParadaY = y + baixo
    }
    
    ctx.fillRect(x,y,esq,baixo); // x, y, esq, baixo
}
