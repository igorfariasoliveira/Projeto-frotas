import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/Manutencoes.css";

const Manutencoes = () => {
  const manutencoes = [
    {
      id: 1,
      placa: "ABC-1234",
      tipo: "Troca de óleo",
      status: "Concluída",
      data: "20/04/2025",
    },
    {
      id: 2,
      placa: "DEF-5678",
      tipo: "Revisão geral",
      status: "Em andamento",
      data: "22/04/2025",
    },
    {
      id: 3,
      placa: "GHI-9012",
      tipo: "Freios",
      status: "Agendada",
      data: "25/04/2025",
    },
  ];

  return (
    <DashboardLayout>
      <main className="manutencao-content">
        <h1>Manutenções</h1>
        <table className="manutencao-table">
          <thead>
            <tr>
              <th>Placa</th>
              <th>Tipo</th>
              <th>Status</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {manutencoes.map((item) => (
              <tr key={item.id}>
                <td>{item.placa}</td>
                <td>{item.tipo}</td>
                <td className={`status ${item.status.toLowerCase().replace(" ", "-")}`}>
                  {item.status}
                </td>
                <td>{item.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </DashboardLayout>
  );
};

export default Manutencoes;
