import { Route, Routes} from 'react-router-dom'
import Register from '../pages/register'
import Login from '../pages/login'
import Home from '../pages/Home'
import Provider from './private'
import Addprodutos from '../pages/Add_New_Products'
import Favoritos from '../components/Favoritos'
import Error404 from '../pages/erros/404'
import Pedidos from '../pages/Order_Dlelivery_Web'
import CreateNewCategory from '../pages/Create_New_Category'
import AboutBusiness from '../pages/About_Business/About'
import Address from '../pages/About_Business/Address'
import Schedules from '../pages/About_Business/Schedules'
import OrderTable from '../pages/Order_Tbale_App'
import ReportsBusiness from '../pages/Reports_Business'



function RoutersApp() {

	return (
		<Routes>
			<Route path='login' element={<Login/>} />
			<Route path='/register' element={<Register/>} />

			<Route path='/home' element={<Home/>} />
			<Route path='/orders' element={<Pedidos/>}/>
			<Route path='/ordertable' element={<OrderTable/>}/>
			<Route path='/favoritos' element={<Provider> <Favoritos /> </Provider>}/>


			<Route path='/addproducts' element={<Provider> <Addprodutos/> </Provider>} />
			<Route path='/addproducts/:id' element={<Provider> <Addprodutos/> </Provider>} />
			<Route path='/newcategory' element={<Provider> <CreateNewCategory/> </Provider>}/>
			<Route path='/business' element={<Provider><AboutBusiness/></Provider>}/>
			<Route path='/Reports' element={<Provider><ReportsBusiness/></Provider>}/>
			<Route path='/address' element={<Address/>}/>
			<Route path='/times' element={<Schedules/>}/>


			<Route path='*' element={<Error404 />} />
		</Routes>
	)
}

export default RoutersApp;