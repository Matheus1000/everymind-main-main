/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsIcEvaAlertTriangleFill } from "../../icons/IconsIcEvaAlertTriangleFill";
import { IconsIcEvaCheckmarkFill } from "../../icons/IconsIcEvaCheckmarkFill";
import { IconsIcEvaInfoFill } from "../../icons/IconsIcEvaInfoFill";
import "./style.css";

export const HelpText = ({
  icon = true,
  state,
  className,
  text = "Caption text, description, notification",
}) => {
  return (
    <div className={`help-text ${className}`}>
      {icon && (
        <>
          <>
            {["active", "disabled"].includes(state) && (
              <IconsIcEvaInfoFill
                className="instance-node"
                color={state === "disabled" ? "#919EAB" : "#637381"}
              />
            )}

            {state === "error" && (
              <IconsIcEvaAlertTriangleFill className="instance-node" />
            )}

            {state === "success" && (
              <IconsIcEvaCheckmarkFill className="instance-node" />
            )}
          </>
        </>
      )}

      <div className={`helper-text state-11-${state}`}>{text}</div>
    </div>
  );
};

HelpText.propTypes = {
  icon: PropTypes.bool,
  state: PropTypes.oneOf(["success", "error", "active", "disabled"]),
  text: PropTypes.string,
};
