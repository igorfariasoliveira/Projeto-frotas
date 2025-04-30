import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/Veiculos.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const veiculosExemplo = [
  {
    placa: "ABC-1234",
    combustivel: "R$ 4.500",
    manutencao: "12/03/2025",
    licenciamento: "01/01/2025",
    motorista: "Carlos Souza",
  },
  {
    placa: "DEF-5678",
    combustivel: "R$ 3.200",
    manutencao: "02/04/2025",
    licenciamento: "15/02/2025",
    motorista: "Ana Martins",
  },
  {
    placa: "GHI-9012",
    combustivel: "R$ 5.100",
    manutencao: "22/03/2025",
    licenciamento: "10/01/2025",
    motorista: "João Pereira",
  },
];

const Veiculos = () => {
  const [veiculos, setVeiculos] = useState(veiculosExemplo);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const ordenar = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...veiculos].sort((a, b) => {
      const aValue = key === "combustivel" ? parseFloat(a[key].replace(/[^\d,-]+/g, "").replace(",", ".")) : a[key];
      const bValue = key === "combustivel" ? parseFloat(b[key].replace(/[^\d,-]+/g, "").replace(",", ".")) : b[key];

      if (key.includes("manutencao") || key.includes("licenciamento")) {
        const aDate = new Date(a[key].split("/").reverse().join("-"));
        const bDate = new Date(b[key].split("/").reverse().join("-"));
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
              <th onClick={() => ordenar("combustivel")}>
                Gasto com Combustível {renderSortIcon("combustivel")}
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
            </tr>
          </thead>
          <tbody>
            {veiculos.map((v, index) => (
              <tr key={index}>
                <td>{v.placa}</td>
                <td>{v.combustivel}</td>
                <td>{v.manutencao}</td>
                <td>{v.licenciamento}</td>
                <td>{v.motorista}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Veiculos;
