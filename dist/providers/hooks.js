"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useListenForTransportEvent = useListenForTransportEvent;

var _react = require("react");

var _constants = require("../constants");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function useListenForTransportEvent(transport, clientKey, handleToast) {
  (0, _react.useEffect)(() => {
    if (!transport) {
      return;
    }

    transport.listen( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* (courierEvent) {
        var _courierEvent$data;

        var courierData = courierEvent === null || courierEvent === void 0 ? void 0 : (_courierEvent$data = courierEvent.data) === null || _courierEvent$data === void 0 ? void 0 : _courierEvent$data.data;

        if (clientKey && courierData !== null && courierData !== void 0 && courierData.deliveredUrl) {
          fetch("".concat(courierData === null || courierData === void 0 ? void 0 : courierData.deliveredUrl), {
            method: "POST",
            headers: {
              [_constants.COURIER_CLIENT_HEADER]: clientKey
            }
          });
        }

        handleToast(courierEvent === null || courierEvent === void 0 ? void 0 : courierEvent.data);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }, [transport]);
}