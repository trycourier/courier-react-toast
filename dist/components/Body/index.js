"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _providers = require("../../providers");

var _styled = require("./styled");

var _courierIcon = _interopRequireDefault(require("./courier-icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Body = function Body(_ref) {
  var title = _ref.title,
      body = _ref.body,
      icon = _ref.icon;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "courier__icon"
  }, icon ? /*#__PURE__*/_react["default"].createElement("img", {
    src: icon
  }) : /*#__PURE__*/_react["default"].createElement(_courierIcon["default"], null)), /*#__PURE__*/_react["default"].createElement(_styled.ContentContainer, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "courier__title"
  }, title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "courier__body"
  }, body)));
};

var BodyWrapper = function BodyWrapper(_ref2) {
  var _props$data;

  var onClick = _ref2.onClick,
      props = _objectWithoutProperties(_ref2, ["onClick"]);

  var _useContext = (0, _react.useContext)(_providers.ToastContext),
      clientKey = _useContext.clientKey,
      apiUrl = _useContext.apiUrl;

  var courierData = (_props$data = props === null || props === void 0 ? void 0 : props.data) !== null && _props$data !== void 0 ? _props$data : {};

  if (courierData !== null && courierData !== void 0 && courierData.clickAction || onClick) {
    var handleOnClick = function handleOnClick(event) {
      if (onClick) {
        onClick(event);
      }

      if (clientKey && courierData !== null && courierData !== void 0 && courierData.messageId) {
        fetch("".concat(apiUrl, "/m/").concat(courierData === null || courierData === void 0 ? void 0 : courierData.messageId, "/clicked"), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-courier-client-key": clientKey
          },
          body: JSON.stringify({
            clickAction: courierData === null || courierData === void 0 ? void 0 : courierData.clickAction
          })
        });
      }
    };

    return /*#__PURE__*/_react["default"].createElement(_styled.AnchorContainer, {
      target: "__blank",
      href: courierData === null || courierData === void 0 ? void 0 : courierData.clickAction,
      onClick: handleOnClick
    }, /*#__PURE__*/_react["default"].createElement(Body, props));
  }

  return /*#__PURE__*/_react["default"].createElement(_styled.Container, null, /*#__PURE__*/_react["default"].createElement(Body, props));
};

var _default = BodyWrapper;
exports["default"] = _default;