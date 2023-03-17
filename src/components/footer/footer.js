import React from "react";
import './style.css'
import Logo from '../../assets/batmanlogo.jpg'
import { Link } from "react-router-dom";

function Footer() {
    return(
        <div id="footer-container">
            <img className="logo" src={Logo}></img>
            <span className="text">Todos os direitos reservados ©</span>
            <span className="text">Desenvolvido por: Éric Filipe</span>

            <div id="footer-navegation">
            <nav id="nav">
                <ul id="ul">
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <li id="li">Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/contato'>
                        <li>Contato</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/foto'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/comentarios'>
                        <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </div>
        </div>
    )
}

export default Footer