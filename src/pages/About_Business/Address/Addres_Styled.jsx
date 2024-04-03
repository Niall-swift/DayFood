import styled from "styled-components";


export const Content = styled.section`
  height: 100vh;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;

  form{
    width: 90%;
    height: 90%;
    display: grid;
    grid-gap: 1rem;
    justify-content: center;
    align-items:center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);

    @media screen and (max-width: 512px) {
      display: block;
    }

    div{
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    label{
      margin-bottom: 0.5rem;
      margin-left: 0.5rem;
    }

    input{
    outline: none;
    width: 100%;
    background-color: var(--color-secondary);
    border-radius: 20px;
    padding: 15px 25px;
    font-size: 20px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.38)!important;
    border: 1px solid rgba(255, 255, 255, 0.246);
    border: none!important;
    margin-bottom: 1rem;
    }
  }
`
export const Cep = styled.div`
`

export const Endereco = styled.div`
  grid-column:1/3;
  grid-row: 2/2;
`

export const Cidade = styled.div`
  grid-column:1/3;
  grid-row: 3/3;
`

export const Bairro = styled.div`
  grid-column:3/4;
  grid-row: 2/2;
`

export const Complemento = styled.div`
  grid-column:3/4;
  grid-row: 3/3;
`

export const Numero = styled.div`
  grid-column:4/4;
  grid-row: 2/2;
`

export const Uf = styled.div`
  grid-column:4/4;
  grid-row: 3/3;
`

export const ButtonSubmit = styled.div`
  grid-column:1/1;
  grid-row: 4/4;

  button{
  width: 100%;
  background: var(--color-primary);
  color: var(--color-white)!important;
  border-radius: 20px;
  border: none;
  margin: 0;
  margin-top: 2rem;
  padding: 15px 25px;
  font-size: 20px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  }
`