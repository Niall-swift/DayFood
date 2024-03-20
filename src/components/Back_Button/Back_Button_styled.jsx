import styled from "styled-components";

export const Button = styled.button`
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 20px;
    left: 20px;
    background: var(--color-primary);
    border: none;
    padding: 1em;
    border-radius: 12px;
    color: #fff;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.38);
    transition: 0.5s;
    :hover{
        transition: 0.5s;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
    svg{
        font-size: 20px;
        margin-right: 2px;
    }
`