import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {setDoc, doc, getDoc,} from 'firebase/firestore'
import {auth, db} from '../pages/firebase'
import {createContext, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2';


export const ContextGlobal = createContext({});

function AutorizarClientes( { children } ){

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [cadastrarLoad, setCadastrarLoad] = useState(false);
    const [dadosload, setDadosload] = useState(true);
    const [onCart, setOnCart] = useState ([]);
    const [offcart, setOffcart] = useState (false)
    const [fav, setFav] = useState([])
    const [favItem, setFavItem] = useState([])
    const [categoria, setCategoria] = useState ('Refeição')
    const [modal, setModal] = useState(false)
    const [busNome, setBusNome] = useState('')
    
    
    //Cadastrar usuário
    async function cadastrarUsuario(nome, telefone, email, senha){
        setCadastrarLoad(true);

        await createUserWithEmailAndPassword(auth,email,senha)
        .then(async (value)=>{
            let uid = value.user.uid

            await setDoc(doc(db, "usuarios", uid),{
                nome: nome.split(' '),
                telefone: telefone,
                email: email,
                avatar: null
            })
            .then(()=>{
                let data ={
                    uid: uid,
                    nome: nome.split(' '),
                    telefone: telefone,
                    email: value.user.email,
                    avatar: null
                };
                setUser(data);
                dadosLocal(data)
                navigate('/Home', {replace: true})
                setCadastrarLoad(false)

            })
        })
        .catch(()=>{
            setCadastrarLoad(false)
        })
    }
    //////////////////////


    // Fazendo login com o usuario
    async function login(email,senha){
        setCadastrarLoad(true);
        if(email !=='' && senha !==''){
            await signInWithEmailAndPassword(auth, email, senha)
            .then( async (value)=>{
                let uid = value.user.uid

                const docRef = doc(db, "usuarios", uid)
                const docSnap = await getDoc(docRef)

                let data = {
                    uid: uid,
                    nome: docSnap.data().nome,
                    telefone: docSnap.data().telefone,
                    email: value.user.email,
                    avatar: docSnap.data().avatar,
                    adm: docSnap.data().adm
                };
                setUser(data)
                dadosLocal(data)
                navigate('/Home', {replace: true})
                setCadastrarLoad(false)
            })
            .catch(()=>{
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Usuário ou senha inválidos',
                    showConfirmButton: false,
                    timer: 1500,
                    background: '#00070A',
                    color:'#fff',
                })
                setCadastrarLoad(false)
            })
            
        }
    }
    /////////////////////

    // salvando dados do usuario no local
    function dadosLocal (data){
        localStorage.setItem('@dadosusuario', JSON.stringify(data))
    }
    ////////////////////

    //buscando dados locais
    useEffect(()=>{
        async function loginComDadosLocais(){
            const dadosLocal = localStorage.getItem('@dadosusuario');

            if(dadosLocal){
                setUser(JSON.parse(dadosLocal))
                setDadosload(false)
            }

            setDadosload(false)
        }
        loginComDadosLocais();
    },[])
    ///////////////////

    // saindo da conta e removendo os dados locais
    async function exit(){
        await signOut(auth)
        .then(()=>{

            localStorage.removeItem('@dadosusuario')
            setUser(null)
            navigate('/')
        })
        .catch(()=>{
            alert('não consigo sair agora :(')
        })
    }
    //////////////////

    ////pratos favoritos
    function favoritos(data){
        const dadosFavorito = localStorage.getItem("@favoritos");
        let pratoSalvor = JSON.parse(dadosFavorito) || [];
        const hasprato = pratoSalvor.some((pratoSalvor) => pratoSalvor.id === data.id)

        if(hasprato){
            alert('esse ja e seu')
            return
        }else{
            pratoSalvor.push(data)
            localStorage.setItem("@favoritos", JSON.stringify([...pratoSalvor]))
        }
    } 
    ///////////////////
    useEffect(()=>{
        async function favoritosSalvos(){
            const favorito = localStorage.getItem("@favoritos");

                setFavItem(JSON.parse(favorito))
        }
        favoritosSalvos()
    },[])
///////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////


    return(
        <ContextGlobal.Provider value={{
            usuario: !!user,
            user,
            cadastrarLoad,
            cadastrarUsuario,
            login,
            dadosload,
            exit,
            dadosLocal,
            onCart,
            setOnCart,
            offcart,
            setOffcart,
            favoritos,
            fav,
            setFav,
            favItem,
            setFavItem,
            categoria,
            setCategoria,
            modal,
            setModal,
            busNome,
            setBusNome
            

        }}>
            {children}
        </ContextGlobal.Provider>
    )
        
}
export default AutorizarClientes;