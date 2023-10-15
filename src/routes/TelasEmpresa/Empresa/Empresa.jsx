import React from "react";
import "./styles.css"; // Import CSS file
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Empresa = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
      <div className="flex bg-teal-500 justify-between items-center p100 mb-10 ">
        <div className="flex m-20 items-center ">
          <img
            className="mr-10 rounded-full"
            src="/src/assets/Avatar.png"
            alt="Profile"
          />
          <div className="text-xl text-white">Matheus Costa</div>
        </div>
        <div className="buttonWrapper">
          <button className="buttonFirst">
            <Link to="/Empresa/VagasCadastradas" style={{ color: "#ffffff " }}>
              Vagas Cadastradas
            </Link>
          </button>

          {/* Outros botões aqui, sem margem à esquerda */}
        </div>

        <button className="buttonFirst">
          <Link to="/Empresa/CadastrarVaga" style={{ color: "#ffffff " }}>
                Cadastrar Vaga
          </Link>
        </button>

        <button className="buttonFirst">
          <Link to="/Empresa/Dashboard" style={{ color: "#ffffff " }}>
            Dashboard
          </Link>
        </button>

        <button className="buttonFirst">
          <Link to="/Empresa/Entrevistas" style={{ color: "#ffffff " }}>
            Entrevistas
          </Link>
        </button>

        <button className="buttonFirst">
          <Link to="/Empresa/Feedbacks" style={{ color: "#ffffff " }}>
            FeedBacks
          </Link>
        </button>
      </div>
    </>
  );
};

export default Empresa;