////// styleds /////////////
import { Content, StatusNumber, Button } from './OrderStatusBarStyle'
import { BackButton } from '../Back_Button'
///// icons ///////////
import { CiCircleCheck, CiCircleInfo, CiCircleRemove, CiMoneyCheck1 } from "react-icons/ci";


///// users do react ////
import { useNavigate } from 'react-router-dom';




export default function OrderStatusBar({ isPendente, isPagamento, isConcluido, isRoute, isOrder}) {

  const Navigate = useNavigate();

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
              {isPendente}
            </StatusNumber>
          </Button>

          <Button onClick={()=> isRoute('list/awaitpayment')}>
            <CiMoneyCheck1 />
            Aguardando pagamento
            <StatusNumber>
              {isPagamento}
            </StatusNumber>
          </Button>

          <Button onClick={()=> isRoute('list/confirmedpay')}>
            <CiCircleCheck/>
            Concluído
            <StatusNumber>
            {isConcluido}
            </StatusNumber>
          </Button>

        </div>
      </Content>
    </>
  )
}

