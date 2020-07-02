import React from "react";
import "./RadioButton.scss";
import { IRadioButtonProps } from "./types";

const RadioButton = (props: IRadioButtonProps) => (
  <label className={`rb-container ${props?.className}`}>
    <span className="rb-container__label">{props?.label}</span>
    <input
      checked={!!props.checked}
      type="radio"
      name={props.name}
      value={props.value}
      onChange={(e) => props.onChange && props.onChange(e.target.value)}
    />
    <span className="rb-container__checkmark"></span>
  </label>
);

export default RadioButton;
