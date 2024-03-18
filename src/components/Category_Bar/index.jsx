import { Content, Button} from "./CategoriaStyled"
/////icons/////////
import { LuIceCream2, LuSalad, LuWine} from 'react-icons/lu';
//////////////////
////// Clobal context //
import {ContextGlobal} from '../../contexts/auth'
import { useContext, useEffect, useState } from "react";
////////////////////////


export default function Categoria(){

    const {setIdcategory,api} = useContext(ContextGlobal);

    const [name , setName] = useState([])

    console.log(name)
    useEffect(()=>{
        async function listCategory(){
            try{
                const response = await api('/listcategory',{
                    
                })
                setName(response.data)
            }catch(err){
                console.log(err)
            }
        }
        listCategory()
    },[])
    

    return(
        <Content>
            {name.map((item, index) => (
                <Button key={index}
                onClick={()=> setIdcategory(item.id)}
                >
                {item.icon === '' ? '' : <img src={item.icon}alt="Icon da Categoria"/>}
                {item.name} </Button>
            ))}
        </Content>
    )
}