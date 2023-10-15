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

  return (
    <div className="containerStyle">
      <div
        style={{
          width: "100%",
          top: "10px",
        }}
      >
        <div>
          <img
            src="https://c.animaapp.com/RLL3gMW3/img/image-11-1@2x.png"
            style={{
              width: "80%",
              margin: "0 auto",
              height: "100px",
            }}
          />
        </div>
        <div className="my-2">
          <h2 className="my-6 text-lg">Cadastro de Usuário</h2>
        </div>
        <label className="my-5 text-sm">Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome"
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
        <label className="my-5 text-sm">CPF</label>
        <input
          type="text"
          placeholder="Digite seu CPF"
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
        <label className="my-5 text-sm">Telefone</label>
        <input
          type="text"
          placeholder="Digite seu telefone"
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
        <label className="my-5 text-sm">Email</label>
        <input
          type="text"
          placeholder="Digite seu email"
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
        <label className="my-5 text-sm">Ocupação</label>
        <select
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
        >
          <option value="PcD">PcD</option>
          <option value="PovosOriginarios">Povos Originários</option>
        </select>
        <label className="my-5 text-sm">Sexo</label>
        <select
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
        >
          <option value="Masc">Masc</option>
          <option value="Fem">Fem</option>
        </select>
        <label className="my-5 text-sm">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
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
        onClick={handleCadastro}
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

export default CadastroUsuario;
