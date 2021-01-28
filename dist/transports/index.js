"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transport = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Transport = function Transport() {
  var _this = this;

  _classCallCheck(this, Transport);

  _defineProperty(this, "listener", void 0);

  _defineProperty(this, "emit", function (courierEvent) {
    if (!_this.listener) {
      console.warn("No Listener Registered");
      return;
    }

    _this.listener(courierEvent);
  });

  _defineProperty(this, "listen", function (listener) {
    _this.listener = listener;
  });
};

exports.Transport = Transport;