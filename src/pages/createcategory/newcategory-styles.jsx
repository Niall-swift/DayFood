import styled from "styled-components";


export const Content = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100vw;
    height: 100vh;
    max-width: 1280px;
    box-sizing: border-box;
    padding: 1rem;
    margin: 0 auto;
`
export const Conteiner = styled.main`
    width: 35em;
    height: 50em;
    margin: 1rem 0rem;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-white);
    border-radius: 20px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.38);
`
export const Text = styled.div`
    position: absolute;
    top: 10px;
`
export const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 90%;
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;

        label{
            font-size: 1.5rem;
            color: var(--color-text);
        }

        input{
            background: var(--color-secondary);
            color: var(--color-black)!important;
            width: 100%;
            outline: none;
            margin-top: 2rem;
            margin-bottom: 2rem;
            border-radius: 15px;
            padding: 15px 25px;
            font-size: 20px;
            box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.38);
            border: none!important;
            box-sizing: border-box;
        }

        button{
            background: ${props => (props.load === true ? '#a97f00' : 'var(--color-primary)')};
            color: var(--color-white)!important;
            border-radius: 20px;
            border: none;
            margin: 0;
            margin-top: 1rem;
            padding: 15px 25px;
            font-size: 20px;
            box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
            text-transform: uppercase;
        }
    }
`

export const SelecIcon = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    margin: 1rem 0.1rem;
    overflow-Y: hidden;
    overflow-Y: auto;
    position: relative;
    flex-wrap: wrap;

    label{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        padding: 1px;

        img{
            z-index: 9;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            width: 20px;
            cursor: pointer;
        }

        input[type="radio"]{
            appearance: none;
            background: none;
            position: relative;
            width: 3em;
            height: 3em;
            margin: 0.5em;
            z-index: 99;
            transition: .7s;
            border: 1px solid var(--color-text);
        }
        input[type="radio"]:checked{
            transition: .7;
            background: var(--color-primary);
            z-index: 1;
            border: none;
        }
    }
`