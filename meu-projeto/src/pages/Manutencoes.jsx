import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/Manutencoes.css";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Manutencoes = () => {
  const manutencoes = [
    {
      id: 1,
      placa: "ABC-1234",
      tipo: "Troca de óleo",
      status: "Concluída",
      data: "20/04/2025",
      componenteAtingido: "Motor",
      descricaoProblema: "Óleo vencido",
      acaoExecutada: "Troca completa do óleo",
      mecanicoResponsavel: "João Mecânico",
      custoTotal: "R$ 350,00",
      tempoExecucaoHoras: 2,
      dataExecucao: "20/04/2025",
      resolvido: true,
    },
    {
      id: 2,
      placa: "DEF-5678",
      tipo: "Revisão geral",
      status: "Em andamento",
      data: "22/04/2025",
      componenteAtingido: "Sistema elétrico",
      descricaoProblema: "Farol não acende",
      acaoExecutada: "Verificação de fusíveis",
      mecanicoResponsavel: "Maria Técnica",
      custoTotal: "R$ 200,00",
      tempoExecucaoHoras: 3,
      dataExecucao: "22/04/2025",
      resolvido: false,
    },
    // ... outros registros
  ];

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [manutencoesOrdenadas, setManutencoesOrdenadas] = useState(manutencoes);
  const [expandedId, setExpandedId] = useState(null); // NOVO

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

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
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
              <React.Fragment key={item.id}>
                <tr
                  className="linha-manutencao"
                  onClick={() => toggleExpand(item.id)}
                  style={{ cursor: "pointer" }}
                >
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

                {expandedId === item.id && (
                  <tr className="detalhes-manutencao">
                    <td colSpan="4">
                      <div className="detalhes-container">
                        <p><strong>Componente:</strong> {item.componenteAtingido}</p>
                        <p><strong>Descrição:</strong> {item.descricaoProblema}</p>
                        <p><strong>Ação:</strong> {item.acaoExecutada}</p>
                        <p><strong>Mecânico:</strong> {item.mecanicoResponsavel}</p>
                        <p><strong>Data Execução:</strong> {item.dataExecucao}</p>
                        <p><strong>Custo:</strong> {item.custoTotal}</p>
                        <p><strong>Duração:</strong> {item.tempoExecucaoHoras}h</p>
                        <p><strong>Resolvido:</strong> {item.resolvido ? "Sim" : "Não"}</p>
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

export default Manutencoes;
