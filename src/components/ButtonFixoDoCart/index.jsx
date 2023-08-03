import {Content} from './ButtonFixoStyled'
import {IoBag} from 'react-icons/io5'
import {ContextGlobal} from '../../contexts/auth'
import { useContext } from 'react'
import {motion} from 'framer-motion'
import {fadeInUp} from '../../utils/Animations'


export default function ButtonCartFixo(){
    const {onCart,setOffcart, offcart} = useContext(ContextGlobal)

    return(
        <>
        {onCart.length === 0 ?
        <></>
        :
        <motion.span {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1,}}>
        <Content onClick={ () => setOffcart(!offcart) }>
            <span>{onCart.length}</span>
            <IoBag size={30}/>
        </Content>
        </motion.span>
        }
        </>
    )
}