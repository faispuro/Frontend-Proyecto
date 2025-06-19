import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import '../componentes/styles/Formulario.css';
const FormularioLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    alert("Login exitoso");
    navigate("/principal");
  };

  return (
    <div className="formulario">
      <h1 className="formulario_titulo">Iniciar sesión</h1>
      <form className="formulario_form" onSubmit={handleSubmit(onSubmit)}>

        <label className="formulario_label">Email</label>
        <input
          className="formulario_input"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && <p className="formulario_error">El email es obligatorio</p>}

        <label className="formulario_label">Contraseña</label>
        <input
          className="formulario_input"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <p className="formulario_error">La contraseña es obligatoria</p>}

        <button className="formulario_button" type="submit">Ingresar</button>
      </form>

      <div className="formulario_footer">
        <p>
          ¿No tenés cuenta?{" "}
          <button className="formulario_link" onClick={() => navigate("/")}>Registrarme</button>
        </p>
        <p>
          ¿Olvidaste tu contraseña?{" "}
          <button className="formulario_link" onClick={() => navigate("/recuperar")}>Recuperar</button>
        </p>
      </div>
    </div>
  );
};

export default FormularioLogin;
