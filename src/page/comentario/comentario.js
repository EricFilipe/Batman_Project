import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import './style.css'
import Avatar from '../../assets/avatar.png'

function Comentarios() {
    return(
        <>
        <Header />
        <div id="inf-container">
            <div className="inf-content">
                <div className="pic"></div>
                <div className="description-container">
                    <h1>Batman (2022)</h1>
                    <h2>The Batman</h2>
                    <div className="description-content">
                        <div className="informacao">
                        <p>Ano: 2022</p>

                        <p>País: EUA</p>

                        <p>Classificação: 14 anos</p>

                        <p>Duração: 175min</p>
                        </div>
                        <div className="informacao">
                        <p>Direçaõ: Matt Reeves</p>

                        <p>Roteiro: Matt Reeves</p>

                        <p>Elenco: Robert Pattinson, Zoë Kravitz, Jeffrey Wright, Colin Farrell, Paul Dano</p>
                        </div>
                    </div>
                </div>
            </div>
        

            <div id="coment-container">
            <div className="upper">
                <h1 id="coment-title">Comentários</h1>
               <div className="classification">classificar por <select name="seleção de comentários" id="box">
                    <option value="Mais recentes">Mais recentes</option>
                    <option value="Mais antigos">Mais antigos</option>
                    <option value="Mais curtidos">Mais curtidos</option>
                </select></div>
            </div>
            <div className="divider"></div>
            <div className="coment-block">
                <img id="avatar" src={Avatar}></img>
                <div id="coment-block2">
                    <form action="/comentario">
                        <input type="text" id="message" name="text" placeholder="Deixe aqui seu comentário..."></input>
                    </form>
                    <div className="block2">
                        <form action="/comentario"><input type="checkbox" name="checkbox" id="checkbox" /><strong>Anonimous</strong></form> 
                        <button id="button">Publicar comentário</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Comentarios