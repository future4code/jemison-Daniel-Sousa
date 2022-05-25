
~~~
function calculaPrecoTotal(quantidade) {

    if(quantidade <12){
        const menosDuzia =quantidade * 1.30
        return menosDuzia
    }else{
        const duzia =quantidade * 1.00
        return duzia
    }
}
~~~