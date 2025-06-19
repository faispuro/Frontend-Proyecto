import React from "react";
import { useNavigate } from "react-router-dom";
import '../componentes/styles/Formulario.css';
const FormularioRecuperar = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Si el correo existe, te enviaremos un enlace");
    navigate("/login");
  };

  return (
    <div className="formulario">
      <h1 className="formulario_titulo">Recuperar contraseña</h1>
      <form className="formulario_form" onSubmit={handleSubmit}>
        <label className="formulario_label">Correo electrónico</label>
        <input className="formulario_input" type="email" required />
        <button className="formulario_button" type="submit">Enviar enlace</button>
      </form>
      <button className="formulario_link" type="button" onClick={() => navigate("/login")}>
        Volver
      </button>
    </div>
  );
};

export default FormularioRecuperar;
