// ------Exercicios de Interpretação de códigos--------

// -------------------Quetão 01----------------------
//A) Será impresso, um novo array com todos os item dos obejtos. Ou seja, o nome e apelido


// -------------------Quetão 02----------------------
//A) Será impresso um novo array, com apenas os nomes dos usuarios. Pois a função usada,
//map, irá percorrer todo o array e retornará apenas a informaçõa que será passada, nesse caso o nome


// -------------------Quetão 03----------------------
//A) Será impresso, apenas os apelidos diferente de chijo. Nesse caso, a função usada é um Filter.
//Ela irá percorrer o array e filtrar apenas os item(apelidos) que são diferente da string Chijo

// ------Exercicios de Escrita de códigos--------

// -------------------Quetão 01----------------------
//  Dado o seguinte array de cachorrinhos que são clientes de um pet shop,
//  realize as  operações pedidas nos itens abaixo utilizando as funções 
//  de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//  1.A) Crie um novo array que contenha apenas o nome dos doguinhos

const nomePtes = pets.map(
    (nomePte) => {
        return nomePte.nome
    }
)
// console.log(nomePtes)

//  1.B) Crie um novo array apenas com os cachorros salsicha

            // 1° Filtrar apenas os objetos com nomes e raça dos dogs salsichas
            const racaSalsicha = pets.filter(
                (apenasSalsicha) =>{
                    return apenasSalsicha.raca === "Salsicha"
                }
            )
            //2° A partir do array racaSalsicha, criar um array apenas com os nomes dos dogs

            const nomeDoSalsicha = racaSalsicha.map(
                (nomeDog) =>{
                    return nomeDog.nome
                }
            )
            //  console.log(nomeDoSalsicha)

//1.C  Crie um novo array que possuirá mensagens para enviar para todos os
//  clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de 
//  desconto de 10% para tosar o/a [NOME]!"

            // 1° Filtrar apenas os objetos com nomes e raça dos dogs poodles
            const Poodles = pets.filter(
                (osPoodles) =>{
                    return osPoodles.raca === "Poodle"
                    
                }
            )

            //2° A partir do array com os nomes de cada poodle, e que envie a mensagem para eles!
            const nomePoodles = Poodles.map(
                (poodlesNomes) => {
                let nome = poodlesNomes.nome

                return `Você ganhou um cupom de desconto de 10% para tosar o/a ${nome}  !`
                }
            )

            // console.log(nomePoodles)

// -------------------Quetão 02----------------------

// Enuciado: Dado o seguinte array de produtos, realize as operações pedidas
//  nos itens abaixo utilizando as funções de array map e filter:
        const produtos = [
            { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
            { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
            { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
            { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
            { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
            { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
            { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
            { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
            { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
            { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
        ]

// B) Crie um novo array que contenha apenas o nome de cada item

        const nomeItens = produtos.map(
            (nomes) => {
                return nomes.nome
            }
        )

        // console.log(nomeItens)
// b) Crie um novo array que contenha um objeto com o nome e o preço de cada 
// item, aplicando 5% de desconto em todos eles

            const nomePreco = produtos.map(
                (precoeNome) =>{
                    return precoeNome.nome
                   

                    
                }
            )

            console.log(nomePreco)