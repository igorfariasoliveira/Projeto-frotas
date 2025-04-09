import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import React, { useState } from "react";
import logo from "../assets/logoSidebar.png";
import { FaHome, FaTruck, FaTools, FaChartBar } from "react-icons/fa";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`dashboard-container ${sidebarOpen ? "open" : "closed"}`}>
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="logo-container">
          <img src={logo} alt="Frotas Pro Logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <FaHome className="icon" />
              {sidebarOpen && <span>Início</span>}
            </li>
            <li>
              <FaTruck className="icon" />
              {sidebarOpen && <span>Veículos</span>}
            </li>
            <li>
              <FaTools className="icon" />
              {sidebarOpen && <span>Manutenções</span>}
            </li>
            <li>
              <FaChartBar className="icon" />
              {sidebarOpen && <span>Relatórios</span>}
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <button onClick={toggleSidebar} className="toggle-button">
          {sidebarOpen ? "⟨" : "⟩"}
        </button>
        <h1>Bem-vindo ao painel Frotas Pro</h1>
        <p>Acompanhe seus veículos, manutenções e muito mais.</p>
      </main>
    </div>
  );
};

export default Dashboard;
