import {BarPequisa} from './barrastyled'
import {BsSearch} from 'react-icons/bs'
import {ContextGlobal} from '../../contexts/auth'
import { useContext } from 'react'

export default function Barra(){
    const {busNome, setBusNome} = useContext(ContextGlobal)

    return(
        <BarPequisa>
        <div>
        <input
            type="search"
            placeholder='Busque por pratos'
            onChange={(e) => setBusNome (e.target.value)}
            value={busNome}
            />
            <button value={busNome} ><BsSearch/></button>
        </div>
        </BarPequisa>
    )
}