"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactToastify = require("react-toastify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ToastStyled = (0, _styledComponents["default"])(_reactToastify.ToastContainer).withConfig({
  displayName: "styled__ToastStyled",
  componentId: "sc-17m9hl3-0"
})(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {}, _defineProperty(_ref2, "&.Toastify__toast-container", _objectSpread({
    a: {
      textDecoration: "none"
    },
    fontFamily: "\"Nunito Sans\", sans-serif",
    borderRadius: 5
  }, theme.container)), _defineProperty(_ref2, ".Toastify__toast", _objectSpread({
    backgroundColor: "black",
    borderRadius: 5
  }, theme.toast)), _defineProperty(_ref2, ".Toastify__toast--error", _objectSpread({}, theme.error)), _defineProperty(_ref2, ".Toastify__toast--warning", _objectSpread({}, theme.warning)), _defineProperty(_ref2, ".Toastify__toast-body", _objectSpread({}, theme.body)), _defineProperty(_ref2, ".Toastify__progress-bar", _objectSpread({}, theme["progress-bar"])), _ref2;
});
exports.ToastStyled = ToastStyled;