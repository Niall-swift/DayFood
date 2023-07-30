import {useState, useContext} from 'react';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {fadeInDown} from '../../utils/Animations'
import {ContextGlobal} from '../../contexts/auth'
import CartButton from '../CartButton';
import SearchBar from '../SearchBar';
import avataof from '../../assets/undraw_pic_profile_re_7g2h.svg'
/// icones
import {CgNotes} from 'react-icons/cg'
import {BiUserCircle, BiAddToQueue} from 'react-icons/bi'
import {IoLogOut} from 'react-icons/io5'
import {HiMenu} from 'react-icons/hi'
import {IoClose} from 'react-icons/io5'
import {MdFavorite, MdAutoGraph} from 'react-icons/md'
import {FaUsers, FaUser} from 'react-icons/fa'
import { TbReceipt, TbReceiptOff, TbReceiptTax, TbReceiptRefund, TbReceipt2 } from 'react-icons/tb'
import styled from 'styled-components';
import {Container, Logo, Menus, Menu} from './styledHeader'




export default function Header({menuIsVisible,setMenuIsVisible}){
    const {user, exit, whatsappPic} = useContext(ContextGlobal)
    const [containerof, setContainerof] = useState (false)

    const opmenu = ()=>{
        setContainerof(!containerof)

    }

    return(
        
        <Container>
            <Logo>
                <img src={user.avatar === null ? `${whatsappPic === 'Image is unavailable; possibily due to user privacy settings.' ? avataof : whatsappPic}` : user.avatar} alt="Logo_hexagon" />
                <p>Olá {user.nome}</p>
            </Logo>

                <Menu sVisible={menuIsVisible}>

                <CartButton/>
                <button onClick={opmenu}>
                    <HiMenu size={45} onClick={() => setMenuIsVisible(true)}/>
                </button>
                </Menu>

            <Menus>
                <CartButton/>
                {user.adm === true ?(
                    <>
                    <Link to='/pedidos'><button><TbReceipt2/>pedidos</button></Link>
                    <Link to='/perfil'><button><BiUserCircle/>perfil</button></Link>
                    <Link to='/vendas'><button><MdAutoGraph/>Vendas</button></Link>
                    <button onClick={exit}><IoLogOut/>sair</button>
                    </>
                ) : (
                    <>
                    <Link to='/pedidos'><button><TbReceipt2/>pedidos</button></Link>
                    <Link to='/perfil'><button><BiUserCircle/>perfil</button></Link>
                    <Link to='/*'><button><MdFavorite/>favoritos</button></Link>
                    <button onClick={exit}><IoLogOut/>sair</button>
                    </>
                )}
            </Menus>

        </Container>
    )
};

