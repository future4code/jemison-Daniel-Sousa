// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.



const mathOperation = process.argv[2];
const number1 = Number(process.argv[3]);
const number2 = Number(process.argv[4]);


function printOperation (operation, number1, number2){

    switch(operation){
        case 'add':
            return `A soma de ${number1}+${number2}: ${number1 + number2}`
            break
        case 'sub':
            return `A subtração de ${number1}-${number2}: ${number1 - number2}`
            break
        case 'mult':
            return `A multiplicação de ${number1}x${number2}: ${number1 * number2}`
            break
        case 'div':
            return `A divisão de ${number1}/${number2}: ${number1/number2}`
            break
        default:
            return `Erro: Escolha : Para soma (add), Para subtração (sub), Para divisão (div), Para multiplicação (mult)`
    }

}

console.log(printOperation(mathOperation,number1,number2))