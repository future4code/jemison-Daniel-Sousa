//1 - Tranformar o a string, em um array, onde cada letra da palavra, correnponde a uma posicão do array;
//2 - Verificar o tamanho do array;
//3 - Percorrer o array(for), multiplicar cada indice do array verificado, por ele mesmo, sempre com o declemento do indice anterior.

function fatorialString (palavra:string){
    const transformaEmArray:Array<string> = palavra.split('')

    let tamanhoArray:number = transformaEmArray.length
    
    let fatorial:number

    for (var i = tamanhoArray - 1; i >= 1; i--) {
       fatorial = (tamanhoArray*=i)
    }

    return fatorial
}

console.log(fatorialString("Dani"))