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
    width: 100%;
    height: 100%;
    justify-items: stretch;
    align-items: stretch;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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

  label{
    width: 200px;
    height: 200px;
    height: auto;
    display: flex;
    object-fit: cover;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;

  input{
      display: none;
  }

  img{
      width: 200px;
      height: 200px;
      border-radius: 10px;
      border: none;
      object-fit: cover;
    }
  }

  div{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    font-size: 12px;
    backdrop-filter: blur(12px);
}
  svg{
    font-size: 30px;
    filter: drop-shadow(0px 0px 2px #ffffff);
  }

  span{
    width: 20%;
    height: 20%;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    right: -10px;
    bottom: -10px;
    background: var(--color-background);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    svg{
      font-size: 25px;
    }
  }
`

export const InputName = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-column: 1/4;
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
    align-items: flex-end;
  }
`

export const InputSobre = styled.div`
  grid-column: 1/4;
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