import styled from "styled-components";


export const Content = styled.section`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    height: 15vh;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow-x: auto;
    flex-wrap: wrap;

::-webkit-scrollbar{
    display: none;
}
`
export const Button = styled.button`
    background: ${props => (props.selicd ? 'var(--color-primary)' :'var(--color-white)')};
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    margin-bottom: 0.5rem;
    border-radius: 11px;
    border: none;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    padding: 5px 15px;
    font-family: 'PoppinsRegular', 'Rubik', sans-serif;
    color: var(--color-black)!important;
    font-size: 20px;

    
    :hover{
        background: var(--color-primary);
        transition: .7s;
        color: var(--color-white)!important;
    }
    img{
        width: 1.5em;
        margin-left: 1em;
    }
`