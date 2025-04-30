import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login"; 
import Dashboard from "../pages/Dashboard";
import Veiculos from "../pages/Veiculo";
import Manutencoes from "../pages/Manutencoes";
import Motoristas from "../pages/Motoristas";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/veiculos" element={<Veiculos />} />
      <Route path="/manutencoes" element={<Manutencoes />} />
      <Route path="/Motoristas" element={<Motoristas />} />
    </Routes>
  );
};

export default AppRoutes;
