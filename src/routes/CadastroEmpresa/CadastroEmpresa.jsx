import React from "react";
import "./styles.css";

const CadastroEmpresa = () => {
  const containerStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    height: "100%",
    width: "25%",
    backgroundColor: "#ffff",
    padding: "20px",
    boxShadow: "2px 0 10px -1px rgba(0, 0, 0, 0.5)",
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          width: "100%",
          marginTop: "-10px",
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
          <h2>Cadastro de Empresa</h2>
        </div>

        <label>Nome Completo</label>
        <input
          type="text"
          placeholder="Digite o nome completo"
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
        <label>CNPJ</label>
        <input
          type="text"
          placeholder="Digite o CNPJ"
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
        <label>Email Corporativo</label>
        <input
          type="text"
          placeholder="Digite o email corporativo"
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
        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite a senha"
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
        <button
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
            color: "#000000",
            outline: "none",
          }}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default CadastroEmpresa;
