import logo from '../../assets/Polygon 1.svg'
import './register.css'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import { PageTransition } from '../../components/PageAnimation'
import {scaleUp} from '../../utils/Animations'
import { useState, useContext} from 'react'
import {ContextGlobal} from '../../contexts/auth'
import Footer from '../../components/Footer'


export default function Register(){
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const {cadastrarUsuario, user} = useContext(ContextGlobal);


    async function Criarconta(e){
        e.preventDefault();

        if(nome !=='' && telefone !=='' && email !=='' && senha !==''){
            await cadastrarUsuario(nome,telefone,email,senha)
        }else{
            alert('isso nao ta legal')
        }
    }
    
    
    return(
        <>
        <PageTransition/>
    <motion.div
    {...scaleUp}
    className="conteiner-principal">
        <div className="iniciar">
            <div className="iniciar-area">
                <img src={ logo }/>
                <h1>DayFood</h1>
            </div>
            <from onSubmit={Criarconta}>
                <h1 className='text'>Crie sua Conta</h1>
                
                <input type='text'
                placeholder='Seu nome'
                value={nome}
                onChange={(e)=> setNome(e.target.value)}
                />

                <input type='tel'
                placeholder='Seu telefone'
                value={telefone}
                onChange={(e)=> setTelefone(e.target.value)}
                />

    
                <input type='email'
                placeholder='Seu email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />

                
                <input type='password'
                placeholder='Crie uma senha' 
                value={senha}
                onChange={(e)=> setSenha(e.target.value)}
                />


                <button onClick={Criarconta} className='btn'>Criar conta</button>
            </from>
            <Link to='/'>Tem uma conta? Iniciar Sessão</Link>

        </div>
    </motion.div>
    <Footer/>
    </>
    )
}