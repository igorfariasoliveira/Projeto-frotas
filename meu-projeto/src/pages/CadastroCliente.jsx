import React, { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/CadastroCliente.css";

const CadastroCliente = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const clienteEditando = location.state?.cliente;

  const [cliente, setCliente] = useState({
    id: "",
    codCliente: "",
    nome: "",
    cidade: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (clienteEditando) {
      setCliente((prev) => ({ ...prev, ...clienteEditando }));
    }
  }, [clienteEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validar = () => {
    const newErrors = {};
    if (!cliente.codCliente) newErrors.codCliente = "Código do Cliente é obrigatório.";
    if (!cliente.nome) newErrors.nome = "Nome é obrigatório.";
    if (!cliente.cidade) newErrors.cidade = "Cidade é obrigatória.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validar();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (clienteEditando) {
      console.log("Cliente atualizado:", cliente);
      setSuccessMessage("Cliente atualizado com sucesso!");
    } else {
      console.log("Cliente cadastrado:", cliente);
      setSuccessMessage("Cliente cadastrado com sucesso!");
    }

    setTimeout(() => {
      navigate("/clientes");
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="cadastro-cliente-container">
        <h1>{clienteEditando ? "Editar Cliente" : "Cadastro de Cliente"}</h1>
        <form onSubmit={handleSubmit} className="cliente-form">
          <div className="form-group">
            <label>Código</label>
            <input
              type="number"
              name="codCliente"
              value={cliente.codCliente}
              onChange={handleChange}
              required
            />
            {errors.codCliente && <span className="error">{errors.codCliente}</span>}
          </div>
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              value={cliente.nome}
              onChange={handleChange}
              required
            />
            {errors.nome && <span className="error">{errors.nome}</span>}
          </div>
          <div className="form-group">
            <label>Cidade</label>
            <input
              type="text"
              name="cidade"
              value={cliente.cidade}
              onChange={handleChange}
              required
            />
            {errors.cidade && <span className="error">{errors.cidade}</span>}
          </div>
          <button type="submit" className="btn-salvar">
            {clienteEditando ? "Salvar Alterações" : "Salvar Cliente"}
          </button>
          {successMessage && <div className="success">{successMessage}</div>}
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CadastroCliente;
