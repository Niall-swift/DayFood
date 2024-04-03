
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useContext } from 'react'
import { ContextGlobal } from '../../contexts/auth'
///--- importe compornetes ---///
import Footer from '../../components/Footer'
import { scaleUp } from '../../utils/Animations'
import { PageTransition } from '../../components/PageAnimation'
import logo from '../../assets/Polygon 1.svg'
///--- import styled ---///
import { Content, Iniciar, Button } from './RegisterStyled'

///--- import jquery ---///
import $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask.min.js';
///---toast ---///
import Swal from 'sweetalert2'
import { getHours } from 'date-fns'



export default function Register() {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


	///--- mask ---///
	$('#tel').mask('(00) 00000-0000');

	///--- REGEX DOS INPUTS ---///
	const regexEmail = (/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
	const regexTelefone = (/^(\+\d{1,3}\s?)?(\(\d{2,3}\)|\d{2,3})[-.\s]?\d{4,5}[-.\s]?\d{4}$/)
	const regexSenha = [
		{ regex: /.{8,}/, label: '8+', para: 'caracteres' },
		{ regex: /[0-9]/, label: '1', para: 'número' },
		{ regex: /[a-z]/, label: 'a', para: 'minúscula' },
		{ regex: /[A-Z]/, label: 'A', para: 'maiúscula' },
	];

	const ValidaEmail = regexEmail.test(email);
	const ValidaTelefone = regexTelefone.test(phone)
	const ValidaSenha = regexSenha.every((regex, index) => (regex.regex.test(password)))
	/////////////////////////////////////////////////////

	const { signUp, cadastrarLoad } = useContext(ContextGlobal);

	async function Criarconta(e) {
		e.preventDefault();

		let data = {
			name,
			password,
			email,
			phone
		}

		if(ValidaEmail && ValidaTelefone && ValidaSenha){
			await signUp(data)
		}
	}



	return (
		<Content>
			<PageTransition />
			<motion.div {...scaleUp}>

				<Iniciar>

					<img src={logo} alt='logo da empresa' />
					<h1>Day <b>Food</b></h1>

					<form onSubmit={Criarconta}>
						<h1>Crie sua Conta</h1>

						<input type='text'
							placeholder='Nome da loja'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>

						<input type='tel'
							placeholder='Telefone'
							value={phone}
							id='tel'
							required
							onChange={(e) => setPhone(e.target.value)}
						/>


						<input type='email'
							placeholder='E-mail'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>


						<input type='password'
							placeholder='Crie uma senha'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<div>
							{regexSenha.map((regext, index) => (
								<>
									<b key={index} className={password.match(regext.regex) ? 'valid' : ''}>{regext.label} <p>{regext.para}</p> </b>
								</>
							))}
						</div>

						<Button onClick={Criarconta} load={cadastrarLoad}> {cadastrarLoad === true ? 'Criando sua conta ...' : 'Criar conta'} </Button>
					</form>
					<Link to='/'>Tem uma conta? <b> Iniciar Sessão</b> </Link>

				</Iniciar>
			</motion.div>
			<Footer />
		</Content>
	)
}