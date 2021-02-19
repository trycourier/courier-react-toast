"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dismiss = exports.Details = exports.SideBarContainer = exports.ContentContainer = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _styledComponents.default.div.withConfig({
  displayName: "styled__Container",
  componentId: "swto7w-0"
})(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  outline: "none",
  border: "none",
  color: "inherit",
  backgroundColor: "inherit"
}));

exports.Container = Container;

var AnchorContainer = _styledComponents.default.a.withConfig({
  displayName: "styled__AnchorContainer",
  componentId: "swto7w-1"
})(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  outline: "none",
  border: "none",
  color: "inherit",
  backgroundColor: "inherit"
})); //@ts-ignore


exports.ContentContainer = ContentContainer;

var ContentContainer = _styledComponents.default.pre.withConfig({
  displayName: "styled__ContentContainer",
  componentId: "swto7w-2"
})(() => ({
  display: "flex",
  width: "100%",
  alignItems: "flex-start",
  flexDirection: "column",
  whiteSpace: "break-spaces",
  margin: "10px 0"
}));

exports.Dismiss = Dismiss;
