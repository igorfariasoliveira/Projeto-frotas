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
      <button
        onClick={toggleSidebar}
        className={`toggle-button ${
          sidebarOpen ? "sidebar-open-button" : "sidebar-closed-button"
        }`}
      >
        {sidebarOpen ? "⟨" : "⟩"}
      </button>
      <main className="main-content">
        <h1>Bem-vindo ao painel Frotas Pro</h1>
        <p>Acompanhe seus veículos, manutenções e muito mais.</p>
        <div className="cards-container">
          <div className="cards-row">
            <div className="card">
              <h3>Veículos</h3>
              <p>Total: 25</p>
              <p>Em manutenção: 5</p>
              <p>Em rota: 10</p>
            </div>
            <div className="card">
              <div className="card-header">
                <h3>Custos</h3>
                <select>
                  <option>Este mês</option>
                  <option>Mês passado</option>
                </select>
              </div>
              <p>Manutenção: R$ 12.000</p>
              <p>Combustível: R$ 18.500</p>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3>Notificações</h3>
            </div>
            <div className="notification-item urgent">
              <span className="urgency-icon red" /> Veículo ABC-1234 está com
              revisão pendente.
            </div>
            <div className="notification-item medium">
              <span className="urgency-icon yellow" /> Troca de óleo agendada
              para o dia 15/04.
            </div>
            <div className="notification-item low">
              <span className="urgency-icon green" /> Documentação do veículo
              DEF-5678 está em dia.
            </div>
          </div>
          <div className="vehicle-status-card">
            <h3>Status dos Veículos</h3>
            <table className="vehicle-table">
              <thead>
                <tr>
                  <th>Placa</th>
                  <th>Status</th>
                  <th>Carregamento / Última Entrega</th>
                  <th>Quilometragem</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ABC-1234</td>
                  <td>Em rota</td>
                  <td>#456</td>
                  <td>120.000 km</td>
                </tr>
                <tr>
                  <td>DEF-5678</td>
                  <td>Na oficina</td>
                  <td>Última: 04/04/2025</td>
                  <td>98.500 km</td>
                </tr>
                <tr>
                  <td>GHI-9012</td>
                  <td>Livre</td>
                  <td>Última: 02/04/2025</td>
                  <td>143.000 km</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
