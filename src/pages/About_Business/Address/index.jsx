
import { Content,Cep,Cidade,Bairro,Complemento,Numero,Uf,Endereco,ButtonSubmit } from "./Addres_Styled"

export default function Address () {
  return (
    <Content>
      <form>
        <Cep>
        <label>CEP:</label>
        <input type="number"/>
        </Cep>

        <Endereco>
        <label>Endereço:</label>
        <input type="text"/>
        </Endereco>

        <Cidade>
        <label>Cidade:</label>
        <input type="text"/>
        </Cidade>

        <Bairro>
        <label>Bairro:</label>
        <input type="text"/>
        </Bairro>

        <Complemento>
        <label>Complemento:</label>
        <input type="text"/>
        </Complemento>

        <Numero>
        <label>Número:</label>
        <input type="number"/>
        </Numero>

        <Uf>
        <label>UF:</label>
        <input type="text"/>
        </Uf>

        <ButtonSubmit>
          <button>Salvar</button>
        </ButtonSubmit>
      </form>
    </Content>
  )
}