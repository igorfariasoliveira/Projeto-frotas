import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/Ajudantes.css";

const ajudantesExemplo = [
  { id: "1", matricula: 1001, nome: "José Silva" },
  { id: "2", matricula: 1002, nome: "Maria Souza" },
  { id: "3", matricula: 1003, nome: "Pedro Oliveira" },
];

const Ajudantes = () => {
  const [ajudantes, setAjudantes] = useState(ajudantesExemplo);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const navigate = useNavigate();

  const handleEditar = (ajudante) => {
    navigate("/cadastro-ajudante", { state: { ajudante } });
  };

  const ordenar = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...ajudantes].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      if (typeof aValue === "number") {
        return direction === "asc" ? aValue - bValue : bValue - aValue;
      }

      return direction === "asc"
        ? aValue.toString().localeCompare(bValue.toString())
        : bValue.toString().localeCompare(aValue.toString());
    });

    setAjudantes(sorted);
    setSortConfig({ key, direction });
  };

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === "asc" ? <FaChevronDown /> : <FaChevronUp />;
  };

  return (
    <DashboardLayout>
      <div className="ajudantes-container">
        <h1>Lista de Ajudantes</h1>
        <button onClick={() => navigate("/cadastro-ajudante")}>Novo Ajudante</button>
        <table className="ajudantes-table">
          <thead>
            <tr>
              <th onClick={() => ordenar("matricula")}>
                Matrícula {renderSortIcon("matricula")}
              </th>
              <th onClick={() => ordenar("nome")}>
                Nome {renderSortIcon("nome")}
              </th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {ajudantes.map((a) => (
              <tr key={a.id}>
                <td>{a.matricula}</td>
                <td>{a.nome}</td>
                <td>
                  <button onClick={() => handleEditar(a)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Ajudantes;
