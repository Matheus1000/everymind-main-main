import { Outlet } from "react-router-dom";
import { BigCard } from "../../../components/BigCard";
import { CardTestes } from "../../../components/CardTestes";

const TestesUsuario = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "20px",
    marginTop: "5em",
  };


  const cardStyles = {
    padding: "10px",
  };

  const cards = Array.from({ length: 2 }, (_, index) => (
    <div key={index} style={cardStyles}>
      <CardTestes name={"IBM"} role="Junior"/>
    </div>
  ));
  return (
    <div>
      <h1 className="text-left decoration-black h24 text-3xl px-10">Conta</h1>
      <h2 className="flex space-x-4 px-10 mt-10 italic text-[#555555]">
        Testes{" "}
      </h2>
      <div style={containerStyle}>{cards}</div>
    
    </div>
  );
};
//Metodos testados que ocasionaram falhas
//inserir text box após o click do botao no cardTeste
//realizar if para que quando o botao fosse clicado a caixa de texto aparecesse
// inserir ao lado de cards para exbicao de teste
//ao realizar import o PostInput o programa desconfigura
export default TestesUsuario;
