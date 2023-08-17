
import './load.css'
export default function Load({titulo}){
    return(
        <div className='load'>
        <div className="custom-loader"></div>
        <div className='titulo-load'>{titulo}</div>
    </div>
    )
}