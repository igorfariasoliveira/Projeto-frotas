import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/viagens.css";

const mockViagens = [
  {
    id: 1,
    codViagem: "VIAGEM001",
    motorista: "João Silva",
    veiculo: "ABC-1234",
    dataSaida: "2025-05-20",
    dataRetorno: "2025-05-25",
    kmInicial: 10000,
    kmFinal: 10500,
    tipoViagem: "ENTREGA",
    codCarga: "CARGA123",
    status: "CONCLUÍDA",
  },
  {
    id: 2,
    codViagem: "VIAGEM002",
    motorista: "Maria Souza",
    veiculo: "DEF-5678",
    dataSaida: "2025-06-01",
    dataRetorno: "",
    kmInicial: 2000,
    kmFinal: "",
    tipoViagem: "COLETA",
    codCarga: "CARGA124",
    status: "EM ANDAMENTO",
  },
];

export default function Viagens() {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  const toggleExpand = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const handleEdit = (viagem) => {
    navigate("/cadastro-viagem", { state: { viagem } });
  };

  return (
    <DashboardLayout>
      <div className="viagens-container">
        <h1>Viagens</h1>
        {mockViagens.map((viagem) => (
          <div key={viagem.id} className="viagem-card">
            <div className="viagem-header" onClick={() => toggleExpand(viagem.id)}>
              <span><strong>Viagem:</strong> {viagem.codViagem}</span>
              <span><strong>Status:</strong> {viagem.status}</span>
              <span><strong>Saída:</strong> {viagem.dataSaida}</span>
            </div>
            {expanded === viagem.id && (
              <div className="viagem-detalhes">
                <p><strong>Motorista:</strong> {viagem.motorista}</p>
                <p><strong>Veículo:</strong> {viagem.veiculo}</p>
                <p><strong>Data de Retorno:</strong> {viagem.dataRetorno || "Em trânsito"}</p>
                <p><strong>KM Inicial:</strong> {viagem.kmInicial}</p>
                <p><strong>KM Final:</strong> {viagem.kmFinal || "—"}</p>
                <p><strong>Tipo de Viagem:</strong> {viagem.tipoViagem}</p>
                <p><strong>Código da Carga:</strong> {viagem.codCarga}</p>
                <button className="button-edit" onClick={() => handleEdit(viagem)}>
                  Editar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
