"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transport = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Transport {
  constructor() {
    _defineProperty(this, "listener", void 0);

    _defineProperty(this, "interceptor", void 0);

    _defineProperty(this, "emit", courierEvent => {
      if (!this.listener) {
        console.warn("No Listener Registered");
        return;
      }

      this.listener(courierEvent);
    });

    _defineProperty(this, "listen", listener => {
      this.listener = listener;
    });

    _defineProperty(this, "intercept", cb => {
      this.interceptor = cb;
    });
  }

}

exports.Transport = Transport;