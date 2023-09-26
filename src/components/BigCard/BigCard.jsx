import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { Button } from "../Button";

export const BigCard = ({ buttonStyles, buttonText }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="user">
          <div className="stack">
            <div className="name-rand">Cielo</div>
            <div className="role-rand">Junior</div>
          </div>
          <Button
            className="button-instance"
            color="inherit"
            labelClassName="button-2"
            size="m"
            state="enabled"
            text={buttonText}
            variant="contained"
            background="none"
            style={{
              backgroundColor: buttonStyles.backgroundColor,
              color: buttonStyles.textColor,
              borderColor: buttonStyles.borderColor,
            }}
          />

          <div className="icon-button-wrapper"></div>
        </div>
      </div>{" "}
    </div>
  );
};
BigCard.propTypes = {
  buttonText: PropTypes.string,
  buttonStyles: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    textColor: PropTypes.string,
    borderColor: PropTypes.string,
  }),
};

export default BigCard;
