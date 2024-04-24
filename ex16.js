//1. Escreva uma função chamada encontrarMaiorElemento que aceita um array de números como parâmetro e retorna o maior elemento do array.


let vetor = [1,2,3,4,5,6,7,22,9,10,11,12,13,14,15,16,17,18]

encontrarMaiorElemento = (Array) => {
    let elementoMaior = Array[0]

    for(let i = 0 ; i < Array.length;i++){
        if(elementoMaior > (i+1)){
            elementoMaior = Array[i]
        }
    }
    return elementoMaior
}

console.log(encontrarMaiorElemento(vetor))