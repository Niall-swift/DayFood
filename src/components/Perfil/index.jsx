import {FiSettings, FiUpload} from 'react-icons/fi'
import {motion} from 'framer-motion'
import {fadeInDown} from '../../utils/Animations'
import Titulo from '../pages_titulos'
import './perfil.css'
import { Link, useNavigate } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import { useContext, useState } from 'react'
import avatarimg from '../../assets/undraw_pic_profile_re_7g2h.svg'

import {ContextGlobal} from '../../contexts/auth'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../../pages/firebase'
import { updateDoc, doc } from 'firebase/firestore'
import {db} from '../../pages/firebase'
import Swal from 'sweetalert2'




export default function Perfil(){
    const {user, setUser, dadosLocal, whatsappPic} = useContext(ContextGlobal)

    const [userName, setUserName] = useState(user && user.nome)
    const [avatar, setAvatar] = useState(user && user.avatar)
    const [avatar2, setAvatar2] = useState(null)
    const navigate = useNavigate();

    function carregaimg(e){
                
        if(e.target.files[0]){
            const image = e.target.files[0];

            if(image.type === 'image/jpeg' || image.type === 'image/png'){

                setAvatar2(image)
                setAvatar(URL.createObjectURL(image))
            }else{
                alert('isso nao ta bom')
                setAvatar2(null)
                return;
            }
        }
        
    }

    async function atualizaPerfil(e){
        e.preventDefault();
        

        const upRef = ref(storage, `perfil/${user.uid}/${avatar.name}`)

        const igRef = uploadBytes(upRef, avatar2)
        .then((snapshot)=>{
            getDownloadURL(snapshot.ref).then(async (downloadURL)=>{
                let fotoIg = downloadURL


                const docRef = doc(db, "usuarios", user.uid)
                await updateDoc(docRef, {
                    avatar: fotoIg
                })
                .then(()=>{
                    let data ={
                        ...user,
                        avatar: fotoIg
                    }
                    Swal.fire({
                        position: 'top',
                        icon: 'sussece',
                        title: 'Usuário e/ou senha inválidos',
                        showConfirmButton: false,
                        timer: 1500,
                        background: '#00070A',
                        color:'#fff',
                    })
                    dadosLocal(data)
                    navigate('/home')
                })
            })
            .catch(()=>{
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'essa foto não e compativel',
                    showConfirmButton: false,
                    timer: 1500,
                    background: '#00070A',
                    color:'#fff',
                })
            })
                
            
        })
    }



    return(
        <motion.div 
        {...fadeInDown}
        transition={{ ...fadeInDown.transition, duration: 1.25 }}
        >

            <Link to='/Home'>
            <div className='btn-voltar'><button>
                <IoIosArrowBack size={35}/>Voltar
            </button></div>
            </Link>

        <div className='content'>
            <Titulo titulos='Meu perfil'>
                <FiSettings size={25} color='#fff'/>
            </Titulo>

            <div className='conteiner'>

                <form className='From-perfil'>
                    <label className='label-avatar'>
                        <span>
                            <FiUpload color='#fff' size={25}/>
                        </span>
                        <input type='file' accept='image/*' onChange={carregaimg}/>
                        {avatar === null ? ( <img src={whatsappPic} alt='foto de perfil'/> ) : (<img src={avatar} alt='foto de perfil'/>)}
                        
                    </label>

                    <label className='nome_input'style={{marginLeft: '-85%'}}>Nome</label>
                    <input type='text' value={userName} />

                    <label className='nome_input' style={{marginLeft: '-85%'}}>Email</label>
                    <input type='text'disabled={true} />

                    <button className='btn' onClick={atualizaPerfil}>Salvar</button>


                </form>

            </div>
        </div>
        </motion.div>
    )
}