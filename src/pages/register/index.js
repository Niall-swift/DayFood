
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import { useState, useContext} from 'react'
import {ContextGlobal} from '../../contexts/auth'
/////////////////// importe compornetes////////
import Footer from '../../components/Footer'
import {scaleUp} from '../../utils/Animations'
import { PageTransition } from '../../components/PageAnimation'
import logo from '../../assets/Polygon 1.svg'
import Load from '../../components/load'
////////// import styled /////////////////////
import {Content, Iniciar, Button} from './RegisterStyled'
/////////////////////////////////////////////

export default function Register(){
    const [nome, setNome] = useState ('')
    const [telefone, setTelefone] = useState ('')
    const [email, setEmail] = useState ('')
    const [senha, setSenha] = useState ('')

    const {cadastrarUsuario, user, cadastrarLoad} = useContext(ContextGlobal);


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
        <Content>
            <motion.div {...scaleUp}>

                    <Iniciar>

                            <img src={ logo }  alt='logo da empresa'/>
                            <h1>Day <b>Food</b></h1>

                        <from onSubmit={Criarconta}>
                                <h1>Crie sua Conta</h1>
                                
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


                                <Button onClick={Criarconta} load={cadastrarLoad}> {cadastrarLoad === true ? 'Criando sua conta ...' : 'Criar conta'} </Button>
                        </from>
                        <Link to='/'>Tem uma conta? <b> Iniciar Sessão</b> </Link>

                    </Iniciar>
            </motion.div>
        </Content>
        <Footer/>
    </>
    )
}