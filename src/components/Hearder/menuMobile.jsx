import { ContainerMobile, MenusMobile, Logo, ButtonClose } from "./styledHeader";
import {MdFavorite} from 'react-icons/md'
import { TbReceipt2 } from 'react-icons/tb'
import {IoLogOut, IoClose} from 'react-icons/io5'
import {ContextGlobal} from '../../contexts/auth'
import {useContext, useEffect} from "react";
import avataof from '../../assets/undraw_pic_profile_re_7g2h.svg'
import { Link } from "react-router-dom";
import {BiUserCircle} from 'react-icons/bi'

export default function MenuMobile({ menuIsVisible, setMenuIsVisible}){
    const {exit, user, whatsappPic} = useContext(ContextGlobal) 
    
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);

    return( 
        <ContainerMobile    isVisible={menuIsVisible} >

            <IoClose onClick={() => setMenuIsVisible(false)}/>


            <MenusMobile>
            <Logo>
            <img src={user.avatar === null ? `${whatsappPic === 'Image is unavailable; possibily due to user privacy settings.' ? avataof : whatsappPic}` : user.avatar} alt="Logo_hexagon" />
                <p style={{width:'35ch'}}>{user.email}</p>
            </Logo>
                <Link to='/pedidos'><button><TbReceipt2/>pedidos</button></Link>
                <Link to='/perfil'><button><BiUserCircle/>perfil</button></Link>
                <Link to='/*'><button><MdFavorite/>favoritos</button></Link>
                <button onClick={exit}><IoLogOut/>sair</button>
            </MenusMobile>
        </ContainerMobile>
    )
}