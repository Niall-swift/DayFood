//// icons
import { MdFavoriteBorder, MdDeleteForever, MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md';
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
// urls gifs 
/// https://i.pinimg.com/originals/8b/de/d5/8bded5b8020dc9cf56c949cc8d05c7a8.gif
/// https://i.pinimg.com/originals/5f/93/49/5f934966a1d20bae1909c9ef2278bd4c.gif
/// https://i.pinimg.com/originals/1c/a5/ba/1ca5ba6ee4774c4a595b2a859bc7c8e3.gif
/// https://media.tenor.com/rI_0O_9AJ5sAAAAj/nyan-cat-poptart-cat.gif
/// https://i.pinimg.com/originals/f2/8d/2b/f28d2b5382516ada1de40f80cdabd79d.gif
/// https://media.tenor.com/BEBopBnhjVEAAAAj/peach-and-goma-peach-goma.gif
////////////////////////////////////

import { Card } from '../List_Product/CardStyled'
import UseAPIClient from '../../api/api';
export default function CardDoProduto({ data }) {

	const api = UseAPIClient();

	const { cart, setCart, user } = useContext(ContextGlobal)
	const [quantity, setQuantity] = useState(1)

	const { id, name, price, description, banner, order, active, category_id } = data;


	/// deletando produto
	async function handleDelete(id, name,) {
		const { value: accept } = await Swal.fire({
			icon: 'question',
			focusConfirm: false,
			title: `Você tem certeza que deseja deletar o produto (${name})`,
			showDenyButton: true,
			denyButtonText: `Não`,
			confirmButtonText: `Sim`,
			confirmButtonColor: 'var(--color-primary)',
			background: 'var(--color-background)',
			iconColor: '#7fcfff',
			color: 'var(--color-text)',
			backdrop: true,
		});
		if (accept) {
			await api.delete('delete/product', {
				params: {
					product_id: id
				}
			})
			Swal.fire({
				icon: 'success',
				title: `O produto ${name} foi Deletado cardápio`,
				html: '😁',
				position: 'center',
				showConfirmButton: false,
				timer: 1500,
				background: `var(--color-background)`,
				color: `var(--color-primary)`,
			});
			console.log(accept)
		} else {
			Swal.fire({
				icon: 'success',
				title: `O produto ${name} foi Salvor`,
				html: '😁',
				position: 'center',
				showConfirmButton: false,
				timer: 1500,
				background: `var(--color-background)`,
				color: `var(--color-primary)`,
			});
		}

	}

	/// alterando a disponibilidade do produto
	async function handleActive(e) {
		if (e === 'true') {
			const { value: accept } = await Swal.fire({
				icon: 'question',
				focusConfirm: false,
				title: `Você deixará o produto (${name}) disponível para os seus clientes`,
				showDenyButton: true,
				denyButtonText: `Não`,
				confirmButtonText: `Sim`,
				confirmButtonColor: 'var(--color-primary)',
				background: 'var(--color-background)',
				iconColor: 'var(--color-primary)',
				color: 'var(--color-text)',
				backdrop: true,
			});
			if (accept) {
				api.put('/active/product', {
					product_id: id,
					active: e
				})
				Swal.fire({
					showConfirmButton: false,
					timer: 1500,
					icon: 'success',
					background: 'var(--color-background)',
				})
			}
		} else {
			const { value: accept } = await Swal.fire({
				icon: 'warning',
				focusConfirm: false,
				title: `Essa opção deixará o produto (${name}) indisoinível para os clientes`,
				showDenyButton: true,
				denyButtonText: `Não`,
				confirmButtonText: `Sim`,
				confirmButtonColor: 'var(--color-primary)',
				background: 'var(--color-background)',
				iconColor: 'var(--color-primary)',
				color: 'var(--color-text)',
				backdrop: true,
			});
			if (accept) {
				api.put('/active/product', {
					product_id: id,
					active: e
				})
				Swal.fire({
					showConfirmButton: false,
					timer: 1500,
					icon: 'success',
					background: 'var(--color-background)',
				})
			}
		}
	}

	/// adicionando produto no carinho
	const handleAddInCart = (item) => {
		setCart([...cart, item])

		const checkExistentIncart = cart.find((item) => item.id === id);

		if (checkExistentIncart) {

			const newCart = cart.map((item) => {
				if (item.id === id) {

					const quantity = item.quantity + 1

					return { ...item, quantity }
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
				background: `var(--color-background)`,
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

				{active === 'false' ? <Ribbon /> : <></>}
				{!user === false ?
					<button className='favorites'>
						<Link to={`/addproducts/${id}`}><FiEdit color='#000' /></Link>
					</button>
					:
					<button className='favorites' onClick={() => ({ nome: name, imagem: banner, id: id, user: user.uid })}>
						<MdFavoriteBorder color='#a52a2a' />
					</button>
				}


				<img src={(`https://dayfood-back-end.onrender.com/files/${banner}`)} alt='img' />
				<h3>{name}</h3>
				<strong>R$ {formatCurrency(price, "BRL").replace(".", ",")}</strong>


				{!user === false ?
					<div>
						<button onClick={() => handleDelete(id, name)}> <MdDeleteForever /></button>
						{active === 'false' ? <button onClick={(e) => handleActive('true')}><MdOutlineVisibilityOff /></button> : <button onClick={(e) => handleActive('false')}><MdOutlineVisibility /></button>}
					</div>
					:
					<div>
						{active === 'false' ? <b>Não temos isso agora</b> :
							<>
								<span onClick={menos}><IoMdRemoveCircle /></span>
								<span> {quantity < 10 ? `0${quantity}` : quantity}</span>
								<span onClick={mais}><IoMdAddCircle /></span>

								<button onClick={() => handleAddInCart({ quantity: quantity, name: name, banner: banner, price: price, id: id })}> <IoBag size={25} /> </button>
							</>
						}
					</div>
				}
			</Card>
		</>
	)

}
