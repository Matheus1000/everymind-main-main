import { Outlet } from "react-router-dom";
import { BigCard } from "../../../components/BigCard";
import { CardEntrevistas } from "../../../components/CardEntrevistas";

const Entrevistas = () => {
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
  return (
    <div>
      <h1 style={styleText}>Conta</h1>
      <h2 style={styleText2}>
        Entrevistas - Aqui estão os status das suas entrevistas
      </h2>
      <CardEntrevistas />
    </div>
  );
};

export default Entrevistas;
