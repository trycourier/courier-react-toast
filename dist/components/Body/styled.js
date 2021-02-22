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
})); //@ts-ignore


exports.Container = Container;

var ContentContainer = _styledComponents.default.pre.withConfig({
  displayName: "styled__ContentContainer",
  componentId: "swto7w-1"
})(() => ({
  display: "flex",
  width: "100%",
  alignItems: "flex-start",
  flexDirection: "column",
  whiteSpace: "break-spaces",
  margin: 10
}));

exports.ContentContainer = ContentContainer;

var SideBarContainer = _styledComponents.default.div.withConfig({
  displayName: "styled__SideBarContainer",
  componentId: "swto7w-2"
})(() => ({
  alignSelf: "center",
  display: "flex",
  flexDirection: "column",
  marginLeft: 5
}));

exports.SideBarContainer = SideBarContainer;

var Details = _styledComponents.default.a.withConfig({
  displayName: "styled__Details",
  componentId: "swto7w-3"
})(() => ({
  backgroundColor: "white",
  border: "none",
  color: "#9D3789",
  fontFamily: "\"Nunito Sans\", sans-serif",
  fontSize: 12,
  textAlign: "center",
  margin: 5,
  paddingBottom: 5
}));

exports.Details = Details;

var Dismiss = _styledComponents.default.a.withConfig({
  displayName: "styled__Dismiss",
  componentId: "swto7w-4"
})(() => ({
  backgroundColor: "white",
  border: "none",
  color: "#73819B",
  fontFamily: "\"Nunito Sans\", sans-serif",
  fontSize: 12,
  textAlign: "center",
  margin: 5
}));

exports.Dismiss = Dismiss;