import styled from "styled-components";


export const Content = styled.section`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: auto;
    flex-wrap: wrap;
    max-width: 1280px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;

    @media screen and (max-width: 512px){
        max-width: 100%;
    }
`


export const Card = styled.div`
    background-color: var(--color-white);
    width: 100%;
    max-width: 290px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    border-radius: 20px;
    position: relative;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.30)!important;
    border: 1px solid rgba(255, 255, 255, 0.246);
    box-sizing: border-box;
    transition: all .7s;

    :hover{
        background-color: var(--color-primary);
        transition: all .7s;

        strong{
                display: none;
            }
        div{
            display: flex;
            height: 45px;
            margin: 0;
            b{
                margin-right: 65px;
                color: red;
            }
        }
    }

    .favorites{
        position: absolute;
        top: 5px;
        right: 5px;
        background: transparent;
        border: none;
    }

    img{
        object-fit: cover;
        border-radius: 20px;
        max-height: 250px;
        overflow-clip-margin: content-box;
        overflow: hidden;
        object-fit: cover;
    }

    h3{
        width: 100%;
        max-width: 100ch;
        text-align: center;
        margin: 16px auto;
    }

    strong{
        font-size: 1.75em;
        font-weight: 900;
    }

    div{
        display: none;
        width: 100%;
        align-items: center;
        justify-content: center;

        span{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2em;
            width: 70%;
            max-width: 50px;
            height: 50px;
        }

        button{
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--color-black);
            border: none;
            border-radius: 15px;
            margin: 10px 15px;
            padding: 5px;
            width: auto;
            max-width: 150px;
            height: 45px;
            color: var(--color-white);

            svg{
                color: var(--color-white);
                font-size: 1.5em;
                margin: 10px;
            }
        }
    }

    @media screen and (max-width: 512px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        max-width: 95%;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        box-sizing: border-box;

        :hover{
        background-color: var(--color-primary);
        transition: all .7s;
        
        h3{
            opacity: 0;
        }
        strong{
            display: flex;
            bottom: 55px;
            color: var(--color-white);
            transition: all.7s;
            font-size: 1.5em;
            }
        div{
            display: flex;
            height: auto;
            position: absolute;
            bottom: 0;
        }
    }

        img{
        object-fit: cover;
        border-radius: 20px;
        max-height: 150px;
    }

    h3{
        width: 100%;
        text-align: center;
        margin-right: 4em;
        margin-bottom: 32px;
        font-size: 1em;
    }

    strong{
        position: absolute;
        bottom: 10px;
        margin-left: 32px;
        transition: all.7s;
        font-size: 1em;
    }

    div{
        position: absolute;
        bottom: 10px;
        right: -3.5em;
    }
}
`