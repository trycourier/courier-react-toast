"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = require("./styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Body = function Body(_ref) {
  var title = _ref.title,
      body = _ref.body,
      icon = _ref.icon;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, icon && /*#__PURE__*/_react["default"].createElement(_styled.Icon, {
    style: {
      marginRight: 10
    },
    src: icon
  }), /*#__PURE__*/_react["default"].createElement(_styled.ContentContainer, null, /*#__PURE__*/_react["default"].createElement(_styled.Title, null, title), /*#__PURE__*/_react["default"].createElement(_styled.BodyText, {
    style: {
      marginTop: 10
    }
  }, body)));
};

var BodyWrapper = function BodyWrapper(_ref2) {
  var clickAction = _ref2.clickAction,
      onClick = _ref2.onClick,
      props = _objectWithoutProperties(_ref2, ["clickAction", "onClick"]);

  if (clickAction) {
    return /*#__PURE__*/_react["default"].createElement(_styled.AnchorContainer, {
      target: "__blank",
      href: clickAction,
      onClick: onClick
    }, /*#__PURE__*/_react["default"].createElement(Body, props));
  }

  return /*#__PURE__*/_react["default"].createElement(_styled.Container, null, /*#__PURE__*/_react["default"].createElement(Body, props));
};

var _default = BodyWrapper;
exports["default"] = _default;