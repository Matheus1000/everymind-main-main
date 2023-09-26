/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TextField = ({
  underline = true,
  select = false,
  label = true,
  startAdornment = false,
  helpText = false,
  scrollMultiline = false,
  endAdornment = false,
  variant,
  size,
  state,
  hasValue,
  className,
  inputClassName,
  valueClassName,
  text = "Value",
  text1 = "Label",
  maskLabelClassName,
}) => {
  return (
    <div className={`text-field has-value-${hasValue} ${variant} ${state} ${size} ${className}`}>
      <div
        className={`input ${
          hasValue && size === "m" && ["filled", "outlined"].includes(variant) ? inputClassName : undefined
        }`}
      >
        {variant === "outlined" && hasValue && (
          <div
            className={`value ${
              (size === "m" && state === "disabled") ||
              (size === "m" && state === "enabled") ||
              (size === "m" && state === "error") ||
              (size === "m" && state === "hovered")
                ? valueClassName
                : undefined
            }`}
          >
            {state === "enabled" && <>{text}</>}

            {state === "hovered" && <>Value (Hovered)</>}

            {state === "focused" && <div className="text-wrapper">Value (Focused) |</div>}

            {state === "error" && <>Value (Incorrect)</>}

            {state === "disabled" && <>Value (Disabled)</>}
          </div>
        )}

        {((!hasValue && state === "disabled" && variant === "filled") ||
          (!hasValue && state === "enabled" && variant === "filled") ||
          (!hasValue && state === "error" && variant === "filled") ||
          (!hasValue && state === "hovered" && variant === "filled") ||
          variant === "outlined") && (
          <>
            <>
              {label && (
                <div className="label-focus-4">
                  {(hasValue || state === "focused") && (
                    <>
                      <div
                        className={`mask-label ${
                          (size === "m" && state === "disabled") ||
                          (size === "m" && state === "enabled") ||
                          (size === "m" && state === "error") ||
                          (size === "m" && state === "hovered")
                            ? maskLabelClassName
                            : undefined
                        }`}
                      />
                      <div className="label">{text1}</div>
                    </>
                  )}

                  {((!hasValue && state === "disabled") ||
                    (!hasValue && state === "enabled") ||
                    (!hasValue && state === "error") ||
                    (!hasValue && state === "hovered")) && <>{text1}</>}
                </div>
              )}
            </>
          </>
        )}

        {variant === "outlined" && !hasValue && state === "focused" && (
          <div className="content">
            <div className="div">|</div>
          </div>
        )}

        {((hasValue && state === "disabled" && variant === "filled") ||
          (hasValue && state === "enabled" && variant === "filled") ||
          (hasValue && state === "error" && variant === "filled") ||
          (hasValue && state === "hovered" && variant === "filled") ||
          (state === "focused" && variant === "filled")) && (
          <>
            <div className="container">
              {label && <div className="label-focus">{text1}</div>}

              <div className="value-wrapper">
                <div className="value-2">
                  {state === "hovered" && <>Value (Hovered)</>}

                  {state === "enabled" && <>{text}</>}

                  {!hasValue && <>|</>}

                  {hasValue && state === "focused" && <>Value (Focused) |</>}

                  {state === "error" && <>Value (Incorrect)</>}

                  {state === "disabled" && <>Value (Disabled)</>}
                </div>
              </div>
            </div>
            <div className="space-m" />
          </>
        )}

        {variant === "standard" && (
          <>
            <div className="container-2">
              {label && <div className="label-focus-2">{(hasValue || state === "focused") && <>{text1}</>}</div>}

              {((!hasValue && state === "disabled") ||
                (!hasValue && state === "enabled") ||
                (!hasValue && state === "error") ||
                (!hasValue && state === "hovered")) && (
                <div className="content-2">{label && <div className="label-placeholder">{text1}</div>}</div>
              )}

              {label && <div className="top-space" />}

              {(hasValue || state === "focused") && (
                <>
                  <div className="div-wrapper">
                    <div className="value-3">
                      {state === "hovered" && <>Value (Hovered)</>}

                      {state === "enabled" && <>{text}</>}

                      {!hasValue && <>|</>}

                      {state === "focused" && hasValue && <>Value (Focused) |</>}

                      {state === "error" && <>Value (Incorrect)</>}

                      {state === "disabled" && <>Value (Disabled)</>}
                    </div>
                  </div>
                  <>{label && <div className="bottom-space" />}</>
                </>
              )}
            </div>
            <>{underline && <div className="underline" />}</>
          </>
        )}
      </div>
    </div>
  );
};

TextField.propTypes = {
  underline: PropTypes.bool,
  select: PropTypes.bool,
  label: PropTypes.bool,
  startAdornment: PropTypes.bool,
  helpText: PropTypes.bool,
  scrollMultiline: PropTypes.bool,
  endAdornment: PropTypes.bool,
  variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
  size: PropTypes.oneOf(["m", "s"]),
  state: PropTypes.oneOf(["enabled", "focused", "hovered", "error", "disabled"]),
  hasValue: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
};
