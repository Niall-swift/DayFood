//// icones
import {FaShoppingBasket} from 'react-icons/fa'
import {BiUserCircle, BiAddToQueue} from 'react-icons/bi'

import './CartButoon.css'
import {ContextGlobal} from '../../contexts/auth'
import { useContext } from 'react'
import { Link } from 'react-router-dom'



export default function CartButton(){

    const {user, onCart, offcart, setOffcart} = useContext(ContextGlobal);


    return(
        <>
        {user.adm === true ? 
        <button
        type="button"
        className="Cart__button"
        >
        <Link to='/Addprodutos'><BiAddToQueue/></Link>  
        </button>
        :
        <button
        type="button"
        className="Cart__button"
        onClick={ () => setOffcart(!offcart) }
        > 
        <FaShoppingBasket/>
            { onCart.length > 0 &&  <span className='cart__status'>{onCart.length}</span> }
        </button>
        }
    </>
    )
}