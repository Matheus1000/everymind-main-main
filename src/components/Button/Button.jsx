/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({
  endIcon = false,
  startIcon = false,
  label = true,
  variant,
  color,
  size,
  state,
  className,
  labelClassName,
  text = "Medium",
  background,
}) => {
  const buttonStyle = {
    backgroundColor: background, // Use a cor de fundo personalizada
  };

  return (
    <div
      className={`button variant-1-${variant} state-12-${state} size-7-${size} color-${color} ${className}`}
      style={buttonStyle}
    >
      {label && (
        <div className={`label-2 ${labelClassName}`}>
          {size === "s" && <>Small</>}

          {size === "l" && <>Large</>}

          {size === "m" && <>{text}</>}
        </div>
      )}
    </div>
  );
};

Button.propTypes = {
  endIcon: PropTypes.bool,
  startIcon: PropTypes.bool,
  label: PropTypes.bool,
  variant: PropTypes.oneOf(["soft", "text", "outlined", "contained"]),
  color: PropTypes.oneOf([
    "warning",
    "inherit",
    "info",
    "success",
    "secondary",
    "primary",
    "error",
  ]),
  size: PropTypes.oneOf(["l", "m", "s"]),
  state: PropTypes.oneOf(["hovered", "disabled", "enabled"]),
  text: PropTypes.string,
};
