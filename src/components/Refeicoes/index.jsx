import {ContextGlobal} from '../../contexts/auth'
import {Content} from './CardStyled'
import { useContext, useEffect, useState, useRef } from 'react';
import {FiArrowRightCircle, FiArrowLeftCircle} from 'react-icons/fi';
import {motion} from 'framer-motion'
import {fadeInUp} from '../../utils/Animations'
import CardDoProduto from '../Product_Card';

import UseAPIClient from '../../api/api';

import Load from '../load';

export default function Refeicoes(){

    const api = UseAPIClient()

    const {categoria, busNome, user} = useContext(ContextGlobal)
    const [product, SetProduct] = useState ([])
    const [load, setLoad] = useState(true)

    
    useEffect((id,name,price,description,banner,order,active,category_id)=>{

        async function ListProduct(){

        try{
            const response = await api.get('/product',{
                id,
                name,
                price,
                description,
                banner,
                order,
                active,
                category_id
            })
            setLoad(false)
            SetProduct(response.data)
            console.log(response.data)
        }catch(err){
            console.log(err)
        }
    }

    ListProduct()
},[])



// const reihtScroll = (e) =>{
//     e.preventDefault();

//     scroll.current.scrollLeft += 320
// }

// const leftScroll = (e) =>{
//     e.preventDefault();
    
//     scroll.current.scrollLeft -= 320
// }


    return(
        (load ? <Load titulo={'Não há Item aqui'}/> :
        <motion.div {...fadeInUp}>
            <Content>
                {
                    product.map((item, index) => <CardDoProduto key={index} data={item}/>)
                }
            </Content> 
        </motion.div>
        )
    )
}
