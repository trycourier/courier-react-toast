"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PusherTransport = void 0;

var _pusherJs = _interopRequireDefault(require("pusher-js"));

var _base = require("./base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PusherTransport extends _base.Transport {
  constructor(options) {
    super();

    _defineProperty(this, "pusher", void 0);

    _defineProperty(this, "channel", void 0);

    _defineProperty(this, "interceptor", void 0);

    _defineProperty(this, "intercept", cb => {
      this.interceptor = cb;
    });

    _defineProperty(this, "subscribe", (channel, event) => {
      this.channel = this.pusher.subscribe(channel);
      this.channel.bind(event, data => {
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
    });

    _defineProperty(this, "unsubscribe", channel => {
      this.pusher.unsubscribe(channel);
    });

    if (!options.appKey) {
      throw new Error("Missing App Key");
    }

    this.pusher = new _pusherJs.default(options.appKey, options.options);
  }

}

exports.PusherTransport = PusherTransport;