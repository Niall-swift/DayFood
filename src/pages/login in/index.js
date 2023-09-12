import {Link, useNavigate} from 'react-router-dom'
import logo from '../../assets/Polygon 1.svg'
import avatar from '../../assets/undraw_coffee_time_45em.svg'
import { motion } from 'framer-motion'
import { PageTransition } from '../../components/PageAnimation'
import {ContextGlobal} from '../../contexts/auth'
import {scaleUp, transition, fadeInUp} from '../../utils/Animations'
import {useContext, useState} from 'react'
import Footer from '../../components/Footer'
import {Content, Iniciar, Button} from '../register/RegisterStyled'

import Load from '../../components/load'


export default function Login(){
    const {login, cadastrarLoad, user, whatsappPic} = useContext (ContextGlobal)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    const navigate = useNavigate();

    async function singIn(){
        if(email !=='' && senha !==''){
            await login(email, senha)
        }else{
        }
    }

    if(cadastrarLoad){
        return(
        <Load titulo={'Entrando com ' + (email) }/>
        )
    }


    
    return(
    <>
    <PageTransition />
            <Content>

            <motion.div {...scaleUp}>

            <Iniciar>

                <img src={ logo } alt='logo da empresa'/>
                <h1>Day <b>Food</b> </h1>

            <form>

            <h1>Faça login</h1>
    
                
                
                <input type='email'
                placeholder='Seu email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />

    
                <input type='password'
                placeholder='Sua senha'
                value={senha} 
                onChange={(e)=> setSenha(e.target.value)}
                />

                <Button onClick={singIn} className='btn'>Entrar</Button>
            </form>

            <Link to='/register'> Cadastre-se <b> É rápido e fácil.</b> </Link>
            
            </Iniciar>
            </motion.div>
            </Content>
    <Footer/>
    </>
    )
}