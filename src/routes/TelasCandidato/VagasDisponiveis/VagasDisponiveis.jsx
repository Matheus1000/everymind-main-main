import React from "react";
import { BigCardInscrevase } from "../../../components/BigCardInscrevase";

const VagasDisponiveis = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "20px",
    marginTop: "25%",
  };

  const styleText = {
    color: "black",
    height: "100px",
    position: "absolute",
    top: "5%",
    left: "20%",
    fontSize: "24px",
  };

  const styleText2 = {
    color: "#555555",
    height: "100px",
    position: "absolute",
    top: "15%",
    left: "20%",
    fontSize: "14px",
  };

  const cardStyles = {
    padding: "10px",
  };

  const cards = Array.from({ length: 6 }, (_, index) => (
    <div key={index} style={cardStyles}>
      <BigCardInscrevase />
    </div>
  ));

  return (
    <div>
      <h1 style={styleText}>Conta</h1>
      <h2 style={styleText2}>
        Vagas Disponíveis - Aqui você encontra as vagas para se candidatar
      </h2>
      <div style={containerStyle}>{cards}</div>
    </div>
  );
};

export default VagasDisponiveis;
