import {ContextGlobal} from '../../contexts/auth'
import './style.css'
import { useContext, useEffect, useState, useRef } from 'react';
import {FiArrowRightCircle, FiArrowLeftCircle} from 'react-icons/fi';
import {LuSalad} from  'react-icons/lu'
import Titulo from '../pages_titulos';
import {motion} from 'framer-motion'
import {fadeInUp, transition} from '../../utils/Animations'
import {db} from '../../pages/firebase'
import { collection, getDocs } from 'firebase/firestore';
import CardDoProduto from '../CardDoProduto';



import Load from '../load';
import Load2 from '../load/load2';



export default function Refeicoes(){



    const {categoria} = useContext(ContextGlobal)
    const [prods, SetProds] = useState ([])
    const [load, setLoad] = useState(true)
    const scroll = useRef(null)
    






useEffect(()=>{
    async function listar(){
        const lista = collection(db, `${categoria}`)
        await getDocs(lista)
        .then((snapshot)=>{
            let lista = [];
            
            snapshot.forEach((doc)=>{
                lista.push({
                    id: doc.id,
                    nome: doc.data().nome,
                    preco: doc.data().preco,
                    imagem: doc.data().imagem,
                    descricao: doc.data().descricao,
                    categoria: doc.data().categoria,
                    Disponibilidade: doc.data().Disponibilidade
                })
                SetProds(lista)
                setLoad(false)
                
            })
        })
    }
    listar();
},[categoria])

const reihtScroll = (e) =>{
    e.preventDefault();

    scroll.current.scrollLeft += 320
}

const leftScroll = (e) =>{
    e.preventDefault();
    
    scroll.current.scrollLeft -= 320
}
    
    return(
        (load ? <Load2/> :
        <motion.div {...fadeInUp} className='Contenter'>
        
        <section className="refeicoes" ref={scroll}>
            {
                prods.map((item, index) => <CardDoProduto key={index} data={item}/>)
            }
        </section> 
    </motion.div>
        )
    )
}
