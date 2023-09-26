import { InfoPerfil } from "../../../components/InfoPerfil";

const Perfil = () => {
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
        Perfil • Informações - Você pode alterar suas informações aqui.
      </h2>

      <InfoPerfil />
    </div>
  );
};

export default Perfil;
