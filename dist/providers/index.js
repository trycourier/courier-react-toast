"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = require("./theme");

Object.keys(_theme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _theme[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _theme[key];
    }
  });
});

var _toast = require("./toast");

Object.keys(_toast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _toast[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _toast[key];
    }
  });
});