// --- Exercícios de interpretação de código--

/* 
   let array
    console.log('a. ', array)
    R = Console imprime Underfined - Pois a variavel não  está atribuída

    array = null
    console.log('b. ', array)
    R = Console imprime Null  - Pois a variael é igual a null

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)
    R= Console imprime quantos elemtos tem no array

    let i = 0
    console.log('d. ', array[i])
    R= Console imprime 0. Pois é o valor de i  é 3. E esse mesmo valor é chamado no array, que tem posição 0

    array[i+1] = 19
    console.log('e. ', array)
    R = Console imprime 4. Pois, i tem posição 0, somado mais 1 é igual a 1, que tem posição 1(segundo elemento). Nesse caso, 19 assume a posição 1(segundo elemento)

    const valor = array[i+6]
    console.log('f. ', valor)
    R= Console imprime 9, que é o 7 elemento do array

*/

/* 2° Questão
    const frase = prompt("Digite uma frase")
    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

    R= Console imprime a frase digitada pelo usuario, com todos os caracteres em maiúsculo e troca dos os caracateres A(maiculo) em I(maisculo)
    R = SUBI NUM ÔNIBUS EM MIRROCOS
*/

 // Exercícios de escrita de código

 //Questão 01
 let nome = prompt("Digite seu nome:")
 let email = prompt("Digite seu email:")

 console.log(`seu nome é ${nome} e seu email é: ${email}`)*/

 //Questão 02

    const minhasComidas = ["Pizza", "Feijoada", "Baião de dois", "Macarronada", "Salada de frutas"]
    console.log(minhasComidas)
    console.log(`Essas são minhas comidas preferidas:
${minhasComidas[0]}
${minhasComidas[1]}
${minhasComidas[2]}
${minhasComidas[3]}
${minhasComidas[4]}`)

let comidaUsuario = prompt("Digite Sua comida preferida")
minhasComidas[1] = comidaUsuario
console.log(minhasComidas)

//Questão 3
 let listaDeTarefas = [] //podedia usar o null tambem 

 let primeiraTarefa = prompt("Digite a sua  primeira tarefa  de hoje:")
 let segundaTarefa = prompt("Digite a  sua segunda tarefa de hoje:")
 let terceiraTarefa = prompt("Digite a  sua Terceira tarefa de hoje:")

 listaDeTarefas = [primeiraTarefa, segundaTarefa , terceiraTarefa]

 console.log(listaDeTarefas)
 let tarefaRelizada = Number(prompt(`Qual tarefa você realizou
  0.${listaDeTarefas[0]}
  1.${listaDeTarefas[1]}
  2.${listaDeTarefas[2]}`))

 listaDeTarefas.splice(tarefaRelizada,1) // ira remover oque o usuario digitar
 console.log(listaDeTarefas) 
 
// Desafio
//Questão 1

let qualquerFrase = "Seu esforço será recompensado!"
let arrayFrases = [qualquerFrase.split(" ")] // No metodo split ("") retorna cada letra da frase - Usando apenas (" ") retorna apenas as palavras da frase!
console.log(arrayFrases)

//Questão 2

let nomesFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(`O indice da acabaxi é: ${nomesFrutas.indexOf("Abacaxi")+ 1} .`) // Já que os array o indece começa com o indeci 0, é necessario somar com 1 para ter o resultado esperado
console.log(`O tamanho da lista de Frutas é: ${nomesFrutas.length}`)




