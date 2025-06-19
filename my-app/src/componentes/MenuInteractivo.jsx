import React from "react";
import { Link } from "react-router-dom";
import "./styles/Interactivo.css";

const MenuInteractivo = ({ colapsado, setColapsado }) => {
  return (
    <aside className={`sidebar ${colapsado ? "colapsado" : ""}`}>
      <div className="sidebar_header">
        <button
          className="menu_toggle"
          onClick={() => setColapsado(!colapsado)}
        >
          {colapsado ? (
            <i className="fa-solid fa-arrow-right"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </button>
      </div>

      <nav className="sidebar_nav">
        <ul className="sidebar_ul">
          <li className="sidebar_li">
            <Link to="/principal" className="sidebar_link">
              <span className="sidebar_icon">
                <i className="fa-solid fa-house"></i>
              </span>
              {!colapsado && <span className="sidebar_text">Inicio</span>}
            </Link>
          </li>
          <li className="sidebar_li">
            <Link to="/ventas" className="sidebar_link">
              <span className="sidebar_icon">
                <i className="fa-solid fa-money-bill"></i>
              </span>
              {!colapsado && <span className="sidebar_text">Ventas</span>}
            </Link>
          </li>
            <li className="sidebar_li">
            <Link to="/categorias" className="sidebar_link">
              <span className="sidebar_icon">
                <i className="fa-solid fa-table-list"></i>
              </span>
              {!colapsado && <span className="sidebar_text">Categorias</span>}
            </Link>
          </li>

          <li className="sidebar_li">
            <Link to="/inventario" className="sidebar_link">
              <span className="sidebar_icon">
                <i className="fa-solid fa-box"></i>
              </span>
              {!colapsado && <span className="sidebar_text">Inventario</span>}
            </Link>
          </li>
          
        </ul>
      </nav>
          <div className="sidebar_micuenta">
                <Link to="/micuenta" className="sidebar_link">
                    <span className="sidebar_icon">
                        <i className="fa-solid fa-circle-user"></i>
                    </span>
                    {!colapsado && <span className="sidebar_text">Mi cuenta</span>}
                </Link>
          </div>

    </aside>
  );
};

export default MenuInteractivo;
