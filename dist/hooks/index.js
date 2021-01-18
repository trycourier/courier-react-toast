"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToast = useToast;

var _react = require("react");

var _providers = require("../providers");

function useToast() {
  var _useContext = (0, _react.useContext)(_providers.ToastContext),
      toast = _useContext.toast,
      config = _useContext.config;

  return [toast, {
    config: config
  }];
}