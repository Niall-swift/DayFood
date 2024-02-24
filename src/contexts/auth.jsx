import { useParams } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { destroyCookie, setCookie } from 'nookies';
import UseAPIClient from '../api/api';



export const ContextGlobal = createContext({});

function AutorizarClientes({ children }) {

	const api = UseAPIClient();

	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [detail, setDetail] = useState([])
	const [loading, setLoading] = useState(false);
	const [onCart, setOnCart] = useState([]);
	const [offcart, setOffcart] = useState(false)
	const [categoria, setCategoria] = useState('Refeição')
	const [modal, setModal] = useState(false)
	const [busNome, setBusNome] = useState('')



	/// delogando empresa
	function singOut() {
		try {
			destroyCookie(undefined, '@dayfood.token')
			navigate('/', { replace: true })
		} catch (err) {
			console.log(err)
		}
	}


	const { business_id } = useParams()


	//Cadastrar usuário
	async function signUp({ name, email, password, phone }) {

		try {
			const response = await api.post('/register', {
				name,
				email,
				password,
				phone,
				business_id
			})
			setLoading(true)
			console.log(response)
		} catch (err) {
			Swal.fire({
				icon: 'error',
				title: 'Unable to register user 😖',
				position: 'center',
				showConfirmButton: false,
				timer: 3000,
				background: `var(--color-background)`,
				color: `var(--color-primary)`,
			})
		}
	}


	// Fazendo login com o usuario
	async function lognin({ email, password }) {

		try {
			const response = await api.post('/session', {
				email,
				password
			})
			const { id, name, token } = response.data;
			setCookie(undefined, '@dayfood.token', token, {
				maxAge: 60 * 60 * 24 * 30, // Expira em 1 mes
				path: '/' // Quais caminhos terão acesso ao cookie
			})
			// Passar para a proximas requisiçoea o nosso token
			api.defaults.headers['Authorization'] = `Bearer ${token}`

			setUser({ id, name, email })
			setLoading(true)
			navigate('/Home')

		} catch (err) {
			Swal.fire({
				icon: 'error',
				title: 'E-mail or Password incorrect 🫷😖🫸',
				html: 'Check your email and password are correct',
				position: 'center',
				showConfirmButton: false,
				timer: 3000,
				background: `var(--color-background)`,
				color: `var(--color-primary)`,
			})
		}
	}


	// buscando detalhes da empresa
	useEffect(() => {
		async function SearchForDetails() {
			if (user !== null) {
				const response = await api.get('/me', {
				})
				setDetail(response.data)
			}
			return
		}
		SearchForDetails()
	}, [user])

	return (
		<ContextGlobal.Provider value={{
			users: !!user,
			user,
			detail,
			signUp,
			loading,
			lognin,
			onCart,
			setOnCart,
			offcart,
			setOffcart,
			categoria,
			setCategoria,
			modal,
			setModal,
			busNome,
			setBusNome,
			singOut


		}}>
			{children}
		</ContextGlobal.Provider>
	)

}
export default AutorizarClientes;