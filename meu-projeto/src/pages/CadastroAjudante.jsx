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

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (ajudanteEditando) {
      setAjudante((prev) => ({ ...prev, ...ajudanteEditando }));
    }
  }, [ajudanteEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAjudante({ ...ajudante, [name]: value });
    setErrors({ ...errors, [name]: "" }); // limpa erro ao digitar
  };

  const validar = () => {
    const newErrors = {};
    if (!ajudante.matricula) {
      newErrors.matricula = "Matrícula é obrigatória.";
    }
    if (!ajudante.nome) {
      newErrors.nome = "Nome é obrigatório.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validar();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (ajudanteEditando) {
      console.log("Ajudante atualizado:", ajudante);
      setSuccessMessage("Ajudante atualizado com sucesso!");
    } else {
      console.log("Ajudante cadastrado:", ajudante);
      setSuccessMessage("Ajudante cadastrado com sucesso!");
    }

    setTimeout(() => {
      navigate("/ajudantes");
    }, 1500);
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
            {errors.matricula && <span className="error">{errors.matricula}</span>}
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
            {errors.nome && <span className="error">{errors.nome}</span>}
          </div>
          <button type="submit" className="btn-salvar">
            {ajudanteEditando ? "Salvar Alterações" : "Salvar Ajudante"}
          </button>
          {successMessage && <div className="success">{successMessage}</div>}
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CadastroAjudante;
