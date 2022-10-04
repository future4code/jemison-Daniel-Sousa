const listaDeClientes = [
	{ id: 1, nome: 'Fulano' },
	{ id: 2, nome: 'Ciclano' },
	{ id: 3, nome: 'Beltrano' },
	{ id: 4, nome: 'Fulana' }
]



const novoCliente = (id, nome) => {

   
        const novo = [...listaDeClientes, {id , nome}]
        return novo
   
}

// console.log(novoCliente(3, "Daniel"))

const geradorTabuada = (number) => {
   
    for(var count=1; count<=10 ; count++){
        return number * count
    }
     
      
     
}

console.log(geradorTabuada(2))