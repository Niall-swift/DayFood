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
    align-items: center;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(4, 1fr);

    @media screen and (max-width: 512px){
      display: block;
    }
  
  div{
    margin: 1rem;
    position: relative;

    label{
      margin: 1rem 0.5rem 0.5rem;
    }
  }

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

    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  h2{
    grid-column: 1/8;
    grid-row: 1/1;
  }

  button{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  border: none;
  margin: 0;
  padding: 15px 10px;
  font-size: 20px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  }
`

export const DataDe = styled.div`
`


export const DataAte = styled.div`
`


export const TimeDas = styled.div`
  svg{
      position: absolute;
      font-size: 20px;
      right: 15px;
      bottom: 35%;
    }
`


export const TimeAte = styled.div`
  svg{
      position: absolute;
      font-size: 20px;
      right: 15px;
      bottom: 35%;
    }
`


export const TimeEdas = styled.div`
  svg{
      position: absolute;
      font-size: 20px;
      right: 15px;
      bottom: 35%;
    }
`


export const TimeAteas = styled.div`
  svg{
      position: absolute;
      font-size: 20px;
      right: 15px;
      bottom: 35%;
    }
`


export const ButtonDelete = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  grid-column: 7/8;
  button{
    background: var(--color-red);
    color: var(--color-white);
    font-size: 25px;
  }
`
export const ButtonAddnewTime = styled.div`
  grid-column: 1/8;
  
  button{
    background: var(--color-white);
    border: 2px dashed  var(--color-primary);
    color: var(--color-primary);
    text-align: start;
    justify-content: flex-start;

    svg{
      margin: 0 1rem 0;
    }
  }
`
export const ButtonSalvar = styled.div`
  grid-column: 1/3;

  button{
    background: var(--color-primary);
    color: var(--color-white);
    text-align: start;

    svg{
      margin-right: 1rem;
    }
  }
`