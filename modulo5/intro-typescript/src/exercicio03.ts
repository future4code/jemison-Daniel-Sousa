//Enunciado
//A função recebe um ano e retorna um booleano (true ou false) que indica se o ano é bissexto. Um ano é bissexto de acordo com as seguintes condições:

// - **São bissextos** todos os anos múltiplos de 400**.**
// - **São bissextos** todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400**.**
// - **Não são bissextos** todos os demais anos.

/*function checaAnoBissexto(ano) {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }*/

const userAno = Number(process.argv[2]) ;

function checaAnoBissexto (ano:number){
    const cond1:boolean = ano % 400 === 0
    const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    
    return ` O ano: ${ano} é Bissexto? ${ cond1 ||  cond2 }`
}

console.log(checaAnoBissexto(userAno))