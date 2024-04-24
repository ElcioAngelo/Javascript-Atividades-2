//3. Escreva uma função chamada mapearArray que aceita uma função e um array como parâmetros. A função mapearArray deve aplicar a função recebida a cada elemento do array e retornar um novo array com os elementos resultantes.

let vetor = [20,20,20,20,20,20,20,20,20]
let vetor2 = [30,30,30,30,30,30,30,30,30]

funcaum = (elemento) =>{
    return elemento / 2
}

mapearArray = (funce,Array) => {
    let novoArray = []
    for(let i = 0 ; i < Array.length;i++){
        novoArray.push(funce(Array[i]))
    }
    return novoArray
}

console.log("Novo vetor: " + mapearArray(funcaum,vetor2))