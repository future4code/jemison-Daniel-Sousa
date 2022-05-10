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
     const numberMaior = math.max(num1, num2);
     const numberMenor = Math.min(num1, num2);
     const numberMaiorDivisivelMenor = numberMaior/numberMenor === 0;
     const diferncaNumbers = (numberMaior - numberMenor) 

     return{
        maiorNumero: numberMaior,
        maiorDivisivelPorMenor: numberMaiorDivisivelMenor,
        diferenca: diferncaNumbers
        }

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}