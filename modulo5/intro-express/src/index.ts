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

//3- Crie um array de usuários para servir como base de dados da nossa API. 

const listaDeUsuarios:usuarios[] =[
    {
        id: 1,
        name: "Daniel",
        phone: '99-9873636373',
        email: "d@d",
        website: "dcom.br"
    },
    {
        id: 2,
        name: "Ivaldo",
        phone: '99-9873636373',
        email: "ival@gmail.com",
        website: "aldo.com.br"
    },
    {
        id: 3,
        name: "Andreane",
        phone: '99-9873636373',
        email: "d@ane",
        website: "ane.com.br"
    },

    {
        id: 4,
        name: "Danilson",
        phone: '99-987whjkwshjsw73',
        email: "d@nilson",
        website: "nilson.com.br"
    },
]











app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});