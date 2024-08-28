import React, { useEffect, useState } from "react";
import cssModule from "./login.module.css";
import { useNavigate } from "react-router-dom";

// Components
import Loading from "../../components/Loading/Loading";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      navigate('/home')
      return;
    }
  }, [navigate])

  const handleLogin = () => {
    setLoading(true);

    // Hacemos un timeout para simular la carga del login
    setTimeout(() => {
      if (username === "" || password === "") {
        alert("Favor de llenar los campos usuarios y contraseña.");
        setLoading(false);
        return;
      }
  
      if (username === "admin" && password === "admin123") {
        localStorage.setItem("isAuthenticated", "true");
        setLoading(false);
        navigate("/home");
      } else {
        setLoading(false);
        alert("Credenciales incorrectas");
      }
    }, 2000);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className={cssModule.background}>
      <div className={cssModule["form-container"]}>
        <p className={cssModule.title}>Bienvenido</p>
        <div className={cssModule["input-container"]}>
          <p className={cssModule.user}>Ingresa tu usuario</p>
          <input className={cssModule.userInput} onChange={(e) => setUsername(e.target.value)} onKeyDown={handleKeyPress} />
          <p className={cssModule.pass}>Ingresa tu contraseña</p>
          <input type="password" className={cssModule.passInput} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyPress} />
        </div>
        <br />
        <div>
          {!loading ? (
            <button type="submit" className={cssModule["login-button"]} onClick={handleLogin}>
              Iniciar sesión
            </button>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
