//Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável. 

//1º) Devemos cria um union type, para termos as possiveis atribuições da variavel. Isso feito, para evitarmos de usar o tipo any, que nesse caso, poderia assumir qualquer valor. Porém, evitarei usar esse metodo

type BirthDate = number | string | boolean | undefined |null


function tipoVarialvel(variavel: BirthDate){


    switch(typeof variavel){
        case('string'):
            return `A variavel ${variavel}, é uma string`
            break
        case('number'):
            return `A variavel ${variavel}, é um numero`
            break
        case('boolean'):
            return `A variavel ${variavel}, é um boolean`
            break
        default:
            return `variavel indefinida`
    }

    
}
console.log(tipoVarialvel("DevFanatico"))
console.log(tipoVarialvel(7))
console.log(tipoVarialvel(true))
console.log(tipoVarialvel(undefined))