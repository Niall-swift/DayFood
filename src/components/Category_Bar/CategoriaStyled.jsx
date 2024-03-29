import styled from "styled-components";


export const Content = styled.section`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    height: auto;
    margin-bottom: 1rem;
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    justify-content: flex-start;
    overflow: hidden;
    overflow-x: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-wrap: wrap;

    @media screen and (max-width: 512px) {
        flex-wrap: nowrap;
    }
`
export const Button = styled.button`
    background: ${props => (props.selicd ? 'var(--color-primary)' :'var(--color-white)')};
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5em;
    border-radius: 11px;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 0.2em 1em;
    color: var(--color-svg)!important;
    font-size: clamp(0.2rem, 1.5rem, 1.625rem);

    :hover{
        background: var(--color-primary);
        transition: .7s;
        color: var(--color-white)!important;
    }
    img{
        max-width: 1em;
        margin-right: 0.5em;
    }
`