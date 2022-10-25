import express, { request, response } from "express";
import cors from "cors";
import { posts } from "./data";



const app = express();
app.use(cors());
app.use(express.json());

//2 - Acesse a API do JSONPlaceholder e observe os endpoints que buscam usuários. No seu projeto, crie uma variável de tipo para representar esse recurso. Eles devem possuir as seguintes propriedades:

type users = {
    id: number,
    name: string,
    phone:string,
    email: string,
    website:string
}

//3- Crie um array de usuários para servir como base de dados da nossa API. 

const allUsers:users[] =[
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


//4 - Construa um endpoint que retorne os usuários criados no exercício anterior.

app.get("/users", (request, response) =>{
    return response.send(allUsers)
})

// 7 - Construa um endpoint que retorne os posts criados no exercício anterior.

app.get("/posts", (request, response) => {
    return response.send(posts)
})

// 8 - Construa um endpoint que retorne os posts de um usuário em particular.Use o JSONPlaceholder como exemplo para a construção da rota.

app.get("/posts/:id",(request, response)=>{
    const id = request.params.id;

    
    const postUser = posts.filter((post) => {
        return Number(id) === post.userId
    })

    response.send(postUser)
})

// 9 - Construa um endpoint para deletar um post.

app.delete("/posts/:id", (request, response) => {

    const id = request.params.id

    const postFiltered = posts.find((post)=>{
        return post.id === Number(id)
    })

    response.send(postFiltered)

})





app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});