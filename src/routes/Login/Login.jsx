import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import userData from "../../Data/mockData";
import "./style.css";
import Alert from "../../components/AlertaCustom/AlertaCustom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ocupacao, setOcupacao] = useState("Candidato");
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const user = userData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      window.location.href = ocupacao === "Candidato" ? "/Candidato" : "/Empresa";
    } else {
      setShowAlert(true);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100%",
          width: "25%",
          backgroundColor: "#ffff",
          padding: "20px",
          boxShadow: "2px 0 10px -1px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          style={{
            width: "100%",
            marginBottom: "10px",
            top: "10px",
          }}
        >
          <div>
            <img
              src="https://c.animaapp.com/RLL3gMW3/img/image-11-1@2x.png"
              style={{
                width: "60%",
                marginBottom: "20px",
                height: "100px",
              }}
            />
          </div>

          <div className="title">
            <h2>Login</h2>
          </div>

          <input
            type="text"
            placeholder="Digite seu email"
            value={email}
            onChange={handleEmailChange}
            style={{
              width: "80%",
              marginBottom: "10px",
              border: "1px solid",
              borderColor: " #d6d6d6",
              borderRadius: "8px",
              display: "flex",
              gap: "8px",
              overflow: "hidden",
              padding: "10px",
              position: "relative",
              backgroundColor: "transparent",
              color: "#212b3685",
              outline: "none",
            }}
          />

          <div className="inputSelect">
            <label>Selecione sua ocupação</label>
            <select
              style={{
                width: "85%",
                marginBottom: "10px",
                border: "1px solid",
                borderColor: " #d6d6d6",
                borderRadius: "8px",
                display: "flex",
                gap: "8px",
                overflow: "hidden",
                padding: "10px",
                position: "relative",
                backgroundColor: "transparent",
                color: "#212b3685",
                outline: "none",
              }}
              onChange={(e) => setOcupacao(e.target.value)}
            >
              <option value="Candidato">Candidato</option>
              <option value="Empresa">Empresa</option>
            </select>
          </div>

          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={handlePasswordChange}
            style={{
              width: "80%",
              marginBottom: "10px",
              border: "1px solid",
              borderColor: " #d6d6d6",
              borderRadius: "8px",
              display: "flex",
              gap: "8px",
              overflow: "hidden",
              padding: "10px",
              position: "relative",
              backgroundColor: "transparent",
              color: "#212b3685",
              outline: "none",
            }}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <button
            style={{
              flex: 1,
              marginRight: "5px",
              backgroundColor: "transparent",
              fontSize: "12px",
              marginBottom: "10px",
            }}
          >
            <NavLink
              to="/RecuperarSenha"
              style={{
                color: "#9a9a9a",
                outline: "none",
              }}
            >
              Esqueci Minha Senha
            </NavLink>
          </button>

          <button
            onClick={handleLogin}
            style={{
              flex: 1,
              marginRight: "5px",
              marginBottom: "10px",
              border:
                "1px solid var(--transparent-primary-48, rgba(0, 167, 111, 0.48))",
              background:
                "radial-gradient(50% 50% at 50% 50%, rgb(47, 194, 134) 0%, rgb(49, 169, 185) 100%) ",
              backgroundColor: "unset",
              width: "80%",
              outline: "none",
            }}
          >
            <span>Login</span>
          </button>

          <button
            style={{
              flex: 1,
              marginRight: "5px",
              marginBottom: "10px",
              backgroundColor: "transparent",
              color: "#010101",
            }}
          >
            <NavLink
              to={
                ocupacao === "Candidato"
                  ? "/CadastroUsuario"
                  : "/CadastroEmpresa"
              }
              style={{
                color: "#000000",
              }}
            >
              Cadastre-se
            </NavLink>
          </button>
        </div>
      </div>

     
      {showAlert && (
        <Alert
          message="Credenciais Inválidas"
          onClose={handleAlertClose}
        />
      )}
    </>
  );
};

export default Login;
