////////////////////// imports necesarios //////////////////

import { useEffect, useState } from 'react'
import { format, set } from 'date-fns';
import formatCurrency from '../../utils/formatCurrency';
/////////////////////////////////////////////////////////////////////////
import { db } from '../../pages/firebase'
import { collection, doc, onSnapshot, orderBy, query, updateDoc, where } from 'firebase/firestore'
import { ContextGlobal } from '../../contexts/auth'
///////////////////// icones ////////////////////////////////
import Swal from 'sweetalert2';
import { useContext } from 'react';

///// import componts //////////
import OrdersStatus from '../../components/orders_status';

/////// css ////
import './pedidos.css'


export default function Pedidos() {
    const { user } = useContext(ContextGlobal)
    const [forPedidos, setForPedidos] = useState([])

    const [status, setStatus] = useState('pendente')



    useEffect(() => {
        document.body.style.overflowY = 'auto';
    }, []);



    ///buscando todos os pedidos para o adm ///
    useEffect(() => {

        async function buscapedido() {
            const listapedidos = collection(db, "Pedidos")

            const q = query(listapedidos, orderBy('date', 'desc'))

            const unsub = onSnapshot(q, (snapshot) => {

                let lista = [];
                snapshot.forEach((doc) => {
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
    }, [])
    ////////////////////////////////////////////////////////////////////////////////////

    ///trocando status///
    function atualizarStatus(item, status) {
        setStatus(status);
        setTimeout(() => {
            atualizaStatus(item, status);
        }, 100);
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
                setTimeout(() => {
                    recusandoPedido(item)
                }, 900)
            } else if (result.isDenied) {
                return
            }
        })
    }

    function status2(item, URL) {
        atualizarStatus(item, 'Aceito', 'seu pedido foi aceito');

        setTimeout(() => {
            aceitandoPedido(item)
        }, 900)

    }


    function status3(item) {
        atualizarStatus(item, 'Finalizado', 'seu pedido está a caminho');

        setTimeout(() => {
            fnalizarPedido(item)
        }, 900)
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////atualizando status//////////////////////////////////////////////////////
    async function atualizaStatus(item, status) {

        const docStatus = doc(db, "Pedidos", item.id)

        await updateDoc(docStatus, {
            status: status
        })
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////]

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    ///////////////////// aceitando o pedido e enviando para o whatsapp////////////////////////////////////////
    function aceitandoPedido(item) {

        let itens = '';
        item.pratos.map((i, e) => {

            itens += `\n\n*${i.quantidades}x* ${i.nome} ...... R$ ${(i.preco).replace('.', ',')}`

        })

        let texto = `Olá ${item.cliente} o seu pedido foi aceito e já está sendo preparado :)\n`;
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
    function fnalizarPedido(item) {

        let texto = `“Ei, ${item.cliente} segure a fome que seu pedido já está saindo para entrega”`

        let iconde = encodeURI(texto)
        let URL = `https://wa.me/55${item.clienteTel}?text=${iconde}`

        window.open(URL, '_blank').focus();
    }
    ///////////////////////// Recusando pedido//////////////////////////////////////////////////////////////
    function recusandoPedido(item) {

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


    return (
        <section className='content'>

            <OrdersStatus/>

            <div className='card-pedido-content'>

                <div className='card-pedido'>

                    <div>
                        <button type="button">
                            Pendente
                        </button>
                        <p>#1</p>
                    </div>

                    <div>
                        <div>
                            <p className='info-pedido'>
                                <i class="fas fa-user"></i> Weverton de Lima Teste teste teste
                            </p>
                            <p className='info-pedido'>
                                <i class="fas fa-motorcycle"></i> Entrega
                            </p>
                            <p className='info-pedido'>
                                <i class="fas fa-coins"></i> Dinheiro
                                <span>Troco para R$ 50,00</span>
                            </p>
                        </div>

                        <div class="separate"></div>

                        <div className='card-pedido-footer'>
                            <p className='horario-pedido'>Recebido há 33 minutos</p>
                            <p className='total-pedido'><b>R$ 143,50</b></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card-pedido-content'>
                
                <div className='card-pedido'>

                    <div>
                        <button type="button">
                            Pendente
                        </button>
                        <p>#1</p>
                    </div>

                    <div>
                        <div>
                            <p className='info-pedido'>
                                <i class="fas fa-user"></i> Weverton de Lima Teste teste teste
                            </p>
                            <p className='info-pedido'>
                                <i class="fas fa-motorcycle"></i> Entrega
                            </p>
                            <p className='info-pedido'>
                                <i class="fas fa-coins"></i> Dinheiro
                                <span>Troco para R$ 50,00</span>
                            </p>
                        </div>

                        <div class="separate"></div>

                        <div className='card-pedido-footer'>
                            <p className='horario-pedido'>Recebido há 33 minutos</p>
                            <p className='total-pedido'><b>R$ 143,50</b></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card-pedido-content'>
                
                <div className='card-pedido'>

                    <div>
                        <button type="button">
                            Pendente
                        </button>
                        <p>#1</p>
                    </div>

                    <div>
                        <div>
                            <p className='info-pedido'>
                                <i class="fas fa-user"></i> Weverton de Lima Teste teste teste
                            </p>
                            <p className='info-pedido'>
                                <i class="fas fa-motorcycle"></i> Entrega
                            </p>
                            <p className='info-pedido'>
                                <i class="fas fa-coins"></i> Dinheiro
                                <span>Troco para R$ 50,00</span>
                            </p>
                        </div>

                        <div class="separate"></div>

                        <div className='card-pedido-footer'>
                            <p className='horario-pedido'>Recebido há 33 minutos</p>
                            <p className='total-pedido'><b>R$ 143,50</b></p>
                        </div>
                    </div>
                </div>
            </div>



            <div className='card-pedido-content'>
                
                <div className='card-pedido'>

                    <div>
                        <button type="button">
                            Pendente
                        </button>
                        <p>#1</p>
                    </div>

                    <div className='card-content'>
                        <div>
                            <p className='info-pedido'>
                                <i class="fas fa-user"></i> Weverton de Lima Teste teste teste
                            </p>
                            <p className='info-pedido'>
                                <i class="fas fa-motorcycle"></i> Entrega
                            </p>
                            <p className='info-pedido'>
                                <i class="fas fa-coins"></i> Dinheiro
                                <span>Troco para R$ 50,00</span>
                            </p>
                        </div>

                        <div class="separate"></div>

                        <div className='card-pedido-footer'>
                            <p className='horario-pedido'>Recebido há 33 minutos</p>
                            <p className='total-pedido'><b>R$ 143,50</b></p>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}