import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "01/04/2025", value: 12 },
  { date: "02/04/2025", value: 6 },
  { date: "03/04/2025", value: 8 },
  { date: "04/04/2025", value: 3 },
  { date: "05/04/2025", value: 5 },
  { date: "07/04/2025", value: 10 },
  { date: "08/04/2025", value: 10 },
  { date: "09/04/2025", value: 9 },
  { date: "10/04/2025", value: 5 },
  { date: "11/04/2025", value: 1 },
  { date: "13/04/2025", value: 7 },
  { date: "14/04/2025", value: 7 },
  { date: "15/04/2025", value: 15 },
];

const BarChartCustom = () => {
  return (
    <div className="card">
      <h3>Carregamentos por Dia</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis tickFormatter={(v) => v.toLocaleString("pt-BR")} />
          <Tooltip
            formatter={(value) => [`${value.toLocaleString("pt-BR")}`, "Valor"]}
          />
          <Bar dataKey="value" fill="#9b59b6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartCustom;
