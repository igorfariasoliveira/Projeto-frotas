import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTruck,
  FaTools,
  FaChartBar,
  FaUserTie,
  FaClipboardList,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import logo from "../assets/logoSidebar.png";
import "../styles/Sidebar.css";

const Sidebar = ({ sidebarOpen }) => {
  const [cadastroOpen, setCadastroOpen] = useState(false);

  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <div className="logo-container">
        <img src={logo} alt="Frotas Pro Logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard">
              <FaHome className="icon" />
              {sidebarOpen && <span>Início</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/veiculos">
              <FaTruck className="icon" />
              {sidebarOpen && <span>Veículos</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/manutencoes">
              <FaTools className="icon" />
              {sidebarOpen && <span>Manutenções</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/relatorios">
              <FaChartBar className="icon" />
              {sidebarOpen && <span>Relatórios</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/motoristas">
              <FaUserTie className="icon" />
              {sidebarOpen && <span>Motoristas</span>}
            </NavLink>
          </li>

          {/* Menu Cadastros */}
          <li
            onClick={() => setCadastroOpen(!cadastroOpen)}
            style={{ cursor: "pointer" }}
          >
            <div className="menu-toggle">
              <FaClipboardList className="icon" />
              {sidebarOpen && <span>Cadastros</span>}
              {sidebarOpen && (cadastroOpen ? <FaChevronUp /> : <FaChevronDown />)}
            </div>
          </li>

          {cadastroOpen && sidebarOpen && (
            <ul className="submenu">
              <li>
                <NavLink to="/cadastro-veiculos">
                  <FaTruck className="icon" />
                  <span>Veículos</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cadastro-motoristas">
                  <FaUserTie className="icon" />
                  <span>Motoristas</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cadastro-carregamentos">
                  <FaClipboardList className="icon" />
                  <span>Carregamentos</span>
                </NavLink>
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
