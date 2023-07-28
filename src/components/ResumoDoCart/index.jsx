import { Link } from 'react-router-dom'
import { MdPix} from 'react-icons/md'
import {IoCloseSharp, IoSearch} from 'react-icons/io5'
import {FaMapMarkedAlt, FaRegMoneyBillAlt, FaRegCreditCard, FaPix} from 'react-icons/fa'
import './ResumoDoCart.css'
import {ContextGlobal} from '../../contexts/auth'
import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2'
import { scaleUp} from '../../utils/Animations'
import {motion} from 'framer-motion'
import formatCurrency from '../../utils/formatCurrency'
/////////////////////////////////////////////////////////
import {db} from '../../pages/firebase'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import { set } from 'date-fns'




export default function ResumoDoCart(){
    const {modal, setModal, onCart, setOnCart ,user, setOffcart, whatsappPic, setWhatsappPic,dadosLocal} = useContext(ContextGlobal)

    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState ('')
    const [bairro, setBairro] = useState ('')
    const [numero, setnumero] = useState ('')
    const [cidade, setCidade] = useState ('')
    const [complemento, setComplemento] = useState ('')
    const [status, setStarus] = useState ('pendente')
    const [pay, setPay]= useState('pix')
    const [payTroco, setPayTroco]= useState('')
    const [modalpay, setModalpay] = useState(false)
    const [img, setImg] = useState(null)

    const navigate = useNavigate();





    const total = onCart.reduce((accumulator, currentItem) => {
        const subtotal = currentItem.quantidades * currentItem.preco;
        return accumulator + subtotal;
    }, 0);







    async function fultebol(){
    
        const options = {
            method: 'GET',
                url: 'https://whatsapp-profile-pic.p.rapidapi.com/wspic/url',
                params: {
                phone: `55${user.telefone}`
                },
                headers: {
                'X-RapidAPI-Key': 'f1eb0cc909msh1e37b957262260cp175866jsnba83f47c3e37',
                'X-RapidAPI-Host': 'whatsapp-profile-pic.p.rapidapi.com'
                }
            };
            
            try {
                const response = await axios.request(options);
                setWhatsappPic(response.data);
                console.log(response.data)
            } catch (error) {
                console.error(error);
            }
        }
    fultebol()
        











////////////////////////////////// huscando cep com api viacep/////////////////////////////////////////////////////////////////
        async function fetchCepData() {

                const ceps = cep.trim().replace(/\D/g, '')
    
            if(ceps !== ''){ 
                const validacep = (/^[0-9]{8}$/);

                if(validacep.test(ceps)){
                    const response = await axios.get('https://viacep.com.br/ws/'+ceps+'/json/');
                    
                    if(response.data.erro === true){

                        Swal.fire({
                            position: 'top',
                            icon: 'error',
                            title: 'Não encontramos o seu endereço!',
                            showConfirmButton: false,
                            timer: 1500,
                            background: '#00070A',
                            color:'#fff',
                        })

                    }else{

                        setEndereco(response.data.logradouro)
                        setBairro(response.data.bairro)
                        setCidade(response.data.localidade)
                        setCep(response.data.cep)
                    }

                }else{
                    Swal.fire({
                        position: 'top',
                        icon: 'error',
                        title: 'esse cep não existe!',
                        showConfirmButton: false,
                        timer: 1500,
                        background: '#00070A',
                        color:'#fff',
                    })
                }
            }else{
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Todos os campos devem esta preenchidos!',
                    showConfirmButton: false,
                    timer: 1500,
                    background: '#00070A',
                    color:'#fff',
                })
            }
        
        
        };

        function gerarNumeroAleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const numeroAleatorio = gerarNumeroAleatorio(10, 5000);
        
    ////////////////////////////////// enviando pedido/////////////////////////////////////////////////////////////////////
        async function finalizarpedido(e){
            e.preventDefault();

            
                await addDoc(collection(db, "Pedidos"),{
                    cliente: user.nome,
                    clienteId: user.uid,
                    date: new Date(),
                    cep: cep,
                    endereco: endereco,
                    bairro: bairro,
                    numero: numero,
                    cidade: cidade,
                    complemento: complemento,
                    status: status,
                    pratos: onCart,
                    volorTotal: total.toFixed(2),
                    pay: pay,
                    payTroco: payTroco,
                    clienteTel: user.telefone,
                    numeroDopedido: numeroAleatorio
                })
                .then(()=>{
                    navigate('/pedidos')
                    setTimeout(()=>{
                        setOnCart([])
                        setModal(false)
                        setOffcart(false)
                    },3000)
                })
                .catch(()=>{
                    alert('nao foi')
                })
            }
///////////////////////////////////// buscando pedidos em tempo real /////////////////////////////////////
        function opcaoselecionada(e){
            setPay(e.target.value);
        }
        

    return(
        <motion.div {...scaleUp} className={!modal ? 'modaloff': "ResumoDoCart--principal"}>

            <div className='ResumoDoCart--seguandaria'>
                <button className='btn_fechar_modal' onClick={() => setModal(!modal)}><IoCloseSharp size={45}/></button>
                <h1>Endereço de entrega:</h1>
            <form>

                <label htmlFor="CEP" className='CEP'>
                <input
                type='text'
                name='CEP'
                required
                placeholder='Seu cep:'
                value={cep}
                onChange={(e)=> setCep(e.target.value)}
                />
                <button onClick={fetchCepData}>
                    <IoSearch color='#fff'/>
                </button>
                </label>

                <label htmlFor='Endereço'>
                    <input 
                    type="text"
                    name='Endereço'
                    required
                    placeholder='Seu endereço:'
                    value={endereco}
                    onChange={(e) => setEndereco (e.target.value)}
                    />
                </label>

                <label htmlFor='Bairro'>
                    <input 
                    type="text"
                    name='Bairro'
                    required
                    placeholder='Seu bairro:'
                    value={bairro}
                    onChange={(e) => setBairro (e.target.value)}
                    />
                </label>

                <label htmlFor='Número'>
                    <input 
                    type="number"
                    name='Endereço'
                    required
                    placeholder=' Número:'
                    onChange={(e) => setnumero (e.target.value)}
                    />
                </label>

                <label htmlFor='Cidade'>
                    <input 
                    type="text"
                    name='Cidade'
                    required
                    placeholder='Cidade:'
                    value={cidade}
                    onChange={(e) => setCidade (e.target.value)}
                    />
                </label>

                <label htmlFor='Complemento'>
                    <input 
                    type="text"
                    name='Complemento'
                    placeholder='Complemento:'
                    onChange={(e) => setComplemento (e.target.value)}
                    />
                </label>

            </form>

            {cep !=='' && endereco !=='' && bairro !=='' && numero !=='' && cidade !== '' ?
                    <button className='btn' onClick={() => setModalpay(!modalpay)}>selecione a forma de pagamento</button>
                :
                <></>
            }
            </div>



            <div className={!modalpay ? 'modaloff':'ResumoDoCart--pay'}>
            <h1 style={{textAlign: 'center', marginTop: '15px', marginBottom: '15px'}}>selecione a forma de pagamento !</h1>
            <button className='btn_fechar_modal' onClick={() => setModalpay(!modalpay)}><IoCloseSharp size={45}/></button>
                <label className='Moneys' >
                    
                    <label htmlFor='Card'>
                        <input
                        type='radio'
                        value='débito/crédito'
                        onChange={opcaoselecionada}
                        checked={pay === 'débito/crédito'}
                        />
                        <FaRegCreditCard/>
                        débito / crédito
                    </label>

                    <label htmlFor='money'>
                        <input
                        type='radio'
                        value='dinheiro'
                        onChange={opcaoselecionada}
                        checked={pay === 'dinheiro'}
                        />
                        <FaRegMoneyBillAlt/>
                        dinheiro
                    </label>

                    <label htmlFor='pix'>
                        <input
                        type='radio'
                        value='pix'
                        onChange={opcaoselecionada}
                        checked={pay === 'pix'}
                        />
                        <MdPix/>
                        pix
                    </label>
                </label>
            
            {pay === 'dinheiro' ?
            <>
            <p style={{marginTop: '35px'}} >Valor do seu pedido: {formatCurrency(total, 'BRL')}</p>
            <label htmlFor='Troco'>
            <input 
            type="number"
            name='Troco'
            placeholder='Digite o valor do troco'
            onChange={(e) => setPayTroco (e.target.value)}
            />
            </label>
            </>
            :<>
            </>}
            <button className='btn' onClick={finalizarpedido}>Finalizar pedido :)</button>
            </div>
        </motion.div>
    )
}