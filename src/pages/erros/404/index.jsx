import logo404 from '../../../assets/undraw_warning_re_eoyh.svg'
import {Link} from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'

import './404.css'

export default function Error404(){
    return(
        <>
        
        <div className='contenter'>
            <h1>Não foram encontrados traços de civilização!</h1>
            <h3>Não foi possível encontrar a página que procurava.</h3>
            <img src={logo404} alt='Error404'/>
            <Link to='/Home'><button className='btn'><IoIosArrowBack size={35}/>Voltar ao inicio </button></Link>
        </div>
        </>
    )
}