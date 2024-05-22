import { Conteiner, CardDetail, InfoPedido, InforMesa, TotalPedido, TotalPrice, FinishButton } from "./Modal-Styled";
import UseAPIClient from "../../api/api";
import formatCurrency from "../../utils/formatCurrency";
import Swal from "sweetalert2";



export default function ModalOrder({ isOpen, order, onRequestClose}) {
  const api = UseAPIClient();

  /// calcula o valor total dos items 
  const total = order.reduce((accumulator, currentItem) => {
    const subtotal = currentItem.amount * currentItem.product.price;
    return accumulator + subtotal;
  }, 0);

  /// finalizar perdido 
  async function handleFinish(id) {
      const response = await api.put('/order/finish', {
        ordertable_id : id
    })
    if(response.status === 200){
      onRequestClose()
    }
  }

  return (
    <Conteiner
      isOpen={isOpen}
    >
      <CardDetail>
        <InforMesa>
          <p>MESA - {order.length === 0 ? 'Desconhecida' : order[0].ordertable.table}</p>
          <button onClick={onRequestClose}>Fechar</button>
        </InforMesa>
        {order.map((item, index) => {
          return (
            <>
              <InfoPedido key={index}>
                <div>
                  <h1>{item.amount}</h1><h3>x</h3>
                  <h2>{item.product.name}</h2>
                </div>

                <div>
                  <h3><p>+</p>R$ {item.product.price}</h3>
                </div>
              </InfoPedido>
            </>
          )
        })}
        <TotalPedido>
          <TotalPrice><h3>Total</h3> <h3>R$ {formatCurrency(total, 'BRL').replace(".", ",")}</h3></TotalPrice>
          <FinishButton onClick={()=> handleFinish(order[0].ordertable.id)}>Finalizar pedido</FinishButton>
        </TotalPedido>
      </CardDetail>
    </Conteiner>
  )
}