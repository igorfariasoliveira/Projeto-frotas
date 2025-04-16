import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../styles/Dashboard.css";
const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
