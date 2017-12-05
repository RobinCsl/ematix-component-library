import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

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
    xs: PropTypes.bool,
    lg: PropTypes.bool,
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
    xs: false,
    lg: false,
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
      xs,
      lg,
      ...rest
    } = this.props;

    const classes = classnames(
      "common-button",
      {
        primary,
        warning,
        error,
        success,
        xs,
        lg,
      },
      className,
    );

    // put props together so we don't have to repeat it
    const btnProps = {
      className: classes,
      ...rest,
    };

    // Routing Link from react-router-dom
    if (to && typeof to === "string") {
      return (
        <Link to={to} {...btnProps}>
          {children}
        </Link>
      );
    }

    // Classic Link as button
    if (href && typeof href === "string") {
      return (
        <a href={href} {...btnProps}>
          {children}
        </a>
      );
    }

    // classic button
    return <button {...btnProps}>{children}</button>;
  }
}
