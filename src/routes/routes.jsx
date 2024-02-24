import { Route, Routes, useLocation } from 'react-router-dom'
import Register from '../pages/register'
import Login from '../pages/login in'
import Home from '../pages/Home'
import Provider from './private'
import Addprodutos from '../pages/addproducts'
import Perfil from '../components/Perfil'
import Favoritos from '../components/Favoritos'
import Error404 from '../pages/erros/404'
import Pedidos from '../pages/orders'
import Vendas from '../components/Vendas'
import Configs from '../pages/configs'



function RoutersApp() {

	return (
		<Routes>
			<Route path='' element={<Login />} />
			<Route path='/Register/:id' element={<Register />} />
			<Route path='/Home' element={<Home />} />

			<Route path='/Addprodutos' element={<Addprodutos />} />
			<Route path='/Addprodutos/:id/' element={<Addprodutos />} />

			<Route path='/Perfil' element={<Provider> <Perfil /> </Provider>} />
			<Route path='/favoritos' element={<Provider> <Favoritos /> </Provider>} />

			<Route path='/Vendas' element={<Provider> <Vendas /> </Provider>} />
			<Route path='/Pedidos' element={<Provider> <Pedidos /> </Provider>} />

			<Route path='/Configs' element={<Provider> <Configs /> </Provider>} />




			<Route path='*' element={<Error404 />} />
		</Routes>
	)
}

export default RoutersApp;