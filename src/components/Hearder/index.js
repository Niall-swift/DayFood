import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInDown } from '../../utils/Animations'
import { ContextGlobal } from '../../contexts/auth'
import CartButton from '../Bottom_Add_Product';
import { BsFillGearFill } from 'react-icons/bs'
/// icones
import { CgNotes } from 'react-icons/cg'
import { BiUserCircle, BiAddToQueue } from 'react-icons/bi'
import { IoLogOut } from 'react-icons/io5'
import { HiMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { MdFavorite, MdAutoGraph } from 'react-icons/md'
import { FaUsers, FaUser } from 'react-icons/fa'
import { TbReceipt, TbReceiptOff, TbReceiptTax, TbReceiptRefund, TbReceipt2 } from 'react-icons/tb'
import styled from 'styled-components';
import { Container, Headers, Menus, Menu, Message_Herder } from './styledHeader'
import avatar from '../../assets/name=molla, size=400.png'




export default function Header({ menuIsVisible, setMenuIsVisible }) {

  const { user, exit } = useContext(ContextGlobal)
  const [containerof, setContainerof] = useState(false)
  const [scl, setScl] = useState(false)

  const opmenu = () => {
    setContainerof(!containerof)

  }

  window.addEventListener("scroll", function () {

    const scl = window.scrollY > 0

    setScl(scl)
  });



  return (
    <Headers>
      <Container scl={scl}>

        <Menu sVisible={menuIsVisible}>
          <button onClick={opmenu}>
            <HiMenu size={45} onClick={() => setMenuIsVisible(true)} />
          </button>
        </Menu>

        <Menus>
          <Link to='/pedidos'><button><TbReceipt2 />pedidos</button></Link>
          <Link to='/perfil'><button><BiUserCircle />perfil</button></Link>
          <Link to='/vendas'><button><MdAutoGraph />Vendas</button></Link>
          <Link to='/configs'><button><BsFillGearFill />Configs</button></Link>
          <button onClick={exit}><IoLogOut />sair</button>
        </Menus>

      </Container>
    </Headers>

  )
};

