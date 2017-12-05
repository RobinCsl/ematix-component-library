/* eslint-disable react/prefer-stateless-function */

import IconDone from "material-ui-icons/Done";
import React from "react";
import "./checkbox.scss";

class Checkbox extends React.PureComponent {
  render() {
    return (
      <div className="ecl__checkbox">
        <input type="checkbox" id="c1" name="cc" />
        <label htmlFor="c1">
          <span>
            <IconDone />
          </span>Checked CheckBox
        </label>
      </div>
    );
  }
}

export default Checkbox;
