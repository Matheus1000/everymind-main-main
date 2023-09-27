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
  onClick,  // New onClick prop
}) => {
  const buttonStyle = {
    backgroundColor: background,
  };

  return (
    <button
      className={`button variant-1-${variant} state-12-${state} size-7-${size} color-${color} ${className}`}
      style={buttonStyle}
      onClick={onClick}  // Add onClick event handler
    >
      {label && (
        <div className={`label-2 ${labelClassName}`}>
          {size === "s" && <>Small</>}

          {size === "l" && <>Large</>}

          {size === "m" && <>{text}</>}
        </div>
      )}
    </button>
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
  onClick: PropTypes.func,  // New prop type for onClick handler
};


