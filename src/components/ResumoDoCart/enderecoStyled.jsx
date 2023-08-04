import styled,{css} from "styled-components";

export const Content = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99;
    position: fixed;
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);





///////////////////////////////////////////////
    ${({ ismodal }) => ismodal && css`
        display: none;
`}

`

export const Form = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    overflow: auto;
    overflow-x: hidden;
    box-sizing: border-box;

    form{
        display: grid;
        width: 50%;
        grid-template-columns: repeat(2, 3fr);
        grid-template-rows: repeat(4, 3fr);
        grid-gap: 2rem;
        box-sizing: border-box;

        label{
            margin-left: 0.5rem;
            :nth-child(1){
                grid-column: 1/2;
                grid-row: 1/1;
            }
            :nth-child(3){
                grid-column: 1/2;
                grid-row: 2/2;
            }
            :nth-child(5){
                grid-column: 1/2;
                grid-row: 3/3;
            }
            :nth-child(7){
                grid-column:2/3;
                grid-row: 2/2;
            }
            :nth-child(9){
                grid-column:2/3;
                grid-row: 3/3;
            }
            :nth-child(11){
                grid-column: 1/3;
                grid-row: 4/4;
            }
        }
        input{
            background-color: var(--color-white);
            color: var(--color-black)!important;
            width: 100%;
            margin-top: 2rem;
            border-radius: 15px;
            padding: 15px 25px;
            font-size: 20px;
            box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1)!important;
            border: none!important;
            ::placeholder{
                color:#00000056;
            }

            
            :nth-child(2){
                grid-column: 1/2;
                grid-row: 1/1;
            }

            :nth-child(4){
                grid-column: 1/2;
                grid-row: 2/2;
            }

            :nth-child(8){
                grid-column:2/3;
                grid-row: 2/2;
            }

            :nth-child(6){
                grid-column: 1/2;
                grid-row: 3/3;
            }

            :nth-child(10){
                grid-column:2/3;
                grid-row: 3/3;
            }


            :nth-child(12){
                grid-column: 1/3;
                grid-row: 4/4;
            }
            
        }

        @media screen and (max-width: 512px){
                width: 95%;

        }
    }
`

export const ModalPay = styled.section`

${({ ispay }) => ispay && css`
        display: none;
`}
`