import { Link } from "react-router-dom"
import { TbArrowBack } from "react-icons/tb";
import { Button } from "./Back_Button_styled"


export function BackButton () {
    return(
        <>
        <Link to='/Home'>
					<Button> <TbArrowBack /> Voltar </Button>
		</Link>
        </>
    )
}