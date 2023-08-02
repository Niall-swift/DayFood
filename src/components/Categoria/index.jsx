import { Content, Button} from "./CategoriaStyled"
/////icons/////////
import { LuIceCream2, LuSalad, LuWine} from 'react-icons/lu';
//////////////////
////// Clobal context //
import {ContextGlobal} from '../../contexts/auth'
import { useContext } from "react";
////////////////////////

export default function Categoria(){
    const {SetCategoria} = useContext(ContextGlobal);

    return(
        <Content>
            <Button onClick={() => SetCategoria("Refeição")}> <LuSalad/> Refeições </Button>
            <Button onClick={() => SetCategoria("Berbida")}> <LuWine/> Berbidas</Button>
            <Button onClick={() => SetCategoria("Sobremesa")}> <LuIceCream2/> Sobremesas</Button>
        </Content>
    )
}