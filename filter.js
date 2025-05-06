// const numeros = [1, 2, 3, 4, 5]

// const pares = numeros.filter(num => num % 2 === 0)

// console.log("números pares" , pares)

const produtos = [
    {
        nome: "Notebook",
        preco: 3000
    },
    {
        nome:"Mause",
        preco:50
    },
    {
        nome:"Mause",
        preco:78
    },
    {
        nome:"Monitor",
        preco:1200
    },
    {
        nome:"Teclado",
        preco:120
    }
]

// const produtosMaioresQueMil = produtos.filter(produto => produto.preco > 1000)
// console.log(produtosMaioresQueMil)

const todosOsMause = produtos.filter(produtos => produtos.nome == `${"Mause"}`)

console.log(todosOsMause)


// const Mauses = [
//     {
//     nome:"Mause01",
//     preco:20
//     },
//     {
//       nome:"Mause02",
//       preco:56
//     },
//     {
//         nome:"Mause03",
//         preco:71
//     }
// ]

// const mausesExe = Mauses.filter(mause => mause.preco)
// console.log(mausesExe)