import {ContextGlobal} from '../../contexts/auth'
import { useContext, useEffect, useState, useRef} from 'react';
import {LuWine} from 'react-icons/lu';
import Titulo from '../pages_titulos';
import {db} from '../../pages/firebase'
import { collection, getDocs } from 'firebase/firestore';
import CardDoProduto from '../CardDoProduto';
import {FiArrowRightCircle, FiArrowLeftCircle} from 'react-icons/fi';



import Load from '../load';
import Load2 from '../load/load2';



export default function Bebidas(){



    const {busca} = useContext(ContextGlobal)
    const [prods, SetProds] = useState ([])
    const [load, setLoad] = useState(true)
    const scroll = useRef(null)






useEffect(()=>{
    async function listar(){
        const lista = collection(db, "Berbida")
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
        (load ? <Load2/> :
        <div className='Contenter'>


        <Titulo titulos="Bebidas">
            <LuWine color='#fff' size={30} />       
        </Titulo>
        
        <section className="refeicoes" ref={scroll}>
            {
                prods.map((item, index) => <CardDoProduto key={index} data={item}/>)
            }
            <button className='btn_reiht' onClick={reihtScroll}> <FiArrowRightCircle size={40}/> </button>
            <button className='btn_left' onClick={leftScroll}> <FiArrowLeftCircle size={40}/> </button>
        </section> 
    </div>
        )
    )
}