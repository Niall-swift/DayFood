import styled from "styled-components";



export const Container = styled.section`
    width: 100%;
    max-width: 1280px;
    height: 100vh;
    margin: 0 auto;

    h2{
        text-align: center;
        color: var(--color-text);
    }

    button{
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props => (props.load === true ? '#a97f00' : 'var(--color-primary)')};
        color: var(--color-white)!important;
        border-radius: 20px;
        border: none;
        padding: 10px 15px;
        margin: 2rem;
        font-size: 20px;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        text-transform: uppercase;

    }
    
`

export const Group_input = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2em;

    form{
        display: grid;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        gap: 2em;

        label{
            position: relative;
            text-align: start;
            margin-bottom: 6em;
            padding: 0.1em;

            :nth-child(2){
                grid-column: 2/4;
                grid-row: 1/1;
            }
            :nth-child(4){
                grid-column: 1/2;
                grid-row: 2/2;
            }
            :nth-child(6){
                grid-column: 2/3;
                grid-row: 2/2;
            }
            :nth-child(8){
                grid-column: 1/3;
                grid-row: 3/3;
            }
        }

        input,
        select,
        textarea{
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

            :nth-child(3){
                grid-column: 2/3;
                grid-row: 1/1;
            }
            :nth-child(5){
                grid-column: 1/2;
                grid-row: 2/2;
            }
        }

        select{
            grid-column: 2/3;
            grid-row: 2/2;
        }
        textarea{
            width: 100%;
            height: 80px;
            margin: 0;
            resize: none;
            grid-column: 1/3;
            grid-row: 3/3;
        }

        button{
            grid-column:1/3;
            grid-row:4/4;
            width: 100%;
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

        @media screen and (max-width: 512px) {
            display: block;

            label{
                margin-bottom: 1rem;
            }
        }
            
    }

`
export const File_Upload = styled.label`
    width: 100%;
    max-width: 25rem;
    height: auto;
    display: flex;
    object-fit: cover;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    border: 2px dashed #939393;
    border-radius: 11px;
    grid-column: 1/2;
    grid-row: 1/1;

    span{
            z-index: 99;
            position: absolute;
            opacity: 0.75;
            transition: all 0.5s;
    }

    input{
        display: none;
    }

    img{
        width: 100%;
        height: 250px;
        border-radius: 10px;
        object-fit: cover;
    }
`