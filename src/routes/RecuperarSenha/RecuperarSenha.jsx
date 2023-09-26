import React from "react";

const RecuperarSenha = () => {
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
          />{" "}
        </div>
        <div className="title">
          <h2>Recuperar a senha</h2>{" "}
        </div>

        <label>Email</label>
        <input
          type="text"
          placeholder="Digite aqui seu email"
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
      <div>
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
          Recuperar
        </button>
      </div>
    </div>
  );
};

export default RecuperarSenha;
