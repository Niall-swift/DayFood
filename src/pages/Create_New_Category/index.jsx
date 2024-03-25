import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// impor componetes
import { BackButton } from '../../components/Back_Button'
//--Swal
import Swal from 'sweetalert2'
//--styles
import { Content, Conteiner, Text, Form, SelecIcon, Button } from './newcategory-styles'
//--API
import UseAPIClient from '../../api/api'
// icons svg
import bacon from '../../utils/icons/bacon-solid.svg'; import bowl from '../../utils/icons/bowl-food-solid.svg'; import burger from '../../utils/icons/burger-solid.svg'; import pizza from '../../utils/icons/pizza-slice-solid.svg'
import utensils from '../../utils/icons/utensils-solid.svg'; import hotdog from '../../utils/icons/hotdog-solid.svg'; import martini from '../../utils/icons/martini-glass-citrus-solid.svg';
import ice from '../../utils/icons/ice-cream-solid.svg'; import drumstick from '../../utils/icons/drumstick-bite-solid.svg';
import cookie from '../../utils/icons/cookie-solid.svg'; import candy from '../../utils/icons/candy-cane-solid.svg';
import water from '../../utils/icons/bottle-water-solid.svg'; import pizzarepo from '../../utils/icons/pizza-svgrepo-com.svg';
import pinacola from '../../utils/icons/pina-colada-svgrepo-com.svg'; import breakfast from '../../utils/icons/breakfast-svgrepo-com.svg'; import muffin from '../../utils/icons/muffin-svgrepo-com.svg'; import beer from '../../utils/icons/beer-mug-svgrepo-com.svg';
import served from '../../utils/icons/served-plate-svgrepo-com.svg'; import beer4 from '../../utils/icons/canned-beer-4-svgrepo-com.svg';
import beer2 from '../../utils/icons/canned-beer-2-svgrepo-com.svg'; import vegetables from '../../utils/icons/vegetables-svgrepo-com.svg';
import soup from '../../utils/icons/soup-in-bowl-bowl-soup-hot-food-svgrepo-com.svg'; import can from '../../utils/icons/can-juice-2-svgrepo-com.svg'; import coffee from '../../utils/icons/coffee-love-svgrepo-com.svg';



export default function CreateNewCategory() {
	const api = UseAPIClient();
	const navigate = useNavigate();
	
	const [name, setName] = useState('')
	const [icon, setIcon] = useState('')

	const icons = [bacon, bowl, burger, pizza, utensils, hotdog, martini,
		ice, drumstick, cookie, candy, water, pizzarepo, pinacola, breakfast,
		muffin, beer, served, beer2, beer4, vegetables, soup, can, coffee
	]

	// quando um icon e selecionado 
	function handleSelectIcon(e) {
		setIcon(e.target.value)
	}

	/// cadastrando categoria
	async function RegisteCategory(e) {
		e.preventDefault()

		if (name !== '') {
			try {
				const response = await api.post('/category', {
					name,
					order: "",
					icon
				})
				Swal.fire({
					icon: 'success',
					title: `A categoria ${name} foi criadar com sucesso`,
					html: '😁',
					position: 'center',
					showConfirmButton: false,
					timer: 3000,
					background: `var(--color-background)`,
					color: `var(--color-primary)`,
				})
				setName('')
			} catch (Error) {
				console.log(Error)
				Swal.fire({
					icon: 'error',
					title: `já existe uma categoria com esse nome !, ou O servidor não responde`,
					html: '🙄',
					position: 'center',
					showConfirmButton: false,
					timer: 5000,
					background: `var(--color-background)`,
					color: `var(--color-primary)`,
				})
			}
		} else {
			Swal.fire({
				icon: 'error',
				title: `A categoria deve ter um nome`,
				html: '🙄',
				position: 'center',
				showConfirmButton: false,
				timer: 5000,
				background: `var(--color-background)`,
				color: `var(--color-primary)`,
			})
		}
	}


	return (
		<Content>
			<Conteiner>

				<BackButton/>

				<Text><h1>Criar nova categoria</h1></Text>

				<Form>
					<form>

						<SelecIcon>
							{icons.map((item, index) => {
								return (

									<div key={index}>
										<label key={index}>
											<input
												type='radio'
												value={item}
												placeholder='card-icon'
												onChange={handleSelectIcon}
												checked={icon === item}
											/>
											<img src={item} alt='' />
										</label>
										<h6>{item.split("/").pop().split("-")[0]}</h6>
									</div>

								)
							})}
						</SelecIcon>



						<label>Nome da categoria</label>

						<input
							onChange={((e) => setName(e.target.value))}
							value={name}
							type='text'
							placeholder='Ex: Pizza'
						/>
						<button onClick={RegisteCategory}>Criar</button>
					</form>
				</Form>

			</Conteiner>
		</Content>
	)
}