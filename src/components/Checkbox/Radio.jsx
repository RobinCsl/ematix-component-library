/* eslint-disable react/prefer-stateless-function */

import React from "react";
import "./radio.scss";

class Radio extends React.PureComponent {
  render() {
    return (
      <div className="ecl__radioButton">
        <h3> Radio Buttons </h3>
        <p>
          <input type="radio" id="r1" name="rr" />
          <label htmlFor="r1">
            <span /> Radio Button 1
          </label>
        </p>
      </div>
    );
  }
}

export default Radio;
