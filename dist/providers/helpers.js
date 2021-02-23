"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throwOnNoTransport = throwOnNoTransport;

var _transports = require("../transports");

function throwOnNoTransport(transport) {
  if (transport && !(transport instanceof _transports.Transport)) {
    throw new Error("Invalid Transport");
  }
}