const PowerBIEmbed = () => {
  return (
    <iframe
      title="EveryMind"
      width="956px"
      height="682px"
      src="https://app.powerbi.com/reportEmbed?reportId=25cc18b0-7f19-4b5f-8933-4755a7267c58&autoAuth=true&ctid=11dbbfe2-89b8-4549-be10-cec364e59551"
      frameBorder="1"
      allowFullScreen={true}
    ></iframe>
  );
};

const Feedbacks = () => {
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
    top: "11%",
    left: "20%",
    fontSize: "14px",
  };
  return (
    <div>
      <h1 style={styleText}>Conta</h1>
      <h2 style={styleText2}>
        Dashboard - área onde será possível realizar diversas análises e
        indicadores sobre o processo
      </h2>
      <PowerBIEmbed />
    </div>
  );
};

export default Feedbacks;
