import { Content } from "./ServicosStyled";
import dl from '../../assets/icone-delivery.svg'
import ql from '../../assets/icone-pedido.svg'
import dy from '../../assets/icone-qualidade.svg'





export default function Servicos() {

    const servers = document.querySelectorAll('.Serveces')
    const myScroll = new IntersectionObserver((myElemte) => {
        myElemte.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
            
        })
    })
    servers.forEach(element => myScroll.observe(element));


    return (
        <Content>
            <h4>SERVIÇOS</h4>

            <h1>Como são nossos serviços?</h1>

            <div>
                <div className="Serveces">
                    <img src={ql} alt="" />
                    <h2>Fácil de pedir</h2>
                    <p>Você só precisa de alguns passos para pedir sua comida.</p>
                </div>

                <div className="Serveces">
                    <img src={dl} alt="" />
                    <h2>Entrega rápida</h2>
                    <p>Nossa entrega é sempre pontual, rápida e segura.</p>
                </div>

                <div className="Serveces">
                    <img src={dy} alt="" />
                    <h2>Melhor qualidade</h2>
                    <p>Não só a rapidez na entrega, a qualidade também é o nosso forte.</p>
                </div>
            </div>
        </Content>
    )

}