import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "../styles/Dashboard.css";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 730);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 730) {
        setSidebarOpen(false);
      }
    };

    // Escuta mudanças no tamanho da janela
    window.addEventListener("resize", handleResize);

    // Garante retração ao carregar se necessário
    if (window.innerWidth <= 730) {
      setSidebarOpen(false);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`dashboard-container ${sidebarOpen ? "open" : "closed"}`}>
      <Sidebar sidebarOpen={sidebarOpen} />
      <button
        onClick={toggleSidebar}
        className={`toggle-button ${sidebarOpen ? "sidebar-open-button" : "sidebar-closed-button"}`}
      >
        {sidebarOpen ? "⟨" : "⟩"}
      </button>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default DashboardLayout;
