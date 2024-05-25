import UseAPIClient from "../../api/api"
import { calcularTempoEmMinutos } from "../../utils/formats/formatMinutes";
import ModalOrder from "../../components/ModalOrder";
import OrderStatusBar from "../../components/Order_Status_Bar";
import { useEffect } from "react"
import { useState, useRef } from "react";
import Sond from '../../utils/sounds/xbox-series-sign-on (1).mp3'




export default function OrderTable(){
  const api = UseAPIClient();

  const [orderList, setOrderList] = useState([])
  const [modalItem, setModalItem] = useState([])
  const [routeService, setRouteService] = useState('orders')
  const refreshIntervalRef = useRef(null); // Ref para armazenar o ID do intervalo
  const [sound, setSound] = useState(new Audio(Sond))
  const [modalVisible, setModalVisible] = useState(false);


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
      setOrderList([...response.data]);
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
        isPendente={orderList.length}
        isPagamento={orderList.length}
        isConcluido={orderList.length}
        isRecusado={orderList.length}
        isOrder={orderList}
        isRoute={setRouteService}
        />

        {orderList.map((Order, index) => {
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