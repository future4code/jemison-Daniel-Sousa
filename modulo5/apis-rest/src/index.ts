import express,{Request,Response} from 'express'

import cors from 'cors'


//------- CONFIG. INICIAIS EXPRESS ----------

const app = express()
app.use(express.json())
app.use(cors())


//--------------------EXERCICIO 01 --------------------
//a. Qual método HTTP você deve utilizar para isso?
// Método get, pois é necessario buscar as informçôes no banco de dados

//b. Como você indicaria a entidade que está sendo manipulada?
// A entidade seria - '/user'

//-------------------EXERCICIO 02--------------------



//--------------------EXERCICIO 03-------------------


//--------------------EXERCICIO 04-------------------





//------- CONFIG. INICIAIS EXPRESS PORTA ----------

app.listen(3003,()=>{
    console.log('Servidor rodando na porta 3003')
})