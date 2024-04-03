import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { ContextGlobal } from '../../contexts/auth'
/// icones
import { IoApps, IoStatsChartOutline} from 'react-icons/io5'
import { FaPowerOff, FaBuilding} from "react-icons/fa";
import { MdCategory,MdDeliveryDining,MdLocalFlorist,MdOutlineSupportAgent,MdOutlineMiscellaneousServices,MdOutlineAddToPhotos} from "react-icons/md";
import { TbReceipt} from 'react-icons/tb'
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
      <Link to='/orders'><Buttons><TbReceipt/>Pedidos</Buttons></Link>
      <Dropdown>
        <Button> <IoApps/> Apps </Button>
        <Menu>
          <Link to='/addproducts'><Buttons><MdOutlineAddToPhotos/>Product</Buttons></Link>
          <Link to='/newcategory'><Buttons><MdCategory />Category</Buttons></Link>
          <Link to='/newcategory'><Buttons><MdDeliveryDining/>Delivery</Buttons></Link>
          <Link to='/business'><Buttons><FaBuilding />Empresa</Buttons></Link>
          <Link to='/address'><Buttons><IoStatsChartOutline />Relaório</Buttons></Link>
          <Link to='/times'><Buttons><MdOutlineMiscellaneousServices/>Geral</Buttons></Link>
          <Link to='/newcategory'><Buttons><MdLocalFlorist />Temas</Buttons></Link>
          <Link to='/newcategory'><Buttons><MdOutlineSupportAgent />Suporte</Buttons></Link>


          <Buttons onClick={logOut}><FaPowerOff />Exit</Buttons>
        </Menu>
      </Dropdown>
    </Headers>

  )
};

