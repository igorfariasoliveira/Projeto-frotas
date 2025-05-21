import { useState } from "react";

export default function CadastroCarregamento() {
  const [formData, setFormData] = useState({
    numeroCarregamento: "",
    notasFiscais: "",
    mdfe: "",
    situacaoMdfe: "",
    pesoTotal: "",
    dataSaida: "",
    dataPrevistaChegada: "",
    dataChegada: "",
    kmInicial: "",
    kmFinal: "",
    totalKm: "",
    destino: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  }

  return (
    <DashboardLayout>
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Cadastro de Carregamento</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="numeroCarregamento"
          placeholder="Número do Carregamento"
          value={formData.numeroCarregamento}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="notasFiscais"
          placeholder="Notas Fiscais (ex: 123,456)"
          value={formData.notasFiscais}
          onChange={handleChange}
          className="input"
        />
        <input
          type="number"
          name="mdfe"
          placeholder="MDFe"
          value={formData.mdfe}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="situacaoMdfe"
          placeholder="Situação do MDFe"
          value={formData.situacaoMdfe}
          onChange={handleChange}
          className="input"
        />
        <input
          type="number"
          name="pesoTotal"
          placeholder="Peso Total"
          value={formData.pesoTotal}
          onChange={handleChange}
          className="input"
        />
        <input
          type="date"
          name="dataSaida"
          placeholder="Data de Saída"
          value={formData.dataSaida}
          onChange={handleChange}
          className="input"
        />
        <input
          type="date"
          name="dataPrevistaChegada"
          placeholder="Data Prevista de Chegada"
          value={formData.dataPrevistaChegada}
          onChange={handleChange}
          className="input"
        />
        <input
          type="date"
          name="dataChegada"
          placeholder="Data de Chegada"
          value={formData.dataChegada}
          onChange={handleChange}
          className="input"
        />
        <input
          type="number"
          name="kmInicial"
          placeholder="KM Inicial"
          value={formData.kmInicial}
          onChange={handleChange}
          className="input"
        />
        <input
          type="number"
          name="kmFinal"
          placeholder="KM Final"
          value={formData.kmFinal}
          onChange={handleChange}
          className="input"
        />
        <input
          type="number"
          name="totalKm"
          placeholder="Total KM"
          value={formData.totalKm}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="destino"
          placeholder="Destino"
          value={formData.destino}
          onChange={handleChange}
          className="input"
        />

        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          >
            Salvar Carregamento
          </button>
        </div>
      </form>
    </div>
    </DashboardLayout>
  );
}
