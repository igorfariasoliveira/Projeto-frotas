import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/viagens.css';
import DashboardLayout from "../components/DashboardLayout";

const viagensExemplo = [
  {
    id: '1',
    codViagem: 1001,
    motorista: 'João Silva',
    veiculo: 'ABC-1234',
    dataSaida: '2024-06-01',
    dataRetorno: '2024-06-05',
    status: 'CONCLUIDA',
  },
  {
    id: '2',
    codViagem: 1002,
    motorista: 'Maria Souza',
    veiculo: 'DEF-5678',
    dataSaida: '2024-06-10',
    dataRetorno: '2024-06-15',
    status: 'AGENDADA',
  },
];

export default function Viagens() {
  const navigate = useNavigate();

  const handleEditar = (id) => {
    navigate(`/cadastro-viagem/${id}`);
  };

  return (
   <DashboardLayout>
   <div className="viagens-container">
      <h2>Lista de Viagens</h2>
      <table className="viagens-table">
        <thead>
          <tr>
            <th>Cód. Viagem</th>
            <th>Motorista</th>
            <th>Veículo</th>
            <th>Saída</th>
            <th>Retorno</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {viagensExemplo.map((viagem) => (
            <tr key={viagem.id}>
              <td>{viagem.codViagem}</td>
              <td>{viagem.motorista}</td>
              <td>{viagem.veiculo}</td>
              <td>{viagem.dataSaida}</td>
              <td>{viagem.dataRetorno}</td>
              <td>{viagem.status}</td>
              <td>
                <button onClick={() => handleEditar(viagem.id)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </DashboardLayout>
  );
}
