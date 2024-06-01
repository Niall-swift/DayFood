import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/Polygon 1.svg'
import { motion } from 'framer-motion'
import { PageTransition } from '../../components/PageAnimation'
import { ContextGlobal } from '../../contexts/auth'
import { scaleUp, transition, fadeInUp } from '../../utils/Animations'
import { useContext, useState } from 'react'
import Footer from '../../components/Footer'
import { Content, Iniciar, Button } from '../register/RegisterStyled'
import UseAPIClient from '../../api/api'


import Load from '../../components/load'


export default function Login() {

	const { lognin, loading } = useContext(ContextGlobal);



	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')



	async function Signin(event) {
		event.preventDefault()

		let data = {
			email,
			password
		}

		await lognin(data)
	}

	if (loading) {
		return (
			<Load titulo={'Entrando com ' + (email)} />
		)
	}



	return (
		<>
			<PageTransition />
			<Content>

				<motion.div {...scaleUp}>

					<Iniciar>

						<img src={logo} alt='logo da empresa' />
						<h1>Day <b>Food</b> </h1>

						<form>

							<h1>Faça login</h1>



							<input type='email'
								placeholder='Seu email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>


							<input type='password'
								placeholder='Sua senha'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>

							<Button onClick={Signin} className='btn'>Entrar</Button>
						</form>

						<Link to='/register'> Cadastre-se <b> É rápido e fácil.</b> </Link>

					</Iniciar>
				</motion.div>
			</Content>
			<Footer />
		</>
	)
}