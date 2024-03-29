import { Content,InputImagem,InputName,InputSobre,ButtonSubmit } from "./About_Business"
import { GrEdit } from "react-icons/gr";

export default function AboutBusiness() {
  return(
    <Content>
      <form>

        <InputImagem>
          <input type="file" />
          <span><GrEdit/></span>
        </InputImagem >

        <InputName>
          <label>Nome da empresa:</label>
          <input type="text"/>
        </InputName>

        <InputSobre>
          <label>sobre a empresa:</label>
          <textarea/>
        </InputSobre>

        <ButtonSubmit>
          <button>Salvar Alterações</button>
        </ButtonSubmit>

      </form>
    </Content>
  )
}