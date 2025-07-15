import React, { useEffect, useState } from "react";
import ventaService from "../services/ventaService";
import productoService from "../services/productoService";

const TestConexionAPI = () => {
  const [resultados, setResultados] = useState({
    ventas: null,
    productos: null,
    categorias: null,
    errores: [],
  });

  useEffect(() => {
    const probarAPIs = async () => {
      const errores = [];

      // Probar conexión con ventas
      try {
        const ventas = await ventaService.obtenerTodasLasVentas();
        setResultados((prev) => ({ ...prev, ventas }));
        console.log("✅ Ventas obtenidas:", ventas);
      } catch (error) {
        errores.push(`❌ Error en ventas: ${error.message}`);
        console.error("Error en ventas:", error);
      }

      // Probar conexión con productos
      try {
        const productos = await productoService.obtenerTodosLosProductos();
        setResultados((prev) => ({ ...prev, productos }));
        console.log("✅ Productos obtenidos:", productos);
      } catch (error) {
        errores.push(`❌ Error en productos: ${error.message}`);
        console.error("Error en productos:", error);
      }

      // Probar conexión con categorías
      try {
        const categorias = await productoService.obtenerTodasLasCategorias();
        setResultados((prev) => ({ ...prev, categorias }));
        console.log("✅ Categorías obtenidas:", categorias);
      } catch (error) {
        errores.push(`❌ Error en categorías: ${error.message}`);
        console.error("Error en categorías:", error);
      }

      setResultados((prev) => ({ ...prev, errores }));
    };

    probarAPIs();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>🔧 Test de Conexión con API</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>Estado de la conexión:</h3>
        {resultados.errores.length === 0 ? (
          <p style={{ color: "green", fontWeight: "bold" }}>
            ✅ Todas las conexiones funcionan correctamente
          </p>
        ) : (
          <div>
            {resultados.errores.map((error, index) => (
              <p key={index} style={{ color: "red" }}>
                {error}
              </p>
            ))}
          </div>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <h4>📊 Ventas ({resultados.ventas?.length || 0})</h4>
          {resultados.ventas ? (
            <pre
              style={{ fontSize: "12px", overflow: "auto", maxHeight: "200px" }}
            >
              {JSON.stringify(resultados.ventas.slice(0, 2), null, 2)}
            </pre>
          ) : (
            <p>Cargando...</p>
          )}
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <h4>📦 Productos ({resultados.productos?.length || 0})</h4>
          {resultados.productos ? (
            <pre
              style={{ fontSize: "12px", overflow: "auto", maxHeight: "200px" }}
            >
              {JSON.stringify(resultados.productos.slice(0, 2), null, 2)}
            </pre>
          ) : (
            <p>Cargando...</p>
          )}
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <h4>🏷️ Categorías ({resultados.categorias?.length || 0})</h4>
          {resultados.categorias ? (
            <pre
              style={{ fontSize: "12px", overflow: "auto", maxHeight: "200px" }}
            >
              {JSON.stringify(resultados.categorias.slice(0, 2), null, 2)}
            </pre>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          background: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <h4>📝 Instrucciones:</h4>
        <ol>
          <li>
            Asegúrate de que el backend esté ejecutándose en{" "}
            <code>http://localhost:3001</code>
          </li>
          <li>
            Verifica que las rutas de la API estén configuradas correctamente
          </li>
          <li>
            Revisa la consola del navegador para más detalles sobre errores
          </li>
          <li>
            Si todo funciona correctamente, puedes eliminar este componente de
            prueba
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TestConexionAPI;
