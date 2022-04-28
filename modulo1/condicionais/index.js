// --------Exercícios de interpretação de código -------------------

//Questão 01
//A: Console verifica se o numerá o par, ou seja, se o numero digita pelo usuario é tem resto 0.

//B: Para todos os numeros pares diferente de 0.

//C: Para todos os numeros impares diferente de 0.

//Questão 02
//A: O código verifica se atrás do switch se a resposta do usuario corresponde a alguns dos cases.

//B: Console iré imprimir: O preço da fruta  Maçã é R$ 2.25

//C: Console iria passar pelo condigo mais não iria imprir o resultado. Passando para o a resposta atribuída ao defaut. Ou seja, O preço da fruta  Pêra  é  R$  5.

//Questão 03
//A: A primeira linha está guardando a resposta do úsuario atribuída no prompt

//B: Console imprime undefined. Pois, não há uma condição para um número menor que 0.

//C: Sim! Pois, a variavel chamada não está no escopo global do codigo, mas no bloco do if.

// ----------------Exercícios de escrita de código----------------

//Questão 01

//A/B
//let idadeUsuario = Number(prompt("Digite sua idade:"))

//C
function podeDirigi(idadeUsuario){
    if (idadeUsuario >= 18){
        console.log("Parabêns! Você pode dirigir!")
    } else{
        console.log("Infelizmente! Você não pode dirigir!")
    }
}

// podeDirigi(idadeUsuario)

//Questão 02
// let turnoAluno = prompt("Digite o turno que você estuda, use: M (matutino) , V (Vespertino) ou N (Noturno)" )

function verificaTurmo (turnoAluno){
    if("M" === turnoAluno){
        return "Bom dia!";
    } else if("V" === turnoAluno){
        return "Boa tarde";
    } else "N" === turnoAluno
        return "Boa Noite!";
}

// console.log(verificaTurmo(turnoAluno))

//Questão 03
// let turnoAluno2 = prompt("Digite o turno que você estuda, use: M (matutino) , V (Vespertino) ou N (Noturno)" )

/*switch(turnoAluno2){
    case 'M':
        console.log("Bom dia")
        break
    case 'V':
        console.log("Boa Tarde")
        break
    case 'N':
        console.log("Boa noite")
        break
    default:
        console.log("Por favor, Digite apenas as iniciais de cada turma!")
    break
} */

//Questão 04

/* let qualGeneroFilme = prompt("Digite qual o gênero de filme que vão assistir?");
let precoIngresso = Number(prompt("Digite o preço do ingreço?"));

let generoFilme = qualGeneroFilme === "fantasia";

function confirmaFilme (qualGeneroFilme, precoIngresso){
    if (generoFilme && precoIngresso < 15){
        return 'Bom filme'
    } else{
        return 'Escolha outro filme :( '
    }
}

console.log(confirmaFilme(qualGeneroFilme,precoIngresso))*/


//Desafio

/* let qualGeneroFilme2 = prompt("Digite qual o gênero de filme que vão assistir?");
let precoIngresso2 = Number(prompt("Digite o preço do ingreço?"));
let escolhaLanche = prompt("Qual o lanchinho que você quer:")

let generoFilme2 = qualGeneroFilme2 === "fantasia";

function confirmaFilme (qualGeneroFilme2, precoIngresso2){
    if (generoFilme2 && precoIngresso2 < 15){
        console.log(`Bom filme! E aproveite seu ${escolhaLanche} !`)
    } else{
        console.log ('Escolha outro filme :( ')
    }
}

confirmaFilme(qualGeneroFilme2,precoIngresso2) */

//Questao 2

let usuarioNome = prompt("Digite o seu nome:");
let tipoJogo = prompt("Digite o tipo do jogo IN ou DO");
let etapaJogo = prompt("Digite a Etapa do jogo:  SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final");
let categoriaJogo = Number(prompt("Digite a gategoria: 1, 2, 3 ou 4"));
let quantidadeIngre = Number(prompt ("Digite a quantidade de ingressos:"))

