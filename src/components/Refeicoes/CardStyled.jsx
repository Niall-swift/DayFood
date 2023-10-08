import styled from "styled-components";


export const Content = styled.section`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: auto;
    flex-wrap: wrap;
    max-width: 1280px;
    margin: 0 auto;
    padding: 15px;
    width: 100vw;
    height: 100vh;

    @media screen and (max-width: 512px){
        max-width: 100%;
        display: inline-block;
    }
`


export const Card = styled.div`
    background-color: var(--color-white);
    width: 100%;
    aspect-ratio: 16 / 9;
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
    margin-bottom: 2em;

    :hover{
        background-color: var(--color-primary);
        transition: all .7s;

        strong{
                display: none;
            }
        div{
            width: 100%;
            display: flex;
            margin: 0;
            b{
                text-align: center;
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
        height: 250px;
        width: 250px;
        object-fit: cover;
        border-radius: 20px;
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
            width: 70em;
            max-width: 1.5em;
            height: 1em;
        }

        button{
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--color-black);
            border: none;
            border-radius: 11px;
            margin: 5px;
            padding: 1em;
            height: 3em;
            color: var(--color-white);
            text-align: center;

            svg{
                color: var(--color-white);
                font-size: 1.5em;
                margin: 8px;
            }
        }
    }

    @media screen and (max-width: 512px){
        display: flex;
        aspect-ratio: 0/9;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        max-width: 100%;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;

        :hover{
        background-color: var(--color-primary);
        transition: all .7s;
        
        h3{
            opacity: 0;
        }
        strong{
            display: block;
            bottom: 2.5em;
            color: var(--color-white);
            transition: all.7s;
            font-size: 1.5em;
            text-align: center;
            }
        div{
            display: flex;
            height: auto;
            width: 50%;
            left: 40%;
            bottom: 0.5em;
        }
    }

        img{
        width: 10.5em;
        height: 6em;
        margin-inline: auto;
        object-fit: cover;
        border-radius: 15px;
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
        margin-left: 2.5em;
        transition: all.7s;
        font-size: 1em;
    }

    div{
        position: absolute;
        max-width: 100%;
        right: -4em;
        bottom: 0.5em;
    }
}
`