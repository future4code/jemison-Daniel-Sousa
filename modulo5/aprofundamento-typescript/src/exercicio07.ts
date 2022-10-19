//Os pratos deste restaurante possuem  um nome, um custo, um valor de venda, e um array de ingredientes

type prato = {
    nome: string,
    custo: number,
    valorVenda: number,
    ingredientes: Array<string>
}

const produtosCadastrados:Array<prato> =[]

//a) Escreva uma função que permita cadastrar um produto. Salve os produtos em um array no escopo global.

function cadastrasProdutos(nome:string,custo:number,valorVenda:number,ingredientes:Array<string>){

    produtosCadastrados.push({nome, custo, valorVenda, ingredientes})
    return console.log(produtosCadastrados)
}
cadastrasProdutos("Feijoada", 10, 20, ["Feijão", "tomate","calabresa", "carne de sol"])
// cadastrasProdutos("Arooz", 30, 60, ["Arroz"])



//b) Escreva uma função que recebe um nome e devolve o valor do produto com este nome.

function buscaNome (nomeProduto:string){
    const filterNome = produtosCadastrados.filter((item)=>{
       return item.nome === nomeProduto? item.nome && item.valorVenda : `Não há nada`
    })

    return filterNome
}

console.log('--ISSO É A BUSCA--')
console.log(buscaNome("Arroz"))