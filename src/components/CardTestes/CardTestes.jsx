import React from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import Alert from "../AlertaCustom/AlertaCustom";
import "./style.css";

export const CardTestes = ({ name, role, status }) => {
  
  const handleButtonClick = () => {
    let alertMessage = "";

    if (status === "Aguardando") {
      alertMessage = "Este processo está aguardando aprovação";
    } else if (status === "Em andamento") {
      alertMessage = "Este processo está em andamento";
    } else if (status === "Realizar teste") {
      alertMessage = "Usuário deverá ser transferido para área de testes";
    }

    <Alert message={alertMessage} />
    
  
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="user">
          <div className="stack2">
            <div className="name-rand">{name}</div>
            <div className="role-rand">{role}</div>
          </div>
          <Button
            className="button-instance7"
            color="inherit"
            labelClassName="button-2"
            size="m"
            state="enabled"
            text="Iniciar Teste"
            variant="contained"
            background="none"
            onClick={handleButtonClick}
          />
          <div className="icon-button-wrapper"></div>
        </div>
      </div>
    </div>
  );
};
