import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import FormularioLogin from './componentes/FormularioLogin';
import FormularioRegistro from './componentes/FormularioRegistro';
import FormularioRecuperar from './componentes/FormularioRecuperar';
import Principal from './pages/Principal';
import Inventario from './pages/Inventario';
import Ventas from './pages/Ventas';
import Categorias from './pages/Categorias';
import MiCuenta from './pages/MiCuenta';


function App() {
  
  return (
    <Router>
      <nav className="nav_nav">
        <ul className="menu_ul">
          <li className="menu_li"><Link to="/">Registro</Link></li>
          <li className="menu_li"><Link to="/login">Login</Link></li>
          <li className="menu_li"><Link to="/recuperar">Recuperar</Link></li>
          <li className="menu_li"><Link to="/principal">Inicio</Link></li>
          <li className="menu_li"><Link to="/ventas">Ventas</Link></li>
          <li className="menu_li"><Link to="/categorias">Categorías</Link></li>
          <li className="menu_li"><Link to="/inventario">Inventario</Link></li>
          <li className="menu_li"><Link to="/micuenta">Mi cuenta</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<FormularioRegistro />} />
        <Route path="/login" element={<FormularioLogin />} />
        <Route path="/recuperar" element={<FormularioRecuperar />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/micuenta" element={<MiCuenta />} />
      </Routes>
    </Router>
  );
}

export default App;
