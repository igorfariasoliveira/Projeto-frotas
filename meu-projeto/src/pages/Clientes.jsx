import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/Clientes.css";

const clientesExemplo = [
  { id: "1", codCliente: 2001, nome: "Empresa Alpha", cidade: "São Paulo" },
  { id: "2", codCliente: 2002, nome: "Comércio Beta", cidade: "Rio de Janeiro" },
  { id: "3", codCliente: 2003, nome: "Serviços Gama", cidade: "Curitiba" },
];

const Clientes = () => {
  const [clientes, setClientes] = useState(clientesExemplo);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const navigate = useNavigate();

  const handleEditar = (cliente) => {
    navigate("/cadastro-cliente", { state: { cliente } });
  };

  const ordenar = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...clientes].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      if (typeof aValue === "number") {
        return direction === "asc" ? aValue - bValue : bValue - aValue;
      }

      return direction === "asc"
        ? aValue.toString().localeCompare(bValue.toString())
        : bValue.toString().localeCompare(aValue.toString());
    });

    setClientes(sorted);
    setSortConfig({ key, direction });
  };

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === "asc" ? <FaChevronDown /> : <FaChevronUp />;
  };

  return (
    <DashboardLayout>
      <div className="clientes-container">
        <h1>Lista de Clientes</h1>
        <button onClick={() => navigate("/cadastro-cliente")}>Novo Cliente</button>
        <table className="clientes-table">
          <thead>
            <tr>
              <th onClick={() => ordenar("codCliente")}>
                Código {renderSortIcon("codCliente")}
              </th>
              <th onClick={() => ordenar("nome")}>
                Nome {renderSortIcon("nome")}
              </th>
              <th onClick={() => ordenar("cidade")}>
                Cidade {renderSortIcon("cidade")}
              </th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((c) => (
              <tr key={c.id}>
                <td>{c.codCliente}</td>
                <td>{c.nome}</td>
                <td>{c.cidade}</td>
                <td>
                  <button onClick={() => handleEditar(c)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Clientes;
