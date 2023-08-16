import {ContextGlobal} from '../../contexts/auth'
import {Content} from './CardStyled'
import { useContext, useEffect, useState, useRef } from 'react';
import {FiArrowRightCircle, FiArrowLeftCircle} from 'react-icons/fi';
import {LuSalad} from  'react-icons/lu'
import Titulo from '../pages_titulos';
import {motion} from 'framer-motion'
import {fadeInUp, transition} from '../../utils/Animations'
import {db} from '../../pages/firebase'
import {collection, doc, onSnapshot, orderBy, query, updateDoc, where, getDocs, limit, startAfter, QuerySnapshot } from 'firebase/firestore'
import CardDoProduto from '../CardDoProduto';



import Load from '../load';
import { list } from 'firebase/storage';




export default function Refeicoes(){



    const {categoria, busNome, user} = useContext(ContextGlobal)
    const [prods, SetProds] = useState ([])
    const [load, setLoad] = useState(true)
    const scroll = useRef(null)

useEffect(()=>{

    async function listar(){

        if(busNome === ''){

                const lista = collection(db, `${categoria}`)
                const q = query(lista,)

                await getDocs(q)

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

        }else{
            const lista = ["Berbida","Sobremesa","Refeição"]

            for (const col of  lista){

                const querySnapshot = await getDocs(collection(db,col))

                const q = querySnapshot.docs.filter(doc => doc.data().nome.toLowerCase().startsWith(busNome.toLowerCase()) === busNome.toLowerCase().startsWith(busNome.toLowerCase()));
                
                    let lista = []

                    q.forEach((doc)=>{

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
                
            }
            
    }
        
}

    listar();
    setLoad(true)
},[categoria, busNome])



const reihtScroll = (e) =>{
    e.preventDefault();

    scroll.current.scrollLeft += 320
}

const leftScroll = (e) =>{
    e.preventDefault();
    
    scroll.current.scrollLeft -= 320
}
    
    return(
        (load ? <Load/> :
        <motion.div {...fadeInUp}>
            <Content ref={scroll}>
                {
                    prods.map((item, index) => <CardDoProduto key={index} data={item}/>)
                }
            </Content> 
        </motion.div>
        )
    )
}
