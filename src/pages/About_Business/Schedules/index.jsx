import { Content,Startday,Endday,StartTime1,EndTime1,StartTime2,EndTime2,ButtonDelete,ButtonAddnewTime,ButtonSalvar } from "./Shedulles_Styled"
import { IoMdTime,IoMdTrash,IoMdAddCircle,IoMdCheckmark } from "react-icons/io";
import $ from 'jquery';
import { useState } from "react";




export default function Schedules () {
  const [inicioTime, setInicioTime] = useState('')

  ///--- REGEX ---///
  const regexTime = ("([01]\\d|2[0-3])(:):?([0-5]\\d")
  ///--- mask ---///
  $('#time').mask('00:00');

  return(
    <Content>
      <form>
        <h2>Configure o horário em que sua loja estará recebendo pedidos para delivery ou retirada.</h2>

        <Startday>
          <label>De:</label>
          <select>
          <option>Seg</option>
            <option>Terç</option>
            <option>Qua</option>
            <option>Qui</option>
            <option>Sex</option>
            <option>Sáb</option>
            <option>Dom</option>
          </select>
        </Startday>

        <Endday>
          <label>até:</label>
          <select>
            <option>Seg</option>
            <option>Terç</option>
            <option>Qua</option>
            <option>Qui</option>
            <option>Sex</option>
            <option>Sáb</option>
            <option>Dom</option>
          </select>
        </Endday>


        <StartTime1>
          <label>das:</label>
          <input
          type="number"
          required
          placeholder="00:00"
          id="time"
          value={inicioTime}
          />
          <IoMdTime />
        </StartTime1>

        <EndTime1>
          <label>até as:</label>
          <input
          required
          type="number"
          placeholder="00:00"
          id="time"/>
          <IoMdTime />
        </EndTime1>

        <StartTime2>
          <label>e das:</label>
          <input type="number" placeholder="00:00" id="time"/>
          <IoMdTime />
        </StartTime2>

        <EndTime2>
          <label>até as:</label>
          <input type="number" placeholder="00:00" id="time"/>
          <IoMdTime />
        </EndTime2>

        <ButtonDelete>
          <button><IoMdTrash/>Delete</button>
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