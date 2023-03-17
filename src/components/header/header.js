import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/batmanlogo.jpg';
import './style.css';

function Header({ nome }) {
    
    return(
         <header>
            <img id="logo" src={Logo}></img>
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <li>Home</li>
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
        </header> 
    )
}

export default Header