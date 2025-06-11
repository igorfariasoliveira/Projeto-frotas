import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome, FaTruck, FaTools, FaChartBar, FaUserTie,
  FaClipboardList, FaAngleDown, FaAngleUp, FaBox, FaRoute, FaUserFriends,FaUsers
} from "react-icons/fa";
import logo from "../assets/logoSidebar.png";
import "../styles/Sidebar.css";

const Sidebar = ({ sidebarOpen }) => {
  const [cadastrosOpen, setCadastrosOpen] = useState(false);

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
          <li>
            <NavLink to="/carga">
              <FaBox className="icon" />
              {sidebarOpen && <span>Cargas</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/viagem">
              <FaRoute className="icon" />
              {sidebarOpen && <span>Viagens</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/ajudantes">
              <FaUserFriends className="icon" />
              {sidebarOpen && <span>Ajudantes</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/clientes">
              <FaUsers className="icon" />
              {sidebarOpen && <span>Clientes</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/filiais">
              <FaUsers className="icon" />
              {sidebarOpen && <span>Clientes</span>}
            </NavLink>
          </li>

          <li className="cadastros-toggle">
            <div className="cadastros-link" onClick={() => setCadastrosOpen(!cadastrosOpen)}>
              <FaClipboardList className="icon" />
              {sidebarOpen && (
                <>
                  <span>Cadastros</span>
                  {cadastrosOpen ? <FaAngleUp /> : <FaAngleDown />}
                </>
              )}
            </div>

            <ul className={`cadastros-submenu ${cadastrosOpen && sidebarOpen ? '' : 'closed'}`}>
              <li>
                <NavLink to="/cadastro-veiculos">
                  <span>Veículos</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cadastro-motorista">
                  <span>Motoristas</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cadastro-carregamento">
                  <span>Carregamentos</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cadastro-viagem">
                  <span>Viagens</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cadastro-ajudante">
                  <span>Ajudantes</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cadastro-cliente">
                  <span>Clientes</span>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
