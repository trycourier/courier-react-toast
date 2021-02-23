"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastStyled = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactToastify = require("react-toastify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToastStyled = (0, _styledComponents.default)(_reactToastify.ToastContainer).withConfig({
  displayName: "styled__ToastStyled",
  componentId: "sc-17m9hl3-0"
})((_ref) => {
  var {
    theme
  } = _ref;
  return {
    ["&.Toastify__toast-container .courier__container"]: theme.container,
    [".Toastify__toast"]: theme.toast,
    [".Toastify__toast-body .courier__body"]: theme.body,
    [".Toastify__toast-body .courier__title"]: theme.title,
    [".Toastify__toast-body .courier__icon"]: theme.icon,
    [".Toastify__toast-body .courier__sidebar-container"]: theme.sidebarContainer,
    [".Toastify__toast-body .courier__sidebar-details"]: theme.sidebarDetails,
    [".Toastify__toast-body .courier__sidebar-dismiss"]: theme.sidebarDismiss,
    [".Toastify__toast--error"]: theme.error,
    [".Toastify__toast--warning"]: theme.warning,
    [".Toastify__progress-bar"]: theme.progressBar
  };
});
exports.ToastStyled = ToastStyled;