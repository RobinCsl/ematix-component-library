"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactCodemirror = require("react-codemirror2");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

require("codemirror/mode/xml/xml");

require("codemirror/mode/javascript/javascript");

require("codemirror/lib/codemirror.css");

require("codemirror/mode/htmlmixed/htmlmixed");

require("codemirror/mode/sass/sass");

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Codeblock = function (_React$PureComponent) {
  _inherits(Codeblock, _React$PureComponent);

  function Codeblock() {
    _classCallCheck(this, Codeblock);

    return _possibleConstructorReturn(this, (Codeblock.__proto__ || Object.getPrototypeOf(Codeblock)).apply(this, arguments));
  }

  _createClass(Codeblock, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "common-codeblock" },
        _react2.default.createElement(_reactCodemirror.UnControlled, {
          className: "cm-s-ematix",
          value: this.props.value,
          options: {
            mode: this.props.language,
            readOnly: this.props.readOnly
          }
        })
      );
    }
  }]);

  return Codeblock;
}(_react2.default.PureComponent);

Codeblock.propTypes = {
  language: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired,
  readOnly: _propTypes2.default.bool
};
Codeblock.defaultProps = {
  readOnly: false
};
exports.default = Codeblock;