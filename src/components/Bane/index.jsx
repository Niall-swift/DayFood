
import {Content, Titulo, Cadapio, P, Contatos} from './BaneStyled'
///////////////////////////////////////
import {useState} from 'react'
///////icons ////////
import {FaPhone} from 'react-icons/fa'
import {BsInstagram,BsFacebook,BsWhatsapp} from 'react-icons/bs'
/////////// animação/////////
import {fadeInUp, transition, letterAnimation, fadeInLeft } from '../../utils/Animations'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
//////////////////////////////////////
import {ContextGlobal} from '../../contexts/auth'
import { useContext } from 'react'
///////////////////////////////
import avatares from '../../assets/undraw_drink_coffee_av1x.svg'

export default function Bane(){

    const {detail} = useContext (ContextGlobal)

    const myScroll = new IntersectionObserver((myElemte) => {
        myElemte.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
            
        })
    })
    const servers = document.querySelectorAll('.link')
    servers.forEach(element => myScroll.observe(element));

    return(
        <Content>
            <Titulo>
            <img src={avatares} alt=''/>
            <h2> Olá, <b>{detail.name}</b> <b>{""}</b> que tal !</h2>
            <motion.h1  {...letterAnimation} className="wow fadeInLeft"> <b>Escolhe sua  <br/> comida <b className="color-primary"> favorita. </b> </b> </motion.h1>
            
            </Titulo>

            <P>
                Aproveite nosso cardápio! Escolha o que desejar e recebe em sua casa de forma rápida e segura.
            </P>

            <Cadapio>
                <motion.div {...letterAnimation}>
                <a href='#Cadapio'>Ver cardápio</a>
                <a href="tel:+55219916868899"> <FaPhone/> (21) 991686-8899 </a>
                </motion.div>
            </Cadapio>

            <Contatos>
                <Link className='link'  to='https://www.instagram.com/niall_swift_/'> <BsInstagram/> </Link>
                <Link className='link'  to='https://www.facebook.com/niall.swift.10'> <BsFacebook/> </Link>
                <Link className='link'  to='https://wa.me/5521990414180?text=Olá, preciso de ajudar'> <BsWhatsapp/> </Link>
            </Contatos>

        </Content>
    )
}