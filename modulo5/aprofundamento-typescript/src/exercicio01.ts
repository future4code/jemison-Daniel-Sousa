// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

import { type } from "os"

let minhaString:string = "Daniel"

// R = minhaString = 2, ao reatribuirmos um valor numerico, nos retorna um erro. Pois, o tipo da variavel é string, e sempre que reatribuirmos um novo tipo, nos retorna erro

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

// let meuNumero:number = 23;

let meuNumero: number | string //Para resolvermos esse problema, podemos usar o unio type, que restringe a variavel 


// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

const pessoa01: { name: string, idade: number, corFavorita:string} = {
    name: "Daniel",
    idade: 23,
    corFavorita: "Azul"

}

type pessoa = {
    name: string,
    idade: number,
    corFavorita: string
}
    