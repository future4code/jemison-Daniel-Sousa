// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function ordenaNumeros( a, b){
    return (a-b)
}
function retornaArrayOrdenado(array) {
   return array.sort(ordenaNumeros)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const numberPares = array.filter((item) => item % 2 ===0)
  return numberPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numberPares2 = array.filter((item) => item % 2 === 0 )
    const paresElevados2 = numberPares2.map((item) => item ** 2 )

    return paresElevados2
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  const numeroMaior = Math.max(...array)

  return numeroMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maior = Math.max(num1, num2);
  let menor = Math.min(num1, num2);

  let maiorDivisivelMeno = maior % menor === 0;
  let diferenca = maior - menor

   const impremeValores = {
      maiorNumero: maior ,
      maiorDivisivelPorMenor: maiorDivisivelMeno ,
      diferenca: diferenca
   }

  return impremeValores

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let pares= []

  for( let numeros of n){
    if(numeros % 2 === 0){
      pares.push(i)
    }
    return pares
  }

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoB === ladoC){
      return "Equilátero"
    } else if ((ladoA === ladoB)|| (ladoB === ladoC) || (ladoA === ladoC)){
        return"Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const arrayOrdenado = retornaArrayOrdenado(array);
  const segundoMenor = arrayOrdenado[1];
  const segundoMaior = arrayOrdenado[arrayOrdenado.length -2]

  return [ segundoMaior, segundoMenor]

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}
// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const nomePessoa = {
      ...pessoa, 
      nome : "ANÔNIMO"
  }

  return nomePessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let alturaMinina = 1.5;
  let idadeMaior14 =  14;
  let idadeMenor60 = 60

  const autorizadas = pessoas.filter(
    (pessoas) => {
      return (pessoas.altura >= alturaMinina && pessoas.idade > idadeMaior14 && pessoas.idade <idadeMenor60)
    })
    return autorizadas
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let alturaMinina = 1.5;
  let idadeMaior14 =  14;
  let idadeMenor60 = 60

  const naoAutorizadas = pessoas.filter(
    (pessoas) => {
      return !(pessoas.altura >= alturaMinina && pessoas.idade > idadeMaior14 && pessoas.idade <idadeMenor60)
    })
    return naoAutorizadas
}


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  const somaSaldo = 0;
  const saldoTotalAtualizado = 0;

  for(let i = 0; i< contas.length; i++){
    for(let soma = 0; soma < contas[i].contas.length; soma++){
      somaSaldo = + compras[soma];
      saldoTotal = contas[i].saldoTotal - somaSaldo;
      contas[i].saldoTotal = saldoTotalAtualizado;
      somaSaldo = 0


    }
    contas[i].compras =[]
  }
  return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
 
}


// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}