/* eslint-disable react/prefer-stateless-function */

import React from "react";
import "./toggle.scss";

class Toggle extends React.PureComponent {
  render() {
    return (
      <div className="ecl__toggle">
        <input type="checkbox" className="tt" id="mm" />
        <label htmlFor="mm">
          <span />Active
        </label>
      </div>
    );
  }
}

export default Toggle;
