import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/cargas.css";

const mockCargas = [
  {
    id: 1,
    numeroCarregamento: "CARGA123",
    status: "Aberta",
    dataSaida: "2025-05-20",
    notasFiscais: "NF1234, NF5678",
    mdfe: "987654321",
    situacaoMdfe: "Emitido",
    pesoTotal: 15000,
    dataPrevistaChegada: "2025-05-25",
    dataChegada: "",
    kmInicial: 10000,
    kmFinal: "",
    totalKm: "",
    destino: "São Paulo - SP",
  },
  {
    id: 2,
    numeroCarregamento: "CARGA124",
    status: "Fechada",
    dataSaida: "2025-04-15",
    notasFiscais: "NF9999",
    mdfe: "123456789",
    situacaoMdfe: "Cancelado",
    pesoTotal: 18000,
    dataPrevistaChegada: "2025-04-18",
    dataChegada: "2025-04-17",
    kmInicial: 5000,
    kmFinal: 5500,
    totalKm: 500,
    destino: "Rio de Janeiro - RJ",
  },
];

export default function Cargas() {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  const toggleExpand = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const handleEdit = (carga) => {
    navigate("/cadastro-carregamento", { state: { carga } });
  };

  return (
    <DashboardLayout>
      <div className="cargas-container">
        <h1>Cargas</h1>
        {mockCargas.map((carga) => (
          <div key={carga.id} className="carga-card">
            <div className="carga-header" onClick={() => toggleExpand(carga.id)}>
              <span><strong>Carga:</strong> {carga.numeroCarregamento}</span>
              <span><strong>Status:</strong> {carga.status}</span>
              <span><strong>Data:</strong> {carga.dataSaida}</span>
            </div>
            {expanded === carga.id && (
              <div className="carga-detalhes">
                <p><strong>Notas Fiscais:</strong> {carga.notasFiscais}</p>
                <p><strong>MDFe:</strong> {carga.mdfe}</p>
                <p><strong>Situação do MDFe:</strong> {carga.situacaoMdfe}</p>
                <p><strong>Peso Total:</strong> {carga.pesoTotal} kg</p>
                <p><strong>Data Prevista de Chegada:</strong> {carga.dataPrevistaChegada}</p>
                <p><strong>Data de Chegada:</strong> {carga.dataChegada || "Em trânsito"}</p>
                <p><strong>KM Inicial:</strong> {carga.kmInicial}</p>
                <p><strong>KM Final:</strong> {carga.kmFinal || "—"}</p>
                <p><strong>Total KM:</strong> {carga.totalKm || "—"}</p>
                <p><strong>Destino:</strong> {carga.destino}</p>
                <button className="button-edit" onClick={() => handleEdit(carga)}>
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
