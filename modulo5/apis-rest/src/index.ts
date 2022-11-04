import express,{Request,Response} from 'express'

import cors from 'cors'


//------- CONFIG. INICIAIS EXPRESS ----------

const app = express()
app.use(express.json())
app.use(cors())


//--------------------ENDPOINT 1 --------------------


//--------------------ENDPOINT 2 --------------------



//--------------------ENDPOINT 3 --------------------


//--------------------ENDPOINT 4 --------------------





//------- CONFIG. INICIAIS EXPRESS PORTA ----------

app.listen(3003,()=>{
    console.log('Servidor rodando na porta 3003')
})