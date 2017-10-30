"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _style = require("./style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "button",
      { className: _style2.default.buttonStyle },
      "click me!"
    )
  );
};

exports.default = Button;