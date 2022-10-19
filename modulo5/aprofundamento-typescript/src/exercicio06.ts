enum classif{
    VERAO = 'VERÃO',
    INVERSO = 'INVERSO',
    BANHO = 'BANHO', 
    INITIMAS = 'INTIMAS'
}


type roupa = {
    nome: string,
    preco: number,
    classificacao:classif
}

const listProdutos:roupa[] = [
    {
        nome: "Camista",
        preco: 20,
        classificacao:classif.VERAO
    },
    {
        nome: "Casaco",
        preco: 100,
        classificacao:classif.INVERSO
    },
    {
        nome: "Biquini",
        preco: 24.90,
        classificacao:classif.BANHO
    },
    {
        nome: "Cueca",
        preco: 24.90,
        classificacao:classif.INITIMAS
    },
]

function precoDeconto (produto:Array<roupa>){

    const desconto = produto.forEach((item)=>{
        switch(item.classificacao){
            case(VERAO):
                return (item.preco/15)*100
                break
            default:
        }      
    })

    return desconto
}

console.log(precoDeconto(listProdutos))