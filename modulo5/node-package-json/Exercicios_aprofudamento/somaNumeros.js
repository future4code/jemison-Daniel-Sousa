// Ainda nos exercícios 1 e 2 adicione verificações para garantir que os parâmetros passados estão corretos e informe ao usuário caso não estejam. Exemplo: "Esperava 2 parâmetros só recebi um."



const n1=Number(process.argv[2])
const n2=Number(process.argv[3])


function somar(n1,n2){
    if(n1 !== undefined || n2 !== undefined){
        return n1 + n2
    }else{
        return `Falta um elemento`
    }
    
}

console.log(somar(n1,n2))