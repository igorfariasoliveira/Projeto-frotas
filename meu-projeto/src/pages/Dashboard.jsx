import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo ao painel de controle!</p>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Dashboard;
