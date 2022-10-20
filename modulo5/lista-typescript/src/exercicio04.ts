enum setor {
    MARKETING = "marketing",
    FINANCEIRO = "financeiro",
    VENDAS = "vendas",
}

type colaborador ={
    nome: string,
    salario:number,
    setor: setor,
    presencial: boolean
}

const listaDeColaboradoes:colaborador[] = [
	{ nome: "Marcos", salario: 2500, setor: setor.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: setor.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: setor.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: setor.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: setor.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: setor.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: setor.MARKETING, presencial: true }
]

function filterColaborador (lista:Array<colaborador>){

    const colaboradorMarktingPresencial = lista.filter((item)=>{
        return item.setor === "marketing" && item.presencial === true
    })

    return colaboradorMarktingPresencial

}

console.log(filterColaborador(listaDeColaboradoes))
