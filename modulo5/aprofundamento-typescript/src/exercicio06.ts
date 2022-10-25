

enum classif{
    VERAO = 'VERÃO',
    INVERNO = 'INVERNO',
    BANHO = 'BANHO', 
    INITIMAS = 'INTIMAS'
}


type produtoItem = {
    nome: string,
    preco: number,
    classificacao:classif
}

const produtosIntimos:produtoItem[] = [
    {
        nome: "Kit Cueca",
        preco: 100,
        classificacao:classif.INITIMAS
    }
]
const produtosVerao:produtoItem[] = [
    {
        nome: "Protedor Solar",
        preco: 25.60,
        classificacao:classif.VERAO
    }
]

const produtosINVERNO:produtoItem[] = [
    {
        nome: "Casaco",
        preco: 115.90,
        classificacao:classif.INVERNO
    }
]

const produtosBanho:produtoItem[] = [
    {
        nome: "Bequini",
        preco: 115.90,
        classificacao:classif.BANHO
    }
 
]



function precoDeconto (produto:Array<produtoItem>){
        let descontoVerao:number ;
        let precoComDesconto:number ;
    for ( let item in produto){
        switch (produto[item].classificacao){
            case('VERÃO'):
                descontoVerao= (produto[item].preco *5)/100
                precoComDesconto= produto[item].preco - descontoVerao
                let novaListaProdutosVerao = {...produto[item], precoComDesconto}
                
                return novaListaProdutosVerao
                break
            case('INVERNO'):
                descontoVerao= (produto[item].preco *10)/100
                precoComDesconto= produto[item].preco - descontoVerao
                let novaListaProdutosInverno = {...produto[item], precoComDesconto}
                
                return novaListaProdutosInverno
                break
            case('BANHO'):
                descontoVerao= (produto[item].preco *10)/100
                precoComDesconto= produto[item].preco - descontoVerao
                let novaListaProdutosBanho = [{...produto[item], precoComDesconto}]
                
                return novaListaProdutosBanho
                break
            case('INTIMAS'):
                descontoVerao= (produto[item].preco *10)/100
                precoComDesconto= produto[item].preco - descontoVerao
                let novaListaProdutosIntima = [{...produto[item], precoComDesconto}]
                
                return novaListaProdutosIntima
                break
            default:
                
        } 
    }
}
console.log('----PRODUTOS DE BANHO------')
console.log(precoDeconto(produtosBanho))
console.log('----PRODUTOS DE INVERNO------')
console.log(precoDeconto(produtosINVERNO))
console.log('----PRODUTOS INTIMOS------')
console.log(precoDeconto(produtosIntimos))
console.log('----PRODUTOS DE VERÃO------')
console.log(precoDeconto(produtosVerao))