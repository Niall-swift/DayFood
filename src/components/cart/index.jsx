import { useContext, useEffect } from 'react'
import {ContextGlobal} from '../../contexts/auth'
import './cart.css'
import {IoBag} from 'react-icons/io5'
import CartItem from '../cartItem'
import formatCurrency from '../../utils/formatCurrency'
import { TbReceipt, TbReceiptOff, TbReceiptTax, TbReceiptRefund, TbReceipt2 } from 'react-icons/tb'
///////////////////// import de styled//////////////////////////////
import {Cart_zero_item, Button_etapas} from './cartStyled'


export default function Cart(){
    

    const {cart, setCart, offcart, setOffcart, modal, setModal} = useContext(ContextGlobal)

    
    const total = cart.reduce((accumulator, currentItem) => {
        const subtotal = currentItem.quantity * currentItem.price;
        return accumulator + subtotal;
    }, 0);

    useEffect(() => {
        document.body.style.overflowY = offcart ? 'hidden' : 'auto';
    }, [offcart]);


    return(
        <section className={`cart ${offcart ? 'cart-active': ''} `}>

            <Button_etapas onClick={() => setOffcart(!offcart)} >
                <span>1</span>
                <h2>Carrinho</h2>
                <button>Fechar</button>
            </Button_etapas>

            {cart.length !== 0 ?
            <>
                <div className='cart-items'>
                {
                    cart.map((cart)=> <CartItem key={cart.id} data={cart}/>)
                }
                </div>


                <div className='cart-resume'>total: {formatCurrency(total, 'BRL')}
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
            <Cart_zero_item>
                <IoBag/>
                <h1>Seu carrinho está vazio.</h1>
            </Cart_zero_item>
            }
        </section>
    )
}
