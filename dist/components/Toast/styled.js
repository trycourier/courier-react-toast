"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactToastify = require("react-toastify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ToastStyled = (0, _styledComponents["default"])(_reactToastify.ToastContainer).withConfig({
  displayName: "styled__ToastStyled",
  componentId: "sc-17m9hl3-0"
})(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {}, _defineProperty(_ref2, "&.Toastify__toast-container .courier__container", theme.container), _defineProperty(_ref2, ".Toastify__toast", theme.toast), _defineProperty(_ref2, ".Toastify__toast-body .courier__body", theme.body), _defineProperty(_ref2, ".Toastify__toast-body .courier__title", theme.title), _defineProperty(_ref2, ".Toastify__toast-body .courier__icon", theme.icon), _defineProperty(_ref2, ".Toastify__toast--error", theme.error), _defineProperty(_ref2, ".Toastify__toast--warning", theme.warning), _defineProperty(_ref2, ".Toastify__progress-bar", theme.progressBar), _defineProperty(_ref2, ".Toastify__toast-body .courier__primary-action", theme.primaryAction), _defineProperty(_ref2, ".Toastify__toast-body .courier__secondary-action", theme.secondaryAction), _ref2;
});
exports.ToastStyled = ToastStyled;