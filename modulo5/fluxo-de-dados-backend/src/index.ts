
import cors from "cors";
import express, { request, response } from "express";
import {ProductList} from './data'
import { AddressInfo } from "net";


const app = express();
app.use(cors());
app.use(express.json());

//1 - Crie uma nova API do zero e desenvolva um endpoint de teste com método GET no path “/test” que retorna a mensagem: “Servidor rodando na porta (colocar porta)!”. 

app.get("/test", (request,response) =>{
    response.send("Servidor rodando na porta")
})







const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando na porta http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao iniciar o servidor.`);
    }
  });;