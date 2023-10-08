import { Content, Tema, Thema } from "./StyledConfigs";
import { ConfigsGlobal } from "../../contexts/Configs";
import { useContext} from "react";
import { color } from "framer-motion";



export default function Configs() {

    const { alternarTema, temas } = useContext(ConfigsGlobal)

    return (
        <Content>

            <Tema>
                {Object.keys(temas).map((keys) => (
                    <Thema key={keys}>
                        <div>
                            <span ></span>
                            <span ></span>
                            <span></span>
                            <span></span>
                        </div>
                        <h2>{temas[keys].label}</h2>
                        <button key={keys} onClick={() => alternarTema(keys)}>Confimar Themas</button>
                    </Thema>
                ))}
            </Tema>

        </Content>
    )
}