//5. Escreva uma função chamada validarDados que aceita uma função de validação e um objeto como parâmetros. A função deve usar a função de validação para verificar se os dados no objeto atendem à condição especificada e retornar true se sim, ou false caso contrário. (Ex. nome possui mais de 3 caracteres, senha existe, etc)

const colors = require("colors")

let objeto = {
    nome: "Jefferson",
    idade: 19,
    cpf: "insira cpf",
    email: "email.com"
}

verificacao = (objeto) => {
    if(objeto.nome == "Jefferson"
    && objeto.email == "email.com"){
        return true
    } else {
        return false
    }
}

validarDados = (functi,objeto) => {
    if(functi(objeto)){
        return colors.bgGreen("Tá certo")
    }else{
        return colors.bgRed("Tá errado")
    }
}

console.log("Verificação: " + validarDados(verificacao,objeto))