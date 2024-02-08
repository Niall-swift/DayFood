import styled from "styled-components";

export const Content = styled.section`
    position: relative;
    backdrop-filter: blur(100px);
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`

export const Iniciar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;


    h1{

        b{
            color: var(--color-primary);
        }
    }

    b{
            color: var(--color-primary);
        }

    img{
        height: 5rem;
    }


    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1rem;

        input{
            width: 100%;
            background-color: var(--color-secondary);
            border-radius: 20px;
            padding: 1rem 2rem;
            font-size: 20px;
            box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.38)!important;
            border: none!important;
            margin: 0.75rem auto;
            outline: none;

            :focus{
                color: var(--color-primary);
            }
            ::outline-color{
                border: 1px solid var(--color-primary);
            }
        }

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            b{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                @media screen and (max-width: 512px) {
                    font-size: 12px;
                }
            }
        }

        .valid{
            color: #059800;
        }
    }

    @media screen and (max-width: 512px) {
        
    }
`

export const Button = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.load,
}))`
            width: 250px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: ${props => (props.load === true ? '#a97f00' : 'var(--color-primary)')};
            color: var(--color-white)!important;
            border-radius: 20px;
            border: none;
            padding: 15px 25px;
            margin-top:1rem;
            margin-bottom:1rem;
            font-size: 20px;
            box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`