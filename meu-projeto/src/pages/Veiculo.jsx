import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/Veiculos.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const veiculosExemplo = [
  {
    placa: "ABC-1234",
    qtLitros: 200,
    manutencao: "12/03/2025",
    licenciamento: "01/01/2025",
    motorista: "Carlos Souza",
  },
  {
    placa: "DEF-5678",
    qtLitros: 150,
    manutencao: "02/04/2025",
    licenciamento: "15/02/2025",
    motorista: "Ana Martins",
  },
  {
    placa: "GHI-9012",
    qtLitros: 180,
    manutencao: "22/03/2025",
    licenciamento: "10/01/2025",
    motorista: "João Pereira",
  },
];

const Veiculos = () => {
  const [veiculos, setVeiculos] = useState(veiculosExemplo);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const navigate = useNavigate();

  const handleEditar = (veiculo) => {
    navigate("/cadastro-veiculos", { state: { veiculo } });
  };

  const ordenar = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...veiculos].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      if (key === "manutencao" || key === "licenciamento") {
        const aDate = new Date(aValue.split("/").reverse().join("-"));
        const bDate = new Date(bValue.split("/").reverse().join("-"));
        return direction === "asc" ? aDate - bDate : bDate - aDate;
      }

      return direction === "asc"
        ? aValue.toString().localeCompare(bValue.toString())
        : bValue.toString().localeCompare(aValue.toString());
    });

    setVeiculos(sorted);
    setSortConfig({ key, direction });
  };

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === "asc" ? (
      <FaChevronDown className="icone-ordenacao" />
    ) : (
      <FaChevronUp className="icone-ordenacao" />
    );
  };

  return (
    <DashboardLayout>
      <div className="veiculos-container">
        <h1>Lista de Veículos</h1>
        <table className="veiculos-table">
          <thead>
            <tr>
              <th onClick={() => ordenar("placa")}>
                Placa {renderSortIcon("placa")}
              </th>
              <th onClick={() => ordenar("qtLitros")}>
                Capacidade de Combustível (L) {renderSortIcon("qtLitros")}
              </th>
              <th onClick={() => ordenar("manutencao")}>
                Última Manutenção {renderSortIcon("manutencao")}
              </th>
              <th onClick={() => ordenar("licenciamento")}>
                Licenciamento {renderSortIcon("licenciamento")}
              </th>
              <th onClick={() => ordenar("motorista")}>
                Motorista {renderSortIcon("motorista")}
              </th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {veiculos.map((v, index) => (
              <tr key={index}>
                <td>{v.placa}</td>
                <td>{v.qtLitros} L</td>
                <td>{v.manutencao}</td>
                <td>{v.licenciamento}</td>
                <td>{v.motorista}</td>
                <td>
                  <button onClick={() => handleEditar(v)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Veiculos;
