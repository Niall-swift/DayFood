import styled from "styled-components";

export const Content = styled.div`
    position: fixed;
    left: 93%;
    bottom: 50px;
    height: 50px;
    width: 50px;
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    box-shadow: 0px 10px 15px 3px rgba(0,0,0,0.1);
    color: var(--color-black-heavy)!important;
    border-radius: 50px;
    cursor: pointer;
    z-index: 1;

    span{
        position: absolute;
        font-size: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        right: 0;
        height: 20px;
        width: 20px;
        font-weight: 600;
        border-radius: 50%;
        background: var(--color-secondary);
    }

    @media screen and (max-width: 512px) {
        left: 80%;
        bottom: 30px;
        width: 60px;
        height: 60px;
    }
`