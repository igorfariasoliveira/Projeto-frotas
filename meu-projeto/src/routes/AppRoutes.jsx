import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login"; 
import Dashboard from "../pages/Dashboard";
import Veiculos from "../pages/Veiculo";
import Manutencoes from "../pages/Manutencoes";
import Motoristas from "../pages/Motoristas";
import Relatorios from "../pages/Relatorios";
import CadastroVeiculo from "../pages/CadastroVeiculo";
import CadastroMotorista from "../pages/CadastroMotorista";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/veiculos" element={<Veiculos />} />
      <Route path="/manutencoes" element={<Manutencoes />} />
      <Route path="/Motoristas" element={<Motoristas />} />
      <Route path="/Relatorios" element={<Relatorios/>}/>
      <Route path="/cadastro-veiculos" element={<CadastroVeiculo/>}/>
      <Route path="/cadastro-motorista" element={<CadastroMotorista />} />
      <Route path="/cadastro-motorista/:id" element={<CadastroMotorista />} />
    </Routes>
  );
};

export default AppRoutes;
