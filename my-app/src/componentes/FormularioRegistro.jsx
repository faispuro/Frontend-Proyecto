import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import '../componentes/styles/Formulario.css';
const FormularioRegistro = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    alert("Registro exitoso");
    navigate("/principal"); 
  };

  return (
    <div className="formulario">
      <h1 className="formulario_titulo">Crea tu cuenta y gestiona tu Stock</h1>
      <form className="formulario_form" onSubmit={handleSubmit(onSubmit)}>
        
        <label className="formulario_label">Nombre del negocio</label>
        <input className="formulario_input" type="text" {...register("name", { required: true })} />
        {errors.name && <p className="formulario_error">El nombre es requerido</p>}

        <label className="formulario_label">Teléfono de persona encargada</label>
        <input className="formulario_input" type="number" {...register("phone", { required: true })} placeholder="+54 9 11 1234 5678" />
        {errors.phone && <p className="formulario_error">El teléfono es requerido</p>}

        <label className="formulario_label">E-mail de contacto</label>
        <input className="formulario_input" type="email" {...register("email", { required: true })} />
        {errors.email && <p className="formulario_error">El email es requerido</p>}

        <label className="formulario_label">Contraseña para tu cuenta</label>
        <input className="formulario_input" type="password" {...register("password", { required: true, minLength: 8 })} />
        {errors.password?.type === "required" && <p className="formulario_error">La contraseña es requerida</p>}
        {errors.password?.type === "minLength" && <p className="formulario_error">Debe contener mínimo 8 caracteres</p>}

        <button className="formulario_button" type="submit">Registrarme</button>
      </form>

      <div className="formulario_footer">
        <p>
          ¿Ya tenés cuenta?{" "}
          <button className="formulario_link" type="button" onClick={() => navigate("/login")}>
            Ingresar
          </button>
        </p>
        <p>
          ¿Olvidaste tu contraseña?{" "}
          <button className="formulario_link" type="button" onClick={() => navigate("/recuperar")}>
            Recuperar
          </button>
        </p>
        <p>
          Continuar sin registrarte{" "}
          <button className="formulario_link" type="button" onClick={() => {
            alert("Entraste como invitado");
            navigate("/principal");
          }}>
            Continuar
          </button>
        </p>
      </div>
    </div>
  );
};

export default FormularioRegistro;
