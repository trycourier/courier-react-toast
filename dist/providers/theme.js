"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = ThemeProvider;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var themes = {
  dark: {
    backgroundColor: 'black'
  }
};

function ThemeProvider(_ref) {
  var children = _ref.children,
      theme = _ref.theme;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: themes[theme]
  }, children);
}