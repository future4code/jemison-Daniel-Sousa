/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
//Parte logica do jogo

let jogadaUsuario = comprarCarta();
let jogadaUsuario2 = comprarCarta();
let valorDaJogadaUsuario = (jogadaUsuario.valor + jogadaUsuario2.valor) // soma as duas cartas do Usuario

let jogadaPc = comprarCarta();
let jogadaPc2 = comprarCarta();
let valorDaJogadaPc = (jogadaPc.valor + jogadaPc2.valor) // Soma as duas cartas do pc

let vencedor = valorDaJogadaUsuario > valorDaJogadaPc;
let empate = valorDaJogadaUsuario === valorDaJogadaPc;

function inicioJogo (){
   console.log("Boas vindas ao jogo de Blackjack!")
   
   if(confirm("Quer iniciar uma nova rodada?")) {
   console.log(`Usuário - cartas: ${jogadaUsuario.texto}, ${jogadaUsuario2.texto} - pontuação ${valorDaJogadaUsuario}` );
   console.log(`Computador - cartas: ${jogadaPc.texto}, ${jogadaPc2.texto} - pontuação ${valorDaJogadaPc}` );
   }  else{
      console.log("Fim de Jogo")
   }
}

// function resultado(){
//    if(vencedor === true){
//       console.log("O usuário ganhou!")
//    } if (vencedor === false) {
//       console.log("Computador ganhou")
//    } else (empate) 
//       console.log("Empate")
   
// }

inicioJogo()
// resultado()