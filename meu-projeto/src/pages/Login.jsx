import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import logo from "../assets/logo.png"; // Caminho para sua logo

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@empresa.com" && password === "123456") {
      setLoginError(false); // zera o erro ao logar corretamente
      navigate("/dashboard");
    } else {
      setLoginError(true); // ativa o erro se login for inválido
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Frotas Pro Logo" className="login-logo" />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
           
           {loginError && (
            <p className="error-message">Credenciais inválidas</p>
          )}
          
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
