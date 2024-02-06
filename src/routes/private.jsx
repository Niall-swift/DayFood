import {useContext} from 'react'
import {Navigate} from 'react-router-dom'
import {ContextGlobal} from '../contexts/auth'

export default function Provider({children}){
    const {usuario, dadosload } = useContext(ContextGlobal)

    if(dadosload){
        return(
            <div>
            </div>
        )
    }

    if(!usuario){
        return <Navigate to='/'/>
    }

    return children

}