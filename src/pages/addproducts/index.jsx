import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

/// compornetes
import { ContextGlobal } from '../../contexts/auth'

//// impor toutes
import { useNavigate } from 'react-router-dom'

/// css styles
import { Container, Group_input, File_Upload } from './Styled_Add_New_Product'
import { PageTransition } from '../../components/PageAnimation'

/// icone
import { IoIosArrowBack } from 'react-icons/io'
import { FiUpload } from 'react-icons/fi';

///-- API
import UseAPIClient from '../../api/api'


/// img
import img from '../../assets/undraw_breakfast_psiw.png'
import { SnapshotMetadata, addDoc, collection, getDocs, updateDoc, doc, getDoc } from 'firebase/firestore'

/// toast
import Swal from 'sweetalert2'







export default function Addprodutos() {
	const api = UseAPIClient();

	const navigate = useNavigate();


	const [imagem, setImagem] = useState(null)
	const [name, setName] = useState('')
	const [category, setCategory] = useState([])
	const [categorySelected, setCategorySelected] = useState(0)
	const [price, setPrice] = useState('')
	const [description, setDescription] = useState('')
	const [image, setImage] = useState(null)
	const [disponibilidade, setDisponibilidade] = useState('disponivel')
	const { Categoria, id } = useParams()







	///--- buscanto lista de cadegory
	useEffect((id, name) => {

		async function listCategory() {
			try {
				const response = await api.get('/listcategory', {
					id,
					name
				})
				setCategory(response.data)
			} catch (err) {
				console.log(err)
			}
		}
		listCategory()
	}, [])

	/// quando você seleciona uma nova categoaria na lista 
	function categoria_select(e) {
		setCategorySelected([e.target.value])
	}

	/// sistema de previw da imagem do prato
	function pegar_img(e) {
		if (e.target.files[0]) {
			const image = e.target.files[0];
			if (image.type === 'image/jpeg' || image.type === 'image/png') {
				setImage(image)
				setImagem(URL.createObjectURL(image))
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Esse tipo de imagem não e pemitido',
					timer: 1500,
					timerProgressBar: true,
				})
				setImagem(null)
				return;
			}
		}

	}

	return (
		<>
			<PageTransition />

			<Container>
				<main className='meio'>
					{/* esser e o botão de voltar */}
					<Link to='/Home'>
						<div className='btn-voltar'><button>
							<IoIosArrowBack size={35} />Voltar
						</button></div>
					</Link>


					<h2 className='Tituo-page'>{id ? `Edita prato -> ${name}` : 'Adicionar  prato'}</h2>

					<Group_input>

						<form className='form-evia-prato'>

							<File_Upload>

								<span> <FiUpload size={35} /> </span>
								<input onChange={pegar_img}
									type='file'
									accept='image/*'
									placeholder='Selecione uma imagem'
								/>
								<img src={imagem} />
							</File_Upload>



							<label htmlFor="patro" >Nome do prato</label>
							<input onChange={(e) => setName(e.target.value)}
								type='text'
								value={name}
								placeholder='Ex.: Salada Ceasar'
							/>

							<label>Preço</label>
							<input onChange={(e) => setPrice(e.target.value)}
								title='Preço'
								type='number'
								placeholder='R$ 00,00'
								value={price}
							/>

							<label>Categoria</label>
							<select value={categorySelected} onChange={categoria_select}>
								{category.map((item, index) => {
									return(
										<option key={item.id} value={index}>
											{item.name}
										</option>
									)
								})}
							</select>


							<label>descrição</label>
							<textarea onChange={(e) => setDescription(e.target.value)}
								type='text'
								placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
								value={description}
							/>
							{id ? <button className='btn' onClick={categoria_select}>Salvar alterações</button> : <button className='btn' onClick={categoria_select}>Cardastra prato</button>}
						</form>
					</Group_input>
				</main>

			</Container>
		</>
	)
}