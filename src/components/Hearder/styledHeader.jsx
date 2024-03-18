import styled, { css } from "styled-components";

export const Headers = styled.header`
    width: 100%;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    justify-content: end;
    padding: 10px;
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
    background-color: var(--color-primary);
    border: none;
    max-width: 55px;
    max-height: 55px;
    border-radius: 12px;
    
    svg{
        font-size: 100px;
    }

    ::before{
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        scale: 0.25;
        opacity: 0;
        background: rgb(255 255 /8%);
        transition: 0.2s;
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
    background: #2d2d2d;
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
    background-color: var(--color-primary);
    border: none;
    max-width: 55px;
    max-height: 55px;
    border-radius: 12px;
`

