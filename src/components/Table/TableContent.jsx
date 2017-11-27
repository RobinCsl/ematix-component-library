import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Map } from "immutable";

import "./table.scss";

// components
import TableRow from "./TableRow";

import { PropTypeColumn } from "./propTypes";

class TableContent extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.instanceOf(Map).isRequired,
    columns: PropTypes.arrayOf(PropTypeColumn).isRequired,
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
      propsContent: { className: propClassName },
      propsRow,
      propsRowCell,
    } = this.props;

    return (
      <div
        className={classnames(className, propClassName, "ecl--table-content")}
        {...propsContent}
      >
        {data.toList().map((item, key) => (
          <TableRow
            columns={columns}
            //  key is unique (map) so it's fine
            key={key} // eslint-disable-line
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
