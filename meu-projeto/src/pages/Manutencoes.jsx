import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/Manutencoes.css";
import { HiChevronDown, HiChevronUp } from "react-icons/hi"; // << ADICIONADO AQUI

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
    {
      id: 4,
      placa: "GHI-9012",
      tipo: "Freios",
      status: "Agendada",
      data: "25/04/2025",
    },
  ];

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [manutencoesOrdenadas, setManutencoesOrdenadas] = useState(manutencoes);

  const ordenar = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...manutencoesOrdenadas].sort((a, b) => {
      if (key === "data") {
        const [diaA, mesA, anoA] = a.data.split("/");
        const [diaB, mesB, anoB] = b.data.split("/");
        const dataA = new Date(`${anoA}-${mesA}-${diaA}`);
        const dataB = new Date(`${anoB}-${mesB}-${diaB}`);

        return direction === "asc" ? dataA - dataB : dataB - dataA;
      } else {
        return direction === "asc"
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key]);
      }
    });

    setManutencoesOrdenadas(sorted);
    setSortConfig({ key, direction });
  };

  const renderIcone = (campo) => {
    if (sortConfig.key === campo) {
      return sortConfig.direction === "asc" ? (
        <HiChevronDown />
      ) : (
        <HiChevronUp />
      );
    }
    return null;
  };

  return (
    <DashboardLayout>
      <main className="manutencao-content">
        <h1>Manutenções</h1>
        <table className="manutencao-table">
          <thead>
            <tr>
              <th onClick={() => ordenar("placa")}>
                Placa {renderIcone("placa")}
              </th>
              <th onClick={() => ordenar("tipo")}>
                Tipo {renderIcone("tipo")}
              </th>
              <th onClick={() => ordenar("status")}>
                Status {renderIcone("status")}
              </th>
              <th onClick={() => ordenar("data")}>
                Data {renderIcone("data")}
              </th>
            </tr>
          </thead>
          <tbody>
            {manutencoesOrdenadas.map((item) => (
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
