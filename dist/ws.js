"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WS = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class WS {
  constructor(_ref) {
    var {
      url
    } = _ref;

    _defineProperty(this, "connection", void 0);

    _defineProperty(this, "connected", void 0);

    _defineProperty(this, "messageCallback", void 0);

    _defineProperty(this, "url", void 0);

    this.messageCallback = null;
    this.connection = null;
    this.connected = false;
    this.url = url;
  }

  connect(clientKey) {
    var url = "".concat(this.url, "/?clientKey=").concat(clientKey);
    this.connection = new WebSocket(url);
    this.initiateListener();
  }

  onMessage(_ref2) {
    var {
      data
    } = _ref2;

    try {
      data = JSON.parse(data);
    } catch (_unused) {//
    }

    if (data && this.messageCallback) {
      this.messageCallback({
        data
      });
    }
  }

  onConnectionOpen() {
    this.connected = true;
  }

  waitForOpen() {
    return new Promise(resolve => {
      if (this.connected) {
        resolve(true);
      } else {
        this.connection.addEventListener("open", resolve);
      }
    });
  }

  subscribe(channel, event, clientKey, callback) {
    var _this = this;

    return _asyncToGenerator(function* () {
      yield _this.waitForOpen();

      _this.send({
        action: "subscribe",
        data: {
          channel,
          event,
          clientKey
        }
      });

      _this.messageCallback = callback;
    })();
  }

  send(message) {
    this.connection.send(JSON.stringify(message));
  }

  unsubscribe(channel, event, clientKey) {
    this.send({
      action: "unsubscribe",
      data: {
        channel,
        event,
        clientKey
      }
    });
  }

  close() {
    this.connection.close();
  }

  initiateListener() {
    this.connection.onopen = this.onConnectionOpen.bind(this);
    this.connection.onmessage = this.onMessage.bind(this);
  }

}

exports.WS = WS;