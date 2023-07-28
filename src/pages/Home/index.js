import Header from "../../components/Hearder"
import Refeicoes from "../../components/Refeicoes"
import Sobremesa from "../../components/Sobremesas"
import {ContextGlobal} from '../../contexts/auth'
import { useContext, useEffect, useState } from "react"
import Cart from "../../components/cart"
import Footer from "../../components/Footer"
import { PageTransition } from "../../components/PageAnimation"
import Bebidas from "../../components/Bebidas"
import ResumoDoCart from "../../components/ResumoDoCart"
import MenuMobile from "../../components/Hearder/menuMobile"
import Bane from "../../components/Bane"




export default function Home(){
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return(
        <div>
        <MenuMobile
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
        />
        <Header
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
        />
        
        <PageTransition/>
        <Cart/>
        <ResumoDoCart/>
        <Refeicoes/>
        <Sobremesa/>
        <Bebidas/>
        <Footer/>
        </div>
    )
}