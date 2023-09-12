
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useContext } from 'react'
import { ContextGlobal } from '../../contexts/auth'
/////////////////// importe compornetes////////
import Footer from '../../components/Footer'
import { scaleUp } from '../../utils/Animations'
import { PageTransition } from '../../components/PageAnimation'
import logo from '../../assets/Polygon 1.svg'
////////// import styled /////////////////////
import { Content, Iniciar, Button } from './RegisterStyled'
////////////// icones ///////////////////////////////
import { AiOutlineCheckCircle } from 'react-icons/ai'
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
    const regexTelefone = (/^(\+\d{1,3}\s?)?(\(\d{2,3}\)|\d{2,3})[-.\s]?\d{4,5}[-.\s]?\d{4}$/)
    const regexSenha = [
        { regex: /.{8,}/, label: '8+', para: 'caracteres' },
        { regex: /[0-9]/, label: '1', para: 'número' },
        { regex: /[a-z]/, label: 'a', para: 'minúscula' },
        { regex: /[A-Z]/, label: 'A', para: 'maiúscula' },
    ];

    const ValidaEmail = regexEmail.test(email);
    const ValidaTelefone = regexTelefone.test(telefone)
    const ValidaSenha = regexSenha.every((regex, index)=>(regex.regex.test(senha)))
    /////////////////////////////////////////////////////

    const { cadastrarUsuario, cadastrarLoad } = useContext(ContextGlobal);

    async function Criarconta(e) {
        e.preventDefault();

        if (ValidaEmail && ValidaSenha && ValidaTelefone) {

            await cadastrarUsuario(nome, telefone, email, senha)

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Alguns dados estão inválidos <br> Os dados devem seguir o exemplo abaixo',
                html: 'Ex: Dayfood@gmail.com <br> Ex: (21) 99999-9999, <br> Ex: Dayfood@123',
                position: 'center',
                showConfirmButton: false,
                timer: 5000,
                background: '#00070A',
                color: '#fff',
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

                        <form onSubmit={Criarconta}>
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
                            <div>
                                {regexSenha.map((regext, index) => (
                                    <>
                                        <b key={index} className={senha.match(regext.regex) ? 'valid' : ''}>{regext.label} <p>{regext.para}</p> </b>
                                    </>
                                ))}
                            </div>

                            <Button onClick={Criarconta} load={cadastrarLoad}> {cadastrarLoad === true ? 'Criando sua conta ...' : 'Criar conta'} </Button>
                        </form>
                        <Link to='/'>Tem uma conta? <b> Iniciar Sessão</b> </Link>

                    </Iniciar>
                </motion.div>
            </Content>
            <Footer />
        </>
    )
}