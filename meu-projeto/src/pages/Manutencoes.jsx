import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/Manutencoes.css";

const manutencoesExemplo = [
  {
    id: 1,
    placa: "ABC-1234",
    tipo: "Troca de óleo",
    status: "Concluída",
    data: "2025-04-20",
  },
  {
    id: 2,
    placa: "DEF-5678",
    tipo: "Revisão geral",
    status: "Em andamento",
    data: "2025-04-22",
  },
  {
    id: 3,
    placa: "GHI-9012",
    tipo: "Freios",
    status: "Agendada",
    data: "2025-04-25",
  },
  {
    id: 4,
    placa: "DEF-5678",
    tipo: "Revisão geral",
    status: "Em andamento",
    data: "2025-04-22",
  },
];

const Manutencoes = () => {
  const [manutencoes, setManutencoes] = useState(manutencoesExemplo);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const ordenar = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...manutencoes].sort((a, b) => {
      if (key === "data") {
        return direction === "asc"
          ? new Date(a[key]) - new Date(b[key])
          : new Date(b[key]) - new Date(a[key]);
      }

      return direction === "asc"
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key]);
    });

    setManutencoes(sorted);
    setSortConfig({ key, direction });
  };

  return (
    <DashboardLayout>
      <main className="manutencao-content">
        <h1>Manutenções</h1>
        <table className="manutencao-table">
          <thead>
            <tr>
              <th onClick={() => ordenar("placa")}>
                Placa{" "}
                {sortConfig.key === "placa" &&
                  (sortConfig.direction === "asc" ? "🔽" : "🔼")}
              </th>
              <th onClick={() => ordenar("tipo")}>
                Tipo{" "}
                {sortConfig.key === "tipo" &&
                  (sortConfig.direction === "asc" ? "🔽" : "🔼")}
              </th>
              <th onClick={() => ordenar("status")}>
                Status{" "}
                {sortConfig.key === "status" &&
                  (sortConfig.direction === "asc" ? "🔽" : "🔼")}
              </th>
              <th onClick={() => ordenar("data")}>
                Data{" "}
                {sortConfig.key === "data" &&
                  (sortConfig.direction === "asc" ? "🔽" : "🔼")}
              </th>
            </tr>
          </thead>
          <tbody>
            {manutencoes.map((item) => (
              <tr key={item.id}>
                <td>{item.placa}</td>
                <td>{item.tipo}</td>
                <td
                  className={`status ${item.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {item.status}
                </td>
                <td>{new Date(item.data).toLocaleDateString("pt-BR")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </DashboardLayout>
  );
};

export default Manutencoes;
