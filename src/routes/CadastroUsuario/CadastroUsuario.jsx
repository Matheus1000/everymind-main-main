import React from "react";
import "./style.css";
import userData from '../../Data/mockData';
import { useState } from "react";


const CadastroUsuario = () => {

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [ocupacao, setOcupacao] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = () => {
    const newUser = {
      email,
      password: senha,
      role: ocupacao,
    };
    const existingData = JSON.parse(localStorage.getItem("userData")) || [];
    const updatedData = [...existingData, newUser];
    localStorage.setItem("userData", JSON.stringify(updatedData));
    alert("Usuário Adicionado ! ", newUser);
  };

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
          marginTop: "-20px",
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
          <h2>Cadastro de Usuário</h2>
        </div>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome"
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
        <label>CPF</label>
        <input
          type="text"
          placeholder="Digite seu CPF"
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
        <label>Telefone</label>
        <input
          type="text"
          placeholder="Digite seu telefone"
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
        <label>Email</label>
        <input
          type="text"
          placeholder="Digite seu email"
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
        <label>Ocupação</label>
        <select
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
        >
          <option value="PcD">PcD</option>
          <option value="PovosOriginarios">Povos Originários</option>
        </select>
        <label>Sexo</label>
        <select
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
        >
          <option value="Masc">Masc</option>
          <option value="Fem">Fem</option>
        </select>
        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
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
        onClick={handleCadastro}
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

export default CadastroUsuario;
