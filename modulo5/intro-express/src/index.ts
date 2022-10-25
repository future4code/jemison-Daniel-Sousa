import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

//2 - Acesse a API do JSONPlaceholder e observe os endpoints que buscam usuários. No seu projeto, crie uma variável de tipo para representar esse recurso. Eles devem possuir as seguintes propriedades:

type usuarios = {
    id: number,
    name: string,
    phone:string,
    email: string,
    website:string
}












app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});