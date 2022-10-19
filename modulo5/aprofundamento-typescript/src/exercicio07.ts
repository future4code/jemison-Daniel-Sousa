//Os pratos deste restaurante possuem  um nome, um custo, um valor de venda, e um array de ingredientes

type prato = {
    nome: string,
    custo: number,
    valorVenda: number,
    ingredientes: Array<string>
}

const produtosCadastrados:Array<object> =[]

//a) Escreva uma função que permita cadastrar um produto. Salve os produtos em um array no escopo global.

function cadastrasProdutos(nome:string,custo:number,valorVenda:number,ingredientes:Array<string>){

   produtosCadastrados.push({nome, custo, valorVenda, ingredientes})
    
    return produtosCadastrados
}
console.log(cadastrasProdutos("Feijoada", 10, 20, ["Feijão, tomate,calabresa, carne de sol"]))

