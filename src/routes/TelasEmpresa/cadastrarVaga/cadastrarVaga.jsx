import { BigCard } from "../../../components/BigCard";
const CadastrarVaga = () => {
    const containerStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: "20px",
        marginTop: "6em",
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
          <h1 className="text-left decoration-black text-2xl px-10">Vagas Cadastradas</h1>
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
              width: "20%",
              outline: "none",
              borderRadius: "7px",
              margin: "7em 0",
              height: "2em"
            }}
          >
            <span>Cadastrar Vaga </span>
          </button>
          </div>
        </div>
      );

};

export default CadastrarVaga;