// ---- Interpletação de código -----

//Questão 01 - O que o código abaixo está fazendo? Qual o resultado impresso no console?
            /* let valor = 0
            for(let i = 0; i < 5; i++) {
            valor += i
            }
            console.log(valor) */

//R: Console imprime 10.

// Questão 02 - Leia o código abaixo:
            /*
            const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
            for (let numero of lista) {
            if (numero > 18) {
                    console.log(numero)
                }
            }*/

//RA: Console imprime todos os numeros maiores que 18. Ou seja, 19, 21, 23, 25, 27, 30.
//Rb: 

//Questão 03 - Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
            /* const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
            let quantidadeAtual = 0
            while(quantidadeAtual < quantidadeTotal){
            let linha = ""
            for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
                linha += "*"
            }
            console.log(linha)
            quantidadeAtual++
            }*/
 //R03: Console imprime 4 linhas cada uma com a quantidade de *. Ou seja, *, **, ***, ****           


//---- Escrita de codigo --------

//Questão 01

// let quantidadePet = Number(prompt("Quantos Pets você tem?"))

function saberNomePets(){
   if(quantidadePet === 0){
       console.log(`Que pena! Você deve adotar um Pet!`)
   } else {
        let nomePet = "";
        let nomesPet = [];
        while(nomePet < quantidadePet){
            let nomesTodoPets = prompt("Digite o nome de todos os seus Pets, um por um:")

            nomesPet.push(nomesTodoPets)

            nomePet++
        }
        console.log(`Estes é o(s) nome (s) do(s) seu(s) Pets: ${nomesPet}! Até mais` )
    }
}

// saberNomePets()


//Questão 02 - Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
const arrayOriginal = [1,10,15,26,59,3,4,56,58,68]

// a) Escreva um programa que imprime cada um dos valores do array original.

function imprimeArrayOriginal (){
   for( item of arrayOriginal){
       console.log(item)
   }
    
}
// imprimeArrayOriginal()

// b) Escreva um programa que imprime cada um dos valores do array original divididos por 10
function didiviArrayPor10(){
    for(item of arrayOriginal){
     const dividindoItem = item/10
     console.log(dividindoItem)
    }  
}

// didiviArrayPor10()




// c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array



// d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.




// E) e) Escreva um programa que imprima no console o maior e o menor números contidos no array original