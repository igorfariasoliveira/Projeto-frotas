import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/Relatorios.css";

const veiculos = ["ABC-1234", "DEF-5678", "GHI-9012"];

const Relatorios = () => {
  const [tipoRelatorio, setTipoRelatorio] = useState("Despesas por Caminhão");
  const [selecionados, setSelecionados] = useState([]);
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");

  const tiposQueExigemCaminhao = [
    "Despesas por Caminhão",
    "Manutenções por Caminhão",
    "Consumo de Combustível"
  ];

  const toggleSelecionado = (placa) => {
    setSelecionados((prev) =>
      prev.includes(placa)
        ? prev.filter((p) => p !== placa)
        : [...prev, placa]
    );
  };

  const alternarTodos = () => {
    if (selecionados.length === veiculos.length) {
      setSelecionados([]);
    } else {
      setSelecionados([...veiculos]);
    }
  };

  const handleTipoChange = (e) => {
    const tipo = e.target.value;
    setTipoRelatorio(tipo);
    if (!tiposQueExigemCaminhao.includes(tipo)) {
      setSelecionados([]);
    }
  };

  const gerarRelatorio = () => {
    console.log("Tipo:", tipoRelatorio);
    console.log("Caminhões:", selecionados);
    console.log("Período:", dataInicio, "até", dataFim);
  };

  return (
    <DashboardLayout>
      <div className="relatorios-container">
        <h1>Relatórios</h1>

        <div className="form-relatorio">
          <div className="campo">
            <label>Tipo de Relatório</label>
            <select value={tipoRelatorio} onChange={handleTipoChange}>
              <option>Despesas por Caminhão</option>
              <option>Carregamentos por Período</option>
              <option>Manutenções por Caminhão</option>
              <option>Consumo de Combustível</option>
              <option>Viagens</option>
            </select>
          </div>

          {tiposQueExigemCaminhao.includes(tipoRelatorio) && (
            <div className="campo">
              <label>Selecionar Caminhões</label>
              <button
                type="button"
                onClick={alternarTodos}
                className="botao-selecionar-todos"
              >
                Selecionar Todos
              </button>

              <div className="checkbox-list coluna">
                {veiculos.sort().map((placa) => (
                  <label key={placa} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={selecionados.includes(placa)}
                      onChange={() => toggleSelecionado(placa)}
                    />
                    {placa}
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="campo">
            <label>Período</label>
            <div className="datas">
              <input
                type="date"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
              />
              <span>até</span>
              <input
                type="date"
                value={dataFim}
                onChange={(e) => setDataFim(e.target.value)}
              />
            </div>
          </div>

          <div className="botoes-relatorio">
            <button onClick={gerarRelatorio}>Gerar Relatório</button>
            <button className="botao-baixar">Baixar PDF</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Relatorios;
