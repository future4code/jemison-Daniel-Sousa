

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
                    <select>
                        <option value="valor1" >Ensino Médio completo</option>
                        <option  value="valor2">Cursando Ensino Médioo</option>
                        <option value="valor3">Ensino Superior completo</option>
                        <option value="valor4" > Cursando Ensino Superior</option>
                    </select>
                </ol>
                
            </form>
        </>
    )
}