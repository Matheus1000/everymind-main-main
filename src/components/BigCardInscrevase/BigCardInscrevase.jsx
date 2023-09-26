import { Button } from "../Button";

import "./style.css";

export const BigCardInscrevase = ({}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="user">
          <div className="stack2">
            <div className="name-rand">Cielo</div>
            <div className="role-rand">Junior</div>
          </div>
          <Button
            className="button-instance3"
            color="inherit"
            labelClassName="button-2"
            size="m"
            state="enabled"
            text="Inscreva-se"
            variant="contained"
            background="none"
          />

          <div className="icon-button-wrapper"></div>
        </div>
      </div>{" "}
    </div>
  );
};

export default BigCardInscrevase;
