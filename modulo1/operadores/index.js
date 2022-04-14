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
//Exercicio de escrita
//Questão 01
let idade = Number(prompt("Digite sua idade:"))
let idadeAmige = Number(prompt("Digite a idade do seu melhor amigo(a):"))

let maiorIdade = idade > idadeAmige
let diferecaIdade = idade - idadeAmige
console.log("Sua idade é maior do que a do seu melhor amigo?", maiorIdade)

console.log("A diferença entre suas idades é de:", diferecaIdade , "anos de idade")

//Questão 02

let numeroPAr = Number(prompt("Digite um número par:"))

let divisao = numeroPAr % 2
console.log(divisao)

//Toda operação com numero par irá da resto 0
// Quando efetuamos a divisão por qualquer número impar temos como resultado 1. Isso acontece porque o número 2 é um número primo.

//Questão 3

let idade2 = Number(prompt("Digite sua Idade:"))

let idadeMeses = idade2*12
let idadesDias = idade2*365
let idadeHoras = idade2*(365*24)

console.log(" Você tem:", idade , "anos." + " Sua idade em meses é:", idadeMeses , " meses. Em dias:", idadesDias , "dias. Em horas", idadeHoras , "horas.")

//Quetão 4

let numero1 = Number(prompt("Digite o 1° numero:"))
let numero2 = Number(prompt("Digite o 2° numero:"))

let numeroMaior = numero1 > numero2
let numeroIgual = numero1 === numero2
let PrimeiroNumeroDivisao = (numero1%numero2) === 0
let SegundoNumeroDivisao = (numero2%numero1) === 0

console.log("O primeiro numero é maior que segundo?", numeroMaior)
console.log("O primeiro numero é igual ao segundo?", numeroIgual)
console.log("O primeiro numero é divisível pelo segundo?", PrimeiroNumeroDivisao)
console.log("O segundo numero é divisível pelo primeiro?", SegundoNumeroDivisao)


//Desafio
//Questão 01

let fahrenheit = 77
let celsius1 = 80
let celsius2 = 30


let temperatura = Number(prompt("Digite a Temperatura em graus Celsius:"))

let transFahrenheitParaKelvin = (fahrenheit - 32) * (5/9) + 273.15
let transCelsiusParaFarenheit1 = celsius1*(9/5) + 32
let transCelsiusParaKelvin = celsius2 + 273.15
let transCelsiusParaFarenheit2 = celsius2*(9/5) + 32

console.log(transCelsiusParaKelvin, "K")
console.log(transCelsiusParaFarenheit1 , "°F")
console.log(transCelsiusParaKelvin , "K")
console.log(transCelsiusParaKelvin , "°F")

//Questão 02

let resitenciaQuilowats = 280
const quilowatsHora = 0.05

// //Letra A e B

let valorPagar = resitenciaQuilowats*quilowatsHora

// //Desconto - Letra B
let desconto = (valorPagar*15)/100
let valorDesconto = valorPagar - desconto


console.log("Você consumiu", resitenciaQuilowats, "Quilowatts. Valor a ser pago:", valorPagar , "Com o desconto de 15% sua divida fica em apenas:", valorDesconto)

// Questão 03

// Tabela de medidas

//  Letra A
let libra = 20
let libraParaKl = (1/2.205)
let resultado1 = libraParaKl*libra

console.log("20lb equivalem a", resultado1 , "kg")

//  Letra B
let onca = 10.5
let oncaParaKl = (1/3.527)
let resultado2 = oncaParaKl*onca

console.log("10.5oz equivalem a", resultado2 , "kg")

//  Letra C

let milha = 100
let milhaParaMetro = milha*1609
let resultado3 = milhaParaMetro

console.log("100mi equivalem a" , resultado3 , "m")

//  Letra C

let pes = 50
let pesParaMetro = (1/3.281)

let resultado4 = pes/pesParaMetro

console.log("50ft equivalem a", resultado4,  "m")

//  Letra D

let galao = 103.56
let galaoParaLitros = galao*379

let resultado5 = galaoParaLitros

console.log("103.56gal equivalem a", resultado5 , "l")

//  Letra E

let xicara = 450
let xicaraParaLitro = 0.24
let resultado6 = xicara*xicaraParaLitro

console.log("450 xic equivalem a", resultado6, "l")

//  Letra F

let milha2 = Number(prompt("Digite a quantidade de milhas:"))

let milhaParaMetro2 = milha2*1609
let resultadoMilha = milhaParaMetro2

console.log(milha2, "milhas. Equivalente a", resultadoMilha , " em  metros")


