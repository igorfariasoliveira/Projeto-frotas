import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import logo from "../assets/logo.png"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "igor@gmail.com" && password === "123456") {
      setLoginError(false); 
      navigate("/dashboard");
    } else {
      setLoginError(true); 
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Frotas Pro Logo" className="login-logo" />
        <h2>Seja bem-vindo!</h2>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
             type="email" 
             value={email} 
             onChange={(e) => setEmail(e.target.value)} 
             className="input-field" 
             required
             autoFocus
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
