"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentContainer = exports.Title = exports.BodyText = exports.Icon = exports.AnchorContainer = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Container = _styledComponents["default"].div.withConfig({
  displayName: "styled__Container",
  componentId: "swto7w-0"
})(function () {
  return {
    height: "100%",
    width: "100%",
    display: "flex",
    outline: "none",
    border: "none",
    color: "inherit",
    backgroundColor: "inherit"
  };
});

exports.Container = Container;

var AnchorContainer = _styledComponents["default"].a.withConfig({
  displayName: "styled__AnchorContainer",
  componentId: "swto7w-1"
})(function () {
  return {
    height: "100%",
    width: "100%",
    display: "flex",
    outline: "none",
    border: "none",
    color: "inherit",
    backgroundColor: "inherit"
  };
});

exports.AnchorContainer = AnchorContainer;

var Icon = _styledComponents["default"].img.withConfig({
  displayName: "styled__Icon",
  componentId: "swto7w-2"
})(function (_ref) {
  var theme = _ref.theme;
  return theme.icon;
});

exports.Icon = Icon;

var BodyText = _styledComponents["default"].div.withConfig({
  displayName: "styled__BodyText",
  componentId: "swto7w-3"
})(function (_ref2) {
  var theme = _ref2.theme;
  return theme.body;
});

exports.BodyText = BodyText;

var Title = _styledComponents["default"].div.withConfig({
  displayName: "styled__Title",
  componentId: "swto7w-4"
})(function (_ref3) {
  var theme = _ref3.theme;
  return theme.title;
}); //@ts-ignore


exports.Title = Title;

var ContentContainer = _styledComponents["default"].div.withConfig({
  displayName: "styled__ContentContainer",
  componentId: "swto7w-5"
})(function () {
  return {
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    flexDirection: "column"
  };
});

exports.ContentContainer = ContentContainer;