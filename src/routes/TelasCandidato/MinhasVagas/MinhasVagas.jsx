import { BigCard } from "../../../components/BigCard";

const MinhasVagas = () => {
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

  const cardsData = [
    {
      buttonText: "Em andamento",
      buttonStyles: {
        color: "#058935",
        textColor: "white",
        borderColor: "blue",
      },
    },
    {
      buttonText: "Realizar teste",
      buttonStyles: {
        color: "#00067c",
        textColor: "white",
        borderColor: "#444",
      },
    },
    {
      buttonText: "Aguardando",
      buttonStyles: {
        color: "red",
        textColor: "white",
        borderColor: "yellow",
      },
    },
  ];
  return (
    <div>
      <h1 style={styleText}>Conta</h1>
      <h2 style={styleText2}>
        Minhas Vagas - Nesta área, você poderá observar as vagas que se
        candidatou e os status delas
      </h2>
      <div style={containerStyle}>
        {cardsData.map((card, index) => (
          <div key={index} style={{}}>
            <BigCard
              buttonText={card.buttonText}
              buttonStyles={card.buttonStyles}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinhasVagas;
