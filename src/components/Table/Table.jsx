import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Map } from "immutable";

import "./table.scss";

import TableContent from "./TableContent";
import TableHeader from "./TableHeader";

// proptypes
import { PropTypeColumn } from "./propTypes";

class Table extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    data: PropTypes.instanceOf(Map).isRequired,
    columns: PropTypes.arrayOf(PropTypeColumn).isRequired,
    /* eslint-disable react/forbid-prop-types */
    propsContent: PropTypes.object,
    propsRow: PropTypes.object,
    propsRowCell: PropTypes.object,
    propsHeader: PropTypes.object,
    propsHeaderCell: PropTypes.object,
  };

  static defaultProps = {
    className: null,
    children: null,
    propsContent: {},
    propsRow: {},
    propsRowCell: {},
    propsHeader: {},
    propsHeaderCell: {},
  };

  componentDidMount() {
    // do sometjing
  }

  render() {
    const {
      children,
      className,
      data,
      columns,
      propsContent,
      propsRow,
      propsRowCell,
      propsHeader,
      propsHeaderCell,
      ...rest
    } = this.props;

    return (
      <div className={classnames(className, "ecl--table")} {...rest}>
        <TableHeader
          columns={columns}
          propsHeader={propsHeader}
          propsHeaderCell={propsHeaderCell}
        />
        <TableContent
          data={data}
          columns={columns}
          propsContent={propsContent}
          propsRow={propsRow}
          propsRowCell={propsRowCell}
        />
        {children}
      </div>
    );
  }
}

export default Table;
