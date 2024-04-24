//2. Escreva uma função chamada somaElementosPares que aceita um array de números como parâmetro e retorna a soma de todos os elementos pares do array.


let vetor = [1,2,3,4,5,6,7,8,9,10]

let soma = 0;

somaElementosPares = (Array) => {
    for(let i = 0 ; i < Array.length; i++){
        if(Array[i] % 2 == 0){
            soma += Array[i]
        }
    }
    return soma
}


console.log(somaElementosPares(vetor))

