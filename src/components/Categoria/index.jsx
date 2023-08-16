import { Content, Button} from "./CategoriaStyled"
/////icons/////////
import { LuIceCream2, LuSalad, LuWine} from 'react-icons/lu';
//////////////////
////// Clobal context //
import {ContextGlobal} from '../../contexts/auth'
import { useContext } from "react";
////////////////////////

export default function Categoria(){
    const {setCategoria, categoria} = useContext(ContextGlobal);

    return(
        <Content>
            <Button onClick={() => setCategoria("Refeição")} selicd={categoria === 'Refeição'} > <LuSalad/> Refeições </Button>
            <Button onClick={() => setCategoria("Berbida")} selicd={categoria === 'Berbida'}  > <LuWine/> Berbidas</Button>
            <Button onClick={() => setCategoria("Sobremesa")} selicd={categoria === 'Sobremesa'}  > <LuIceCream2/> Sobremesas</Button>
        </Content>
    )
}