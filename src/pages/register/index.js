
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useContext } from 'react'
import { ContextGlobal } from '../../contexts/auth'
/////////////////// importe compornetes////////
import Footer from '../../components/Footer'
import { scaleUp } from '../../utils/Animations'
import { PageTransition } from '../../components/PageAnimation'
import logo from '../../assets/Polygon 1.svg'
import Load from '../../components/load'
////////// import styled /////////////////////
import { Content, Iniciar, Button } from './RegisterStyled'
/////////////////////////////////////////////
/////// import jquery////////////////
import $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask.min.js';
//////////////////////////// toast ///////////////////
import Swal from 'sweetalert2'



export default function Register() {
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    ///////////////////// REGEX DOS INPUTS////////////////////////////
    const regexEmail = (/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
    const regexSenha = (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
    const regexTelefone = (/^(\+\d{1,3}\s?)?(\(\d{2,3}\)|\d{2,3})[-.\s]?\d{4,5}[-.\s]?\d{4}$/)

    const ValidaEmail = regexEmail.test(email);
    const ValidaSenha = regexSenha.test(senha);
    const VlaidaTelefone = regexTelefone.test(telefone)

    console.log(ValidaEmail); // true (se o email for válido)
    console.log(ValidaSenha); // true (se a senha for válida)
    console.log(VlaidaTelefone); // true (se a telefone for válida)
    /////////////////////////////////////////////////////

    const { cadastrarUsuario, cadastrarLoad } = useContext(ContextGlobal);

    async function Criarconta(e) {
        e.preventDefault();

        if(ValidaEmail && ValidaSenha && VlaidaTelefone){

            await cadastrarUsuario(nome, telefone, email, senha)

        }else{
            Swal.fire({
                icon: 'error',
                title: 'Alguns dados estão inválidos <br> Os dados devem seguir o exemplo abaixo',
                html: 'Ex: Dayfood@gmail.com <br> Ex: (21) 99999-9999, <br> Ex: Dayfood@123',
                position: 'center',
                showConfirmButton: false,
                timer: 5000,
                
                background: '#00070A',
                color:'#fff',
            })
        }
        
    }


    /////////// mask////////////////////////
    $('#tel').mask('(00) 00000-0000');
    ////////////////////////////////////////

    return (
        <>
            <PageTransition />
            <Content>
                <motion.div {...scaleUp}>

                    <Iniciar>

                        <img src={logo} alt='logo da empresa' />
                        <h1>Day <b>Food</b></h1>

                        <from onSubmit={Criarconta}>
                            <h1>Crie sua Conta</h1>

                            <input type='text'
                                placeholder='Seu nome'
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />

                            <input type='tel'
                                placeholder='Seu telefone'
                                value={telefone}
                                id='tel'
                                required
                                onChange={(e) => setTelefone(e.target.value)}
                            />


                            <input type='email'
                                placeholder='Seu email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />


                            <input type='password'
                                placeholder='Crie uma senha'
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />


                            <Button onClick={Criarconta} load={cadastrarLoad}> {cadastrarLoad === true ? 'Criando sua conta ...' : 'Criar conta'} </Button>
                        </from>
                        <Link to='/'>Tem uma conta? <b> Iniciar Sessão</b> </Link>

                    </Iniciar>
                </motion.div>
            </Content>
            <Footer />
        </>
    )
}