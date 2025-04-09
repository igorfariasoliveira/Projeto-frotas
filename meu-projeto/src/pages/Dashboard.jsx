import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import React, { useState } from "react";
import logo from "../assets/logoSidebar.png";

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
            <li><span>Início</span></li>
            <li><span>Veículos</span></li>
            <li><span>Manutenções</span></li>
            <li><span>Relatórios</span></li>
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
