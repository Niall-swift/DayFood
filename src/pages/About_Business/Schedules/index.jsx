import { Content,DataDe,DataAte,TimeDas,TimeAte,TimeEdas,TimeAteas,ButtonDelete,ButtonAddnewTime,ButtonSalvar } from "./Shedulles_Styled"
import { IoMdTime,IoMdTrash,IoMdAddCircle,IoMdCheckmark } from "react-icons/io";



export default function Schedules () {
  return(
    <Content>
      <form>
        <h2>Configure o horário em que sua loja estará recebendo pedidos para delivery ou retirada.</h2>

        <DataDe>
          <label>De:</label>
          <input type="text"/>
        </DataDe>

        <DataAte>
          <label>até:</label>
          <input type="text"/>
        </DataAte>


        <TimeDas>
          <label>das:</label>
          <input type="number"/>
          <IoMdTime />
        </TimeDas>

        <TimeAte>
          <label>até as:</label>
          <input type="number"></input>
          <IoMdTime />
        </TimeAte>

        <TimeEdas>
          <label>e das:</label>
          <input type="number"/>
          <IoMdTime />
        </TimeEdas>

        <TimeAteas>
          <label>até as:</label>
          <input type="number"/>
          <IoMdTime />
        </TimeAteas>

        <ButtonDelete>
          <button><IoMdTrash/></button>
        </ButtonDelete>

        <ButtonAddnewTime>
          <button><IoMdAddCircle/> Adicionar novo horário </button>
        </ButtonAddnewTime>

        <ButtonSalvar>
          <button> <IoMdCheckmark/> Salvar Alterações</button>
        </ButtonSalvar>
      </form>
    </Content>
  )
}