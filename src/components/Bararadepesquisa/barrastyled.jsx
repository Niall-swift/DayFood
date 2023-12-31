import styled from "styled-components";


export const BarPequisa = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 1280px;
    padding: 15px;

    div{
        width: 100%;
        max-width: 500px;
        position: relative;
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
        max-width: 600px;

        ::placeholder{
            color: var(--color-text);
        }
    }
    button{
        background-color: var(--color-primary);
        padding: 2px;
        border: none;
        width: 55px;
        height: 55px;
        border-radius: 20px;
        position: absolute;
        bottom: 0;
        right: 0;

        svg{
            font-size: 20px;
            color: var(--color-svg);
        }
    }
}
`