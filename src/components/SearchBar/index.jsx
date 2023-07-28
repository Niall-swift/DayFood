import {ContextGlobal} from '../../contexts/auth'
import {BsSearch} from 'react-icons/bs'
import './search.css'
import { useContext } from 'react'



export default function SearchBar(){

    const {busca, setBusca} = useContext(ContextGlobal)
    


    return(
        <form className='search__bar'>
        <input
        type="text"
        placeholder="Busque por pratos ou ingredientes"
        className="input__search"
        required
        value={busca}
        onChange={(e) => setBusca (e.target.value)}
        />
        <button 
        className='search__button'
        >
            <BsSearch/>
        </button>
        </form>
    )
}