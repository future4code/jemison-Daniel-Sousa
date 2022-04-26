// ----------Exercícios de interpretação de código

//Questão 01
/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])*/

// 1° Console.log = Exibirá: Matheus Nachtergaele . Pois é o primeiro elemento do do array da chave elenco
// 2° Console.log = Exibirá: Virginia Cavendish. Pois o console irá percorrer o codigo de obejto filme dentro da chave elenco, irá execultar o metodo length -1, assim irá mostrar todos elementos, mesmo o ultimo.
// 3° Console.log = Exibirá: canal: Telecine, horario: 21h . Pois, o console irá percorrer o obejto fime, e outro obejto transmissoesHoje e mostra o segundo onjeto do array de objetos.

// Questão 02

/* const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)*/

// 1° : Exibira todo o conteúdo do obejto cachoro
// 2° Console.log = Exibirá: o nome da todo um novo objeto com a alteração no nome: "Juba". Pois é const gato recebe o um novo objeto a partir da copida do objeto cachoro, usando nesse cado o spreed. No fim da copia, temos um novo obejto com as mesmas chaves, porém com o nome aleterado para "Juba"
// 3° Console.log = Exibira um novo obejto com a alteração no nome novamente, "Jubo". Pois, é criando novamente um novo obejto(tartaruga) a partir do objeto gato, usando o spreed e um metodo replaceAll para string, onde o mesmo faz a alteração da vogal a para a vogal o.


//Questão 03

/* function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura")) */

// 1° : Console exibirá False. Pois o console ira execultar a função que recebe como parametro o objeto e a chave(propriedade) do objeto.
// 2° : Undefined. Pois o console ira execultar a função que recebe como parametro o objeto e a chave(propriedade) do objeto. Porém, não vai encontar o chave "altura" dentro do objeto



 // --------------------Exercícios de escrita de código -------------------//

 //Questão 01

 /* const nomeApelidos ={
     nome: "Daniel Silva",
     apelidos: ["Nerd", "Danielzinho", "Lorinho"]
 }
 
 function imprirMensagem(nomeObjeto){
     console.log(
         `Eu Eu sou ${nomeObjeto.nome}, mas pode me chamar de: ${nomeObjeto.apelidos[0]}, ${nomeObjeto.apelidos[1]}, ${nomeObjeto.apelidos[2]} !`)
   
 }
 imprirMensagem(nomeApelidos)

const novaPesso = {...nomeApelidos, apelidos:["Denielzinho", "lorinho", "Nerd"]}

imprirMensagem(novaPesso) */

 
// Questão 02

//A

const primeiraPessoa ={
    nome: "Daniel Da Silva De Sousa",
    idade: 22 ,
    profissao: "Auxiliar Administrativo"
}
const segundaPessoa ={
    nome: "Andreane",
    idade: 21 ,
    profissao: "Recepcionista"
}

//B

function recebeObjetos(nomeObjeto02) {
    return [
        nomeObjeto02.nome,
        nomeObjeto02.nome.length,
        nomeObjeto02.idade,
        nomeObjeto02.profissao,
        nomeObjeto02.profissao.length
    ];
}

// console.log(recebeObjetos(segundaPessoa))

// Questão 03
//A
const carrinho = []

//B

const primeiraFrtura ={
    nome: "Maça",
    disponivel: true
}

const segundaFrtura ={
    nome: "Manga",
    disponivel: false
}

const terceiraFrtura ={
    nome: "Banana",
    disponivel: true
}

//C

function recebeFruta(fruta){
    return carrinho.push(fruta)
}

recebeFruta(primeiraFrtura);
recebeFruta(segundaFrtura);
recebeFruta(terceiraFrtura);

// console.log(carrinho)