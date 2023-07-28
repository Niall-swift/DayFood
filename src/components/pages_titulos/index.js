

import './Titulo.css'

export default function Titulo({children, titulos}){
    return(
        <div className='Titulo'>
            {children}
            <span>{titulos}</span>
        </div>
    )
}