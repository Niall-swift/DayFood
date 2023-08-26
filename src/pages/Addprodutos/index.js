import { useContext, useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'

/// compornetes
import Header from '../../components/Hearder'
import {ContextGlobal} from '../../contexts/auth'

//// impor toutes
import {useNavigate} from 'react-router-dom'

/// css styles
import './add.css'
import { PageTransition } from '../../components/PageAnimation'

/// icone
import {IoIosArrowBack} from 'react-icons/io'
import { FiUpload } from 'react-icons/fi';

/// firebase
import {db, storage} from '../firebase'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'

/// img
import img from '../../assets/undraw_breakfast_psiw.png'
import { SnapshotMetadata, addDoc, collection, getDocs, updateDoc, doc , getDoc} from 'firebase/firestore'

/// toast
import Swal from 'sweetalert2'







export default function Addprodutos(){
    const {user, onCart} = useContext(ContextGlobal)
    const navigate = useNavigate();

    const [imagem, setImagem] = useState(null)

    const [nome, setNome] = useState('')

    const [categoria, setCategoria] = useState("Refeição")

    const [preco, setPreco] = useState('')

    const [ingredientes, setIngredientes] = useState([])

    const [edit, setEdit] = useState(false)

    const [descricao, setDescricao] = useState('')

    const [image, setImage] = useState (null)

    const [disponibilidade, setDisponibilidade] = useState('disponivel')

    const { Categoria, id} = useParams()

    let listar = collection(db, `${Categoria}`)

 /// buscando e colocando os dados para a edicao do prato//////////////////////////////////////////////////////////////////
    useEffect(()=>{
        async function itemEdit(){
            const item = await getDocs(listar)
            .then((snapshot)=>{
                let lista = [];
                snapshot.forEach((doc)=>{
                    lista.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        preco: doc.data().preco,
                        imagem: doc.data().imagem,
                        descricao: doc.data().descricao,
                        categoria: doc.categoria,
                    })
                    
                })
                if(id){
                    itemsload(lista)
                }
            })
        }
        itemEdit()
},[id])

async function itemsload(lista){
    const docRef = doc(db, `${Categoria}`, id)
    await getDoc(docRef)
    .then((snapshot)=>{
        setNome(snapshot.data().nome)
        setPreco(snapshot.data().preco)
        setDescricao(snapshot.data().descricao)
        setImagem(snapshot.data().imagem)
        setCategoria(Categoria)

        setEdit(true)
    })
    .catch((error)=>{
        Swal.fire({
            icon: 'error',
            title: `Oops...${error}`,
            timer: 1500,
            timerProgressBar: true,
        })
        setEdit(false)
    })
    
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/// sistema de previw da imagem do prato////////////////////////////////////////////////////////////////////////////
    function pegar_img(e){
        if(e.target.files[0]){
            const image = e.target.files[0];
            if(image.type === 'image/jpeg' || image.type === 'image/png'){
                setImage(image)
                setImagem(URL.createObjectURL(image))
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Esse tipo de imagem não e pemitido',
                    timer: 1500,
                    timerProgressBar: true,
                })
                setImagem(null)
                return;
            }
        }

    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//// cardastrando prato e imagem/////////////////////////////////////////////////////////////////////////////////////////
async function cardastra(e){
    e.preventDefault();
    if(nome !=='' && preco !=='' && image !== null){

        await addDoc(collection(db, `${categoria}`),{
    
            data: new Date(),
            nome: nome,
            Disponibilidade: disponibilidade,
            preco: preco.replace(",", "."),
            categoria: categoria,
            ingredientes: ingredientes,
            descricao: descricao,
            imagem: null
    
        })
        .then((snapshot)=>{

            let idprod = snapshot.id
            
            
            const envia = ref(storage, `${categoria}/${idprod}/${image.name}`)

            const enviaImg = uploadBytes(envia, image)
            .then((snapshot)=>{
                getDownloadURL(snapshot.ref).then( async(downloadURL) =>{
                    let Urlimg = downloadURL;
        
                    const docref = doc(db, `${categoria}`, idprod)
                    await updateDoc(docref, {
                        imagem: Urlimg
                    })
                })
                Swal.fire({
                    icon: 'success',
                    title: 'Prato criado com sucesso!!!',
                    timer: 1500,
                    timerProgressBar: true,
                })
                setNome('')
                setPreco('')
                setDescricao('')
                setCategoria('')
                setTimeout(()=>{
                    navigate('/home')
                },1600)
            })
            .catch((error)=>{
                Swal.fire({
                    icon: 'error',
                    title: `Oops...${error}`,
                    timer: 1500,
                    timerProgressBar: true,
                })
            })
        })
    }else{
            Swal.fire({
                icon: 'error',
                title: 'Os campos devem ser preenchidos corretamente',
                timer: 1500,
                timerProgressBar: true,
            })
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////// systema de atualiza prato///////////////////////////////////////////////////////////////////////////////////

async function atualiza(e){
    e.preventDefault();
    if(edit){
        const docRef = doc(db, `${categoria}`, id)
            await updateDoc(docRef, {
                nome: nome,
                preco: preco.replace(",", "."),
                descricao: descricao
            })
            .then(()=>{
                Swal.fire({
                    icon: 'success',
                    title: 'Esse prato foi editado com success',
                    timer: 1500,
                    timerProgressBar: true,
                })
                setTimeout(()=>{
                    navigate('/home')
                },1600)
            })
        return;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////
function categoria_select(e){
    setCategoria(e.target.value)
}







    return(
        <>
        <PageTransition/>
        
        <div className='Container'>
                
        {user.adm ?
        <main className='meio'>


            {/* esser e o botão de voltar */}
            <Link to='/Home'>
            <div className='btn-voltar'><button>
                <IoIosArrowBack size={35}/>Voltar
            </button></div>
            </Link>


            <h2 className='Tituo-page'>{id ? `Edita prato -> ${nome}` : 'Adicionar  prato'}</h2>

            <div className='input-page'>
                <form className='form-evia-prato'>
                    <label className='label-imagem'><span>Imagem do prato</span>
                    <span> <FiUpload size={35}/> </span>
                    <input onChange={pegar_img}
                    type='file'
                    accept='image/*'
                    placeholder='Selecione uma imagem'
                    />
                    {imagem == null ? (<img src={img} alt='fote da comida'/> ) : (<img src={imagem} alt='fote da comida'/>)}
                    </label>
                    


                    <label><span className='nome_input'>Nome</span>
                    <input className='input-prato' onChange={(e)=>setNome(e.target.value)}
                    label='Nome'
                    title='Nome do prato'
                    type='text'
                    value={nome}
                    placeholder='Ex.: Salada Ceasar'
                    />
                    </label>

                    <label><span className='nome_input'>Preço</span></label>
                    <input className='input-prato' onChange={(e)=>setPreco(e.target.value)}
                    label='Nome'
                    title='Preço'
                    type='number'
                    placeholder='R$ 00,00'
                    value={preco}
                    />

                    <label><span className='nome_input'>Categoria</span></label>
                    <select className='Categoria' value={categoria} onChange={categoria_select}>
                        <option>Refeição</option>
                        <option>Sobremesa</option>
                        <option>Berbida</option>
                        <option>Pizza</option>
                        <option>hamburguer</option>
                        <option>espetinhos</option>
                        <option>cerveja</option>
                    </select>


                    <label><span className='nome_input'>descrição</span></label>
                    <textarea onChange={(e)=>setDescricao(e.target.value)}
                    type='text'
                    placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                    value={descricao}
                    />
                    {id ? <button className='btn' onClick={atualiza}>Salvar alterações</button> : <button className='btn' onClick={cardastra}>Cardastra prato</button>}
                </form>
            </div>
        </main>
        :
        <main>
            gay
        </main>
        }
        </div>
        </>
    )
}