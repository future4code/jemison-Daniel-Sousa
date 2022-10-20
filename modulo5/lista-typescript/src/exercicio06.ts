

//1°) Passao fazer um type para cliente
//2°) Somar todos os debitos. Usando o reduce, para percorrer o array de debitos
//3°) realizar a operecao de saltoTotal - debitos
//4°) Iterar sobre o array, retornando apenas os cliente com salto negativo 

type clientes = {
    cliente: string,
    saldoTotal: number,
    debitos: Array<number>
}

const listaClientes:clientes[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function oferecerEmprestimo (list:Array<clientes>){
    let total:number  
    let soma:number
    let resultado: clientes[] =[];
    list.map((item)=>{
        total = item.debitos.reduce((acum, atual) => acum + atual, 0);
        soma = item.saldoTotal - total;
        item.saldoTotal = soma;
        item.debitos = [] 

        if(soma < 0){
            resultado.push(item)
        }
   })
    
   return resultado
   
}

console.log(oferecerEmprestimo(listaClientes))