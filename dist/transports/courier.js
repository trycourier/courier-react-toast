"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WS = exports.CourierTransport = void 0;

var _base = require("./base");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LAMBDA_WS_URL = "wss://zj8xquqj55.execute-api.us-east-1.amazonaws.com/dev";

var CourierTransport = /*#__PURE__*/function (_Transport) {
  _inherits(CourierTransport, _Transport);

  var _super = _createSuper(CourierTransport);

  function CourierTransport(options) {
    var _this;

    _classCallCheck(this, CourierTransport);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "channel", void 0);

    _defineProperty(_assertThisInitialized(_this), "ws", void 0);

    _defineProperty(_assertThisInitialized(_this), "clientKey", void 0);

    _defineProperty(_assertThisInitialized(_this), "secretKey", void 0);

    if (!options.clientKey) {
      throw new Error("Missing Client Key");
    }

    _this.clientKey = options.clientKey;
    _this.secretKey = options.secretKey;
    _this.ws = new WS();

    _this.authenticate();

    _this.ws.connect(options.clientKey);

    return _this;
  }

  _createClass(CourierTransport, [{
    key: "authenticate",
    value: function authenticate() {
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
  }, {
    key: "send",
    value: function send(message) {
      this.ws.send(_objectSpread(_objectSpread({}, message), {}, {
        data: _objectSpread(_objectSpread({}, message.data), {}, {
          clientKey: this.clientKey
        })
      }));
    }
  }, {
    key: "subscribe",
    value: function subscribe(channel, event) {
      this.ws.subscribe(channel, event, this.clientKey, this.emit);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(channel, event) {
      this.ws.unsubscribe(channel, event, this.clientKey);
    }
  }]);

  return CourierTransport;
}(_base.Transport);

exports.CourierTransport = CourierTransport;

var WS = /*#__PURE__*/function () {
  function WS() {
    _classCallCheck(this, WS);

    _defineProperty(this, "connection", void 0);

    _defineProperty(this, "connected", void 0);

    _defineProperty(this, "messageCallback", void 0);

    _defineProperty(this, "clientKey", void 0);

    this.messageCallback = null;
    this.connection = null;
    this.connected = false;
  }

  _createClass(WS, [{
    key: "connect",
    value: function connect(clientKey) {
      this.clientKey = clientKey;
      var url = "".concat(LAMBDA_WS_URL, "/?clientKey=").concat(clientKey);
      this.connection = new WebSocket(url);
      this.initiateListener();
    }
  }, {
    key: "onMessage",
    value: function onMessage(_ref) {
      var data = _ref.data;

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
      var _this2 = this;

      return new Promise(function (resolve) {
        if (_this2.connected) {
          resolve(true);
        } else {
          _this2.connection.addEventListener("open", resolve);
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