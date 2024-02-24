import {useContext} from 'react'
import {Navigate} from 'react-router-dom'
import {ContextGlobal} from '../contexts/auth'
import { parseCookies } from 'nookies'




export default function Provider({children}){

    const {users, dadosload } = useContext(ContextGlobal)
    
    if(dadosload){
        return(
            <div>
            </div>
        )
    }

    const cookies = parseCookies(users);

    const token = cookies['@dayfood.token']

    if(!token){
        return <Navigate to='/'/>
    }
    
    return children
}