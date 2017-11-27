import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// coponents
import TableCell from "./TableCell";

// css
import "./table.scss";

import { PropTypeColumn } from "./propTypes";

const TableHeader = ({
  className,
  columns,
  propsHeader,
  propsHeader: { className: propClassName },
  propsHeaderCell,
  ...rest
}) => (
  <div
    className={classnames("ecl--table-header", className, propClassName)}
    {...propsHeader}
    {...rest}
  >
    {columns.map(col => (
      <TableCell propsCell={propsHeaderCell} key={col.key}>
        {col.displayName}
      </TableCell>
    ))}
  </div>
);

TableHeader.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypeColumn).isRequired,
  /* eslint-disable react/forbid-prop-types */
  propsHeader: PropTypes.object,
  propsHeaderCell: PropTypes.object,
};

TableHeader.defaultProps = {
  className: null,
  propsHeader: {},
  propsHeaderCell: {},
};

export default TableHeader;
