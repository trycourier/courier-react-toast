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
})(["background-color:black;height:50px;width:100%;color:white;display:flex;outline:none;border:none;"]);

exports.Container = Container;

var AnchorContainer = _styledComponents["default"].a.withConfig({
  displayName: "styled__AnchorContainer",
  componentId: "swto7w-1"
})(["background-color:black;height:50px;width:100%;color:white;display:flex;outline:none;border:none;"]);

exports.AnchorContainer = AnchorContainer;

var Icon = _styledComponents["default"].img.withConfig({
  displayName: "styled__Icon",
  componentId: "swto7w-2"
})(["height:30px;width:30px;"]);

exports.Icon = Icon;

var BodyText = _styledComponents["default"].div.withConfig({
  displayName: "styled__BodyText",
  componentId: "swto7w-3"
})(["font-size:14px;"]);

exports.BodyText = BodyText;

var Title = _styledComponents["default"].div.withConfig({
  displayName: "styled__Title",
  componentId: "swto7w-4"
})(["font-weight:bold;"]);

exports.Title = Title;

var ContentContainer = _styledComponents["default"].div.withConfig({
  displayName: "styled__ContentContainer",
  componentId: "swto7w-5"
})(["display:flex;flex-direction:column;width:100%;align-items:flex-start;"]);

exports.ContentContainer = ContentContainer;