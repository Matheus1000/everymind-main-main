import React from "react";
import "./styles.css";

const CadastroEmpresa = () => {
  return (
    <div className="containerStyle">
      <div
        style={{
          width: "90%",
          margin: "0 auto"
        }}
      >
        <div>
          <img
            src="https://c.animaapp.com/RLL3gMW3/img/image-11-1@2x.png"
            style={{
              width: "80%",
              margin: "2em auto",
              height: "100px",
            }}
          />
        </div>
        <div className="title">
          <h2 className="my-6 text-lg">Cadastro de Empresa</h2>
        </div>

        <label className="my-5 text-sm">Nome Completo</label>
        <input
          type="text"
          placeholder="Digite o nome completo"
          style={{
            width: "90%",
            margin: "1em 0",
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
        <label className="my-5 text-sm">CNPJ</label>
        <input
          type="text"
          placeholder="Digite o CNPJ"
          style={{
            width: "90%",
            margin: "1em 0",
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
        <label className="my-5 text-sm">Email Corporativo</label>
        <input
          type="text"
          placeholder="Digite o email corporativo"
          style={{
            width: "90%",
            margin: "1em 0",
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
        <label className="my-5 text-sm">Senha</label>
        <input
          type="password"
          placeholder="Digite a senha"
          style={{
            width: "90%",
            margin: "1em 0",
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
            width: "90%",
            borderRadius: "7px",
            margin: "2em 0",
            height: "2.5em",
            border:
              "1px solid var(--transparent-primary-48, rgba(0, 167, 111, 0.48))",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgb(47, 194, 134) 0%, rgb(49, 169, 185) 100%) ",
            backgroundColor: "unset",
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
