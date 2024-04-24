//6. Escreva uma função chamada gerarLista que aceita um número inteiro positivo n e uma função de geração como parâmetros. A função de geração deve receber um índice e retornar o valor correspondente da lista. A função gerarLista deve criar uma lista de tamanho n, preenchendo cada elemento com o resultado da função de geração.

const colors = require("colors")

numero = 100

geracaoDeNumeros = (number) => {
    for(let i = numero; i > 0 ;i--){
        console.log(i)
    }
}

gerarLista = (numeroInteiroPositivo,funcaoprapreencher) => {
   let listNova = []
    if (!listNova.push(funcaoprapreencher(numeroInteiroPositivo)) === undefined) { 
        return listNova
    }
}

console.log(gerarLista(numero,geracaoDeNumeros))