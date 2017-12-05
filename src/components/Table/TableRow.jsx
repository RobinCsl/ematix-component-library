import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./table.scss";

import TableCell from "./TableCell";

// proptype

import { PropTypeColumn } from "./propTypes";

class TableRow extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    /* eslint-disable react/forbid-prop-types */
    item: PropTypes.object,
    columns: PropTypes.arrayOf(PropTypeColumn).isRequired,
    propsRow: PropTypes.object,
    propsRowCell: PropTypes.object,
  };

  static defaultProps = {
    className: null,
    propsRow: {},
    propsRowCell: {},
    item: {},
  };

  render() {
    const {
      className,
      columns,
      item,
      propsRow: { className: rowClassName },
      propsRow,
      propsRowCell,
      ...rest
    } = this.props;

    return (
      <div
        className={classnames("ecl--table-row", className, rowClassName)}
        {...propsRow}
        {...rest}
      >
        {columns.map((column) => {
          const { key, Component } = column;
          const value = item[key];
          return Component ? (
            <Component key={key} data={item} {...propsRowCell} />
          ) : (
            <TableCell className={className} key={key} propsCell={propsRowCell}>
              {value}
            </TableCell>
          );
        })}
      </div>
    );
  }
}

export default TableRow;
