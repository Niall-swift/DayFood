import UseAPIClient from "../../api/api"
import { calcularTempoEmMinutos } from "../../utils/formats/formatMinutes";
import ModalOrder from "../../components/ModalOrder";
import OrderStatusBar from "../../components/Order_Status_Bar";
import { useEffect } from "react"
import { useState, useRef } from "react";
import Sond from '../../utils/sounds/xbox-series-sign-on (1).mp3'
import { useFetcher } from "react-router-dom";




export default function OrderTable() {
  const api = UseAPIClient();

  const [orderList, setOrderList] = useState({ pending: [], awaitingPayment: [], completed: [] })
  const [modalItem, setModalItem] = useState([])
  const [routeService, setRouteService] = useState('orders')
  const refreshIntervalRef = useRef(null); // Ref para armazenar o ID do intervalo
  const [sound, setSound] = useState(new Audio(Sond))
  const [modalVisible, setModalVisible] = useState(false);


 console.log(orderList)
  // hooks usePrevious
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  const prevOrderList = usePrevious(orderList);

  /// produzi son se a orderList tive uma alteração
  useEffect(() => {
    if (prevOrderList !== undefined && JSON.stringify(prevOrderList) !== JSON.stringify(orderList)) {
      sound.play();
    }
  }, [orderList, prevOrderList, sound]); // Removido 'sound' do array de dependências

  /// Listando Orders 
  useEffect(() => {
    async function hnadleRefreshOrder() {
      const response = await api.get(`/${routeService}`);

      const allOrders = response.data;
      const pendingOrders = allOrders.filter(order => order.draft === false);
      const awaitingPaymentOrders = allOrders.filter(order => order.payment === "awaiting_payment");
      const completedOrders = allOrders.filter(order => order.form_payment !== "");

      setOrderList({ pending: pendingOrders, awaitingPayment: awaitingPaymentOrders, completed: completedOrders });
    }
    hnadleRefreshOrder();
    // Inicia o intervalo após o primeiro render
    refreshIntervalRef.current = setInterval(hnadleRefreshOrder, 10000); // Chama a função a cada 60 segundos (1 minuto) ou user no maximo 30 segundos 

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(refreshIntervalRef.current);
  }, [routeService]);

  /// buscando detalhes do pedido 
  async function hnadleDetail(id) {
    const response = await api.get('/order/detail', {
      params: {
        ordertable_id: id
      }
    })
    setModalItem(response.data)
    setModalVisible(true)
  }

  /// fecha modal
  function handleCloseModal() {
    setModalVisible(false);
  }

  return (
    <>
      <ModalOrder
        isOpen={modalVisible}
        order={modalItem}
        onRequestClose={handleCloseModal}
      />
      <section className='content'>


        <OrderStatusBar
          isPendente={orderList.pending ? orderList.pending.length : 0}
          isPagamento={orderList.awaitingPayment ? orderList.awaitingPayment.length : 0}
          isConcluido={orderList.completed ? orderList.completed.length : 0}
          isRoute={setRouteService}
        />

        {orderList.pending.map((Order, index) => {
          const tempoDiferenca = calcularTempoEmMinutos(Order.created_at);

          return (
            <div className='card-pedido-content' key={index} onClick={() => hnadleDetail(Order.id)}>

              <div className='card-pedido'>

                <div>
                  <p className="Numero-mesa">MESA - {Order.table}</p>
                </div>

                <div className='card-content'>
                  <div>

                    <p className='info-pedido'>
                      {Order.name}
                    </p>

                    <p className='info-pedido'>
                      Consumir no Local
                    </p>

                  </div>

                  <div className="separate"></div>

                  <div className='card-pedido-footer'>

                    <p className='horario-pedido'>
                      Recebido há {tempoDiferenca}
                    </p>

                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}
