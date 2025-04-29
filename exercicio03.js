//Crie uma função que recebe um parametro de nota e verifica em condicional se a nota for maior que 7, o aluno está aprovado, senão, o aluno está reprovado

function PassaAno(Nota){
    if(Nota >= 7){
        console.log("aprovado")
    }
    else{
        console.log("reprovado")
    }
}

PassaAno(8)