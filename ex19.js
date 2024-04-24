//4. Escreva uma função chamada filtrarArray que aceita uma função de filtro e um array como parâmetros. A função de filtro deve retornar true caso o elemento deva permanecer no array e false caso contrario. A função filtrarArray deve aplicar essa função a todos os elementos e retornar um novo array apenas com os elementos restantes


let vetor = [1,2,3,4,5,6,7,8,9,10]


funce = (elemento) => {
    return elemento % 2 == 0
}

filtrarArray = (func,array) => {
    let vetorFiltrado = []
    for(let i = 0; i < array.length;i++){
        if(func(array[i])){
            vetorFiltrado.push(array[i])
        }
    }
    return vetorFiltrado
}

console.log(filtrarArray(funce,vetor))