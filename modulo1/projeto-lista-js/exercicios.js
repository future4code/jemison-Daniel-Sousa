// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = prompt("Digite a altura do retangulo:")
  let largura = prompt("Digite a largura do retangulo:")
  let area = altura*largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Digite o ano atual:")
  let anoDeNascimento = prompt("Digite seu ano de nascimento:")
  let calculoDeIdade = anoAtual - anoDeNascimento

  console.log(calculoDeIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso/(altura*altura)
  return(imc)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Digite seu nome:")
  let idade = prompt("Digite sua idade:")
  let email = prompt("Digite Seu email:")
  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let primeiraCor = prompt("Qual sua 1° cor favorita?")
  let segundaCor = prompt("Qual sua 2° cor favorita?")
  let terceiraCor = prompt("Qual sua 3° cor favorita")

  console.log([primeiraCor, segundaCor, terceiraCor])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return (string.toUpperCase());
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return(custo/valorIngresso)
  
}
// calculaAreaRetangulo(3,6) , nesse caso estaria passado os valores para os parametros.

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return(string1.length === string2.length)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return(array[0])
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
   return (array[array.length -1])
  // return array.pop() // poderia usar esse tambem
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  //numeroPrimeiro recebe o array na sua posição inical, com indice 0
  //numeroUltimo recebe o parametro array e array.length -1, nesse caso o objeto length diz o tamanho do array e subtrai um indice.

  let numeroPrimeiro = array[0]
  let numeroUltimo = array[array.length -1]
  array[0]= numeroUltimo
  array[array.length -1] = numeroPrimeiro

  return (array)
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  // Podemos usar a mesma logica da questao 8. Porem, nesse caso devemo usbistituir o length pelo ToUpperCase
  return(string1.toUpperCase() === string2.toUpperCase())
}

//Desafios --

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  // Preciso saber a idade do usuario:
  // Preciso sabr quanto anos tem o Rg:
  //
  let anoAtual = Number(prompt("Digite o ano atual:"));
  let anoNascimento = Number(prompt("Digite o seu ano de nascimento:"));
  let anoCarteira = Number(prompt("Digite o ano da emissão da carteira:"));

  const idade = anoAtual - anoNascimento; // para saber a idade do usuario
  const anosRg = anoAtual - anoCarteira;// para saber quantos  anos tem a carteira

  let idade20Anos = idade <= 20 && anosRg >= 5;
  let idade20E50Anos = idade <= 50 && idade > 20 && anosRg >= 10;
  let idade50Anos = idade > 50 && anosRg >= 15;

  console.log(idade20Anos|| idade20E50Anos|| idade50Anos)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  // preciso saber o resto da divisão entre 4 ,100 e 400;
  //Depois comparar o resultado se é igual ou diferente de 0;
  let anoDiv4 = ano % 4;
  let anoDiv100 = ano % 100;
  let anoDiv400 = ano % 400;

  return(anoDiv4===0 && anoDiv100 !== 0 || anoDiv400 ===0)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let maiorIdade = prompt("Você tem mais de 18 anos?")
  let ensinoMedio = prompt("Você possui ensino médio completo?")
  let horarioCurso = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  console.log(
    maiorIdade === "sim" && ensinoMedio === "sim" && horarioCurso === "sim"
  ) 
} // Usando o perador && o qualquer resposta diferente de sim, me dará um false. Pois retorna treu, se e somente se, os booleanos envolvidos forem true