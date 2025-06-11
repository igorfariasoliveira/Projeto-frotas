import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/Filiais.css";

const filiaisExemplo = [
  { id: "1", codigo: 101, razaoSocial: "Filial A", cnpj: "00.000.000/0001-00" },
  { id: "2", codigo: 102, razaoSocial: "Filial B", cnpj: "11.111.111/0001-11" },
  { id: "3", codigo: 100, razaoSocial: "Filial C", cnpj: "22.222.222/0001-22" },
];

const Filiais = () => {
  const [filiais, setFiliais] = useState(filiaisExemplo);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [filialSelecionada, setFilialSelecionada] = useState({
    id: "",
    codigo: "",
    razaoSocial: "",
    cnpj: "",
  });

  const [ordem, setOrdem] = useState({ coluna: "", direcao: "asc" });

  const handleOrdenar = (coluna) => {
    const novaDirecao =
      ordem.coluna === coluna && ordem.direcao === "asc" ? "desc" : "asc";
    setOrdem({ coluna, direcao: novaDirecao });

    const ordenado = [...filiais].sort((a, b) => {
      const valorA = a[coluna];
      const valorB = b[coluna];

      if (typeof valorA === "number") {
        return novaDirecao === "asc" ? valorA - valorB : valorB - valorA;
      }

      return novaDirecao === "asc"
        ? valorA.localeCompare(valorB)
        : valorB.localeCompare(valorA);
    });

    setFiliais(ordenado);
  };

  const handleEditar = (filial) => {
    setFilialSelecionada(filial);
    setModoEdicao(true);
  };

  const handleCadastrarNova = () => {
    setFilialSelecionada({
      id: "",
      codigo: "",
      razaoSocial: "",
      cnpj: "",
    });
    setModoEdicao(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilialSelecionada({ ...filialSelecionada, [name]: value });
  };

  const handleSalvar = (e) => {
    e.preventDefault();
    if (filialSelecionada.id) {
      setFiliais(
        filiais.map((f) =>
          f.id === filialSelecionada.id ? filialSelecionada : f
        )
      );
    } else {
      const novaFilial = {
        ...filialSelecionada,
        id: Date.now().toString(),
      };
      setFiliais([...filiais, novaFilial]);
    }
    setModoEdicao(false);
  };

  const handleCancelar = () => {
    setModoEdicao(false);
    setFilialSelecionada({
      id: "",
      codigo: "",
      razaoSocial: "",
      cnpj: "",
    });
  };

  const renderSetaOrdenacao = (coluna) => {
    if (ordem.coluna !== coluna) return null;
    return ordem.direcao === "asc" ? " ▲" : " ▼";
  };

  return (
    <DashboardLayout>
      <div className="filiais-container">
        {!modoEdicao ? (
          <>
            <h1>Filiais</h1>
            <button onClick={handleCadastrarNova}>Cadastrar Nova Filial</button>
            <table className="filiais-table">
              <thead>
                <tr>
                  <th onClick={() => handleOrdenar("codigo")}>
                    Código{renderSetaOrdenacao("codigo")}
                  </th>
                  <th onClick={() => handleOrdenar("razaoSocial")}>
                    Razão Social{renderSetaOrdenacao("razaoSocial")}
                  </th>
                  <th onClick={() => handleOrdenar("cnpj")}>
                    CNPJ{renderSetaOrdenacao("cnpj")}
                  </th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filiais.map((filial) => (
                  <tr key={filial.id}>
                    <td>{filial.codigo}</td>
                    <td>{filial.razaoSocial}</td>
                    <td>{filial.cnpj}</td>
                    <td>
                      <button onClick={() => handleEditar(filial)}>Editar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <>
            <h1>{filialSelecionada.id ? "Editar Filial" : "Cadastrar Nova Filial"}</h1>
            <form onSubmit={handleSalvar} className="filial-form">
              <div className="form-group">
                <label>Código</label>
                <input
                  type="number"
                  name="codigo"
                  value={filialSelecionada.codigo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Razão Social</label>
                <input
                  type="text"
                  name="razaoSocial"
                  value={filialSelecionada.razaoSocial}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>CNPJ</label>
                <input
                  type="text"
                  name="cnpj"
                  value={filialSelecionada.cnpj}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-buttons">
                <button type="submit">Salvar</button>
                <button type="button" onClick={handleCancelar}>
                  Cancelar
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Filiais;
