import {MdRemoveShoppingCart} from 'react-icons/md'
import './cartitem.css'
import {ContextGlobal} from '../../contexts/auth'
import { useContext, useState } from 'react';


export default function CartItem({data}){
    const {id, name, imagem, price, quantity} = data;

    const {cart, setCart} = useContext(ContextGlobal)



    const removeitem = () =>{
        const updateditem = cart.filter((item) => item.id !== id);
        setCart(updateditem)
    }


    return(
        <section className='cart-item'>
            
            <img 
            src={imagem}
            alt=''
            className='cart-img'
            />
            <div className='cart-item-content'>
                <h3 className='cart-item-titulo'>{name}</h3>
                <h3 className='cart-item-titulo'>Quantidade:  {quantity}</h3>
                <h3 className='cart-item-preco'>R${price}</h3>

                
                <button
                type='button'
                className='button-remove-item'
                onClick={removeitem}
                >
                    <MdRemoveShoppingCart/>
                    Remover
                </button>
                </div>
        </section>
    )
}