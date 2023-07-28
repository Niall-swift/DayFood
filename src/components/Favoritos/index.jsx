import { useContext } from 'react'
import {ContextGlobal} from '../../contexts/auth'
import './favoritos.css'

export default function Favoritos(){
    const {favItem, setFavItem, user} = useContext(ContextGlobal)

    return(
        <div className="content--favorito">
            <h1>favoritos</h1>
            <div className='content--favoritos'>
                {favItem.map((item, index)=>{
                    console.log(item.user)
                    return(
                    <>
                    {user.uid === item.user ?
                    <div className='Card-favoritos' key={index}>
                    <img src={item.imagem} alt={`imagem do prato${item.nome}`}/>
                    <div className='favoritos-ifor'>
                        <h3>{item.nome}</h3>
                        <button className='btn'>Exluir dos favoritos</button>
                        <button className='btn'>Compra de novo</button>
                    </div>
                    </div>
                    :
                    <></>
                    }
                    </>
                    )
                })
            }
            </div>
        </div>
    )
}