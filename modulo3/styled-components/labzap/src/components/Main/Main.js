import {ContainerPrincipal, Sidebar, CantainerMain} from './StyleMain'

export function Main() {

    return(
        <>
            <ContainerPrincipal>
                <Sidebar/>
                <CantainerMain> 
                    <label for="txtName" >Remetente: </label>
                    <input type="text" id="txtName"></input>
                    <label for="txtMsg" >Msg: </label>
                    <input type="text" id="txtMsg"></input>
                    <button>Enviar Mensagem</button>
                    
                    
                 </CantainerMain>
                 <Sidebar/>
            </ContainerPrincipal>
            
        </>

    )
}