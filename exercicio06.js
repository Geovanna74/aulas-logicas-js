const produtos = [
    {
        nome:"Bola",
        precos:47,
        descricao:"Bola de volei listrada"
        
    },
    {
        nome:"lâmpada",
        precos:15,
        descricao:"lâmpada de led"
        
    },
    {
        nome:"Lapis",
        precos:3,
        descricao:"lapis de cor"
        
    }
]

const nomesDeProdutos = produtos.map(produto => produto.nome)

const numeroPreco = precos.map(preco => preco.nome)

// console.log("Exibi preco",numeroPreco)

// console.log("Produtos em exibidos",nomesDeProdutos)