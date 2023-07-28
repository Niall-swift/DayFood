import {ContextGlobal} from '../../contexts/auth'
import {useContext, useState, useEffect, useRef} from 'react'

//// compornetes
import Titulo from '../pages_titulos';
import CardDoProduto from '../CardDoProduto';

//// icones
import { BsPencil } from 'react-icons/bs';
import { LuIceCream2 } from 'react-icons/lu';
import {IoMdAddCircle, IoMdRemoveCircle} from 'react-icons/io'
import {FiArrowRightCircle, FiArrowLeftCircle} from 'react-icons/fi';

//// firebase
import {db} from '../../pages/firebase'
import { collection, getDocs } from 'firebase/firestore';

//// animacao
import { motion } from 'framer-motion';
import {fadeInLeft} from '../../utils/Animations'



export default function Sobremesa(){
    const {user} = useContext(ContextGlobal)

    const [prods, SetProds] = useState ([])
    const scroll = useRef(null)





    useEffect(()=>{
        async function listar(){
            const lista = collection(db, "Sobremesa")
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
                })
            })
        }
        listar();
    },[])


    const reihtScroll = (e) =>{
        e.preventDefault();
    
        scroll.current.scrollLeft += 320
    }
    
    const leftScroll = (e) =>{
        e.preventDefault();
        
        scroll.current.scrollLeft -= 320
    }


    return(
        <div className='Contenter'>



        <Titulo titulos="Sobremesas">
            <LuIceCream2 color='#fff' size={30} />    
        </Titulo>


        <section className="refeicoes" ref={scroll}>
        {
            prods.map((item, idenx)=><CardDoProduto key={idenx} data={item}/>)
        }
        <button className='btn_reiht' onClick={reihtScroll}> <FiArrowRightCircle size={40}/> </button>
        <button className='btn_left' onClick={leftScroll}> <FiArrowLeftCircle size={40}/> </button>
        </section> 
        </div>
    )
}