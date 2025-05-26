import React, { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/CadastroAjudante.css";

const CadastroAjudante = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ajudanteEditando = location.state?.ajudante;

  const [ajudante, setAjudante] = useState({
    id: "",
    matricula: "",
    nome: "",
  });

  useEffect(() => {
    if (ajudanteEditando) {
      setAjudante((prev) => ({ ...prev, ...ajudanteEditando }));
    }
  }, [ajudanteEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAjudante({ ...ajudante, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ajudanteEditando) {
      console.log("Ajudante atualizado:", ajudante);
    } else {
      console.log("Ajudante cadastrado:", ajudante);
    }
    navigate("/ajudantes");
  };

  return (
    <DashboardLayout>
      <div className="cadastro-ajudante-container">
        <h1>{ajudanteEditando ? "Editar Ajudante" : "Cadastro de Ajudante"}</h1>
        <form onSubmit={handleSubmit} className="ajudante-form">
          <div className="form-group">
            <label>Matrícula</label>
            <input
              type="number"
              name="matricula"
              value={ajudante.matricula}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              value={ajudante.nome}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-salvar">
            {ajudanteEditando ? "Salvar Alterações" : "Salvar Ajudante"}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CadastroAjudante;
