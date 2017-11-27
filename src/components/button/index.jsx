import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

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
    const { primary, ...rest } = this.props;
    const classes = classnames({
      "common-button": true,
      primary,
    });

    return (
      <button className={classes} {...rest}>
        {this.props.children}
      </button>
    );
  }
}
