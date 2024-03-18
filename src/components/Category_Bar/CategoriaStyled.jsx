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
    border: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    padding: 5px 15px;
    color: var(--color-black)!important;
    font-size: clamp(0.2rem, 1.5rem, 1.625rem);

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