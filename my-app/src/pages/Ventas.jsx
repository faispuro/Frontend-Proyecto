import React, { useEffect, useState } from "react";
import "../componentes/styles/Ventas.css";
import MenuInteractivo from "../componentes/MenuInteractivo";

const Ventas = () => {
  const [ventas, setVentas] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const elementosPorPagina = 10;
  const [colapsado, setColapsado] = useState(false);

  useEffect(() => {
    const simulacionProductos = [
      { id: 1, nombre: "Producto 1", categoria: "Categoria 1", precio: 100, cantidad: 4 },
      { id: 2, nombre: "Producto 2", categoria: "Categoria 2", precio: 200, cantidad: 3 },
      { id: 3, nombre: "Producto 3", categoria: "Categoria 1", precio: 300, cantidad: 30 },
      { id: 4, nombre: "Producto 4", categoria: "Categoria 2", precio: 400, cantidad: 40 },
      { id: 5, nombre: "Producto 5", categoria: "Categoria 3", precio: 500, cantidad: 50 },
      { id: 6, nombre: "Producto 6", categoria: "Categoria 1", precio: 120, cantidad: 6 },
      { id: 7, nombre: "Producto 7", categoria: "Categoria 3", precio: 220, cantidad: 12 },
      { id: 8, nombre: "Producto 8", categoria: "Categoria 4", precio: 80, cantidad: 15 },
      { id: 9, nombre: "Producto 9", categoria: "Categoria 2", precio: 150, cantidad: 7 },
      { id: 10, nombre: "Producto 10", categoria: "Categoria 4", precio: 330, cantidad: 5 },
      { id: 11, nombre: "Producto 11", categoria: "Categoria 1", precio: 210, cantidad: 9 },
    ];

    setVentas(simulacionProductos);
  }, []);

  const ventasFiltradas = ventas.filter((venta) => {
    const coincideCategoria = filtroCategoria ? venta.categoria === filtroCategoria : true;
    const coincideBusqueda = venta.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  const indexUltimoElemento = paginaActual * elementosPorPagina;
  const indexPrimerElemento = indexUltimoElemento - elementosPorPagina;
  const ventasPaginadas = ventasFiltradas.slice(indexPrimerElemento, indexUltimoElemento);
  const totalPaginas = Math.ceil(ventasFiltradas.length / elementosPorPagina);

  const cambiarPagina = (numero) => {
    setPaginaActual(numero);
  };

  const handleEliminar = (id) => {
    const nuevasVentas = ventas.filter((venta) => venta.id !== id);
    setVentas(nuevasVentas);
  };

  const categoriasUnicas = [...new Set(ventas.map((venta) => venta.categoria))];

  return (
    <>
      <MenuInteractivo colapsado={colapsado} setColapsado={setColapsado} />
      <div className={`main-content ${colapsado ? "colapsado" : "no-colapsado"}`}>
        <div className="ventas-container">
          <h1 className="ventas-titulo">Historial de Ventas</h1>

          <div className="acciones-superiores">
            <div className="acciones-grupo-input-filtro">
                <input
                    type="text"
                    placeholder="Buscar producto..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="input-buscador"
                />
                <select
                    value={filtroCategoria}
                    onChange={(e) => setFiltroCategoria(e.target.value)}
                    className="select-filtro"
                >
                    <option value="">Todas las categorías</option>
                    {categoriasUnicas.map((categoria, index) => (
                        <option key={index} value={categoria}>
                            {categoria}
                        </option>
                    ))}
                </select>
            </div>
            <button className="boton-agregar">Agregar Venta</button>
          </div>
         

          {ventasFiltradas.length === 0 ? (
            <p>No hay ventas registradas.</p>
          ) : (
            <>
              <table className="tabla-ventas">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Categoría</th>
                    <th>Cantidad vendida</th>
                    <th>Precio unitario</th>
                    <th>Total venta</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {ventasPaginadas.map((venta) => (
                    <tr key={venta.id}>
                      <td>{venta.nombre}</td>
                      <td>{venta.categoria}</td>
                      <td>{venta.cantidad}</td>
                      <td>${venta.precio}</td>
                      <td>${venta.cantidad * venta.precio}</td>
                      <td>
                        <button
                          onClick={() => alert("Editar " + venta.nombre)}
                          className="boton-editar"
                        >
                          <i className="fa-solid fa-pencil"></i>
                        </button>
                        <button
                          onClick={() => handleEliminar(venta.id)}
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

export default Ventas;
