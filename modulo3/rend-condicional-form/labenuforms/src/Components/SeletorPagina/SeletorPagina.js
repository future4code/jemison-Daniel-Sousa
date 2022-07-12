import { Etapa1 } from "../Etapa1/Etapa1";
import { Etapa2 } from "../Etapa2/Etapa2";
import { Etapa3 } from "../Etapa3/Etapa3";
import { Final } from "../Final/Final";


export function SeletorPagina(props){

    return(
        <>
            <Etapa1></Etapa1>
            <Etapa2></Etapa2>
            <Etapa3></Etapa3>
            <Final></Final>
        </>
    )
}