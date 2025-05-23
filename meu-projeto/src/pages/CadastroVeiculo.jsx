import React, { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/CadastroVeiculo.css";
import { useLocation } from "react-router-dom";

const CadastroVeiculo = () => {
  const location = useLocation();
  const veiculoEditando = location.state?.veiculo;

  const [veiculo, setVeiculo] = useState({
    codVeiculo: "",
    placa: "",
    chassi: "",
    descricao: "",
    marca: "",
    tipoVeiculo: "",
    cor: "",
    totalPeso: "",
    qtEixos: "",
    qtRodas: "",
    qtLitros: "",
    combustivel: "",
    kmAtual: "",
    propietario: "",
    vencimentoIpva: "",
    disponibilidade: "DISPONIVEL",
    status: true
  });

  useEffect(() => {
    if (veiculoEditando) {
      setVeiculo((prev) => ({ ...prev, ...veiculoEditando }));
    }
  }, [veiculoEditando]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setVeiculo({ ...veiculo, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (veiculoEditando) {
      console.log("Veículo atualizado:", veiculo);
    } else {
      console.log("Veículo cadastrado:", veiculo);
    }
  };

  return (
    <DashboardLayout>
      <div className="cadastro-veiculo-container">
        <h1>{veiculoEditando ? "Editar Veículo" : "Cadastro de Veículo"}</h1>
        <form onSubmit={handleSubmit} className="veiculo-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Placa</label>
              <input type="text" name="placa" value={veiculo.placa} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Chassi</label>
              <input type="text" name="chassi" value={veiculo.chassi} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Descrição</label>
              <input type="text" name="descricao" value={veiculo.descricao} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Marca</label>
              <input type="text" name="marca" value={veiculo.marca} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Tipo de Veículo</label>
              <input type="text" name="tipoVeiculo" value={veiculo.tipoVeiculo} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Cor</label>
              <input type="text" name="cor" value={veiculo.cor} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Carga máxima (kg)</label>
              <input type="number" name="totalPeso" value={veiculo.totalPeso} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Quantidade de Eixos</label>
              <input type="number" name="qtEixos" value={veiculo.qtEixos} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Quantidade de Rodas</label>
              <input type="number" name="qtRodas" value={veiculo.qtRodas} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Capacidade de Litros</label>
              <input type="number" step="0.1" name="qtLitros" value={veiculo.qtLitros} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Tipo de Combustível</label>
              <input type="text" name="combustivel" value={veiculo.combustivel} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Nome do Proprietário</label>
              <input type="text" name="propietario" value={veiculo.propietario} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Vencimento do IPVA</label>
              <input type="date" name="vencimentoIpva" value={veiculo.vencimentoIpva} onChange={handleChange} />
            </div>
          </div>

          <button type="submit" className="btn-salvar">
            {veiculoEditando ? "Salvar Alterações" : "Salvar Veículo"}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CadastroVeiculo;
