
import cors from "cors";
import express, { request, response } from "express";
import {ProductList} from './data'
import {Product} from "./type"
import { AddressInfo } from "net";


const app = express();
app.use(cors());
app.use(express.json());

//1 - Crie uma nova API do zero e desenvolva um endpoint de teste com método GET no path “/test” que retorna a mensagem: “Servidor rodando na porta (colocar porta)!”. 

app.get("/test", (request,response) =>{
    response.send("Servidor rodando na porta")
})


//4- Desenvolva um endpoint que cria um novo produto e retorna a lista de produtos atualizada. A id do produto deve ser gerada automaticamente pela API.

app.post("/product/new", (request, response) =>{
    try{
        let name:string = request.body.name;
        const id:string = Date.now().toString(); //Para Formação do id 
        let price:number = request.body.price

        const productNew: Product = {
            id: id,
            name:name,
            price:price
        }

        const newProductList = [...ProductList, productNew]//Uso do spreed para adcionar uma novo porduto e gerar um nova lista
        response.send(newProductList)

        if (!name){
            //cofigurando erro
            const erro=new Error("O nome do produto não foi informado!");
            erro.name="dataProductNotFound";
            //lanço erro
            throw erro;
        }


    }catch{

    }

})













const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando na porta http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao iniciar o servidor.`);
    }
  });;