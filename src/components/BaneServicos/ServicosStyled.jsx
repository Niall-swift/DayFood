import styled from "styled-components";
import bg from '../../assets/bg-icons-2.png'

export const Content = styled.section`
    background-image: url(${bg});
    margin-top: 50px;
    height: 80%;
    width: 100%;
    padding-top: 100px;
    padding-bottom: 150px;

    h4{
        text-align: center;
        color: var(--color-primary);
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: 5px;
    }
    h1{
        text-align: center;
        color: var(--color-black);
        font-size: 40px;
        margin-top: 5px;
        margin-bottom: 30px;
    }


    div{
        transition: all .5s;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px;
        
        
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 1rem;
            padding: 20px;

            img{
                width: 250px;
                height: 250px;
            }
            h2{
                text-align: center;
                font-size: 20px;
                color: var(--color-black);
                margin-bottom: 10px;
            }
            p{
                text-align: center;
                color: var(--color-text-out);
                font-size: 15px;
                padding: 0px 30px;
            }

            @media screen and (max-width: 512px){
                    img{
                    width: 120px;
                    height: 120px;
                    }
            }
        }
        @media screen and (max-width: 512px){
            div{
                width: 100%;
                height: 100%;
                
            }
        }
    }
`