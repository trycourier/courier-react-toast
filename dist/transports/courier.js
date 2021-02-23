"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CourierTransport = void 0;

var _ws = require("../ws");

var _base = require("./base");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LAMBDA_WS_URL = "wss://1x60p1o3h8.execute-api.us-east-1.amazonaws.com/production";

class CourierTransport extends _base.Transport {
  // eslint-disable-next-line no-unused-vars
  constructor(options) {
    var _options$wsUrl;

    super();

    _defineProperty(this, "channel", void 0);

    _defineProperty(this, "ws", void 0);

    _defineProperty(this, "clientKey", void 0);

    _defineProperty(this, "secretKey", void 0);

    _defineProperty(this, "interceptor", void 0);

    if (!options.clientKey) {
      throw new Error("Missing Client Key");
    }

    this.clientKey = options.clientKey;
    this.secretKey = options.secretKey;
    this.ws = new _ws.WS({
      url: (_options$wsUrl = options.wsUrl) !== null && _options$wsUrl !== void 0 ? _options$wsUrl : LAMBDA_WS_URL
    });
    this.authenticate();
    this.ws.connect(options.clientKey);
  }

  authenticate() {
    /* const options = {
      headers: {
        "X-Courier-Key": this.clientKey,
        "X-Courier-Secret-Key": this.secretKey,
      },
    };
    // throwing on error, no need to verify auth result
    await fetch("https://api.notifications.dev/auth", options);
    */
  }

  send(message) {
    this.ws.send(_objectSpread(_objectSpread({}, message), {}, {
      data: _objectSpread(_objectSpread({}, message.data), {}, {
        clientKey: this.clientKey
      })
    }));
  }

  subscribe(channel, event) {
    this.ws.subscribe(channel, event, this.clientKey, (_ref) => {
      var {
        data
      } = _ref;

      if (this.interceptor) {
        data = this.interceptor(data);
      }

      if (!data) {
        return;
      }

      this.emit({
        type: "message",
        data
      });
    });
  }

  unsubscribe(channel, event) {
    this.ws.unsubscribe(channel, event, this.clientKey);
  }

  intercept(cb) {
    this.interceptor = cb;
  }

}

exports.CourierTransport = CourierTransport;