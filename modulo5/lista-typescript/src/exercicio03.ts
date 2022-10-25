//Filme {nome,anoLancamento, genero}
//Opcional: avalicao

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type filme ={
    nome:string,
    anoLancamento:number,
    genero:GENERO,
    avaliacao?:number
}


function detalheFilme (nome:string, anoLancamento:number, genero:GENERO, avaliacao?:number):filme{
    
   return {nome, anoLancamento, genero, avaliacao}
   
}

console.log(detalheFilme("Invasores", 2007, GENERO.ACAO))
console.log(detalheFilme("Homem-Aranha", 2020, GENERO.ACAO, 10))

