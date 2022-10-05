const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	},
    {
        nome: "Melancia"
    },
    {
        nome: "Manga"
    }
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	},

    {
		nome: "Laranja"
	},
    {
		nome: "Maça"
	},
    {
        nome: "Melancia"
    }
]

//1° Declarar uma função que recebe 2 arrays;
//2° Unificar os 2 arrays;
//3° Filtrar os itens dos arrays que se repetem;
//4° Novo array sem os itens repetidos

const geraItensUnicos = ( arr1 =[], arr2 =[]) =>{

    const unificarArray = arr1.concat(arr2) // metodo que unica todos as listas

    const filtragemArray = unificarArray.map(x => x.nome) // filtragem por nome

    const itensUnicos = [...new Set(filtragemArray)] // new Set serve para tirar valores repetidos de uma array

    return itensUnicos
}

console.log(geraItensUnicos(primeiraLista, segundaLista))