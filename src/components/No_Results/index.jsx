import { Content } from "./No_results_styled";
import ImgNoResults from '../../assets/undraw_dog_c7i6.svg'


export default function NoResults (){
  return(
    <Content>
        <img src={ImgNoResults} alt=""/>
        <h2>Parece que não tem produto disponível</h2>
    </Content>
  )
}