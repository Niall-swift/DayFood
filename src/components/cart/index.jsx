import { useContext, useEffect } from 'react'
import {ContextGlobal} from '../../contexts/auth'
import CardDoProduto from '../CardDoProduto'
import './cart.css'
import CartItem from '../cartItem'
import formatCurrency from '../../utils/formatCurrency'
import { TbReceipt, TbReceiptOff, TbReceiptTax, TbReceiptRefund, TbReceipt2 } from 'react-icons/tb'


export default function Cart(){
    

    const {onCart, setOnCart, offcart, setOffcart, modal, setModal} = useContext(ContextGlobal)

    const total = onCart.reduce((accumulator, currentItem) => {
        const subtotal = currentItem.quantidades * currentItem.preco;
        return accumulator + subtotal;
    }, 0);

    useEffect(() => {
        document.body.style.overflowY = offcart ? 'hidden' : 'auto';
    }, [offcart]);


    return(
        <section className={`cart ${offcart ? 'cart-active': ''} `}>
            {onCart.length !== 0 ?
            <>
                <div className='cart-items'>
                {
                    onCart.map((onCart)=> <CartItem key={onCart.id} data={onCart}/>)
                }
                </div>


                <div className='cart-resume'>{formatCurrency(total, 'BRL')}
                <button 
                    type='button'
                    className='button-perdi-item'
                    onClick={() => setModal(!modal)}
                    >
                        <TbReceipt size={25}/>
                        Avançar
                    </button>
                </div>
            </>
            :
            <><div className='cart-items'><h1>Seu carrinho está vazio!</h1></div></>
            }
        </section>
    )
}
