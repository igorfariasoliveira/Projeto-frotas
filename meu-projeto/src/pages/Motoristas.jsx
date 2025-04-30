import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/Motoristas.css";

const motoristasExemplo = [
  {
    id: 1,
    nome: "João da Silva",
    ultimoCarregamento: "25/04/2025",
    cpf: "123.456.789-00",
    rg: "12.345.678-9",
    cnh: "987654321",
    telefone: "(11) 91234-5678",
    email: "joao.silva@email.com",
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    ultimoCarregamento: "24/04/2025",
    cpf: "987.654.321-00",
    rg: "98.765.432-1",
    cnh: "123456789",
    telefone: "(21) 99876-5432",
    email: "maria.oliveira@email.com",
  },
];

const Motoristas = () => {
  const [motoristas, setMotoristas] = useState(motoristasExemplo);
  const [expandidoId, setExpandidoId] = useState(null);

  const toggleExpandir = (id) => {
    setExpandidoId(expandidoId === id ? null : id);
  };

  return (
    <DashboardLayout>
      <main className="motoristas-content">
        <h1>Motoristas</h1>
        <table className="motoristas-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Último Carregamento</th>
            </tr>
          </thead>
          <tbody>
            {motoristas.map((motorista) => (
              <React.Fragment key={motorista.id}>
                <tr onClick={() => toggleExpandir(motorista.id)} className="linha-principal">
                  <td>{motorista.nome}</td>
                  <td>{motorista.ultimoCarregamento}</td>
                </tr>
                {expandidoId === motorista.id && (
                  <tr className="linha-detalhes">
                    <td colSpan="2">
                      <div className="detalhes-motorista">
                        <p><strong>CPF:</strong> {motorista.cpf}</p>
                        <p><strong>RG:</strong> {motorista.rg}</p>
                        <p><strong>CNH:</strong> {motorista.cnh}</p>
                        <p><strong>Telefone:</strong> {motorista.telefone}</p>
                        <p><strong>Email:</strong> {motorista.email}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </main>
    </DashboardLayout>
  );
};

export default Motoristas;
