let lista = [1,2,3,4,5]

let soma = 0
function somaPares (num) {
    if (num % 2  === 0) {
        soma = soma + num 
    }   
    return soma;
}

console.log(somaPares(lista.map(somaPares)))