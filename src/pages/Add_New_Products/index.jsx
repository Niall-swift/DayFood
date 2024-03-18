import { useContext, useEffect, useReducer, useState } from 'react'
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
import img from '../../assets/undraw_images_re_0kll.svg'
/// toast
import Swal from 'sweetalert2'







export default function Addprodutos(props) {
	const api = UseAPIClient();

	const navigate = useNavigate();


	const [imagem, setImagem] = useState(null)
	const [name, setName] = useState('')
	const [category, setCategory] = useState([])
	const [categorySelected, setCategorySelected] = useState(0)
	const [price, setPrice] = useState('')
	const [description, setDescription] = useState('')
	const [image, setImage] = useState(null)
	const [productData, setProductData] = useState([]);
	const { id } = useParams()

	/// cadastrando um produto
	async function RegisterProduct(e) {
		e.preventDefault()
		try {
			const data = new FormData();

			data.append('name', name)
			data.append('price', price)
			data.append('description', description)
			data.append('file', image)
			data.append('order', 1)
			data.append('active', true)
			data.append('category_id', category[categorySelected].id)

			await api.post('/add/product', data)

			// alert 
			Swal.fire({
				icon: 'success',
				title: `O produto ${name} foi cadastrado com sucesso`,
				html: '😁',
				position: 'center',
				showConfirmButton: false,
				timer: 3000,
				background: `var(--color-background)`,
				color: `var(--color-primary)`,
			})

			setName('')
			setPrice('')
			setImage(null)
			setImagem(null)
			setDescription('')

		} catch (err) {
			console.log(err)
		}
	}

	/// busnaco dados do produto
	useEffect(() => {
		const fetchProductData = async () => {
			try {
				const response = await api.get(`/product`, { id });
				const data = response.data;
				if (data.length > 0) {
					const foundProduct = data.find(product => product.id === id);
					if (foundProduct) {
						setProductData(foundProduct);
						setImagem(productData.banner)
						setName(productData.name)
						setPrice(productData.price)
						setDescription(productData.description)
					} else {
						console.error('Produto com ID não encontrado:', id);
					}
				} else {
					console.error('Resposta da API vazia ou nula.');
				}
			} catch (error) {
				console.error('Erro ao obter produtos:', error);
			}
		};

		fetchProductData();
	}, [category, id]);

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

	/// previw da imagem
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


					<h2 className='Tituo-page'>{id ? `Edita produto -> ${name}` : 'Adicionar  prato'}</h2>

					<Group_input>

						<form className='form-evia-prato'>

							<File_Upload>
								<span> <FiUpload size={35} /> </span>
								<input onChange={pegar_img}
									type='file'
									accept='image/*'
									placeholder='Selecione uma imagem'
								/>

								{id ? 
								<img src={imagem !== image ? `http://localhost:3333/files/${imagem}` : img} alt='Selecione uma imagem'/>
								:
								<img src={imagem !== image ? imagem : img} alt='Selecione uma imagem'/>
								}

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
									return (
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
							{id ? <button className='btn' onClick={categoria_select}>Salvar alterações</button> : <button className='btn' onClick={RegisterProduct}>Cardastra prato</button>}
						</form>
					</Group_input>

				</main>

			</Container>
		</>
	)
}