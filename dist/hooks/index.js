"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToast = void 0;

var _react = require("react");

var _providers = require("../providers");

var useToast = () => {
  var {
    toast,
    config
  } = (0, _react.useContext)(_providers.ToastContext);
  return [toast, {
    config
  }];
};

exports.useToast = useToast;