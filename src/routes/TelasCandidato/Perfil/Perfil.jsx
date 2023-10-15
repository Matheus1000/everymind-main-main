import { InfoPerfil } from "../../../components/InfoPerfil";

const Perfil = () => {
  return (
    <div>
      <h1 className="text-left decoration-black h24 text-3xl px-10">Conta</h1>
      <div className="flex space-x-4 px-10 mt-10"> 
        <h2 className="italic">
          Perfil 
        </h2>
        <h2 className="italic">
          -
        </h2>
        <h2 className="text-[#555555]">
          Informações
        </h2>
      </div>

      <InfoPerfil />
    </div>
  );
};

export default Perfil;
