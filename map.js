const numeros = [1,2,3,4,5]
const valoresDobrados = numeros.map(num => num * 2)

// console.log(valoresDobrados)
// console.log(numeros)

const usuarios = [
    {
        nome:"Geovanna",
        idade:52
    },
    {
        nome:"Lele",
        idade:40
    },
    {
        nome:"Ângela",
        idade:30
    }
]

const nomesUsuario = usuarios.map(usuario => usuario.nome)

console.log("Nomes de usuario",nomesUsuario)