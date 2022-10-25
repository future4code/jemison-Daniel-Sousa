//Enunciado
//Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato:
//"Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}"  

function apresentacao(nome:string, data:string){
    const formatacaoData = data.split('/',3)

    return `Ola me chamo ${nome}, nasci no dia ${formatacaoData[0]} do mês ${formatacaoData[1]} do ano de ${formatacaoData[2]}`

}
console.log(apresentacao("Daniel", "06/09/1999"))
