import React, { useState } from "react";
import MenuInteractivo from "../componentes/MenuInteractivo";
import '../componentes/styles/MiCuenta.css';

const MiCuenta = () => {
  const [usuario, setUsuario] = useState({
    nombre: "Juan Pérez",
    email: "juan.perez@email.com",
    password: "",
    passwordConfirm: "",
  });

  const [mensaje, setMensaje] = useState("");
  const [colapsado, setColapsado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.password !== usuario.passwordConfirm) {
      setMensaje("Las contraseñas no coinciden.");
      return;
    }
    setMensaje("Datos actualizados correctamente.");
  };

  return (
    <>
      <MenuInteractivo colapsado={colapsado} setColapsado={setColapsado} />
      <div className="micuenta-container">
        <div className="header-micuenta">
          <h1>Mi Cuenta</h1>
          <button
            className="btn-toggle"
            onClick={() => setColapsado(!colapsado)}
            aria-expanded={!colapsado}
            aria-controls="form-micuenta"
          >
            {colapsado ? "Mostrar" : "Ocultar"}
          </button>
        </div>

        <div
          className={`contenedor-collapsible ${colapsado ? "cerrado" : "abierto"}`}
          id="form-micuenta"
          aria-hidden={colapsado}
        >
          <form onSubmit={handleSubmit} className="form-micuenta">
            <div className="campo-form">
              <label htmlFor="nombre">Nombre</label>
              <input
              className="input-text"
                type="text"
                name="nombre"
                id="nombre"
                value={usuario.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="campo-form">
              <label htmlFor="email">Email</label>
              <input
              className="input-email"
                type="email"
                name="email"
                id="email"
                value={usuario.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="campo-form">
              <label htmlFor="password">Nueva Contraseña</label>
              <input
              className="input-password"
                type="password"
                name="password"
                id="password"
                value={usuario.password}
                onChange={handleChange}
                placeholder="Dejar vacío para no cambiar"
              />
            </div>

            <div className="campo-form">
              <label htmlFor="passwordConfirm">Confirmar Contraseña</label>
              <input
              className="input-passwordConfirm"
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                value={usuario.passwordConfirm}
                onChange={handleChange}
                placeholder="Repite la nueva contraseña"
              />
            </div>

            <button type="submit" className="btn-guardar">Guardar Cambios</button>
          </form>
        </div>

        {mensaje && <p className="mensaje">{mensaje}</p>}
      </div>
    </>
  );
};

export default MiCuenta;
