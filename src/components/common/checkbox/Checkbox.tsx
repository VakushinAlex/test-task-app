import React from "react";
import { ICheckboxButtonProps } from "./types";
import "./Checkbox.scss";

const Checkbox = (props: ICheckboxButtonProps) => (
  <label className={`cb-container ${props?.className}`}>
    <span className="cb-container__label">{props?.label}</span>
    <input
      checked={props.checked}
      type="checkbox"
      name={props.name}
      onChange={(e) => props.onChange && props.onChange(e.target.value)}
    />
    <span className="cb-container__checkmark"></span>
  </label>
);

export default Checkbox;
