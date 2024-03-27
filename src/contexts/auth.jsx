
import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import UseAPIClient from '../api/api';




export const ContextGlobal = createContext({});

function AutorizarClientes({ children }) {

	const api = UseAPIClient();

	const navigate = useNavigate();
	const [user, setUser] = useState('');
	const [loading, setLoading] = useState(false);
	const [cart, setCart] = useState([]);
	const [offcart, setOffcart] = useState(false)
	const [idcategory, setIdcategory] = useState('')
	const [modal, setModal] = useState(false)
	const [busNome, setBusNome] = useState('')
	const [product, setProduct] = useState([])





	// Função para fazer logout do usuário
	function logOut() {
		// Remover o token do cookie
		destroyCookie(undefined, '@dayfood.token');
		// Limpar o estado do usuário
		setUser(null);
		setLoading(false)
		// Redirecionar para a página inicial
		navigate('/login', { replace: true });
	}

	//Cadastrar usuário
	async function signUp({ name, email, password, phone }) {

		try {
			const response = await api.post('/register', {
				name,
				email,
				password,
				phone,
			})
			setLoading(true)
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

	// Verificar se existe um token de autenticação nos cookies
	useEffect(() => {
		const { '@dayfood.token': token } = parseCookies();

		if (token) {
			// Se existir um token, fazer uma requisição para obter os detalhes do usuário
			api.get('/me')
				.then(response => {
					const { id, name, email } = response.data;
					// Definir o usuário no estado
					setUser({ id, name, email });
					setLoading(true);
					navigate('/Home')
				})
				.catch(() => {
					// Se houver algum erro ao obter os detalhes do usuário, fazer logout
					logOut();
				});
		}
	}, []);

	return (
		<ContextGlobal.Provider value={{
			users: !!user,
			api,
			user,
			signUp,
			loading,
			lognin,
			cart,
			setCart,
			offcart,
			setOffcart,
			idcategory,
			setIdcategory,
			modal,
			setModal,
			busNome,
			setBusNome,
			logOut,
			product,
			setProduct

		}}>
			{children}
		</ContextGlobal.Provider>
	)

}
export default AutorizarClientes;