import styled from "styled-components";



export const Button_etapas = styled.div`
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        border-radius: 50%;
        background: var(--color-primary);
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-white);
        color: var(--color-black)!important;
        border-radius: 20px;
        border: none;
        padding: 15px 15px;
        font-size: 20px;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.30);
        :hover{
            transition: .7s;
            background: var(--color-primary);
            color: var(--color-white)!important;
        }
    }
`


export const Cart_zero_item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;

    svg{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        padding: 10px;
        background-color: var(--color-secondary);
        color: var(--color-primary);
        margin: 0 auto;
        border-radius: 50px;
        margin-bottom: 10px;
    }
`

