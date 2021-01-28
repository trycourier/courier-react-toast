"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgComponent(props) {
  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    width: 36,
    height: 36,
    viewBox: "0 0 36 36",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/_react["default"].createElement("title", null, "courier icon"), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18.125 36c-2.892 0-5.741-.688-8.311-2.004a18.088 18.088 0 01-6.46-5.564 17.878 17.878 0 01.428-21.425c.84.37 1.613.878 2.282 1.506a8.73 8.73 0 011.47 1.802c.517.84.9 1.757 1.134 2.715a10.57 10.57 0 00-.807 7.908 10.65 10.65 0 004.937 6.254 10.78 10.78 0 007.926 1.114 10.71 10.71 0 006.49-4.653h.032l-.042-.026c2.23-4.2 8.916-3.003 8.137 0l-.056.026h.067a17.983 17.983 0 01-6.598 8.946A18.192 18.192 0 0118.124 36zm17.22-23.63h-.031c.697 2.967-5.914 4.13-8.141-.047l.005-.003a10.65 10.65 0 00-3.581-3.46 10.74 10.74 0 00-4.833-1.468 13.847 13.847 0 00-2.751-2.304 11.536 11.536 0 00-2.445-1.192 9.168 9.168 0 00-2.983-.522 8.752 8.752 0 00-2.214.288c-.824.222-1.617.546-2.36.966A18.157 18.157 0 0113.655.56a18.244 18.244 0 018.673-.073 18.164 18.164 0 017.715 3.936 17.99 17.99 0 015.31 7.943l-.007.004h-.001zm-23.82-5.183a.918.918 0 00.92-.915.918.918 0 00-.921-.914.918.918 0 00-.922.914c0 .506.413.915.922.915zm2.935 13.368a11.072 11.072 0 007.002 2.486c.778 0 1.554-.08 2.316-.24a18.811 18.811 0 01-7.52-2.856 18.66 18.66 0 01-5.615-5.724 10.932 10.932 0 003.817 6.334z",
    fill: "#9D3789",
    fillRule: "evenodd"
  }));
}

var _default = SvgComponent;
exports["default"] = _default;