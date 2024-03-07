import styled from "styled-components";


export const Content = styled.section`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    height: 20vh;
    margin-bottom: 0.5rem;
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    justify-content: flex-start;
    overflow: hidden;
    overflow-x: scroll;

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
    margin-left: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 11px;
    border: 0.1rem solid var(--color-secondary);
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    padding: 5px 15px;
    font-family: 'PoppinsRegular', 'Rubik', sans-serif;
    color: var(--color-black)!important;
    font-size: clamp(0.2rem, 1.5rem, 1.625rem);
    flex: 1;

    
    :hover{
        background: var(--color-primary);
        transition: .7s;
        color: var(--color-white)!important;
    }
    img{
        width: 1.3em;
        margin-right: 1em;
    }
`