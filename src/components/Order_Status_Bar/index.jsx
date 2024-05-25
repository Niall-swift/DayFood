////// styleds /////////////
import { Content, StatusNumber, Button } from './OrderStatusBarStyle'
import { BackButton } from '../Back_Button'
///// icons ///////////
import { CiCircleCheck, CiCircleInfo, CiCircleRemove, CiMoneyCheck1 } from "react-icons/ci";


///// users do react ////
import { useNavigate } from 'react-router-dom';




export default function OrderStatusBar({ isPendente, isPagamento, isConcluido, isRecusado, isRoute, isOrder}) {

  const Navigate = useNavigate();

  const total = isOrder.reduce((accumulator, Item) => {
    const subtotal = Item.status === true;
    return accumulator + subtotal;
  }, 0);

  function Lest() {
    Navigate('/Home')
  }

  return (
    <>
    <BackButton/>
      <Content>
        <div>
          <Button onClick={()=> isRoute('orders')}>
            <CiCircleInfo />
            Pendentes
            <StatusNumber>
              {isOrder.length}
            </StatusNumber>
          </Button>

          <Button onClick={()=> isRoute('list/awaitpayment')}>
            <CiMoneyCheck1 />
            Aguardando pagamento
            <StatusNumber>
              {total}
            </StatusNumber>
          </Button>

          <Button>
            <CiCircleCheck />
            Concluído
            <StatusNumber>
              4
            </StatusNumber>
          </Button>

          <Button>
            <CiCircleRemove />
            Recusado
            <StatusNumber>
              4
            </StatusNumber>
          </Button>
        </div>
      </Content>
    </>
  )
}

