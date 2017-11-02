import React from "react";
import style from "./style.scss";

const Button = props => (
  <div>
    <button className={style.buttonStyle}>{props.text}</button>
  </div>
);

export default Button;
