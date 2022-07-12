

export function Etapa1(){

    return(
        <>
            <h1>Etapa 1- Dados Gerais</h1>
            <form>
                <ol>
                    <li>Qual o seu nome</li>
                    <input></input>

                    <li>Qual sua idade:</li>
                    <input></input>

                    <li>Qual o seu e-mail</li>
                    <input></input>

                    <li>Qual sua escolaridade</li>
                    <input type="text" list="faixa"></input>
                    <datalist id="faixa">
                        <option >Ensino Médio completo</option>
                        <option >Cursando Ensino Médioo</option>
                        <option >Ensino Superior completo</option>
                        <option > Cursando Ensino Superior</option>
                    </datalist>
                </ol>
                
            </form>
        </>
    )
}