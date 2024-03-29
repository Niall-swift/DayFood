import styled from "styled-components";



export const Content = styled.section`
  width: 100%;
  max-width: 1280px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;


  form{
    width: 90%;
    height: 90%;
    justify-items: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 2rem;
    padding:2rem;


    @media screen and (max-width: 512px) {
      display: block;
      padding: 1rem;
    }
  }
`
export const InputImagem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  grid-column: 1/1;
  grid-row: 1/1;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

  span{
    width: 25%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    right: -10px;
    bottom: -10px;
    background: var(--color-background);
  }

`

export const InputName = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  grid-column: 2/4;
  grid-row: 2/2;
  
  label{
    margin: 2rem 0 0.5rem;
  }
  input{
    background: var(--color-secondary);
    color: var(--color-black)!important;
    width: 100%;
    outline: none;
    height: 55px;
    border-radius: 15px;
    font-size: 20px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.38);
    border: none!important;
    padding: 1rem;
  }
`

export const InputSobre = styled.div`
  grid-column: 2/4;
  grid-row: 3/3;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  label{
    margin: 2rem 0 0.5rem;
  }
  textarea{
    background: var(--color-secondary);
    color: var(--color-black)!important;
    width: 100%;
    height: 100px;
    outline: none;
    border-radius: 15px;
    font-size: 20px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.38);
    border: none!important;
    resize: none;
    padding: 1rem;
  }
`
export const ButtonSubmit = styled.div`
  grid-column: 1/1;
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