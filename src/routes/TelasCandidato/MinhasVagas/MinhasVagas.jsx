import { BigCard } from "../../../components/BigCard";

const MinhasVagas = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "20px",
    marginTop: "3em",
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
      <h1 className="text-left decoration-black h24 text-3xl px-10">Conta</h1>
      <h2 className="text-left text-[#555555] px-10 mt-10 italic text-[#555555]">
        Minhas Vagas
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
