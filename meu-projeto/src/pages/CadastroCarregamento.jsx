import "../styles/cadastroCarga.css";
import React, { useState, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { useLocation } from "react-router-dom";

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
  
  const location = useLocation();
  useEffect(() => {
  if (location.state?.carga) {
    setFormData(location.state.carga);
  }
  }, [location]);

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
          <label>Número do Carregamento</label>
          <input className="input" type="text" name="numeroCarregamento" value={formData.numeroCarregamento} onChange={handleChange} />

          <label>Notas Fiscais</label>
          <input className="input" type="text" name="notasFiscais" value={formData.notasFiscais} onChange={handleChange} />

          <label>MDFe</label>
          <input className="input" type="number" name="mdfe" value={formData.mdfe} onChange={handleChange} />

          <label>Situação do MDFe</label>
          <input className="input" type="text" name="situacaoMdfe" value={formData.situacaoMdfe} onChange={handleChange} />

          <label>Peso Total</label>
          <input className="input" type="number" name="pesoTotal" value={formData.pesoTotal} onChange={handleChange} />

          <label>Data de Saída</label>
          <input className="input" type="date" name="dataSaida" value={formData.dataSaida} onChange={handleChange} />

          <label>Data Prevista de Chegada</label>
          <input className="input" type="date" name="dataPrevistaChegada" value={formData.dataPrevistaChegada} onChange={handleChange} />

          <label>Data de Chegada</label>
          <input className="input" type="date" name="dataChegada" value={formData.dataChegada} onChange={handleChange} />

          <label>KM Inicial</label>
          <input className="input" type="number" name="kmInicial" value={formData.kmInicial} onChange={handleChange} />

          <label>KM Final</label>
          <input className="input" type="number" name="kmFinal" value={formData.kmFinal} onChange={handleChange} />

          <label>Total KM</label>
          <input className="input" type="number" name="totalKm" value={formData.totalKm} onChange={handleChange} />

          <label>Destino</label>
          <input className="input" type="text" name="destino" value={formData.destino} onChange={handleChange} />

          <button type="submit" className="button-submit">
            Salvar Carregamento
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}
