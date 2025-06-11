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
import CadastroCarregamento from "../pages/CadastroCarregamento";
import Cargas from "../pages/Cargas";
import Viagens from "../pages/Viagens";
import CadastroViagem from "../pages/CadastroViagem";
import Ajudantes from "../pages/Ajudantes";
import CadastroAjudante from "../pages/CadastroAjudante";
import Clientes from "../pages/Clientes";
import CadastroCliente from "../pages/CadastroCliente";
import Filiais from "../pages/Filiais";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/veiculos" element={<Veiculos />} />
      <Route path="/manutencoes" element={<Manutencoes />} />
      <Route path="/Motoristas" element={<Motoristas />} />
      <Route path="/Relatorios" element={<Relatorios />} />
      <Route path="/cadastro-veiculos" element={<CadastroVeiculo />} />
      <Route path="/cadastro-motorista" element={<CadastroMotorista />} />
      <Route path="/cadastro-carregamento" element={<CadastroCarregamento />} />
      <Route path="/carga" element={<Cargas />} />
      <Route path="/viagem" element={<Viagens />} />
      <Route path="/cadastro-viagem" element={<CadastroViagem />} />
      <Route path="/ajudantes" element={<Ajudantes />} />
      <Route path="/cadastro-ajudante" element={<CadastroAjudante />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/cadastro-cliente" element={<CadastroCliente />} />
      <Route path="/filiais" element={<Filiais />} />
    </Routes>
  );
};

export default AppRoutes;
