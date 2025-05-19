import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSortDown, FaSortUp, FaEdit } from "react-icons/fa";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/Motoristas.css";

const dadosMotoristas = [
  {
    id: 1,
    nome: "João da Silva",
    ultimoCarregamento: "25/04/2025",
    habilitacao: "987654321",
    vencimento: "25/02/2030",
    telefone: "(11) 91234-5678",
    email: "joao.silva@email.com",
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    ultimoCarregamento: "24/04/2025",
    habilitacao: "123456789",
    vencimento: "25/02/2030",
    telefone: "(11) 92345-6789",
    email: "maria.oliveira@email.com",
  },
  {
    id: 3,
    nome: "Igor Farias",
    ultimoCarregamento: "24/09/2025",
    habilitacao: "068958475478",
    vencimento: "25/02/2030",
    telefone: "(11) 9678-8381",
    email: "igor@hotmail.com",
  },
  {
    id: 4,
    nome: "Pedro dantas",
    ultimoCarregamento: "24/09/2025",
    habilitacao: "068958475478",
    vencimento: "25/02/2030",
    telefone: "(11) 9678-8381",
    email: "igor@hotmail.com",
  },
  {
    id: 5,
    nome: "Luan Alves",
    ultimoCarregamento: "24/09/2025",
    vencimento: "25/02/2030",
    habilitacao: "068958475478",
    telefone: "(11) 9678-8381",
    email: "igor@hotmail.com",
  },
  {
    id: 6,
    nome: "Sergio Pires",
    ultimoCarregamento: "24/09/2025",
    vencimento: "25/02/2030",
    habilitacao: "068958475478",
    telefone: "(11) 9678-8381",
    email: "igor@hotmail.com",
  },
];

const Motoristas = () => {
  const navigate = useNavigate();
  const [motoristas, setMotoristas] = useState(dadosMotoristas);
  const [expandido, setExpandido] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const ordenar = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...motoristas].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];
      return direction === "asc"
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    });

    setMotoristas(sorted);
    setSortConfig({ key, direction });
  };

  const getIconeOrdenacao = (key) => {
    if (sortConfig.key !== key) return <FaSortDown style={{ opacity: 0.3 }} />;
    return sortConfig.direction === "asc" ? <FaSortDown /> : <FaSortUp />;
  };

  const toggleExpandido = (id) => {
    setExpandido(expandido === id ? null : id);
  };

  const editarMotorista = (motorista) => {
  navigate("/cadastro-motorista", { state: { motorista } });
  };

  return (
    <DashboardLayout>
      <main className="motoristas-content">
        <h1>Motoristas</h1>
        <table className="motoristas-table">
          <thead>
            <tr>
              <th onClick={() => ordenar("nome")}>
                Nome {getIconeOrdenacao("nome")}
              </th>
              <th onClick={() => ordenar("ultimoCarregamento")}>
                Último Carregamento {getIconeOrdenacao("ultimoCarregamento")}
              </th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {motoristas.map((motorista) => (
              <React.Fragment key={motorista.id}>
                <tr className="clickable-row">
                  <td onClick={() => toggleExpandido(motorista.id)}>{motorista.nome}</td>
                  <td onClick={() => toggleExpandido(motorista.id)}>{motorista.ultimoCarregamento}</td>
                  <td>
                    <button
                      className="editar-btn"
                      onClick={() => editarMotorista(motorista)}
                    >
                      <FaEdit /> Editar
                    </button>
                  </td>
                </tr>
                {expandido === motorista.id && (
                  <tr className="expandable-details">
                    <td colSpan="3">
                      <div className="expandable-details-content">
                        <p><strong>CNH:</strong> {motorista.habilitacao}</p>
                        <p><strong>Vencimento:</strong> {motorista.vencimento}</p>
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
