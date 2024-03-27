////// styleds /////////////
import { Content, StatusNumber, Button } from './orders_status_styled'
import {BackButton} from '../Back_Button'
///// icons ///////////
import { MdAccessTime } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { MdDeliveryDining } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
///// users do react ////
import { useNavigate } from 'react-router-dom';




export default function OrdersStatus() {

    const Navigate = useNavigate();

    
    function Lest(){
        Navigate('/Home')
    }

    return (
        <Content>

            <BackButton/>

            <div>
                <Button>
                    <CiCircleInfo/>
                    Pendentes
                    <StatusNumber>
                        4
                    </StatusNumber>
                </Button>

                <Button>
                    <AiTwotoneLike/>
                    Aceito
                </Button>

                <Button>
                    < MdAccessTime/>
                    Em Preparo
                </Button>

                <Button>
                    <MdDeliveryDining/>
                    Em entrega
                </Button>

                <Button>
                    <CiCircleCheck/>
                    Concluído
                </Button>

                <Button>
                    <CiCircleRemove/>
                    Recusado
                </Button>
            </div>
        </Content>
    )
}

