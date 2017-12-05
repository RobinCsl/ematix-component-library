import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import PropTypes from "prop-types";

import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/sass/sass";

import "./style.scss";

export default class Codeblock extends React.PureComponent {
  static propTypes = {
    language: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    readOnly: PropTypes.bool,
  };

  static defaultProps = {
    readOnly: false,
  };

  render() {
    return (
      <div className="common-codeblock">
        <CodeMirror
          className="cm-s-ematix"
          value={this.props.value}
          options={{
            mode: this.props.language,
            readOnly: this.props.readOnly,
          }}
        />
      </div>
    );
  }
}
