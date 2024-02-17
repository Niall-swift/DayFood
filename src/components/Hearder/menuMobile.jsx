import { ContainerMobile, MenusMobile, Logo, ButtonClose } from "./styledHeader";
import { MdFavorite, MdAutoGraph } from 'react-icons/md'
import { TbReceipt2 } from 'react-icons/tb'
import { IoLogOut, IoClose } from 'react-icons/io5'
import { BsFillGearFill } from 'react-icons/bs'
import { ContextGlobal } from '../../contexts/auth'
import { useContext, useEffect } from "react";
import avataof from '../../assets/undraw_pic_profile_re_7g2h.svg'
import { Link } from "react-router-dom";
import { BiUserCircle } from 'react-icons/bi'
import CartButton from "../Bottom_Add_Product";

export default function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
	const { exit, user, whatsappPic } = useContext(ContextGlobal)

	useEffect(() => {
		document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
	}, [menuIsVisible]);

	return (
		<ContainerMobile isVisible={menuIsVisible} >
			<IoClose onClick={() => setMenuIsVisible(false)} />
			<MenusMobile>
				
				<Logo>
					<img src={avataof} alt="Logo_hexagon" />
					<p style={{ width: '35ch' }}>{ }</p>
				</Logo>

				<Link to='/pedidos'><button><TbReceipt2 />pedidos</button></Link>
				<Link to='/perfil'><button><BiUserCircle />Perfil</button></Link>
				<Link to='/vendas'><button><MdAutoGraph />Vendas</button></Link>
				<Link to='/configs'><button><BsFillGearFill />Configs</button></Link>
				<button onClick={exit}><IoLogOut />sair</button>

				<Link to='/pedidos'><button><TbReceipt2 />pedidos</button></Link>
				<Link to='/perfil'><button><BiUserCircle />perfil</button></Link>
				<Link to='/vendas'><button><MdAutoGraph />Vendas</button></Link>
				<Link to='/*'><button><MdFavorite />favoritos</button></Link>
				<button onClick={exit}><IoLogOut />sair</button>

			</MenusMobile>
		</ContainerMobile>
	)
}