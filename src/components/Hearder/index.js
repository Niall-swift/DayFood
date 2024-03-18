import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeInDown } from '../../utils/Animations'
import { ContextGlobal } from '../../contexts/auth'
/// icones
import { BsFillGearFill } from 'react-icons/bs'
import { CgNotes } from 'react-icons/cg'
import { BiUserCircle, BiAddToQueue } from 'react-icons/bi'
import { IoLogOut } from 'react-icons/io5'
import { HiMenu } from 'react-icons/hi'
import { IoClose, IoApps} from 'react-icons/io5'
import { GrChapterAdd } from "react-icons/gr";
import { FaPowerOff } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { TbReceipt, TbReceiptOff, TbReceiptTax, TbReceiptRefund, TbReceipt2 } from 'react-icons/tb'
/// styled
import {Headers, Dropdown, Button, Menu, Buttons} from './styledHeader'




export default function Header() {

  const { logOut } = useContext(ContextGlobal)

  const [scl, setScl] = useState(false)


  window.addEventListener("scroll", function () {

    const scl = window.scrollY > 0

    setScl(scl)
  });



  return (
    <Headers scl={scl}>
      <Dropdown>
        <Button> <IoApps/> Apps </Button>
        <Menu>
          <Buttons> <GrChapterAdd/> product</Buttons>
          <Buttons> <MdCategory /> category</Buttons>
          <Buttons> <FaPowerOff /> Exit </Buttons>
        </Menu>
      </Dropdown>
    </Headers>

  )
};

