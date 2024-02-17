//// icones
import {FaShoppingBasket} from 'react-icons/fa'
import {BiUserCircle, BiAddToQueue} from 'react-icons/bi'

import './CartButoon.css'
import {ContextGlobal} from '../../contexts/auth'
import { useContext } from 'react'
import { Link } from 'react-router-dom'



export default function CartButton(){

    const {user} = useContext(ContextGlobal);


    return(
        <>
        {user === true ? 
        <button
        type="button"
        className="Cart__button"
        >
        <Link to='/Addprodutos'><BiAddToQueue/></Link>
        new product
        </button>
        :
        <></>
        }
    </>
    )
}