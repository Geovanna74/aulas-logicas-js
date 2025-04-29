// function saudacao(){
//     console.log("Bom dia!")
// }

//arrow function com parametros

// const saudacao = (turno, nome = "Ângela")=>{
//     console.log(` ${turno} ${nome}`)
// }

// saudacao("Bom dia",  "Geovanna")
// saudacao("Boa noite")

// const soma =(x,y)=>{
//     return x+y
// }

// const soma =(x,y,z)=> x+y+z


// const resultadoDaSoma = soma(5,8,9)

// console.log(resultadoDaSoma)

//função retornando o cálculo de duas fuções

const soma =(x,y)=> x+y

const subtração = (x,y) => x-y

const multiplicacao =(x,y) => x*y

const divisao = (x,y) => x/y



// const calculo = (x,y,z,a)=>{
//     return soma(x,y) + multiplicacao(z,a)
// }

// const resultadoDocalculo = calculo(10,2,5,7)

// console.log("resultado do cálculo" ,  resultadoDocalculo)

// retornar o valor de várias fuções em um return dentro de um objeto

// const calculo = (x,y)=>{
//     return{
//         soma: soma(x,y),
//         subtração: subtração(x,y),
//         multiplicacao: multiplicacao(x,y),
//         divisao: divisao(x,y)
//     }
// }

// const resultadofinalDocalculo = calculo(20,10)

// console.log("resultado final", resultadoFinalDocalculo)

//escopo global e local(de bloco ou função)

const escopoGlobal = "Escopo Global"

function chamaEscopo(){
    const escopolocal = "Escopo Local"
    console.log(escopoGlobal)
}

console.log(escopolocal)



