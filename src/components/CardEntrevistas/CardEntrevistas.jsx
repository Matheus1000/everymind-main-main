import { Button } from "../Button";

import "./style.css";

export const CardEntrevistas = ({}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="user">
          <div className="stack2">
            <div className="name-rand">Celonis</div>
            <div className="role-rand">Entrevista com RH</div>
            <div className="role-rand">Presencial</div>
            <div className="role-rand"> Rua .... 198</div>
          </div>
          <Button
            className="button-instance8"
            color="inherit"
            labelClassName="button-2"
            size="m"
            state="enabled"
            text="Agendado"
            variant="contained"
            background="none"
          />
          <div className="icon-button-wrapper"></div>
        </div>
      </div>{" "}
    </div>
  );
};

export default CardEntrevistas;
