import React from "react";
import  {BigCardInscrevase}  from "../../../components/BigCardInscrevase";

const VagasDisponiveis = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "20px",
    marginTop: "3rem",
  };


  const cardStyles = {
    padding: "10px",
  };

  const cards = Array.from({ length: 6 }, (_, index) => (
    <div key={index} style={cardStyles}>
      <BigCardInscrevase name={'Cielo'} role={'Teste'}/>
    </div>
  ));

  return (
    <div>
      <h1 className="text-left decoration-black h24 text-3xl px-10">Conta</h1>
      <h2 className="flex space-x-4 px-10 mt-10 italic text-[#555555]">
        Vagas Disponíveis
      </h2>
      <div style={containerStyle}>{cards}</div>
    </div>
  );
};

export default VagasDisponiveis;
