//// icons
import { MdFavoriteBorder, MdDeleteForever, MdOutlineLayersClear, MdOutlineLayers } from 'react-icons/md';
import { IoMdAddCircle, IoMdRemoveCircle, } from 'react-icons/io'
import { IoBag } from 'react-icons/io5'
import { FiEdit } from 'react-icons/fi';
//////
/// import reacts
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'

import { ContextGlobal } from '../../contexts/auth'

import Swal from 'sweetalert2'
import formatCurrency from '../../utils/formatCurrency';

import Ribbon from '../Ribbon';
////////////////////////////////////
import { Card } from '../List_Product/CardStyled'
import UseAPIClient from '../../api/api';
export default function CardDoProduto({ data }) {

	const api = UseAPIClient();

	const { cart, setCart, user } = useContext(ContextGlobal)
	const [quantity, setQuantity] = useState(1)

	const { id, name, price, description, banner, order, active, category_id, Disponibilidade } = data;


	

	const addItemInCart = (item) => {
		setCart([...cart, item])

		const checkExistentIncart = cart.find((item)=> item.id === id);

		if(checkExistentIncart){

			const newCart = cart.map((item)=>{
				if(item.id === id){

					const quantity = item.quantity + 1
				
					return {...item, quantity}
				}
				return item
			})
			setCart(newCart)
		}
	};





	function mais() {
		const limitDeItem = quantity >= 15

		if (limitDeItem) {
			const Toast = Swal.mixin({
				toast: true,
				position: 'top',
				showConfirmButton: false,
				timer: 2000,
				timerProgressBar: true,
				width: '100%',
				background: `var(--color-secondary)`,
				color: `var(--color-primary)`,
				didOpen: (toast) => {
					toast.addEventListener('mouseenter', Swal.stopTimer)
					toast.addEventListener('mouseleave', Swal.resumeTimer)
				}
			})
			Toast.fire({
				icon: 'error',
				title: 'Você está ultrapassando o limite de item, e isso não e bom'
			})
			return
		}
		setQuantity(quantity + 1)
	}
	function menos() {
		setQuantity(quantity - 1)

		if (quantity === 1) {
			setQuantity(1)
		}
	}


return (
	<>

	<Card>
			{Disponibilidade === 'esgotado' ? <Ribbon /> : <></>}
			{!user === false ?
					<button className='favorites'>
						<Link to={`/addproducts/${id}`}><FiEdit color='#000' /></Link>
					</button>
					:
					<button className='favorites' onClick={() => ({ nome: name, imagem: banner, id: id, user: user.uid })}>
						<MdFavoriteBorder color='#a52a2a' />
					</button>
				}


				<img src={(`http://localhost:3333/files/${banner}`)} alt='img' />

				<h3>{name}</h3>

				<p>{ }</p>
				<strong>R$ {formatCurrency(price, "BRL").replace(".", ",")}</strong>

				{!user === false ?
					<div>
						<button type='button'> <MdDeleteForever /></button>
						{Disponibilidade === 'esgotado' ? <button type='button'> <MdOutlineLayers /></button> : <button type='button'> < MdOutlineLayersClear /></button>}
					</div>
					:
					<div>
						{Disponibilidade === 'esgotado' ? <b>Não temos isso agora</b> :
							<>
								<span onClick={menos}><IoMdRemoveCircle /></span>
								<span> {quantity < 10 ? `0${quantity}` : quantity}</span>
								<span onClick={mais}><IoMdAddCircle /></span>

								<button type='button' onClick={() => addItemInCart({ quantity: quantity, name: name, imagem: banner, price: price, id: id })}> <IoBag size={25} /> </button>
							</>
						}
					</div>
				}
			</Card>
		</>
	)

}
