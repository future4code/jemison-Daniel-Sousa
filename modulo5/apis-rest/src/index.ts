import express,{Request,Response} from 'express'
import {users} from './data'
import {UserType} from "./types"
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
//a. Como você passou os parâmetros de type para a requisição? Por quê?
//Poderiamos antes de realizar a busca, restrigir o type através do ENUM, tendo assim apenas o tipos predefinidos . Dessa forma, os dados passariam a ser somente estes, e não qualquer string. Depois através do metodo ge, poderiamos buscar essa informação

//b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados? 
//Sim, podemos realizar uma verificação com if, realizando uma comparação entre os dados recebidos com o "valor" do type no banco de dados



//--------------------EXERCICIO 03-------------------
//Faça agora um endpoint de busca que encontre um usuário buscando por nome.

 app.get('/user', (req:Request, res:Response)=>{
        let codeError = 400

        try{

        }catch(error:any){

        }
 })

//--------------------EXERCICIO 04-------------------





//------- CONFIG. INICIAIS EXPRESS PORTA ----------

app.listen(3003,()=>{
    console.log('Servidor rodando na porta 3003')
})