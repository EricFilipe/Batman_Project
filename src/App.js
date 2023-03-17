import React, { useContext } from "react";
import { userContext } from "./contexts/provider";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./page/home/home";
import Foto from "./page/foto/foto";
import Contato from "./page/contato/contato"
import './index.css'
import Comentarios from "./page/comentario/comentario";

function App() {
  const {user} = useContext(userContext)
  console.log(user)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/foto' element={<Foto />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/comentarios' element={<Comentarios />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
