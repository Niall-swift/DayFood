import styled, {css} from "styled-components";


export const Container = styled.div`
    width:100%;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    top: 0;
    position: fixed;
    z-index: 99;
    backdrop-filter:blur(50px);
    filter: saturate(2.1);
    -webkit-backdrop-filter: blur(100px);
    transition: all .7s;
    box-shadow: ${props => (props.scl !== false ? '0px 10px 15px -3px rgba(0,0,0,0.30)' : '')};
`
export const Logo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    img{
        border:1px solid #FFF;
        border-radius:50%;
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
    p{
        padding: 15px;
        width: 20ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`

export const Menus = styled.div`
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 30px;

        background: none;
        border: none;
        color: var(--color-black);
        font-size: 19px;

        svg{
            font-size: 30px;
            margin-right: 0.2em;
            color: var(--color-black);
        }
    }
    button:hover{
        transform: scale(1.1);
        transition: .1s;
    }

    @media screen and (max-width: 512px){
        display: none;
    }

`
export const Menu = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    button{
        display: none;
    }

        @media screen and (max-width: 512px){
        button{
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        color: #fff;
        font-size: 19px;


        svg{
            font-size: 30px;
            color: black;
        }

    }
}
`
//////////////////////////////////////////////////////////////// menu mobile /////////////////////////////////////////////
export const ContainerMobile = styled.div`
    display: none;
    

    @media screen and (max-width: 512px){
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    pointer-events: none;
    z-index: 100;
    transition: .7s;
    opacity: 0;
    > svg{
    position: absolute;
    top: 2rem;
    right: 1.5rem;
    transform: rotate(195deg);
    transition: .7s;
    }




    ${({ isVisible }) => isVisible && css`
    width: 100%;
    height: 100vh;
    position: fixed;
    display: flex;
    transition: .7s;
    
    top: 0;
    z-index: 100;
    opacity: 1;
    pointer-events: auto;
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);

    > svg {
        transform: rotate(0deg);
        font-size: 55px;
    }
`}
    }
`
export const MenusMobile = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 35px;
    justify-content: start;
    align-items: flex-start;
    flex-direction: column;
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 5px;
        margin-bottom: 1em;
        margin-top: 2em;

        background: none;
        border: none;
        color: #000;
        font-size: 19px;
        text-transform: uppercase;
        font-weight: 600;

        svg{
            font-size: 35px;
            margin-right: 0.5em;
            
        }
    }
`
