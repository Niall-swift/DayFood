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
import { Card } from '../Refeicoes/CardStyled'
import UseAPIClient from '../../api/api';
export default function CardDoProduto({ data }) {

	const api = UseAPIClient();

	const { onCart, setOnCart, user } = useContext(ContextGlobal)
	const [quantidade, setQuatidade] = useState(1)

	const { id, name, price, description, banner, order, active, category_id, Disponibilidade } = data;

	const add = (itemid) => {
		const item = onCart.find(item => item.id === id)
		if (item) {
			const Toast = Swal.mixin({
				toast: true,
				position: 'top',
				showConfirmButton: false,
				timer: 2000,
				timerProgressBar: true,
				width: '100%',
				background: '#00070A',
				color: '#fff',
				didOpen: (toast) => {
					toast.addEventListener('mouseenter', Swal.stopTimer)
					toast.addEventListener('mouseleave', Swal.resumeTimer)
				}
			})
			Toast.fire({
				icon: 'error',
				title: 'Você ja tem esse !'
			})
		} else {
			setOnCart([...onCart, itemid])

		}
	};


	function mais() {
		const limitDeItem = quantidade >= 15

		if (limitDeItem) {
			const Toast = Swal.mixin({
				toast: true,
				position: 'top',
				showConfirmButton: false,
				timer: 2000,
				timerProgressBar: true,
				width: '100%',
				background: '#00070A',
				color: '#fff',
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
		setQuatidade(quantidade + 1)
	}
	function menos() {
		setQuatidade(quantidade - 1)

		if (quantidade === 1) {
			setQuatidade(1)
		}
	}


	return (
		<>

			<Card>
				{Disponibilidade === 'esgotado' ? <Ribbon /> : <></>}
				{!user === false ?
					<button className='favorites'>
						<Link to={`/addproducts/${id}`}><FiEdit size={30} color='#000' /></Link>
					</button>
					:
					<button className='favorites' onClick={() =>({ nome: name, imagem: banner, id: id, user: user.uid })}>
						<MdFavoriteBorder size={30} color='#a52a2a' />
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
								<span> {quantidade < 10 ? `0${quantidade}` : quantidade}</span>
								<span onClick={mais}><IoMdAddCircle /></span>

								<button type='button' onClick={() => add({ quantidades: quantidade, nome: name, imagem: banner, preco: price, id: id })}> <IoBag size={25} /> </button>
							</>
						}
					</div>
				}

			</Card>
		</>
	)

}
