"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PusherTransport = void 0;

var _ = require("./");

var _pusherJs = _interopRequireDefault(require("pusher-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialized = false;
;

var PusherTransport = /*#__PURE__*/function (_Transport) {
  _inherits(PusherTransport, _Transport);

  var _super = _createSuper(PusherTransport);

  function PusherTransport(options) {
    var _this;

    _classCallCheck(this, PusherTransport);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "pusher", void 0);

    _defineProperty(_assertThisInitialized(_this), "channel", void 0);

    _defineProperty(_assertThisInitialized(_this), "subscribe", function (channel, event) {
      _this.channel = _this.pusher.subscribe(channel);

      _this.channel.bind(event, function (data) {
        _this.emit({
          type: "message",
          data: data
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "unsubscribe", function (channel) {
      _this.pusher.unsubscribe(channel);
    });

    if (!options.appKey) {
      throw new Error("Missing App Key");
    }

    if (initialized) {
      throw new Error('Pusher already initialized');
    }

    _this.pusher = new _pusherJs["default"](options.appKey, options.options);
    initialized = true;
    return _this;
  }

  return PusherTransport;
}(_.Transport);

exports.PusherTransport = PusherTransport;