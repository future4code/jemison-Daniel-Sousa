

export function Etapa3(){

    return(
        <>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <form>
                <ol>
                    <li>Por que você não terminou um curso de graduação</li>
                    <input></input>

                    <li> Você fez algum curso complementar? </li>
                    <input type="text" list="faixa2"></input>
                    <datalist id="faixa2">
                        <option >Nenhum</option>
                        <option >Sim</option>
                    </datalist>
                </ol>
            </form>
        </>
    )
}