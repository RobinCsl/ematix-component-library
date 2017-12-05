import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./table.scss";

class TableCell extends React.PureComponent {
  render() {
    const {
      className,
      children,
      propsCell,
      propsCell: { className: propClassName },
      ...rest
    } = this.props;

    return (
      <div
        className={classnames("ecl--table-cell", className, propClassName)}
        {...propsCell}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

TableCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  propsCell: PropTypes.object // eslint-disable-line
};

TableCell.defaultProps = {
  propsCell: {},
  className: null,
};

export default TableCell;
