import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import './style.css'
import f1 from '../../assets/1.webp'
import f2 from '../../assets/2.webp'
import f3 from '../../assets/3.jpg'
import f4 from '../../assets/thebatmanposter.jpg'
import f5 from '../../assets/charada.jpg'
import f6 from '../../assets/robert.jpeg'
import f7 from '../../assets/gordon.webp'
import f8 from '../../assets/mgato.jpg'
import f9 from '../../assets/pinguin.jpg'
import f0 from '../../assets/coringa.jpg'
import f11 from '../../assets/bike.webp'



function Foto(){

    return(
        <>
        <Header />
        <div className="galery-container">
            <img className="galery-itens" src={f1}></img>
            <img className="galery-itens" src={f2}></img>
            <img className="galery-itens" src={f3}></img>
            <img className="galery-itens" src={f4}></img>
            <img className="galery-itens" src={f5}></img>
            <img className="galery-itens" src={f6}></img>
            <img className="galery-itens" src={f7}></img>
            <img className="galery-itens" src={f8}></img>
            <img className="galery-itens" src={f9}></img>
            <img className="galery-itens" src={f0}></img>
            <img className="galery-itens" src={f11}></img>
        </div>
        
        <Footer />
        </>
    )
}

export default Foto