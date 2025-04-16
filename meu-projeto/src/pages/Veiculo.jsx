import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/Veiculos.css";

const veiculos = [
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
  return (
    <DashboardLayout>
      <div className="veiculos-container">
        <h1>Lista de Veículos</h1>
        <table className="veiculos-table">
          <thead>
            <tr>
              <th>Placa</th>
              <th>Gasto com Combustível</th>
              <th>Última Manutenção</th>
              <th>Licenciamento</th>
              <th>Motorista</th>
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
