//// icons
import { MdFavoriteBorder , MdOutlineFoodBank} from 'react-icons/md';
import {IoMdAddCircle, IoMdRemoveCircle} from 'react-icons/io'
import { FiEdit } from 'react-icons/fi';
//////
/// import reacts
import {useContext, useState} from 'react';
import {Link} from 'react-router-dom'
////////////////
import {motion} from 'framer-motion'
import {fadeInUp, transition} from '../../utils/Animations'



import Lista from '../cart';
import {ContextGlobal} from '../../contexts/auth'


import Swal from 'sweetalert2'
import formatCurrency from '../../utils/formatCurrency';
import {toast} from 'react-toastify'

//// import firebase
import {db} from '../../pages/firebase'
import {doc, deleteDoc, updateDoc} from 'firebase/firestore'
///////
import Ribbon from '../Ribbon';

export default function CardDoProduto({data}){
    const {onCart ,setOnCart, user, favoritos} = useContext(ContextGlobal)
    const [status, setStatus] = useState ('disponivel')
    const [quantidade, setQuatidade] = useState(1)
    const {id, nome, imagem, preco, descricao, categoria, Disponibilidade} = data;




    const add = (itemid) =>{
        const item = onCart.find(item => item.id === id)
        if(item){
            const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                width: '100%',
                background: '#00070A',
                color:'#fff',
                didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'error',
                title: 'Você ja tem esse !'
            })
        }else{
            setOnCart([...onCart, itemid])
            
        }
    };






    function mais(){
        const limitDeItem = quantidade >=15

        if(limitDeItem){
            const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                width: '100%',
                background: '#00070A',
                color:'#fff',
                didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: 'error',
                title: 'Você está ultrapassando o limite de item, e isso não e bom'
            })
            return
        }
        setQuatidade(quantidade+1)
    }
    function menos(){
        setQuatidade(quantidade-1)

        if(quantidade === 1){
            setQuatidade(1)
        }
    }


    async function exluir(){
        const exluir = doc(db, `${categoria}`, id)
        
        Swal.fire({
            icon: 'warning',
            title: 'Você tem certeza que deseja excluir esse prato ?',
            text: 'Você não será capaz de reverter isso!',
            background: '#000e30',
            color: '#fff',
            showDenyButton: true,
            confirmButtonText: 'Sim',
            denyButtonText: `Não`,
            }).then(async (result) => {

                if (result.isConfirmed) {

                await deleteDoc(exluir)

                Swal.fire({
                    icon: 'success',
                    background: '#000e30',
                    color: '#fff',
                    title: 'Deletado!',
                    text: `Seu arquivo ${nome} foi excluído.`,
                    timer: 2500,
                    timerProgressBar: true,
                })

                } else if (result.isDenied){

                    Swal.fire({
                        icon: 'error',
                        background: '#000e30',
                        color: '#fff',
                        title: 'Cancelado!',
                        text: `Seu arquivo ${nome} está seguro :)`,
                        timer: 2500,
                        timerProgressBar: true,
                    })

                return

                }
            })
    }

    const addfav = (data) =>{
    favoritos(data)
    }

    function atualizarStatus(id, status) {
        setStatus(status)
        setTimeout(() => {
        disponibilidade(id, status);
        },100);
    }

    function disponivel(id){
        atualizarStatus(id, 'disponivel')
    }

    function esgotado(id){
        atualizarStatus(id, 'esgotado')
    }

    async function disponibilidade(id, status){
        const docStatus = doc(db, `${categoria}`, id)

        await updateDoc(docStatus,{
            Disponibilidade: status
        })
    }


    return(
        <motion.div 
        {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.2 }}
        className='Card'>

                {Disponibilidade === 'esgotado' ? <Ribbon/> : <></>}
                
                {!user.adm === false ?
                <button className='favorites'>
                    <Link to={`/Addprodutos/${data.id}/${categoria}`}><FiEdit size={30} color='#FFF9'/></Link>
                </button> 
                :
                <button className='favorites'  onClick={()=>addfav({nome:nome, imagem:imagem, id:id, user: user.uid})}>
                        <MdFavoriteBorder size={30} color='#a52a2a'/>
                </button> 
                }

    

                <motion.img
                    whileHover={{ scale: 1.1 }}
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ ...transition, duration: 1.45, delay: 0.7 }}
                src={imagem} alt='img' />

                <button className='tituloRef' >
                    <h3>{nome}</h3>
                </button>

                <p>{descricao}</p>
                <strong>R$ {formatCurrency(preco, "BRL").replace(".", ",")}</strong>
                    
                {!user.adm === false ? 
                <div>
                    <button type='button' onClick={exluir} >Excluir</button>
                    {Disponibilidade === 'esgotado' ? <button type='button' onClick={()=>disponivel(id)} >Disponivel</button> : <button type='button' onClick={()=>esgotado(id)} >Esgotado</button>}
                </div>
                :
                <div>
                    {Disponibilidade === 'esgotado' ? <></>:
                    <>
                    <span onClick={menos}><IoMdRemoveCircle/></span>
                    <span> {quantidade<10 ? `0${quantidade}` : quantidade}</span>
                    <span onClick={mais}><IoMdAddCircle/></span>

                    <button type='button' onClick={()=> add({quantidades:quantidade, nome:nome, imagem:imagem, preco:preco, id:id})}>Incluir</button>
                    </>
                    }
                </div>
                }
                
            </motion.div>
    )
}
