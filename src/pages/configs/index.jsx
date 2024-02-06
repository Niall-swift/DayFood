import { Content, Tema, Thema } from "./StyledConfigs";



export default function Configs() {


    return (
        <Content>
            <div>
    <h1>
        <b>
            <i></i>&nbsp; Configurações do Delivery
        </b>
    </h1>
    <div>
        <p>Pizzaria Maluca</p>
        <span>pizzariamaluca@contato.com</span>
    </div>
    <a href="#">
        <i></i>&nbsp; Sair
    </a>

    <div>
        <a href="#">
            <i></i> Delivery e retirada
        </a>
        <a href="#">
            <i></i> Taxa de entrega
        </a>
        <a href="#">
            <i></i> Formas de pagamento
        </a>

        <div id="delivery-retirada">
            <p>
                <b>Selecione as opções de entrega da sua loja</b>
            </p>

            <div>
                <div>
                    <i></i>
                </div>
                <div>
                    <p><b>Retirada</b></p>
                    <label>
                        <input type="checkbox" />
                        <span></span>
                        <span>Desligado</span>
                    </label>
                </div>
                <div class="tempo disabled">
                    <div>
                        <label><b>Tempo mínimo retirada (min)</b></label>
                        <input type="number" placeholder="20" disabled/>
                    </div>
                    <div>
                        <label><b>Tempo máximo retirada (min)</b></label>
                        <input type="number" placeholder="20" disabled/>
                    </div>
                </div>
                <a>
                    <i></i>&nbsp; Salvar
                </a>
            </div>

            <div>
                <div>
                    <i></i>
                </div>
                <div>
                    <p><b>Delivery</b></p>
                    <label>
                        <input type="checkbox" checked />
                        <span></span>
                        <span>Ligado</span>
                    </label>
                </div>
            </div>
        </div>

        <div id="taxa-entrega" class="hidden"></div>
        <div id="forma-pagamento" class="hidden"></div>
    </div>
</div>
        </Content>
    )
}