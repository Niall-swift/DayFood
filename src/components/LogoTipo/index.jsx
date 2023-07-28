import logo from '../../assets/Polygon 1.svg'
import avatar from '../../assets/undraw_pic_profile_re_7g2h.svg'
import './logotipo.css'
import {ContextGlobal} from '../../contexts/auth'
import { useContext } from 'react'

export default function LogoTipo(){
    const {user} = useContext(ContextGlobal)
    

    

    return(
        <div className='logo'>
            {user.avatar !== null ? 
            <>
            <img src={user.avatar === null ? avatar : user.avatar } alt='logo da empresa'  style={{border: '1px solid #3a3a3a'}} />
            <p style={{fontSize: '20px'}}>Olá {user.nome}</p>
            </>
            :
            <>
            <img src={avatar} alt='logo da empresa'/>
            <p>DayFood</p>
            </>
            }
        </div>
    )
}