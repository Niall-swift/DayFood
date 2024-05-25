import {Homen} from './HomeStyled.jsx'

import Cart from "../../components/cart"
import ResumoDoCart from "../../components/ResumoDoCart"
import Bane from "../../components/Bane"
import Categoria from '../../components/Category_Bar/index.jsx'
import ButtonCartFixo from "../../components/Bottom_Cart"
import Servicos from "../../components/BaneServicos"
import Titulo from "../../components/pages_titulos"
import Barra from "../../components/Search_Bar/index.jsx"
import Header from "../../components/Hearder/index.js"
import ListProducts from "../../components/List_Product"



export default function Home(){

    return(
        <Homen>
            <Header/>
            <Cart/>
            <Bane/>
            <Servicos/>
            <ResumoDoCart/>
            <Titulo th4='CARDÁPIO' th1='Conheça o nosso cardápio'/>
            <Categoria/>
            <Barra/>
            <ListProducts/>
            <ButtonCartFixo/>
        </Homen>
    )
}