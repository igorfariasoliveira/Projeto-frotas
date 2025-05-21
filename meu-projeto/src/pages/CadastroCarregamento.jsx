import "../styles/cadastroCarga.css";
import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function CadastroCarregamento() {
  const [formData, setFormData] = useState({
    numeroCarregamento: "",
    notasFiscais: "",
    mdfe: "",
    situacaoMdfe: "",
    pesoTotal: "",
    dataSaida: "",
    dataPrevistaChegada: "",
    dataChegada: "",
    kmInicial: "",
    kmFinal: "",
    totalKm: "",
    destino: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  }

  return (
    <DashboardLayout>
    <div className="container">
      <h1>Cadastro de Carregamento</h1>
      <form onSubmit={handleSubmit} className="form-grid">
        <input className="input" type="text" name="numeroCarregamento" placeholder="Número do Carregamento" value={formData.numeroCarregamento} onChange={handleChange} />
        <input className="input" type="text" name="notasFiscais" placeholder="Notas Fiscais" value={formData.notasFiscais} onChange={handleChange} />
        <input className="input" type="number" name="mdfe" placeholder="MDFe" value={formData.mdfe} onChange={handleChange} />
        <input className="input" type="text" name="situacaoMdfe" placeholder="Situação do MDFe" value={formData.situacaoMdfe} onChange={handleChange} />
        <input className="input" type="number" name="pesoTotal" placeholder="Peso Total" value={formData.pesoTotal} onChange={handleChange} />
        <input className="input" type="date" name="dataSaida" placeholder="Data de Saída" value={formData.dataSaida} onChange={handleChange} />
        <input className="input" type="date" name="dataPrevistaChegada" placeholder="Data Prevista de Chegada" value={formData.dataPrevistaChegada} onChange={handleChange} />
        <input className="input" type="date" name="dataChegada" placeholder="Data de Chegada" value={formData.dataChegada} onChange={handleChange} />
        <input className="input" type="number" name="kmInicial" placeholder="KM Inicial" value={formData.kmInicial} onChange={handleChange} />
        <input className="input" type="number" name="kmFinal" placeholder="KM Final" value={formData.kmFinal} onChange={handleChange} />
        <input className="input" type="number" name="totalKm" placeholder="Total KM" value={formData.totalKm} onChange={handleChange} />
        <input className="input" type="text" name="destino" placeholder="Destino" value={formData.destino} onChange={handleChange} />

        <button type="submit" className="button-submit">
          Salvar Carregamento
        </button>
      </form>
    </div>
    </DashboardLayout>
  );
}
