import React, { useEffect, useState } from "react";
import MenuInteractivo from "../componentes/MenuInteractivo";
import "../componentes/styles/Categorias.css";

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const elementosPorPagina = 8;
  const [colapsado, setColapsado] = useState(false);

  useEffect(() => {
    const simulacionCategorias = [
      { id: 1, nombre: "Electrónica", descripcion: "Dispositivos y gadgets" },
      { id: 2, nombre: "Ropa", descripcion: "Indumentaria y accesorios" },
      { id: 3, nombre: "Hogar", descripcion: "Muebles y decoración" },
      { id: 4, nombre: "Juguetes", descripcion: "Para niños de todas las edades" },
      { id: 5, nombre: "Deportes", descripcion: "Equipamiento deportivo" },
      { id: 6, nombre: "Libros", descripcion: "Literatura y educación" },
      { id: 7, nombre: "Cosméticos", descripcion: "Belleza y cuidado personal" },
      { id: 8, nombre: "Mascotas", descripcion: "Accesorios y alimentos para mascotas" },
      { id: 9, nombre: "Automóviles", descripcion: "Accesorios y repuestos" },
      { id: 10, nombre: "Herramientas", descripcion: "Herramientas para el hogar y el trabajo" },
    ];
    setCategorias(simulacionCategorias);
  }, []);

  const categoriasFiltradas = categorias.filter((categoria) =>
    categoria.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const indexUltimoElemento = paginaActual * elementosPorPagina;
  const indexPrimerElemento = indexUltimoElemento - elementosPorPagina;
  const categoriasPaginadas = categoriasFiltradas.slice(indexPrimerElemento, indexUltimoElemento);
  const totalPaginas = Math.ceil(categoriasFiltradas.length / elementosPorPagina);

  const cambiarPagina = (numero) => {
    setPaginaActual(numero);
  };

  const handleEliminar = (id) => {
    const nuevasCategorias = categorias.filter((categoria) => categoria.id !== id);
    setCategorias(nuevasCategorias);
  };

  return (
    <>
      <MenuInteractivo colapsado={colapsado} setColapsado={setColapsado} />
      <div className={`main-content ${colapsado ? "colapsado" : "no-colapsado"}`}>
        <div className="categorias-container">
          <h1 className="categorias-titulo">Listado de Categorías</h1>

          <div className="acciones-superiores">
            <div className="acciones-grupo-input-filtro">
              <input
                type="text"
                placeholder="Buscar categoría..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="input-buscador"
              />
            </div>
            <button className="boton-agregar">Agregar Categoría</button>
          </div>

          {categoriasFiltradas.length === 0 ? (
            <p>No hay categorías disponibles.</p>
          ) : (
            <>
              <table className="tabla-categorias">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {categoriasPaginadas.map((categoria) => (
                    <tr key={categoria.id}>
                      <td>{categoria.id}</td>
                      <td>{categoria.nombre}</td>
                      <td>{categoria.descripcion}</td>
                      <td>
                        <button
                          onClick={() => alert("Editar " + categoria.nombre)}
                          className="boton-editar"
                        >
                          <i className="fa-solid fa-pencil"></i>
                        </button>
                        <button
                          onClick={() => handleEliminar(categoria.id)}
                          className="boton-eliminar"
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="paginacion">
                {[...Array(totalPaginas)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => cambiarPagina(index + 1)}
                    className={paginaActual === index + 1 ? "pagina-activa" : ""}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Categorias;
