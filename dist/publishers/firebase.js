"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/messaging");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FirebasePublisher = /*#__PURE__*/function () {
  function FirebasePublisher(firebaseConfig) {
    _classCallCheck(this, FirebasePublisher);

    if (!_app["default"].apps.length) {
      _app["default"].initializeApp(firebaseConfig);
    } //TODO: add firbase listener


    this.messaging = {
      onMessage: function onMessage() {}
    };
  }

  _createClass(FirebasePublisher, [{
    key: "init",
    value: function init(callback) {
      this.messaging.onMessage(callback);
    }
  }]);

  return FirebasePublisher;
}();

var _default = FirebasePublisher;
exports["default"] = _default;