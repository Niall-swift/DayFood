import styled from "styled-components";

export const Content = styled.section`
width: 100%;
max-width: 1280px;
margin: 0 auto;
`

export const Tema = styled.main`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 100%;
height: 100vh;
`

export const Thema = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 11px;
    background: #c3c3c3;
    width: 250px;
    max-width: 250px;
    height: 230px;
    padding: 15px;
    margin: 15px;
    position: relative;

    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        span{
            width: 50px;
            height: 50px;
            margin: 0.1em;
            border-radius: 50%;
            background-color: red;
        }
    }

    button{
        position: absolute;
        padding: 5px;
        border-radius: 8px;
        bottom: 10px;
        width: 220px;
    }
`