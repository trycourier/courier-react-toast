"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = require("./styled");

var _courierIcon = _interopRequireDefault(require("./courier-icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Body = (_ref) => {
  var {
    title,
    body,
    icon
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "courier__icon"
  }, icon ? /*#__PURE__*/_react.default.createElement("img", {
    src: icon
  }) : /*#__PURE__*/_react.default.createElement(_courierIcon.default, null)), /*#__PURE__*/_react.default.createElement(_styled.ContentContainer, {
    className: "courier__container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "courier__title"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "courier__body"
  }, body)));
};

var BodyWrapper = (_ref2) => {
  var {
    clickAction,
    onClick
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["clickAction", "onClick"]);

  if (clickAction || onClick) {
    return /*#__PURE__*/_react.default.createElement(_styled.AnchorContainer, {
      target: "__blank",
      href: clickAction,
      onClick: onClick
    }, /*#__PURE__*/_react.default.createElement(Body, props));
  }

  return /*#__PURE__*/_react.default.createElement(_styled.Container, null, /*#__PURE__*/_react.default.createElement(Body, props));
};

var _default = BodyWrapper;
exports.default = _default;