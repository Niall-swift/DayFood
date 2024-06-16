import styled from "styled-components";

export const Conteiner = styled.section.attrs(props => ({
  disabled: props.isOpen,
}))`
  width: 100%;
  height: 100%;
  background-color: #0000009e;
  backdrop-filter: blur(12px);
  display: ${props => (props.isOpen === true ? 'flex' : 'none')};
  z-index: 100;
  position: absolute;
  justify-content: center;
  align-items: center;
`

export const CardDetail = styled.div`
    width: 40%;
    height: 75%;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    margin: 1em;
    background-color: #fffdf2;

  ::before{
    content: '';
    position: absolute;
    left: 0;
    height: 10px;
    width: 100%;
    top: -7px;
    background: radial-gradient(circle, transparent, transparent 50%, #fffdf2 50%, #fffdf2 100%) -7px -8px / 16px 16px repeat-x;
  }

  ::after{
    content: '';
    position: absolute;
    left: 0;
    height: 10px;
    width: 100%;
    bottom: -7px;
    background: radial-gradient(circle, transparent, transparent 50%, #fffdf2 50%, #fffdf2 100%) -15px 2px / 16px 16px repeat-x;
  }

  @media screen and (max-width: 512px){
    width: 90%;
  }

  
`
export const InforMesa = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
  padding: 1em;
  
  p{
    color: var(--color-primary);
    font-size: 1.5em;
  }
  button{
    background: var(--color-white);
    border: none;
    padding: 1em;
    border-radius: 12px;
    color: var(--color-text);
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.38);
    transition: 0.5s;
    :hover{
        transition: 0.5s;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
  }
`
export const ListProducts = styled.div`
  height: 65%;
  overflow: hidden;
  overflow-y: auto;
`
export const InfoPedido = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px dotted var(--color-text);
  margin-top: 1em;
  padding: 1em;
  position: relative;

  div:nth-child(1){
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: center;
    justify-content: flex-start;
    position: absolute;
    left: 0;
    padding: 0em 1em 0.2em;
    h2{
      margin-left: 0.5em;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  div:nth-child(2){
    position: absolute;
    right: 0;
    padding: 0em 1em 0.2em;
    h3{
      white-space: nowrap;
      display: flex;
      justify-content: center;
      align-items: center;
      p{
        margin-right: 0.5em;
        color: var(--color-green);
      }
    }
  }

`

export const TotalPedido = styled.div`
  width: 100%;
  height: 130px;
  position: absolute;
  bottom: 0;
  padding: 1em;
`

export const TotalPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3:nth-child(2){
    color: var(--color-primary);
  }
`

export const FinishButton = styled.button`
  position: absolute;
  width: auto;
  padding: 1em;
  right: 0;
  bottom: 0;
  margin: 1em;
  background-color: var(--color-primary);
  border-radius: 12px;
  border: none;
  color: var(--color-black);
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.38);
  transition: 0.5s;
  letter-spacing: 3px;
    :hover{
        transition: 0.5s;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }

`