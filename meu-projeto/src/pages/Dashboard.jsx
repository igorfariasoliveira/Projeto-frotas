import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import React, { useState } from "react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          ☰
        </button>
        {sidebarOpen && (
          <ul className="menu">
            <li>Visão Geral</li>
            <li>Cargas em Aberto</li>
            <li>Caminhões</li>
            <li>Manutenção</li>
          </ul>
        )}
      </div>
      <div className="main-content">
        <h1>Dashboard</h1>
        <p>Bem-vindo ao sistema de gerenciamento de frotas!</p>
      </div>
    </div>
  );
};

export default Dashboard;
