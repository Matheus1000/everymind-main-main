/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Paper = ({ className, bgClassName, cyanBlurClassName, redBlurClassName }) => {
  return (
    <div className={`paper ${className}`}>
      <div className={`bg ${bgClassName}`} />
      <img
        className={`cyan-blur ${cyanBlurClassName}`}
        alt="Cyan blur"
        src="https://c.animaapp.com/RLL3gMW3/img/cyan-blur.svg"
      />
      <img
        className={`red-blur ${redBlurClassName}`}
        alt="Red blur"
        src="https://c.animaapp.com/RLL3gMW3/img/red-blur.svg"
      />
    </div>
  );
};
