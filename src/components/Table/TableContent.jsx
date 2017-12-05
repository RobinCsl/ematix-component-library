import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./table.scss";

// components
import TableRow from "./TableRow";

import { PropTypeColumn } from "./propTypes";

class TableContent extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.instanceOf(Array).isRequired,
    columns: PropTypes.arrayOf(PropTypeColumn).isRequired,
    uniqueIdentificator: PropTypes.string.isRequired,
    /* eslint-disable react/forbid-prop-types */
    propsContent: PropTypes.object,
    propsRow: PropTypes.object,
    propsRowCell: PropTypes.object,
  };

  static defaultProps = {
    className: null,
    propsContent: {},
    propsRow: {},
    propsRowCell: {},
  };

  componentDidMount() {
    // do sometjing
  }

  render() {
    const {
      className,
      data,
      columns,
      propsContent,
      uniqueIdentificator,
      propsContent: { className: propClassName },
      propsRow,
      propsRowCell,
    } = this.props;

    return (
      <div
        className={classnames(className, propClassName, "ecl--table-content")}
        {...propsContent}
      >
        {data.map(item => (
          <TableRow
            columns={columns}
            //  key is unique (map) so it's fine
            key={item[uniqueIdentificator]} // eslint-disable-line
            item={item}
            propsRow={propsRow}
            propsRowCell={propsRowCell}
          />
        ))}
      </div>
    );
  }
}

export default TableContent;
