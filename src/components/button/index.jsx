import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import _ from "lodash";

import "./style.scss";

export default class Button extends React.PureComponent {
  static propTypes = {
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    primary: false,
    disabled: false,
  };

  render() {
    const classes = classnames({
      "common-button": true,
      primary: this.props.primary,
    });

    const props = _.omit(this.props, ["primary"]);

    return (
      <button className={classes} {...props}>
        {this.props.children}
      </button>
    );
  }
}
