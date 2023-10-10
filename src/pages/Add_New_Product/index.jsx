import { useContext, useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'

/// compornetes
import {ContextGlobal} from '../../contexts/auth'

//// impor toutes
import {useNavigate} from 'react-router-dom'

/// css styles
import {Container, Group_input, File_Upload} from './Styled_Add_New_Product'
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
        
        <Container>
                
        {user.adm ?
        <main className='meio'>


            {/* esser e o botão de voltar */}
            <Link to='/Home'>
            <div className='btn-voltar'><button>
                <IoIosArrowBack size={35}/>Voltar
            </button></div>
            </Link>


            <h2 className='Tituo-page'>{id ? `Edita prato -> ${nome}` : 'Adicionar  prato'}</h2>

            <Group_input>

                <form className='form-evia-prato'>

                    <File_Upload>
                        
                    <span> <FiUpload size={35}/> </span>
                    <input onChange={pegar_img}
                    type='file'
                    accept='image/*'
                    placeholder='Selecione uma imagem'
                    />
                    {imagem == null ? (<img src={img} alt='fote da comida'/> ) : (<img src={imagem} alt='fote da comida'/>)}
                    
                    </File_Upload>
                    


                    <label htmlFor="patro" >Nome do prato</label>
                    <input onChange={(e)=>setNome(e.target.value)}
                    type='text'
                    value={nome}
                    placeholder='Ex.: Salada Ceasar'
                    />

                    <label>Preço</label>
                    <input onChange={(e)=>setPreco(e.target.value)}
                    title='Preço'
                    type='number'
                    placeholder='R$ 00,00'
                    value={preco}
                    />

                    <label>Categoria</label>
                    <select value={categoria} onChange={categoria_select}>
                        <option>Refeição</option>
                        <option>Sobremesa</option>
                        <option>Berbida</option>
                        <option>Pizza</option>
                        <option>Hamburguer</option>
                        <option>Espetinhos</option>
                        <option>Cerveja</option>
                        <option>Massas</option>
                    </select>


                    <label>descrição</label>
                    <textarea onChange={(e)=>setDescricao(e.target.value)}
                    type='text'
                    placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                    value={descricao}
                    />
                    {id ? <button className='btn' onClick={atualiza}>Salvar alterações</button> : <button className='btn' onClick={cardastra}>Cardastra prato</button>}
                </form>
            </Group_input>

        </main>
        :
        <main>
            gay
        </main>
        }
        </Container>
        </>
    )
}