import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/CadastroMotorista.css";

const CadastroMotorista = () => {
  const location = useLocation();
  const motoristaEditando = location.state?.motorista;

  const [motorista, setMotorista] = useState({
    nome: "",
    habilitacao: "",
    vencimento: "",
    telefone: "",
    email: "",
  });

  useEffect(() => {
    if (motoristaEditando) {
      setMotorista(motoristaEditando);
    }
  }, [motoristaEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMotorista((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (motoristaEditando) {
      console.log("Alterando motorista:", motorista);
    } else {
      console.log("Cadastrando novo motorista:", motorista);
    }
  };

  return (
    <DashboardLayout>
      <div className="cadastro-motorista-container">
        <h1>{motoristaEditando ? "Editar Motorista" : "Cadastro de Motorista"}</h1>
        <form onSubmit={handleSubmit} className="form-motorista">
          <div className="form-grid">
            <div className="form-group">
              <label>Nome:</label>
              <input
                type="text"
                name="nome"
                value={motorista.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>CNH:</label>
              <input
                type="text"
                name="habilitacao"
                value={motorista.habilitacao}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Vencimento da CNH:</label>
              <input
                type="date"
                name="vencimento"
                value={motorista.vencimento}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Telefone:</label>
              <input
                type="tel"
                name="telefone"
                value={motorista.telefone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={motorista.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn-salvar">
            {motoristaEditando ? "Salvar Alterações" : "Cadastrar Motorista"}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CadastroMotorista;
