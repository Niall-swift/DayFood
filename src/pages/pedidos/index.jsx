////////////////////// imports necesarios //////////////////
import {Content, Button, Contenti, Alink} from './pedidosStyled'
import Header from '../../components/Hearder'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Howl } from "howler";
import {scaleUp} from '../../utils/Animations'
import {motion} from 'framer-motion'
import {format, set} from 'date-fns';
import PedidoDosCliente from './pedidoDosClientes';
import Titulo from '../../components/pages_titulos';
import formatCurrency from '../../utils/formatCurrency';
/////////////////////////////////////////////////////////////////////////
import {db} from '../../pages/firebase'
import {collection, doc, onSnapshot, orderBy, query, updateDoc, where } from 'firebase/firestore'
import {ContextGlobal} from '../../contexts/auth'


///////////////////// icones////////////////////////////////
import {IoIosArrowBack} from 'react-icons/io'
import Swal from 'sweetalert2';
import { useContext } from 'react';





export default function Pedidos(){
    const {user} = useContext(ContextGlobal)
    const [forPedidos, setForPedidos] = useState ([])
    
    const [status, setStatus] = useState ('pendente')

    

    useEffect(() => {
        document.body.style.overflowY = 'auto';
    }, []);



/////////////////////// buscando todos os pedidos para o adm ////////////////////////////////////////////////////////////////
    useEffect(()=>{

        async function buscapedido(){
            const listapedidos = collection(db, "Pedidos")

            const q = query(listapedidos, orderBy('date', 'desc'))

            const unsub = onSnapshot(q,(snapshot) => {

            let lista = [];
                snapshot.forEach((doc) =>{
                    lista.push({
                        cliente: doc.data().cliente,
                        clienteId: doc.data().clienteId,
                        id: doc.id,
                        data: doc.data().date,
                        dateFormat: format(doc.data().date.toDate(), 'dd/MM/yyyy'),
                        timeFormat: format(doc.data().date.toDate(), 'HH:mm:ss'),
                        cep: doc.data().cep,
                        endereco: doc.data().endereco,
                        bairro: doc.data().bairro,
                        numero: doc.data().numero,
                        cidade: doc.data().cidade,
                        complemento: doc.data().complemento,
                        status: doc.data().status,
                        pratos: doc.data().pratos,
                        pay: doc.data().pay,
                        payTroco: doc.data().payTroco,
                        volorTotal: doc.data().volorTotal,
                        clienteTel: doc.data().clienteTel,
                        numeroDopedido: doc.data().numeroDopedido
                    })
                    setForPedidos(lista)
                    
                })
            })
        }
        buscapedido()
    },[])
////////////////////////////////////////////////////////////////////////////////////

///////////////// trocando status///////////////////////////////////////////////////
function atualizarStatus(item, status) {
        setStatus(status);
        setTimeout(() => {
        atualizaStatus(item, status);
        },100);
    }
    
    function status1(item) {
        Swal.fire({
            title: 'Você tem certeza que deseja recusar esse pedido ?',
            showDenyButton: true,
            confirmButtonText: 'Sim',
            denyButtonText: `Não`,
            }).then((result) => {
                if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
                atualizarStatus(item, 'recusado', 'seu pedido foi recusado ');
                setTimeout(()=>{
                    recusandoPedido(item)
                },900)
                } else if (result.isDenied) {
                return
                }
            })
    }
    
    function status2(item, URL) {
        atualizarStatus(item, 'Aceito', 'seu pedido foi aceito');
        
        setTimeout(()=>{
            aceitandoPedido(item)
        },900)

    }
    
    
    function status3(item) {
        atualizarStatus(item, 'Finalizado', 'seu pedido está a caminho');

        setTimeout(()=>{
            fnalizarPedido(item)
        },900)
    }
    
///////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////atualizando status//////////////////////////////////////////////////////
    async function atualizaStatus(item, status){

        const docStatus = doc(db, "Pedidos", item.id)

        await updateDoc(docStatus,{
            status: status
        })
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////]

///////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////// aceitando o pedido e enviando para o whatsapp////////////////////////////////////////
    function aceitandoPedido (item) {

        let itens = '';
        item.pratos.map((i,e) => {
            
        itens += `\n\n*${i.quantidades}x* ${i.nome} ...... R$ ${(i.preco).replace('.',',')}`

        })
        
        let texto =`Olá ${item.cliente} o seu pedido foi aceito e já está sendo preparado :)\n`;
        texto += `\n*Itens do seu pedido:* ${itens}\n`;
        texto += '\n*Endereço de entrega:*';
        texto += `\n${item.endereco}, N° ${item.numero}, ${item.bairro}`;
        texto += `\n${item.cidade} / ${item.cep} ${item.complemento}\n`;
        texto += `\n\n*Total (com entrega): R$ ${formatCurrency(item.volorTotal, 'BRL')}*`;
        texto += `\n\n\n*Data e hora do pedido*\n ${item.dateFormat}  ${item.timeFormat}`
        texto = texto.replace(/\${itens}/g, itens)
        
        let iconde = encodeURI(texto)
        let URL = `https://wa.me/55${item.clienteTel}?text=${iconde}`

        window.open(URL, '_blank').focus();
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////// fnalizando  Pedido //////////////////////////////////////////////////////////////
    function fnalizarPedido(item){
        
        let texto = `“Ei, ${item.cliente} segure a fome que seu pedido já está saindo para entrega”`

        let iconde = encodeURI(texto)
        let URL = `https://wa.me/55${item.clienteTel}?text=${iconde}`

        window.open(URL, '_blank').focus();
    }
///////////////////////// Recusando pedido//////////////////////////////////////////////////////////////
function recusandoPedido(item){
        
    let texto = `“Olá, ${item.cliente}  tivemos que recusa o seu pedido e sentimos muito por isso :(”`;
    texto += '\n\nHá alguns motivos para que isso possa acontecer';
    texto += '\n\n*Exemplo:*';
    texto += '\nEnviou o pedido fora do horário de funcionamento\n\n O seu endereço não está no nosso campo de entrar \n\n O restaurante não tem os itens que você deseja hoje';

    let iconde = encodeURI(texto)
    let URL = `https://wa.me/55${item.clienteTel}?text=${iconde}`

    window.open(URL, '_blank').focus();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
    const statusColors = {
        recusado: '#750310',
        Aceito: '#3583f6',
        Finalizado: '#39b232',
        pendente: '#fe9f24'
    };
    
    


    return(
        <>
            <Alink>
                <Link to='/home'>
                <div className='btn-voltar'><button>
                        <IoIosArrowBack size={35}/>Voltar
                </button></div>
                </Link>
            </Alink>
            

            {forPedidos.length === 0 ?(
                <h3 style={{textAlign: 'center', fontSize: '25px'}}>Nenhum pedido encontrado...</h3>
            ): (
                <>
            {user.adm === true ?
                <Content>    
                        <h1 style={{textAlign: 'center', fontSize: '45px', marginBottom: '25px'}}>Pedidos</h1>

                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Cliente:</th>
                            <th scope='col'>Status:</th>
                            <th scope='col'>Código:</th>
                            <th scope='col'>Pedido do cliente:</th>
                            <th scope='col'>Detalhamento:</th>
                            <th scope='col'>Endereço:</th>
                            <th scope="col"> total de pedidos ({forPedidos.length})</th>
                        </tr>
                    </thead>
    
                    <tbody>
                            {forPedidos.map((item, index) =>{
                                return(
                                <motion.tr {...scaleUp} key={index}>

                                <td data-label='Cliente:'>
                                {item.cliente}
                                </td>

                                <td data-label='Status:'
                                style={{background: statusColors[item.status] || '', fontSize: '18px', fontWeight: '800'}}>
                                {item.status}
                                </td>

                                <td data-label='Código:'>
                                N° {item.numeroDopedido}
                                </td>

                                <td data-label='Pedido do cliente:'>
                                {item.pratos.map((docs)=> (
                                <p style={{marginBottom: '1em', border: '1px solid', fontSize: '15px', fontWeight: '900', padding: '5px'}}>{docs.nome} (X{docs.quantidades})</p>
                                ))}
                                </td>

                                <td data-label='Detalhamento:'>
                                <p>Data e Hora</p>
                                <p style={{fontWeight: '900'}} >{item.timeFormat}</p>
                                <p style={{fontWeight: '900', marginBottom: '1em'}} >{item.dateFormat}</p>

                                <p style={{marginBottom: '1em'}} >Forma de pagamento</p>
                                
                                <p style={{fontWeight: '900', marginBottom: '5px'}} >{item.pay}</p>

                                <p style={{marginBottom: '5px'}} >Total do pedido (R$ {formatCurrency(item.volorTotal, 'BRL')})</p>

                                <p style={{marginBottom: '5px'}} >{item.pay === 'dinheiro' ? <p>{item.payTroco !== '' ? <p style={{fontWeight: '600'}} >Troco para R$ {formatCurrency(item.payTroco, 'BRL')}  </p> : <p style={{fontWeight: '600'}} >'Não precisa de troco'</p>}</p> : ''}</p>

                                <p style={{marginBottom: '5px', fontWeight: '500'}} >{item.payTroco !== '' ? <p style={{fontWeight: '500'}} >(levar ({formatCurrency(item.payTroco - item.volorTotal, 'BRL')}) p/ o cliente)</p> : ''}</p>
                                </td>

                                <td data-label='Endereço:'>
                                <p style={{marginBottom: '1em'}}>CEP : {item.cep}</p>
                                <p style={{marginBottom: '1em'}}>{item.endereco}  N°{item.numero}</p>
                                <p style={{marginBottom: '1em'}}>{item.bairro}</p> <p>{item.complemento}</p>
                                <p style={{marginBottom: '1em'}}>{item.cidade}</p>
                                </td>


                                <td data-label=''>
                                    <Button style={{background: '#750310'}} onClick={()=>status1(item)} value={'Recusar'}>Recusar</Button>
                                    <Button id='BTN_ACEITO' style={{background: '#3583f6'}} onClick={()=>status2(item)} value={'Aceitar'}>Aceitar</Button>
                                    <Button style={{background: '#39b232'}} onClick={()=>status3(item)} value={'Finalizar'}>Finalizar</Button>
                                </td>
                            </motion.tr>
                                )
                            })}
                    </tbody>
    
            </table>
                
        </Content>
            :
                <PedidoDosCliente/>
            }
            </>
            )}

        </>
    )
}