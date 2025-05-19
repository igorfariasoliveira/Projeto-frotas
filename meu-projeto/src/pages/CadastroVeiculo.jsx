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
      <div className="cadastro-container">
        <h2>{veiculoEditando ? "Editar Veículo" : "Cadastro de Veículo"}</h2>
        <form onSubmit={handleSubmit} className="cadastro-form">
          <input type="text" name="placa" placeholder="Placa" value={veiculo.placa} onChange={handleChange} />
          <input type="text" name="chassi" placeholder="Chassi" value={veiculo.chassi} onChange={handleChange} />
          <input type="text" name="descricao" placeholder="Descrição" value={veiculo.descricao} onChange={handleChange} />
          <input type="text" name="marca" placeholder="Marca" value={veiculo.marca} onChange={handleChange} />
          <input type="text" name="tipoVeiculo" placeholder="Tipo de Veículo" value={veiculo.tipoVeiculo} onChange={handleChange} />
          <input type="text" name="cor" placeholder="Cor" value={veiculo.cor} onChange={handleChange} />
          <input type="number" name="totalPeso" placeholder="Carga máxima (kg)" value={veiculo.totalPeso} onChange={handleChange} />
          <input type="number" name="qtEixos" placeholder="Quantidade de Eixos" value={veiculo.qtEixos} onChange={handleChange} />
          <input type="number" name="qtRodas" placeholder="Quantidade de Rodas" value={veiculo.qtRodas} onChange={handleChange} />
          <input type="number" step="0.1" name="qtLitros" placeholder="Capacidade de Litros" value={veiculo.qtLitros} onChange={handleChange} />
          <input type="text" name="combustivel" placeholder="Tipo de Combustível" value={veiculo.combustivel} onChange={handleChange} />
          <input type="text" name="propietario" placeholder="Nome do Proprietário" value={veiculo.propietario} onChange={handleChange} />
          <label htmlFor="vencimentoIpva">Vencimento do IPVA</label>
          <input type="date" name="vencimentoIpva" value={veiculo.vencimentoIpva} onChange={handleChange} />
          <button type="submit">{veiculoEditando ? "Salvar Alterações" : "Salvar Veículo"}</button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CadastroVeiculo;
