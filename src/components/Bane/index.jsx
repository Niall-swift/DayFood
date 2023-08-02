
import {Content,Titulo, Cadapio, P} from './BaneStyled'
///////////////////////////////////////
import {useState} from 'react'
///////icons ////////
import {FaPhone} from 'react-icons/fa'

export default function Bane(){



    return(
        <Content>
            <Titulo>
            <h1 class="wow fadeInLeft"> <b>Escolha sua  <br/> comida <b class="color-primary">favorita.</b> </b> </h1>
            
            </Titulo>

            <P>
                Aproveite nosso cardápio! Escolha o que desejar e recebe em sua casa de forma rápida e segura.
            </P>

            <Cadapio>
                <a href='#Refeicao'>Ver cardápio</a>

                <a> <FaPhone/> (21) 991686-8899 </a>
            </Cadapio>
        </Content>
    )
}