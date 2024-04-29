import { Content,Startday,Endday,StartTime1,EndTime1,StartTime2,EndTime2,ButtonDelete,ButtonAddnewTime,ButtonSalvar } from "./Shedulles_Styled"
import {IoMdTrash,IoMdAddCircle,IoMdCheckmark} from "react-icons/io";
import { useState } from "react";

/// API 
import UseAPIClient from "../../../api/api";
import { useEffect } from "react";


export default function Schedules () {
  const api = UseAPIClient();

  const [startday, setStartday] = useState(0)
  const [endday, setEndday] = useState('')
  const [startTime1, setStartTime1] = useState('')
  const [endTime1, setEndTime1] = useState('')
  const [startTime2, setStartTime2] = useState('')
  const [endTime2, setEndTime2] = useState('')
  const [dataTime, setDataTime] = useState([])

  console.log(startday)

  /// listando Horários
  useEffect(()=>{
    async function listTimes (){
      try{
      const response = await api.get('/times')
      const data = response.data

      const res = data.map(item => ({
        start_day: item.start_day,
        end_day: item.end_day,
        start_time_1: item.start_time_1,
        end_time_1: item.end_time_1,
        start_time_2: item.start_time_2,
        end_time_2: item.end_time_2,
      }));
      setStartday([res].start_day)
      setEndday(res.end_day)
      setStartTime1(res.start_time_1)
      setEndTime1(res.end_time_1)
      setStartTime2(res.start_time_2)
      setEndTime2(res.end_time_2)
      setDataTime(res)

      }catch(Error){

      }
      
    }
    listTimes()
  },[])

  /// registrando Horários
  async function handleRegisteTime (e){
    e.preventDefault()
    try{
      await api.put('/times',{
        start_day: startday,
        end_day: endday,
        start_time_1: startTime1,
        end_time_1: endTime1,
        start_time_2: startTime2,
        end_time_2: endTime2
      })
    }catch(Error){
      console.log(Error)
    }
  }

  /// Criando novo horário
  async function handleCreateNewTime (e) {
    e.preventDefault()
    try{
      await api.post('/times',{
        start_day: '',
        end_day: '',
        start_time_1: '',
        end_time_1: '',
        start_time_2: '',
        end_time_2: ''
      })
      const response = await api.get('/times')
      setDataTime(response.data)
    }catch(Error){
  }
}

  function handleDelete(id){
  alert(id)
  }


  return(
    <Content>
      <form onSubmit={handleRegisteTime}>
        <h2>Configure o horário em que sua loja estará recebendo pedidos para delivery ou retirada.</h2>

      {dataTime.map((item, index)=>{
        return(
          <>
          <Startday>
          <label>De:</label>
          <select value={startday} onChange={(e)=> setStartday(e.target.value)} required>
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
          <select value={endday} onChange={(e)=> setEndday(e.target.value)} required>
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
          type="time"
          required
          value={startTime1}
          onChange={(e)=> setStartTime1(e.target.value)}
          />
        </StartTime1>

        <EndTime1>
          <label>até as:</label>
          <input
          required
          type="time"
          value={endTime1}
          onChange={(e)=> setEndTime1(e.target.value)}
          />
        </EndTime1>

        <StartTime2>
          <label>e das:</label>
          <input
          onChange={(e)=> setStartTime2(e.target.value)}
          type="time"
          placeholder="00:00"
          value={startTime2}
          />
        </StartTime2>

        <EndTime2>
          <label>até as:</label>
          <input
          onChange={(e)=> setEndTime2(e.target.value)}
          type="time"
          placeholder="00:00"
          value={endTime2}
          />
        </EndTime2>

        <ButtonDelete>
          <button onClick={()=> handleDelete(item.id)}><IoMdTrash/>Delete</button>
        </ButtonDelete>
          </>
        )
      })}

        <ButtonAddnewTime>
          <button onClick={handleCreateNewTime}><IoMdAddCircle/> Adicionar novo horário </button>
        </ButtonAddnewTime>

        <ButtonSalvar>
          <button type="submit"> <IoMdCheckmark/> Salvar Alterações</button>
        </ButtonSalvar>
      </form>
    </Content>
  )
}