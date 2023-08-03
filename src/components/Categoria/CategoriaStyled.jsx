import styled from "styled-components";


export const Content = styled.section`
    width: 100%;
    height: 15vh;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow-x: scroll;
    
::-webkit-scrollbar{
    display: none;
}
`
export const Button = styled.button`
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    border-radius: 12px;
    background-color: var(--color-white);
    border: none;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    padding: 5px 15px;
    font-family: 'PoppinsRegular', 'Rubik', sans-serif;
    color: var(--color-black)!important;
    font-size: 20px;

    
    :hover,:active{
        background: var(--color-primary);
        transition: .7s;
        color: var(--color-white)!important;
        > svg{
            color: var(--color-white)!important;
            transition: .7s;
        }
    }
    svg{
        font-size: 2rem;
        margin-right: 5px;
        color: var(--color-black)!important;
    }
`