const PowerBIEmbed = () => {
  return (
    <iframe
      title="EveryMind"
      width="100%"
      height="700px"
      src="https://app.powerbi.com/reportEmbed?reportId=25cc18b0-7f19-4b5f-8933-4755a7267c58&autoAuth=true&ctid=11dbbfe2-89b8-4549-be10-cec364e59551"
      allowFullScreen={true}
    ></iframe>
  );
};

const Feedbacks = () => {
  return (
    <div className="p-5">
      <h1 className="text-left decoration-black h24 text-3xl mb-20 ">Dashboard</h1>
  
      <PowerBIEmbed />
    </div>
  );
};

export default Feedbacks;
