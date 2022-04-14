// Exercícios de interpretação de código

//Questão 01

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 -// True

//Obs: aqui temos que levar em consideração o bool3, que segue o logica do OPERADOR NÃO 

/*let resultado = bool1 && bool2
console.log("a. ", resultado)
//R= Resultado: false
----------------------------------
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)
//R= Resultado: false
-----------------------------------
resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
//Obs: fazer primeiro o parentese e depois serguir a logica do OPERADOR NÂO
//R: Resultado: true
----------------------------------
console.log("d. ", typeof resultado)*/
//R= boolean - obs: operadores lógicos resultam em um typeof boolean

//Questão 02

/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)*/

//R = Há um erro ao exultar o programa. Pois, o prompt só retorna string´s. Por isso, sugiro fazer a seguinte alteração: console ira imprimir: primeiroNumero e segundoNumero de forma concatenada 

//Questão 3
//Por isso, sugiro fazer a seguinte alteração:
/*let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))*/

/*Sem essa pequena mudança o console irá concatenar ás variáveis e não somar.

-------------------------------------------------------*/

