//1°, declarar uma função com 2 parametros , sendo a primeira um number e a segunda uma strig;

//2° - declarar um const com o valor em celsius ;

//3° - termos condições (if, ou ternario) para buscarmos saber qual  para quem converter


const conversorTempatura = (celsius=Number, transfor= Number) =>{
    


    if(transfor === "F"){
        const transforma = (celsius * 9/5) + 32 
        return(`${celsius}° Celsius é equivalente a ${transforma}° Farenheit.`)
    } if (transfor === "k") {
        const transforma = celsius + 273.15 
        return(`${celsius}° Celsius é equivalente a ${transforma}° Kelvis.`)
    } else {
        return (`Dados incorretos`)
    }

}

console.log(conversorTempatura(40, "k"))