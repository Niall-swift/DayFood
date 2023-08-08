
import { MdPix} from 'react-icons/md'
import {FaMapMarkedAlt, FaRegMoneyBillAlt, FaRegCreditCard, FaArrowLeft} from 'react-icons/fa'
import {Content, Form, ModalPay, Map, Contentpay} from './enderecoStyled'
import {ContextGlobal} from '../../contexts/auth'
import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2'
import formatCurrency from '../../utils/formatCurrency'
/////////////////////////////////////////////////////////
import {db} from '../../pages/firebase'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'




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

    const navigate = useNavigate();





    const total = onCart.reduce((accumulator, currentItem) => {
        const subtotal = currentItem.quantidades * currentItem.preco;
        return accumulator + subtotal;
    }, 0);







    async function whatPic(){
    
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
            } catch (error) {
                
            }
        }
    whatPic()
        



    // async function virfica(){
    //     const options = {
    //         method: 'GET',
    //         url: 'https://whatsapp-checker-pro.p.rapidapi.com/5521990414180',
    //         headers: {
    //             'X-RapidAPI-Key': 'f1eb0cc909msh1e37b957262260cp175866jsnba83f47c3e37',
    //             'X-RapidAPI-Host': 'whatsapp-checker-pro.p.rapidapi.com'
    //             }
    //         };
            
    //         try {
    //             const response = await axios.request(options);
    //             console.log(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    // }
    // virfica()
    






////////////////////////////////// huscando cep com api viacep/////////////////////////////////////////////////////////////////
        useEffect(()=>{
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
        if(cep.length === 8){
            fetchCepData();
        }
    },[cep])

        function gerarNumeroAleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const numeroAleatorio = gerarNumeroAleatorio(10, 5000);
        
    ////////////////////////////////// enviando pedido/////////////////////////////////////////////////////////////////////
        async function finalizarpedido(e){
            e.preventDefault();

            
            Swal.fire({
                text: 'Seu pedido esta sendo eviado para cozinha !',
                imageUrl: 'https://media.giphy.com/media/A5ugHVbuFL3uo/giphy.gif',
                imageWidth: 400,
                imageHeight: 300,
                allowOutsideClick: false,
                showConfirmButton: false,
                timer: 6000,
                timerProgressBar: true,
            }).then(async()=>{
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
            })
                
            }
///////////////////////////////////// buscando pedidos em tempo real /////////////////////////////////////
        function opcaoselecionada(e){
            setPay(e.target.value);
        }
        

    return(
        <Content ismodal={!modal}>
            <button className='valta' onClick={() => setModal(!modal)}> <FaArrowLeft/> Voltar</button>
            <Form>
            <form>

                <label>Cep</label>
                <input
                type='text'
                name='CEP'
                required
                placeholder='Seu cep:'
                value={cep}
                onChange={(e)=> setCep(e.target.value)}
                />

                <label>Endereço</label>
                <input 
                    type="text"
                    name='Endereço'
                    required
                    placeholder='Seu endereço:'
                    value={endereco}
                    onChange={(e) => setEndereco (e.target.value)}
                    />

                <label>Bairro</label>
                <input 
                    type="text"
                    name='Bairro'
                    required
                    placeholder='Seu bairro:'
                    value={bairro}
                    onChange={(e) => setBairro (e.target.value)}
                    />

                <label>Número:</label>
                <input 
                    type="number"
                    name='Endereço'
                    required
                    placeholder='número ou s/n'
                    onChange={(e) => setnumero (e.target.value)}
                    />

                <label>Cidade:</label>
                <input 
                    type="text"
                    name='Cidade'
                    required
                    placeholder='Cidade'
                    value={cidade}
                    onChange={(e) => setCidade (e.target.value)}
                    />

                <label>Complemento (opcional) </label>
                <input 
                    type="text"
                    name='Complemento'
                    placeholder='Complemento'
                    onChange={(e) => setComplemento (e.target.value)}
                    />

            </form>

            {cep !=='' && endereco !=='' && bairro !=='' && numero !=='' && cidade !== '' ?
                    <button onClick={() => setModalpay(!modalpay)}>Continuar</button>
                :
                <></>
            }
            </Form>



            <Contentpay ispay={!modalpay}>

            <button className='valta' onClick={() => setModalpay(!modalpay)}> <FaArrowLeft/> Voltar</button>

                <ModalPay>
                
                    <label htmlFor='Card'>
                        <input
                        type='radio'
                        value='débito/crédito'
                        onChange={opcaoselecionada}
                        checked={pay === 'débito/crédito'}
                        placeholder='card'
                        />
                        <FaRegCreditCard/>
                        card
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

            

            {pay === 'dinheiro' ?
            <div className='pay_select'>
            <label htmlFor='Troco'>
            Valor do seu pedido: {formatCurrency(total, 'BRL')}
            <input 
            type="number"
            name='Troco'
            placeholder='Digite o valor do troco aqui!'
            onChange={(e) => setPayTroco (e.target.value)}
            />
            </label>
            </div>
            :
            <>
            </>
            }
                </ModalPay>
            <button className='pedi' onClick={finalizarpedido}>Enviar pedido</button>

            <Map>
                <FaMapMarkedAlt/>
                <div>
                    <h3>Local da entrega:</h3>
                    <p>{endereco},<p>{numero},{bairro}</p></p>
                    <p>{cidade}/{cep}</p>
                </div>
            </Map>
            
            </Contentpay>

        </Content>
    )
}