import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import _ from "lodash";

import "./style.scss";

export default class Button extends React.PureComponent {
  static propTypes = {
    primary: PropTypes.bool,
    warning: PropTypes.bool,
    error: PropTypes.bool,
    success: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    // link?
    href: PropTypes.string,
    to: PropTypes.string,
  };

  static defaultProps = {
    primary: false,
    warning: false,
    error: false,
    success: false,
    disabled: false,
    className: null,
    // link?
    href: null,
    to: null,
  };

  render() {
    const {
      primary,
      warning,
      error,
      success,
      children,
      to,
      href,
      className,
      ...rest
    } = this.props;

    const classes = classnames(
      "common-button",
      {
        primary,
        warning,
        error,
        success,
      },
      className,
    );

    // __TODO
    const props = _.omit(this.props, ["primary"]); // check what this does

    // put props together so we don't have to repeat it
    const btnProps = {
      className: classes,
      ...rest,
    };

    // Routing Link from react-router-dom
    if (to && typeof to === "string") {
      return (
        <Link to={to} {...props}>
          {children}
        </Link>
      );
    }

    // Classic Link as button
    if (href && typeof href === "string") {
      return (
        <a href={href} {...props}>
          {children}
        </a>
      );
    }

    // classic button
    return <button {...btnProps}>{children}</button>;
  }
}
