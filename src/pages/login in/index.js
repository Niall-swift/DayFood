import {Link, useNavigate} from 'react-router-dom'
import logo from '../../assets/Polygon 1.svg'
import avatar from '../../assets/undraw_coffee_time_45em.svg'
import './login.css'
import { motion } from 'framer-motion'
import { PageTransition } from '../../components/PageAnimation'
import {ContextGlobal} from '../../contexts/auth'
import {scaleUp, transition, fadeInUp} from '../../utils/Animations'
import {useContext, useState} from 'react'
import Footer from '../../components/Footer'
import LogoTipo from '../../components/LogoTipo'

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
        <Load/>
        )
    }


    function home(){
        navigate('/home')
    }
    if(user !== null){
        return(
            <>
            <motion.div 
            {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.5}}
            className='conteiner-principal'>
                    <div className='iniciar'>
                        <div className="iniciar-area">
                            <img src={ logo }/>
                            <h1>DayFood</h1>
                        </div>
                        
                        <div className='From-perfil'>
                            <label className='label-avatar'>
                            <motion.img 
                                whileHover={{ scale: 1.1 }}
                                initial={{ scale: 1.15 }}
                                animate={{ scale: 1 }}
                                transition={{ ...transition, duration: 1.45, delay: 0.7 }}
                            src={user.avatar === null ? `${whatsappPic === 'Image is unavailable; possibily due to user privacy settings.' ? avatar : whatsappPic}` : user.avatar} alt='foto de perfil'/>
                            </label>
                            <h2 style={{marginTop: '15px', textTransform: 'uppercase', width: '260px' , textAlign: 'center' , textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{user.nome}</h2>
                            <button className='btn' type='submit' onClick={home}>Continuar.</button>
                        </div>
                    </div>
            </motion.div>
            </>
        )
    }




    
    return(
        <>
        <PageTransition />
        <motion.div
        {...scaleUp}
        className="conteiner-principal">
        <div className="iniciar">
            <div className="iniciar-area">
                <img src={ logo }/>
                <h1>DayFood</h1>
            </div>
            <from>

            <h1 className='text'>Faça login</h1>
    
                
                
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

                <button onClick={singIn} className='btn'>Entrar</button>
            </from>

            <Link to='/register'>Cadastre-se  É rápido e fácil.</Link>
            
        </div>
    </motion.div>
    <Footer/>
    </>
    )
}