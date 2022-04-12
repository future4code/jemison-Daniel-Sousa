//Obs: Considere R = Resposta

/* 1- Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
        let a = 10
        let b = 10

        console.log(b)

        b = 5
        console.log(a, b)
R = O console irá imprimir (10,10), ou seja:
    console.log(a, b)
    b =10 e a=10 */

/*2 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
        let a = 10
        let b = 20
        c = a
        b = c
        a = b

        console.log(a, b, c)
    R = O console irá imprimir (10,10,10), ou seja;
        console.log(a, b, c)
        a=10 , b =10 e c= 10
    Considerando a variavel let, ela irá mudar os valores a partir do momento que atribuirmos os novos valores. Nesse caso, quando igualarmos os valores de cada uma das variaveis. */

/* 3 - Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.
    let p = prompt("Quantas horas você trabalha por dia?")
    let t = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${t/p} por hora`)

R = Nesse caso o Dev usou apenas letras para atribuir os nomes para as suas variaveis. Sugiro que mude os nomes de forma que o codigo fique mais legivel. Segue o modelo: 
    let horasTrabalhada = prompt("Quantas horas você trabalha por dia?")
    let ganhoDia = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${ganhoDia/horasTrabalhada} por hora`)

Nota: nesse caso o programa pretende calcular quanto o usuario ganha por hora. Fazendo a divisão de quanto ele ganha por dia e quantas horas ele trabalha por dia. */ 

// Exercico de Escrita de código

//Quetão 01

let nome 
let idade

console.log(typeof nome);
console.log(typeof idade);

//R: O navegador respondeu ao comando como UNDEFINED. Pois, não foi atriuido valor as variaeis

nome = prompt("Qual o seu nome?")
idade = prompt( "Qual sua idade?")

console.log(typeof nome);
console.log(typeof idade);

// R: O Navegador respondeu ao comando como object. Pois, foi atribuido ao o valor de string logo após as respostas.

console.log("Óla", nome , " você tem", idade , "anos", )

// Questão 2


let ler
let programar
let futebol

ler = prompt("Você gosta de ler?")
programar = prompt("Você gosta de programar?")
futebol = prompt("Você gosta de futebol?")

console.log("Voce gosta de ler?", ler)
console.log("Você gosta de programar?", programar)
console.log("Você gosta de fuebol?", futebol)

// Questão 3

let a = 10
let b = 25
let novoValor 

novoValor = a
a = b
b = novoValor

console.log("O novo valor de a é:", a);
console.log("O novo Valor de b é:", b);

//Desafio

let numero1
let numero2
//const soma = ( numero1 + numero2)

numero1 = prompt("Digite o primeiro numero:")
numero2 = prompt("Digite o Segundo numero:")

const x = (numero1 + numero2)
const y = (numero1*numero2)

console.log("A Soma do 1° e o 2° é:", x)
console.log("A multiplicacao do 1° e o 2° é:", y)



