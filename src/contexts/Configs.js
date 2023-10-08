import { useState } from "react";
import { createContext } from "react";





export const ConfigsGlobal = createContext({});

function ConfigsContext({ children }) {

    const [tema, setTema] = useState('DEFAULT');

    const temas = {
        DEFAULT: { className: 'default-theme', label: 'Tema Padrão' },
        DARK: { className: 'dark-theme', label: 'Tema Escuro' },
        SUSHI: { className: 'sushi-theme', label: 'Tema Sushi' },
        CUPCAKE: { className: 'cupcake-theme', label: 'Tema Cupcake' },
    };



    const alternarTema = (novoTema) => {
        if (temas[novoTema]) {
            document.body.classList.remove(temas[tema].className);
            document.body.classList.add(temas[novoTema].className);
            setTema(novoTema);
        }
    };


    return (
        <ConfigsGlobal.Provider value={{
            alternarTema,
            temas,

        }}>

            {children}

        </ConfigsGlobal.Provider>
    )
}

export default ConfigsContext;
