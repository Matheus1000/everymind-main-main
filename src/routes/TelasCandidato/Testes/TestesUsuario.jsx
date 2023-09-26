import { Outlet } from "react-router-dom";
import { BigCard } from "../../../components/BigCard";
import { CardTestes } from "../../../components/CardTestes";

const TestesUsuario = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "20px",
    marginTop: "23%",
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

  const cards = Array.from({ length: 2 }, (_, index) => (
    <div key={index} style={cardStyles}>
      <CardTestes />
    </div>
  ));
  return (
    <div>
      <h1 style={styleText}>Conta</h1>
      <h2 style={styleText2}>
        Testes - Você poderá fazer os testes solicitados pela empresa nesta
        área, basta clicar em "Iniciar Teste" e o teste, seja redação ou teste
        lógico, irá aparecer.{" "}
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
