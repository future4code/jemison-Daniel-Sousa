// function obterEstatisticas(numeros) {

import { type } from "os"

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

//R= A entrada de dados, é um array

const array = [2, 3, 5, 79, 40]

function obterEstatisticas(numeros:Array<number>) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:{maior:number,menor:number,media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length 
    }

    return estatisticas
}
console.log(obterEstatisticas(array))

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas
//R= Temos mais uma variavel, um objeto chamado estatisticas, que guarda as propriedades, maior, menor e media, todas tipadas como number.

// c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

/*const amostraDeIdades = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros) => {...}
}*/

type amostraDeIdades ={
    numeros: Array<number>,
    obterEstatisticas:Function
}

