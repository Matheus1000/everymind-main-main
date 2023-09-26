import React from "react";
import { Button } from "../Button";

import "./style.css";
import { IconsIcEvaCheckmarkFill } from "../../icons/IconsIcEvaCheckmarkFill";

export const BigCardWithoutButton = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="user">
          <div
            className="avatar"
            imgAvatar="img-avatar-2.png"
            mask="image.png"
            maskClassName="content-image-variant-circular-size-free"
          />
          <div className="stack">
            <div className="name-rand">Cielo</div>
            <div className="role-rand">Junior</div>
          </div>

          <div className="icon-button-wrapper">
            <div
              className="icon-button-instance"
              color="default"
              icon={
                <IconsIcEvaCheckmarkFill
                  className="icons-ic-eva-more"
                  color="#637381"
                />
              }
              size="s"
              state="enabled"
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default BigCardWithoutButton;
