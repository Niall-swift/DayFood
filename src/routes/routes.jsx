import { Route, Routes} from 'react-router-dom'
import Register from '../pages/register'
import Login from '../pages/login'
import Home from '../pages/Home'
import Provider from './private'
import Addprodutos from '../pages/Add_New_Products'
import Favoritos from '../components/Favoritos'
import Error404 from '../pages/erros/404'
import Pedidos from '../pages/orders'
import Vendas from '../components/Vendas'
import CreateNewCategory from '../pages/Create_New_Category'



function RoutersApp() {

	return (
		<Routes>
			<Route path='login' element={<Login/>} />
			<Route path='/register/:id' element={<Register/>} />

			<Route path='/home' element={<Home/>} />
			<Route path='/Vendas' element={<Provider> <Vendas /> </Provider>}/>
			<Route path='/orders' element={<Pedidos/>}/>
			<Route path='/favoritos' element={<Provider> <Favoritos /> </Provider>}/>


			<Route path='/addproducts' element={<Addprodutos/>} />
			<Route path='/addproducts/:id' element={<Provider><Addprodutos/></Provider>} />
			<Route path='/newcategory' element={<CreateNewCategory/>}/>


			<Route path='*' element={<Error404 />} />
		</Routes>
	)
}

export default RoutersApp;