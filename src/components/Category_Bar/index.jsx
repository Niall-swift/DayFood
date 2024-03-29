import { useContext, useEffect, useState } from "react";
/// import styled
import { Content, Button } from "./CategoriaStyled"
/// Clobal context 
import { ContextGlobal } from '../../contexts/auth'



export default function Categoria() {

	const { setIdcategory, api } = useContext(ContextGlobal);

	const [name, setName] = useState([])

/// listando lista de categoria
	useEffect(() => {
		async function listCategory() {
			try {
				const response = await api('/listcategory', {

				})
				setName(response.data)
			} catch (err) {
				console.log(err)
			}
		}
		listCategory()
	}, [])




	return (
		<Content>
			{name.map((item, index) => (
				<Button
					key={index}
					onClick={() => setIdcategory(item.id)}>
					{item.icon === '' ? '' : <img src={item.icon} alt="Icon da Categoria"/>}
					{item.name}
				</Button>
			))}
		</Content>
	)
}