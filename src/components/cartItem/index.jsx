import {MdRemoveShoppingCart} from 'react-icons/md'
import './cartitem.css'
import {ContextGlobal} from '../../contexts/auth'
import { useContext, useState } from 'react';


export default function CartItem({data}){
    const {id, nome, imagem, preco, quantidades} = data;

    const {onCart, setOnCart} = useContext(ContextGlobal)



    const removeitem = () =>{
        const updateditem = onCart.filter((item) => item.id !== id);
        setOnCart(updateditem)
    }


    return(
        <section className='cart-item'>
            
            <img 
            src={imagem}
            alt=''
            className='cart-img'
            />
            <div className='cart-item-content'>
                <h3 className='cart-item-titulo'>{nome}</h3>
                <h3 className='cart-item-titulo'>Quantidade:  {quantidades}</h3>
                <h3 className='cart-item-preco'>R${preco.replace(".", ",")}</h3>

                
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