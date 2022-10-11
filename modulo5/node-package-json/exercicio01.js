// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?

// R: Usamos o comando process.argv[2], usando a partir do indice 2, pois os demais indices trazem informações do script e onde está sendo rodando.


// B) && C)

const name = process.argv[2]; //porque void
const age = Number(process.argv[3]);



function printInformation (name, age){

    return `Olá, ${name}! Você tem ${age} anos`
}

console.log(printInformation(name, age))

// C)

function printNewInformation (name, age){
    const newAge = age + 7

    return `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${newAge} anos`
}

console.log(printNewInformation(name, age))



