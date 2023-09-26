import React from "react";
import "./styles.css"; // Import CSS file
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Candidato = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
      <div className="navbar">
        <div className="profile-section">
          <img
            className="profile-image"
            src="/src/assets/Avatar.png"
            alt="Profile"
          />
          <div>Caique Lopes</div>
        </div>
        <div className="buttonWrapper">
          <button className="buttonFirst">
            <Link to="/Candidato/Perfil" style={{ color: "#ffffff " }}>
              Perfil
            </Link>
          </button>

          {/* Outros botões aqui, sem margem à esquerda */}
        </div>

        <button className="buttonFirst">
          <Link to="/Candidato/VagasUsuario" style={{ color: "#ffffff " }}>
            Minhas Vagas
          </Link>
        </button>

        <button className="buttonFirst">
          <Link to="/Candidato/VagasDisponiveis" style={{ color: "#ffffff " }}>
            Vagas Disponíveis
          </Link>
        </button>

        <button className="buttonFirst">
          <Link to="/Candidato/TestesUsuario" style={{ color: "#ffffff " }}>
            Testes
          </Link>
        </button>

        <button className="buttonFirst">
          <Link to="/Candidato/Entrevistas" style={{ color: "#ffffff " }}>
            Entrevistas
          </Link>
        </button>

        <button className="buttonFirst">
          <Link to="/Candidato/Feedbacks" style={{ color: "#ffffff " }}>
            Dashboard
          </Link>
        </button>
      </div>
    </>
  );
};

export default Candidato;