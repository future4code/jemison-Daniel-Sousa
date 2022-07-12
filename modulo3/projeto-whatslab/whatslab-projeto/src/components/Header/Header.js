import { Title, ContaninerPrincipal, Logo } from "./StyleHeader"
import logo_oficial from '../../img/logo_oficial.jpg'

export function Header(){
    return (
        <>
            <ContaninerPrincipal>

                <Logo src={logo_oficial}></Logo>
                <Title> Whats-Lab </Title>

            </ContaninerPrincipal>
           
        </>
    )


}