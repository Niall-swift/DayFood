import { ContextGlobal } from '../../contexts/auth'
import { Content } from './CardStyled'
import { useContext, useEffect, useReducer, useState } from 'react';
import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/Animations'
import CardDoProduto from '../Product_Card';

import UseAPIClient from '../../api/api';

import Load from '../load';
import NoResults from '../No_Results';

export default function Refeicoes() {

	const api = UseAPIClient()

	const { idcategory, setIdcategory, product, setProduct} = useContext(ContextGlobal)
	

	const [idproduct, setIdproduct] = useState('')
	const [load, setLoad] = useState(true)

	// -- listando produtos 
	useEffect(() => {
		setLoad(true)
		async function ListProduct(id, name, price, description, banner, order, active, category_id) {
			try {
				const response = await api.get('/product', {
					id,
					name,
					price,
					description,
					banner,
					order,
					active,
					category_id
				})
				setIdproduct(response.data)
				setLoad(false)

				//-- aqui eu estou verificando se o useState do produto esta vazio 
				// e se estiver eu colocor o ID de uma categoria no useState Idcategory
				// para depois eu fazer um filtro de produtos por categoria
				if (product.length === 0) {
					setProduct(response.data)
					setIdcategory(idproduct[1].category_id)
				}

				/// aqui eu uso o reduse para compara o item com o id da sua categoria para faze um filtro
				const foundProduct = idproduct.filter(product => product.category_id === idcategory);
				setProduct(foundProduct)

			} catch (err) {
			}
		}

		ListProduct()
	}, [idcategory, setIdcategory])


	// const reihtScroll = (e) =>{
	//     e.preventDefault();

	//     scroll.current.scrollLeft += 320
	// }

	// const leftScroll = (e) =>{
	//     e.preventDefault();

	//     scroll.current.scrollLeft -= 320
	// }

	return (
		<>
			{load ? <Load titulo='Buscando por Items'/> :
				<>
				{product.length === 0 ? <NoResults/> : 
				<motion.div {...fadeInUp}>
					<Content>
						{
							product.map((item, index) => <CardDoProduto key={index} data={item} />)
						}
					</Content>
				</motion.div>
			}
				</>
			}
		</>
	)
}
