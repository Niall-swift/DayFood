
import {Content, Titulo, Cadapio, P, Contatos} from './BaneStyled'
///////////////////////////////////////
import {useState} from 'react'
///////icons ////////
import {FaPhone} from 'react-icons/fa'
import {BsInstagram,BsFacebook,BsWhatsapp} from 'react-icons/bs'
/////////// animação/////////
import {fadeInUp, transition, letterAnimation } from '../../utils/Animations'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Bane(){



    return(
        <Content>
            <Titulo>
            <motion.h1 {...letterAnimation} class="wow fadeInLeft"> <b>Escolha sua  <br/> comida <b class="color-primary">favorita.</b> </b> </motion.h1>
            
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
                <Link to='https://www.instagram.com/niall_swift_/'> <BsInstagram/> </Link>
                <Link to='https://www.facebook.com/niall.swift.10'> <BsFacebook/> </Link>
                <Link to='https://wa.me/5521990414180?text=Olá, preciso de ajudar'> <BsWhatsapp/> </Link>
            </Contatos>

        </Content>
    )
}