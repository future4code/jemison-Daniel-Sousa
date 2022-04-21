// Exercícios de interpretação de código
/* Questão 1°
A - Console ira imprimir: 1° console imprime 10, 2° console imprime 50

B - A funcão ira execultar normalmente. Porém, não seria impresso no console. Visto que , console.log() é uma feramenta de desenvlvimento ela só é exexltada se passarmos a instrução.  

//Questão 2
A - a função recebe um parametro (texto), vale lembra que essa função pode ser considerada uma função anomina, pois seu some está associado a variavel const. 
A funcão ainda recebe em seu escopo o return com os metodos toLoerCase() e includes(), trasnformando o paramentro em caracteres minusculo e verificando se há um conjunto de caracteres nesse parametro, nesse caso o includes("cenoura") retornando um booleano

Logo depois, a função é chamada, em outra variavel (resposta) agora no escopo global, onde a mesma recebe como parametro outra variavel (textoDoUsuario), tambem definida no escopo global.
Logo depois, a resposta é exibida no console.log, (resposta)

B - I) True
    II) False
    III) false

*/

// Exercícios de escrita de código

// Questão 1 - A

/*function mensagemUsuario (){
    const fraseUsuario = "Eu sou Daniel, tenho 22 anos, moro em Timbiras-MA e sou estudante."
    return fraseUsuario
}
console.log(mensagemUsuario()) */

// Questão 1 -B
/*function informacoesUsuario (nome, idade, cidade, profissao) {
    const apresentacaoUsuario = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
    return apresentacaoUsuario
}
console.log(informacoesUsuario("Daniel", 25,  "Timbiras", "estudante")) */

// Questão 2
// A)
/*function somaDoisNumeros (num1, num2) {
    const soma = num1 + num2
    return soma
}
console.log(somaDoisNumeros())*/

// B)
/* function primeiroNumMaiorIgual (num1, num2){
    const verificaPrimeiroNum = num1 >= num2
    return verificaPrimeiroNum
}
console.log(primeiroNumMaiorIgual()) */

// C)

/*function verificaNumPar (num1) {
    const resultado = (num1% 2) === 0
    return resultado
}

console.log(verificaNumPar()) */

// D)

/*const usuarioFrase = prompt("Digite uma frase:")

 function fraseMaiuscula (texto) {
    return usuarioFrase.toUpperCase()
 }
 function tamanhoFrase (texto){
    return usuarioFrase.length;
 }
 console.log(`A sua frase ${usuarioFrase} , tem ${tamanhoFrase(usuarioFrase)} caracteres , e em em maiuscula é ${fraseMaiuscula(usuarioFrase)}`)*/

 // Questão 3

/*let primeiroNumero = Number(prompt("Digite um número qualquer"))
let segundoNumero = Number(prompt("Digite outro número qualquer:"))

function somarNumeros(num1=primeiroNumero, num2=segundoNumero){
    return num1+num2
}

function subtrairNumeros(num1=primeiroNumero, num2=segundoNumero){
    return num1-num2
}

function multiplicarNumeros(num1=primeiroNumero, num2=segundoNumero){
    return num1*num2
}

function dividirNumeros(num1=primeiroNumero, num2=segundoNumero){
    return (num1/num2)
}

const resultadoNumeros = (`Os numeros inseridos: ${primeiroNumero}, ${segundoNumero};
 Soma: ${somarNumeros()};
 Diferenca: ${subtrairNumeros()};
 Multiplicação: ${multiplicarNumeros()} ;
 Divisão: ${dividirNumeros()}
`)

console.log(resultadoNumeros) */