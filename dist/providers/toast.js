"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastProvider = ToastProvider;
exports.ToastContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactToastify = require("react-toastify");

var _Body = _interopRequireDefault(require("../components/Body"));

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ToastContext = /*#__PURE__*/_react["default"].createContext({});

exports.ToastContext = ToastContext;

function ToastProvider(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      classes = _ref.classes,
      config = _ref.config;

  var handleToast = function handleToast(_ref2) {
    var title = _ref2.title,
        body = _ref2.body,
        icon = _ref2.icon,
        clickAction = _ref2.clickAction;
    (0, _reactToastify.toast)( /*#__PURE__*/_react["default"].createElement(_Body["default"], {
      onClick: config.onClick,
      title: title,
      body: body,
      icon: icon,
      clickAction: clickAction
    }));
  };

  var state = {
    toast: handleToast,
    classes: classes,
    config: config,
    theme: theme
  };
  return /*#__PURE__*/_react["default"].createElement(ToastContext.Provider, {
    value: state
  }, /*#__PURE__*/_react["default"].createElement(_components.Toast, null), children);
}