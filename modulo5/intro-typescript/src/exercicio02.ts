//Enunciado
//A seguinte função em JavaScript pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores. Refatore a função para o Typescript.

/* function imprimeTresCoresFavoritas() {
    const cor1 = prompt("Insira sua primeira cor favorita")
    const cor2 = prompt("Insira sua segunda cor favorita")
    const cor3 = prompt("Insira sua terceira cor favorita")
    console.log([cor1, cor2, cor3])
 } */

const cores: string[] = [] // declarando um array de string fazio ;

let  cor01 = process.argv[2]
let  cor02 = process.argv[3]
let  cor03 = process.argv[4]

function imprimeTresCoresFavoritas (cor1:string, cor2:string, cor3:string) {
    const imprimeCores = [...cores, cor1, cor2, cor3] 
     
    return imprimeCores
}

console.log(imprimeTresCoresFavoritas(cor01,cor02, cor03))
