import {Content, Button, Contenti, Alink} from './pedidosStyled'
import {useEffect, useState, useContext} from 'react'
import {db} from '../../pages/firebase'
import {collection, doc, onSnapshot, orderBy, query, updateDoc, where } from 'firebase/firestore'
import {ContextGlobal} from '../../contexts/auth'
import {format, set} from 'date-fns';
import Load from '../../components/load'
import formatCurrency from '../../utils/formatCurrency'





export default function PedidoDosCliente(){
    const {user} = useContext(ContextGlobal)
    const [forPedidosCliente, setForPedidosCliente] = useState ([])
    const [load, setLoad] = useState (true)

////////////// notificação nativa do sistema///////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////buscando pedidos do cliente logado////////////////////////////////////////////////////
useEffect(()=>{

    async function buscapedidouser(){
        const listapedidos = collection(db, 'Pedidos')
        const q = query(listapedidos, orderBy('date', 'desc'), where("clienteId", "==", user?.uid))

        const unsub = onSnapshot(q, (snapshot)=>{

        let lista = [];
            snapshot.forEach((doc) =>{
                if(user){
                    lista.push({
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
                        numeroDopedido: doc.data().numeroDopedido
                    })
                }
                setForPedidosCliente(lista)
                setLoad(false)

                
            })
        })
    }
    buscapedidouser()
},[])
/////////////////////////////////////////////////////////////////////////////////////


    if(load){
        return(
            <Load/>
        )
    }


const statusColors = {
    recusado: '#750310',
    Aceito: '#3583f6',
    Finalizado: '#39b232',
    pendente: '#fe9f24'
};
    return(
        <Contenti>
        <table>

            <thead>
                <tr>
                    <th scope='col'>Status</th>
                    <th scope='col'>Código</th>
                    <th scope='col'>Seu pedido</th>
                    <th scope='col'>Data e Hora</th>
                    <th scope='col'>forma de pagamento </th>
                    <th scope="col">Valor Total</th>
                </tr>
            </thead>

            <tbody>
            {forPedidosCliente.map((item, index) =>{
                return(
                <tr key={index}>

                    <td data-label='Status' 
                    style={{background: statusColors[item.status] || ''}}>
                    {item.status}
                    </td>

                    <td data-label='Código'
                    style={{fontSize: '25px'}}>
                    N° {item.numeroDopedido}
                    </td>

                    <td data-label='Seu pedido'>{item.pratos.map((docs)=> (
                            <p style={{marginBottom: '1em', fontSize: '15px', fontWeight: '300', padding: '5px'}}>{docs.nome}  (X{docs.quantidades})</p>
                        ))}
                    </td>

                    <td data-label='Data e Hora'>
                    <p>{item.timeFormat}</p> 
                    <p>{item.dateFormat}</p>
                    </td>

                    <td data-label='forma de pagamento'>
                    <p>{item.pay}</p>
                    {item.pay === 'dinheiro' ? <p>{item.payTroco !== '' ? <p>Troco para R$ {formatCurrency(item.payTroco, 'BRL')}</p> : ''}</p> : ''}
                    </td>

                    <td data-label='Valor - total'>
                    <p style={{textTransform: 'uppercase', fontWeight: '900', fontSize: '20px'}}> {item.volorTotal.replace(".", ",")} R$</p>
                    {item.payTroco !== '' ? <p>Seu troco será de : {formatCurrency(item.payTroco - item.volorTotal, 'BRL')}</p> : ''}
                    </td>
                </tr>
                )
                })}
            </tbody>
        </table>
            
    </Contenti>
    )
}