// VAR DOS BOTOES NUMÉRICOS
for (let i = 0; i < 10; i++){
    window['btn'+i] = document.querySelector(`.btn${i}`)
}

//DEMAIS VÁRIAVEIS
let btnSoma = document.querySelector('.soma')
let btnSub = document.querySelector('.sub')
let btnMult = document.querySelector('.mult')
let btnDivisao = document.querySelector('.divisao')
let btnIgual = document.querySelector('.igual')
let del = document.querySelector('.del')
let output = document.querySelector('.output')
let btnPonto = document.querySelector('.ponto') 
let a = 0;
let b = 0;
let operador;

// ADICIONA PONTO FLUTUANTE 
btnPonto.addEventListener('click', () => {
    if (output.textContent.includes('.') == false && output.textContent !== '') {
        output.textContent = output.textContent + btnPonto.textContent
    }
})

// SAIDA DO NÚMERO NA TELA
btn1.addEventListener('click', () => {
    output.textContent = output.textContent + btn1.textContent
})

btn2.addEventListener('click', () => {
    output.textContent = output.textContent + btn2.textContent
})

btn3.addEventListener('click', () => {
    output.textContent = output.textContent + btn3.textContent
})

btn4.addEventListener('click', () => {
    output.textContent = output.textContent + btn4.textContent
})

btn5.addEventListener('click', () => {
    output.textContent = output.textContent + btn5.textContent
})

btn6.addEventListener('click', () => {
    output.textContent = output.textContent + btn6.textContent
})

btn7.addEventListener('click', () => {
    output.textContent = output.textContent + btn7.textContent
})

btn8.addEventListener('click', () => {
    output.textContent = output.textContent + btn8.textContent
})

btn9.addEventListener('click', () => {
    output.textContent = output.textContent + btn9.textContent
})

btn0.addEventListener('click', () => {
    output.textContent = output.textContent + btn0.textContent
})

// RESETA A CALCULADORA
del.addEventListener('click', limparTela)



// OPERAÇÕES
btnSoma.addEventListener('click', () => {
    a = Number(output.textContent) 
    operador = '+'
    output.textContent = '';

})

btnSub.addEventListener('click', () => {
    a = Number(output.textContent) 
    operador = '-'
    output.textContent = '';

})

btnMult.addEventListener('click', () => {
    a = Number(output.textContent) 
    operador = 'x'
    output.textContent = '';

})

btnDivisao.addEventListener('click', () => {
    a = Number(output.textContent) 
    operador = '/'
    output.textContent = '';

})



// LÓGICA PARA MOSTRAR O RESULTADO
btnIgual.addEventListener('click', () => {
    b = Number(output.textContent)
    if (operador == '+') {
        somar(a,b);
    } else if (operador == '-') {
        subtrair(a,b);
    } else if (operador == 'x') {
        multiplicar(a,b);
    } else if (operador == '/') {
        dividir(a,b);
    }
})


//FUNÇÕES DA CALCULADORA
function somar(a,b) {
    let soma = a + b;
    output.textContent = soma;
}
function subtrair(a,b) {
    let sub = a - b;
    output.textContent = sub;
}
function multiplicar(a,b) {
    let mult = a * b
    output.textContent = mult;
}
function dividir(a,b) {
    let divdir = a / b;
    output.textContent = divdir;
}

function limparTela() {
    a = 0;
    b = 0;
    output.textContent = '';
}

