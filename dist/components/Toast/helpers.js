"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransition = getTransition;

var _reactToastify = require("react-toastify");

function getTransition(type) {
  switch (type) {
    case "slide":
      return _reactToastify.Slide;

    case "zoom":
      return _reactToastify.Zoom;

    case "bounce":
      return _reactToastify.Bounce;
  }
}