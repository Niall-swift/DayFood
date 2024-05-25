import styled from "styled-components";

export const Content = styled.main`
    width: 100%;
    padding: 5rem 0;
    margin: 0 auto;

    div{
        width: 100%;
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;


        @media screen and (max-width: 512px) {
            flex-wrap: nowrap;
            flex-direction: row;
            overflow: hidden;
            overflow: auto;
        }
    }
`
export const Button = styled.button`
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 1rem;
        margin-bottom: 1rem;
        border-radius: 11px;
        border: none;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        padding: 5px 15px;
        font-family: 'PoppinsRegular', 'Rubik', sans-serif;
        color: var(--color-black)!important;
        font-size: 20px;
        text-overflow: ellipsis;
        white-space: nowrap;

        >svg{
            margin-right: 0.5rem;
            font-size: 1.5rem;
        }
`

export const StatusNumber = styled.span`
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        margin-left: 0.5rem;
        font-weight: 600;
        background: var(--color-primary);
`