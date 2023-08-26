import styled from "styled-components";

export const Centent = styled.section`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    width: 100%;
    height: 100vh;
    margin: 0 auto;

@media screen and (max-width: 512px){
    flex-wrap: wrap;
}
`

export const Main = styled.main`
width: 100%;
max-width: 1080px;
height: 80%;
margin: 15px;
overflow: auto;
margin-top: 65px;
border-radius: 20px;
box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.30)!important;
border: 1px solid rgba(255, 255, 255, 0.246);

h1{
    text-align: center;
    color: var(--color-primary);
}
`

export const Cards = styled.div`
display: flex;
justify-content: center;
align-items: center;
justify-content: space-around;
flex-direction: row;
flex-wrap: wrap;
padding: 15px;
width: 100%;

div{
width: 270px;
height: 200px;
border-radius: 20px;
margin: 15px;
background-color: var(--color-secondary);
box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.30)!important;
border: 1px solid rgba(255, 255, 255, 0.246);
}
`
export const Claintes = styled.main`
width: 100%;
max-width: 480px;
height: 80%;
margin: 15px;
margin-top: 65px;
border-radius: 20px;
background: var(--color-background);
overflow: auto;
position: relative;
box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.30)!important;
border: 1px solid rgba(255, 255, 255, 0.246);

h1{
    width: 100%;
    background: var(--color-background);
    margin: 0 auto;
    text-align: center;
    position: sticky;
    padding: 15px;
    top: 0;
    color: var(--color-primary);
}
`

export const Client = styled.div`
display: flex;
justify-content: center;
align-items: center;
justify-content: space-around;
align-items: flex-start;
flex-direction: column;
overflow: auto;
flex-wrap: wrap;
padding: 15px;
width: 100%;

div{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    img{
        height: 60px;
        width: 60px;
        object-fit: cover;
        border-radius: 50%;
    }
div{
    width: 100%;
    max-width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5px 0 5px 0;
    border-top: 1px solid var(--color-black);
    color: var(--color-primary);

    p{
        text-overflow: ellipsis;
        white-space: wrap;
        font-size: 12px;
        text-align: left;
    }
}
}
`