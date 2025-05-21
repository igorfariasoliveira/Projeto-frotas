import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/cadastroViagem.css';
import DashboardLayout from "../components/DashboardLayout";

export default function CadastroViagem() {
  const { state } = useLocation();
  const viagem = state?.viagem;

  const [form, setForm] = useState({
    codViagem: '',
    veiculo: '',
    motorista: '',
    dataSaida: '',
    dataRetorno: '',
    kmInicial: '',
    kmFinal: '',
    tipoViagem: '',
    codCarga: '',
    status: 'AGENDADA',
  });

  useEffect(() => {
    if (viagem) {
      setForm(viagem);
    }
  }, [viagem]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', form);
    // Aqui pode ser colocado o POST/PUT via API futuramente
  };

  return (
    <DashboardLayout>
      <div className="cadastro-viagem-container">
        <h2>Cadastro de Viagem</h2>
        <form onSubmit={handleSubmit} className="viagem-form">
          <label>Código da Viagem</label>
          <input name="codViagem" value={form.codViagem} onChange={handleChange} required />

          <label>Veículo</label>
          <input name="veiculo" value={form.veiculo} onChange={handleChange} required />

          <label>Motorista</label>
          <input name="motorista" value={form.motorista} onChange={handleChange} required />

          <label>Data de Saída</label>
          <input type="date" name="dataSaida" value={form.dataSaida} onChange={handleChange} required />

          <label>Data de Retorno</label>
          <input type="date" name="dataRetorno" value={form.dataRetorno} onChange={handleChange} />

          <label>KM Inicial</label>
          <input name="kmInicial" value={form.kmInicial} onChange={handleChange} required />

          <label>KM Final</label>
          <input name="kmFinal" value={form.kmFinal} onChange={handleChange} />

          <label>Tipo de Viagem</label>
          <select name="tipoViagem" value={form.tipoViagem} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="ENTREGA">ENTREGA</option>
            <option value="COLETA">COLETA</option>
          </select>

          <label>Carga</label>
          <input name="codCarga" value={form.codCarga} onChange={handleChange} required />

          <label>Status</label>
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="AGENDADA">AGENDADA</option>
            <option value="EM_ANDAMENTO">EM ANDAMENTO</option>
            <option value="CONCLUIDA">CONCLUÍDA</option>
            <option value="CANCELADA">CANCELADA</option>
          </select>

          <button type="submit">Salvar</button>
        </form>
      </div>
    </DashboardLayout>
  );
}
