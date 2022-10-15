//Enunciado

//A seguinte função recebe dois números como parâmetro e retorna a diferença entre o maior número e o menor. Dessa forma, refatore a função para o Typescript.

/* function comparaDoisNumeros(num1, num2) {
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
  } */

const useNum1 = Number(process.argv[2]);
const useNum2 = Number(process.argv[3]);


function comparaDoisNumeros (num1:number, num2:number) {
    let maiorNumero;
    let menorNumero;

    if(num1 > num2){
        maiorNumero =num1;
        menorNumero = num2;
    }else{
        maiorNumero = num2;
        menorNumero = num1;
    }

    const diferenca = maiorNumero - menorNumero

    return diferenca


}

console.log(comparaDoisNumeros(useNum1, useNum2))