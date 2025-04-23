// Crie uma variável que seja um array de objeto que tenha os seguintes pares: chave e valor

// nome da variável => users

// valores => um objeto com valores login, password, cursos, sendo cursos um array com valores 

//rederizar no console a seguintes frase com o primeiro user do array 'Meu login é ${login}, minha senha é ${password} e faço os cursos x e y'




const user = [
    {
        login:"Caroline",
        password:"1604",
        cursos:["games","design"]

    }
]

console.log(`Meu login é ${user[0].login}, minha senha é ${user[0].password} e faço os cursos ${user[0].cursos [0]} e ${user[0].cursos[1]}`)