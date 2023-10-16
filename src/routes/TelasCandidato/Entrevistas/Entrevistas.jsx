import { CardEntrevistas } from "../../../components/CardEntrevistas";

const Entrevistas = () => {
  return (
    <div>
      <h1 className="text-left decoration-black h24 text-3xl px-10">Conta</h1>
      <h2 className="flex space-x-4 px-10 mt-10 italic text-[#555555]">
        Entrevistas
      </h2>
      <div className="flex content-center justify-center m-20">
        <div className="flex items-center space-x-8 p10">
          <div><CardEntrevistas /></div>
          <div><CardEntrevistas /></div>
          <div><CardEntrevistas /></div>
        </div>
      </div>
    </div>
  );
};

export default Entrevistas;
