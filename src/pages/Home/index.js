import Header from "../../components/Hearder"
import Refeicoes from "../../components/Refeicoes"
import {Homen} from './HomeStyled.jsx'
import {ContextGlobal} from '../../contexts/auth'
import { useContext, useEffect, useState } from "react"
import Cart from "../../components/cart"
import Footer from "../../components/Footer"
import { PageTransition } from "../../components/PageAnimation"
import ResumoDoCart from "../../components/ResumoDoCart"
import MenuMobile from "../../components/Hearder/menuMobile"
import Bane from "../../components/Bane"
import Categoria from '../../components/categoryBar/index.jsx'
import ButtonCartFixo from "../../components/Bottom_Cart"
import Servicos from "../../components/BaneServicos"
import Titulo from "../../components/pages_titulos"
import Barra from "../../components/Bararadepesquisa"



export default function Home(){

    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return(

        <Homen>
        <MenuMobile
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
        />
        <Header
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
        />
        <Cart/>
        <Bane/>
        <Servicos/>
        <ResumoDoCart/>
        <Titulo th4='CARDÁPIO' th1='Conheça o nosso cardápio'/>
        <Categoria/>
        <Barra/>
        <Refeicoes/>
        <ButtonCartFixo/>
        <Footer/>
        </Homen>
    )
}