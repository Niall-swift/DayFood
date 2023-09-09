import styled from "styled-components";

export const Content = styled.section`
    backdrop-filter: blur(100px);
    width: 100%;
    height: 100dvh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
        height: 75px;
    }


    from{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 32px;

        input{
            width: 100%;
            background-color: var(--color-secondary);
            border-radius: 20px;
            padding: 15px 25px;
            font-size: 20px;
            box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.38)!important;
            border: none!important;
            margin: 15px auto;
            outline: none;

            :focus{
                color: var(--color-primary);
            }
            ::outline-color{
                border: 1px solid var(--color-primary);
            }
        }
    }
`

export const Button = styled.button.attrs(props =>({
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