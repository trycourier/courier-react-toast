"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WS = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WS = /*#__PURE__*/function () {
  function WS(_ref) {
    var url = _ref.url;

    _classCallCheck(this, WS);

    _defineProperty(this, "connection", void 0);

    _defineProperty(this, "connected", void 0);

    _defineProperty(this, "messageCallback", void 0);

    _defineProperty(this, "clientKey", void 0);

    _defineProperty(this, "url", void 0);

    this.messageCallback = null;
    this.connection = null;
    this.connected = false;
    this.url = url;
  }

  _createClass(WS, [{
    key: "connect",
    value: function connect(clientKey) {
      this.clientKey = clientKey;
      var url = "".concat(this.url, "/?clientKey=").concat(clientKey);
      this.connection = new WebSocket(url);
      this.initiateListener();
    }
  }, {
    key: "onMessage",
    value: function onMessage(_ref2) {
      var data = _ref2.data;

      try {
        data = JSON.parse(data);
      } catch (_unused) {//
      }

      if (data && this.messageCallback) {
        this.messageCallback({
          data: data
        });
      }
    }
  }, {
    key: "onConnectionOpen",
    value: function onConnectionOpen() {
      this.connected = true;
    }
  }, {
    key: "waitForOpen",
    value: function waitForOpen() {
      var _this = this;

      return new Promise(function (resolve) {
        if (_this.connected) {
          resolve(true);
        } else {
          _this.connection.addEventListener("open", resolve);
        }
      });
    }
  }, {
    key: "subscribe",
    value: function () {
      var _subscribe = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(channel, event, clientKey, callback) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.waitForOpen();

              case 2:
                this.send({
                  action: "subscribe",
                  data: {
                    channel: channel,
                    event: event,
                    clientKey: clientKey
                  }
                });
                this.messageCallback = callback;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function subscribe(_x, _x2, _x3, _x4) {
        return _subscribe.apply(this, arguments);
      }

      return subscribe;
    }()
  }, {
    key: "send",
    value: function send(message) {
      this.connection.send(JSON.stringify(message));
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(channel, event, clientKey) {
      this.send({
        action: "unsubscribe",
        data: {
          channel: channel,
          event: event,
          clientKey: clientKey
        }
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.connection.close();
    }
  }, {
    key: "initiateListener",
    value: function initiateListener() {
      this.connection.onopen = this.onConnectionOpen.bind(this);
      this.connection.onmessage = this.onMessage.bind(this);
    }
  }]);

  return WS;
}();

exports.WS = WS;