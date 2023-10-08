import styled from "styled-components";



export const Container = styled.section`
    width: 100vw;
    max-width: 1280vw;
    height: 100vh;
    margin: 0 auto;
`

export const Group_input = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5em;


    label{

    }

    form{
        display: grid;
        width: 100%;
        height: 100vh;
        justify-content: center;
        align-items: center;
        gap: 2em;
        grid-template-columns: repeat(auto-fill, minmax(2, 1fr));
        grid-template-rows: repeat(4, 1fr);

        input,
        textarea{
            background: #e3efff;
            color: var(--color-black)!important;
            width: 100%;
            margin-top: 2rem;
            border-radius: 15px;
            padding: 15px 25px;
            font-size: 20px;
            box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.38);
            border: none!important;

            :nth-child(3){
                grid-column: 2/4;
                grid-row: 1/1;
            }
            :nth-child(5){
                grid-column: 1/2;
                grid-row: 2/2;
                background-color: #ff00f7;
                
            }
        }
    }

`
export const File_Upload = styled.label`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    border: 2px dashed #737373;
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
        height: 225px;
        object-fit: cover;
    }
`