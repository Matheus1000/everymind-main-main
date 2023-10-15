import React from "react";

const RecuperarSenha = () => {
  const containerStyle = {
    position: "fixed",
    left: 0,
    top: 0,
    height: "100%",
    backgroundColor: "#ffff",
    padding: "20px",
    boxShadow: "2px 0 10px -1px rgba(0, 0, 0, 0.5)",
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          width: "100%",
          margin: "2em 0"
        }}
      >
        <div>
          <img
            src="https://c.animaapp.com/RLL3gMW3/img/image-11-1@2x.png"
            style={{
              width: "60%",
              margin: "3em auto",
              height: "100px",
            }}
          />{" "}
        </div>
        <div className="title">
          <h2 className="text-lg my-4">Recuperar a senha</h2>{" "}
        </div>

        <label className="text-base my-6">Email</label>
        <input
          type="text"
          placeholder="Digite aqui seu email"
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
      </div>
      <div>
        <button
          style={{
            flex: 1,
            border:
              "1px solid var(--transparent-primary-48, rgba(0, 167, 111, 0.48))",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgb(47, 194, 134) 0%, rgb(49, 169, 185) 100%) ",
            backgroundColor: "unset",
            width: "80%",
            color: "#000000",
            outline: "none",
            borderRadius: "7px",
            margin: "2em 0",
            height: "2.5em"
          }}
        >
          Recuperar
        </button>
      </div>
    </div>
  );
};

export default RecuperarSenha;
