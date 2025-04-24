import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaTruck, FaTools, FaChartBar, FaUserTie } from "react-icons/fa";
import logo from "../assets/logoSidebar.png";

const Sidebar = ({ sidebarOpen }) => {
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
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
