import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import './style.css'
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/twitter.png'

function Contato(){
    
    return(
        <>
           <Header />

            <div id="block-container">
                <div className="block-content">
                    <div className="picture">
                        <img className="logos" src={Facebook}></img>
                        <img className="logos" src={Instagram}></img>
                        <img className="logos" src={Twitter}></img>
                    </div>
                    <div className="form">
                        <h1 className="title">Fale conosco</h1>
                        <form id="form" action="/contato">
                        <input type='text' id="text" name='nome' placeholder='Δ Nome'></input>
                        <input type='email' id="email" name='email' placeholder='&#9993; Email'></input>
                        <textarea id="msg" placeholder="Mensagem"></textarea>
                        </form>
                        <button className="butao">Enviar</button>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div id="footer"><Footer /> </div>
           
        </>
    )
}

export default Contato