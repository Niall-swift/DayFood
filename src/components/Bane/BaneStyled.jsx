import styled from "styled-components";
import bg from '../../assets/bg-icons-2.png'

export const Content = styled.section`
    background: url(${bg})center/cover;
    width: 100%;
    margin-top: 60px;
    padding: 15px;
    margin-right: 0;
    box-sizing: border-box;

    img{
        width: 85px;
        height: 85px;
        border-radius: 20px;
        border: 2px solid var(--color-primary);
        object-fit: cover;
    }
    h2{
        
        b{
            color: var(--color-primary);
        }
    }
`




export const Titulo = styled.div`
    flex-direction: column;
    justify-content: center;
    margin-bottom: 60px;
    padding: 15px;

    h1{
    color: var(--color-black);
    font-size: 60px;

    .color-primary{
        color: var(--color-primary);
    }
}


@media screen and (max-width: 512px) {
    h1{
    color: var(--color-black);
    font-size: 50px;
    }
}
`
export const P = styled.p`
    color: var(--color-black);
    flex-wrap: wrap;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 18px;
    padding: 15px;
    margin-top: -4rem;
    font-weight: 460;
`

export const Cadapio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    a{
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-primary);
    width: 130px;
    height: 50px;
    padding: 5px;
    border-radius: 15px;
    color: #fff;
    font-weight:600;
    text-decoration: none;
    margin: 1rem;
    }
    a:nth-child(2){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        height: 50px;
        width: 220px;
        color:  var(--color-black);
        background: #fff;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        padding: 15px;
        margin-top: 0.7rem;
        justify-content: flex-start;
        white-space: nowrap;
        svg{
            font-size: 35px;
            color: #fff;
            padding: 5px;
            margin-right: 10px;
            border-radius: 10px;
            background: var(--color-primary);
        }
        :hover{
            background: var(--color-primary);
            transition: .7s;
        }
    }
    

    @media screen and (max-width: 512px) {
        a:nth-child(2){
        white-space: nowrap;
        font-size: 18px;
        width: 250px!important;
        padding: 15px;
        svg{
            font-size: 35px!important;
            color: #fff;
            padding: 5px;
            margin-right: 15px;
            border-radius: 10px;
            background: var(--color-primary);
        }
        
    }
    }
`

export const Contatos = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    a{
        display: flex;
        align-items: center;
        background: var(--color-white);
        padding: 10px;
        border-radius: 10px;
        margin-left: 1rem;
        margin-right: 2rem;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        opacity: 0;
        transition: all 1s;

        :nth-child(1){
            transform: translateX(-100%);
            transition: all 3s;
        }
        :nth-child(2){
            transform: translateX(-200%);
            transition: all 4s;
        }
        :nth-child(3){
            transform: translateX(-500%);
            transition: all 5s;
        }



        svg{
            font-size: 25px;
            color: var(--color-black);
            transition: .3s;
        }
        :hover{
        background:  var(--color-primary);
        transition: .7s;
        svg{
            color: var(--color-white);
        }
    }
    }
    .show{
        transition: all 1s;
        opacity: 1;
        :nth-child(1){
            transform: translateX(0);
            transition: all 2s;
        }
        :nth-child(2){
            transform: translateX(0);
            transition: all 1.5s;
        }
        :nth-child(3){
            transform: translateX(0);
            transition: all 1.2s;
        }
        
    }
`