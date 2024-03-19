import styled, { css } from "styled-components";

export const Headers = styled.header`
    width: 100%;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    justify-content: end;
    padding: 0.5em;
    position: fixed;
    z-index: 99;
    background: transparent;

    ${({ scl }) => scl && css`
    backdrop-filter: blur(2em);
    background: #ffffff984;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    transition: all 0.7s;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
`}

`
export const Dropdown = styled.div`
    cursor: pointer;
    position: relative;
    display: grid;
    place-items: center;
    height: 72px;
    margin: 1em;

    :hover > button::before{
        scale: 1;
        opacity: 1;
    }

    :hover > div{
        opacity: 1;
        visibility: visible;
        translate: 0;
    }
`

export const Button = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0.5em;
    background-color: var(--color-secondary);
    border: none;
    max-width: 55px;
    max-height: 55px;
    border-radius: 10px;
    
    svg{
        font-size: 100px;
    }
    :hover{
        background-color: var(--color-primary);
        color: #fff;
    }
`

export const Menu = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    top: 64px;
    right: 20px;
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: max-content;
    translate: 0 16px;
    width: 270px;
    max-height: 286px;
    padding: 10px;
    background: var(--color-background);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    border-radius: 8px;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    appearance: none;

    ::-webkit-scrollbar-thumb{
        width: 15px;
    }
`

export const Buttons = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0.5em;
    background-color: var(--color-secondary);
    border: none;
    max-width: 55px;
    max-height: 55px;
    border-radius: 10px;
    font-size: 0.75rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

    :hover{
        background-color: var(--color-primary);
        color: #fff;
        transition: 0.5s;
    }

    svg{
        font-size: 100px;
    }
`

