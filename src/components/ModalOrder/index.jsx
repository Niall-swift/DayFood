import { Conteiner, CardDetail, InfoPedido, InforMesa, TotalPedido, TotalPrice, FinishButton} from "./Modal-Styled";

export default function ModalOrder({ isOpen, order, onRequestClose}) {
  return (
    <Conteiner
      isOpen={isOpen}
    >
      <CardDetail>
          <InforMesa>
            <p>MESA - 5</p>
            <button onClick={onRequestClose}>Fechar</button>
          </InforMesa>
        {order.map(item => (
          <>
            <InfoPedido>
              <div>
                <h1>{item.amount}</h1><h3>x</h3>
                <h2>{item.product.name}</h2>
              </div>

              <div>
                <h3><p>+</p>R$ {item.product.price}</h3>
              </div>
            </InfoPedido>
          </>
        ))}
        <TotalPedido>
            <TotalPrice><h3>Total</h3> <h3>R$ 106,90</h3></TotalPrice>
            <FinishButton>Finalizar pedido</FinishButton>
        </TotalPedido>
      </CardDetail>
    </Conteiner>
  )
}