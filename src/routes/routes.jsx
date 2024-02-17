import { Route, Routes, useLocation } from 'react-router-dom'
import Register from '../pages/register'
import Login from '../pages/login in'
import Home from '../pages/Home'
import Provider from './private'
import Addprodutos from '../pages/Add_New_Product'
import Perfil from '../components/Perfil'
import Favoritos from '../components/Favoritos'
import Error404 from '../pages/erros/404'
import Pedidos from '../pages/pedidos'
import Vendas from '../components/Vendas'
import Configs from '../pages/configs'
import Orders from '../pages/orders/orders'


function RoutersApp() {

    return (
        <Routes>
            <Route path='' element={<Login />} />
            <Route path='/Register/:business_id' element={<Register />} />
            <Route path='/Home' element={<Home />}/>

            <Route path='/Addprodutos' element={<Provider> <Addprodutos /> </Provider>} />
            <Route path='/Addprodutos/:id/:Categoria' element={<Provider> <Addprodutos /> </Provider>} />
            <Route path='/Perfil' element={<Provider> <Perfil /> </Provider>} />
            <Route path='/favoritos' element={<Provider> <Favoritos /> </Provider>} />
            <Route path='/Vendas' element={<Provider> <Vendas /> </Provider>} />
            <Route path='/Pedidos' element={<Provider> <Pedidos /> </Provider>} />
            <Route path='/Order' element={<Provider> <Orders /> </Provider>} />
            <Route path='/Configs' element={<Provider> <Configs /> </Provider>} />




            <Route path='*' element={<Error404 />} />
        </Routes>
    )
}

export default RoutersApp;