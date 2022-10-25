import { type } from "os";

//a) Copie o código acima para um arquivo .ts depois:

type post = {
    autor: string,
    texto: string,
}

const posts:post[]= [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
      },
      {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
      },
      {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
      },
      {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
      },
      {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
      }
        
]

//b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:
    /*function buscarPostsPorAutor(posts, autorInformado) {
        return posts.filter(
        (post) => {
            return post.autor === autorInformado
        }
        )
    }*/
    
//Quais são as entradas e saídas dessa função? Copie a função para o mesmo arquivo .ts do array de posts e faça a tipagem necessária.
//R = O primeiro parametro, é um array, o segundo o indie do array.

function buscarPostsPorAutor(posts:Array<post>, autorInformado:string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }
console.log(buscarPostsPorAutor(posts, "Severo Snape"))