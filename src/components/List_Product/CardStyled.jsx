import styled from "styled-components";


export const Content = styled.section`
    width: 100%;
    height: auto;
    max-width: 1300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 2em auto;
    overflow: hidden;
    overflow-y: auto;

    @media screen and (max-width: 600px){
        padding: 5px;
    }
`


export const Card = styled.div`
    background-color: var(--color-white);
    width: 100%;
    aspect-ratio: 16/9;
    max-width: 290px;
    max-height: 290px;
    display: flex;
    flex-direction: column;
    padding: 1em;
    justify-content: center;
    align-items: center;
    margin: 1em 1em;
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
        top: 10px;
        right: 10px;
        width: 35px;
        height: 35px;
        padding: 0.1em;
        border-radius: 10px;
        border: none;
        background: var(--color-secondary);
        font-size: 1.5em;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }

    img{
        height: 250px;
        width: 255px;
        max-height: 250px;
        max-width: 255px;
        object-fit: cover;
        border-radius: 20px;
        overflow-clip-margin: content-box;
        overflow: hidden;
        object-fit: cover;
    }

    h3{
        width: 100%;
        text-align: center;
        margin: 16px auto;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    strong{
        font-size: 1.75em;
        font-weight: 900;
    }

    div{
        display: none;
        height: 32%;
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
            background: var(--color-svg);
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

    @media screen and (max-width: 600px){
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        max-width: 100%;
        max-height: 120px;
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
            width: 70%;
            justify-content: center;
            align-items: center;
            justify-content: flex-start;
            bottom: 0.5em;
        }
    }

        img{
        position: absolute;
        left: 10px;
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 15px;
    }

    h3{
        position: relative;
        width: 40%;
        margin: 0;
        font-size: 1em;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    strong{
        width: 100%;
        position: absolute;
        text-align: center;
        bottom: 10px;
        transition: all.7s;
        font-size: 1em;
    }

    div{
        position: absolute;
        max-width: 100%;
        right: -1em;
        bottom: 0.5em;
    }
}
`