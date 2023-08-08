import styled from "styled-components";

export const Content = styled.section`
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    padding: 5px;


    table{
    border: 2px solid  #8e8e8edd;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed; 
    border-radius: 10px;
}

table tr{
    margin-bottom: 5px;
    background: #0006176f;
}

table th, table td{
    overflow: hidden;
    overflow-y: scroll;
    padding: 0.62em;
    text-align: center;
    text-transform: uppercase;
}

table th{
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-bottom: 2px solid  #afaeaedd;
}

table td{
    border: 1px solid  #8e8e8edd;
    padding: 1.2em;
}
    @media screen and (max-width: 512px){
        table{
        border-radius: 10px;
    };
    table caption{
        font-size: 1.3em;
    }
    table thead{
        border: 0;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
    table tr{
        border-bottom: 10px solid;
        display: block;
        margin-bottom: 5em;
    }
    
    table td{
        border-bottom: 1px solid;
        display: block;
        font-size: 0.85em;
        text-align: right;
    }

    table td::before{
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
    }

    .loadp{
        margin-left: 5em;
        display: flex;
        flex-direction: row;
        margin-top: 5em;
        font-size: 1em;

    }
    }

`
export const Button = styled.button`
    width: 100%;
    height: 65px;
    margin-right: 6px;
    margin-bottom: 6px;
    margin-top: 6px;
    border-radius: 10px;
    border: none;
    color: #ddd;
    font-weight: 700;

    @media screen and (max-width: 512px){
        width: 30%;
        height: 45px;
    }
`
export const Alink = styled.a`
    padding: 5px;
    position: sticky;
    top: 0;
`
///////////////////////////////////////////////////////////////////////////////////
export const Contenti = styled.section`
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    padding: 15px;


    table{
    border: 3px solid  #8e8e8edd;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed; 
    border-radius: 10px;
}

table tr{
    margin: 0;
    padding: 0;
    background: #0a003c20;

}

table th, table td{
    padding: 0.2em;
    text-align: center;
    text-transform: uppercase;
    border-radius: 5px;
}

table th{
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-bottom: 1px solid  #5a5a5add;
}

table td{
    border: none;
    padding: 1em;
    border: 0.01em solid #ffffff2b;
}
    @media screen and (max-width: 512px){
        table{
        border-radius: 10px;
    };
    table caption{
        font-size: 1.3em;
    }
    table thead{
        border: 0;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
    table tr{
        border-bottom: 10px solid;
        display: block;
        margin-bottom: 2em;
    }
    
    table td{
        border-bottom: 1px solid;
        display: block;
        font-size: 0.85em;
        text-align: right;
    }

    table td::before{
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
    }
`