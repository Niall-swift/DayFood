import React, { useEffect, useState } from "react"
import {Centent, Main, Cards, Client, Claintes} from './VendasStyled'
///////imorte componite//////////
import Header from '../Hearder'
////////////////////////////////
///////////////import api server////////////
import {db} from '../../pages/firebase'
import {getDoc, collection, getDocs} from 'firebase/firestore'
/////////////// import avatar////////////////////
import avatarimg from '../../assets/undraw_drink_coffee_av1x.svg'



export default function Vendas(){
    const [client, setClient] = useState ([])

    useEffect(()=>{
        let lista = collection(db, "usuarios")

        async function searchClient(){

            await getDocs(lista)
        
            .then((snapshot)=>{
                let Client = []

                snapshot.forEach((doc) =>{

                Client.push({
                    ID: doc.id,
                    NAME: doc.data().nome,
                    EMAIL: doc.data().email,
                    TEL: doc.data().telefone,
                    IMG: doc.data().avatar
                    })

                })
                setClient(Client)
            })
        }
        searchClient()

    },[])


    return(
    <>
    <Header/>
    <Centent>
            <Main>
                <h1>Vendas</h1>
                <Cards>
                    <div>
                        <h4>December 10, 2020</h4>
                        <h2>Data Analysis</h2>
                        <b>Prototyping</b>
                        <b>Prototyping</b>
                        <b>Prototyping</b>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Cards>
            </Main>

            <Claintes>
                <h1>Clientes</h1>

                <Client>
                    {client.map((doc, index) =>{
                        return(
                    <div key={index}>
                        <img src={doc.IMG === null ? avatarimg : doc.IMG} alt=""/>
                        <div>
                            <h5>{doc.NAME}</h5>
                            <p>{doc.EMAIL.split(2)}</p>
                            <b>{doc.TEL}</b>
                        </div>
                    </div>
                        )
                    })}
                </Client>
            </Claintes>
        </Centent>
    </>
    )
}