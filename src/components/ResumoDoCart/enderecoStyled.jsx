import styled,{css} from "styled-components";

export const Content = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 15px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99;
    position: fixed;
    background-color: #ffffff;
    
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        background-color: var(--color-white);
        color: var(--color-black)!important;
        border-radius: 20px;
        border: none;
        padding: 15px 15px;
        margin-top:1rem;
        margin-bottom:1rem;
        font-size: 20px;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        svg{
            margin-right: 5px;
            font-size: 1.5rem;
        }
    }

    .valta{
        left: 10px;
    }

    .pedi{
        position: absolute;
        right: 10px;
        background-color: var(--color-primary)!important;
        color: var(--color-white)!important;
        font-weight: 700;
        }

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

    button{
        position: absolute;
        right: 10px;
        background-color: var(--color-primary)!important;
        color: var(--color-white)!important;
        font-weight: 700;
    }

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
            :nth-child(7){
                grid-column:2/2;
                grid-row: 2/2;
            }
            :nth-child(5){
                grid-column: 1/2;
                grid-row: 3/3;
            }
            :nth-child(9){
                grid-column:2/3;
                grid-row: 3/3;
            }
            :nth-child(11){
                grid-column: 1/3;
                grid-row: 4/4;
            }

            @media screen and (max-width: 512px){

                :nth-child(7){
                    grid-column:3/3;
                    grid-row: 2/2;
                }
                :nth-child(9){
                    grid-column: 3/3;
                    grid-row: 3/3;
                }
            }

        }

        input{
            background: #e3efff;
            color: var(--color-black)!important;
            width: 100%;
            margin-top: 2rem;
            border-radius: 15px;
            padding: 15px 25px;
            font-size: 20px;
            box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.38);
            border: none!important;

            ::placeholder{
                color:#00000037;
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
                grid-column: 2/2;
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

            @media screen and (max-width: 512px){

                :nth-child(2){
                    grid-column: 1/3;
                    grid-row: 1/1;
                }

                :nth-child(4){
                    grid-column: 1/3;
                    grid-row: 2/2;
                }

                :nth-child(8){
                    grid-column: 3/3;
                    grid-row: 2/2;
                }

                :nth-child(6){
                    grid-column: 1/3;
                    grid-row: 3/3;
                }

                :nth-child(10){
                    grid-column: 3/3;
                    grid-row: 3/3;
                }


                :nth-child(12){
                    grid-column: 1/4;
                    grid-row: 4/4;
                }
            }
            
        }

        @media screen and (max-width: 512px){
                width: 95%;
                grid-template-columns: repeat(3, 3fr);

        }
    }
`
export const Contentpay = styled.section`

    width: 100%;
    height: 100%;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 1rem;
    box-sizing: border-box;

//////////////////////////////////////////////
${({ ispay }) => ispay && css`
        display: none;
        
`}

`

export const ModalPay = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    width: auto;
    height: 50%;
    grid-column:2/2;
    grid-row: 3/3;

    .pay_select{
        position: absolute;
        bottom: 200px;

        input{
            background-color: #e3efff;
            border-radius: 20px;
            padding: 15px 25px;
            font-size: 20px;
            box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.38)!important;
            border: none!important;

            ::placeholder{
                color: var(--color-black)!important;
            }
        }
    }
    

    @media screen and (max-width: 512px){
        grid-column:2/2;
        grid-row: 2/3;
    }

    label{

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        padding: 1px;

        svg{
            z-index: 9;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 40px;
            margin: 0;
            color: var(--color-black);
        }

        input[type="radio"]{
            appearance: none;
            background: none;
            position: relative;
            width: 100px;
            height: 50rem;
            max-height: 55px;
            max-width: 100px;
            z-index: 99;
            transition: .7s;
            border: 1px solid var(--color-text);
            @media screen and (max-width: 512px){
                width: 90px;
                margin: 5px;
                margin-top: 2rem;
            }
            
        }
        input[type="radio"]:checked{
            transition: .7;
            background: var(--color-primary);
            z-index: 1;
            border: none;
        }
    }

`


export const Map = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    top: 50px;
    grid-column: 2/2;
    grid-row: 1/2;

    @media screen and (max-width: 512px){
        grid-column: 2/2;
        grid-row: 1/2;
    }

    svg{
        margin-right: 1.5rem;
        width: 70px!important;
        height: 70px!important;
        background-color: var(--color-secondary);
        padding: 10px;
        border-radius: 11px;
    }
    div{
        @media screen and (max-width: 512px){
            width: 100%;
        }
        p{
            font-weight: 600;
            & + p{
                white-space: nowrap;
                color:     var(--color-text);
            }
        }
    }
`