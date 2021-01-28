"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport = /** @class */ (function () {
    function Transport() {
        var _this = this;
        this.emit = function (courierEvent) {
            if (!_this.listener) {
                console.warn("No Listener Registered");
                return;
            }
            _this.listener(courierEvent);
        };
        this.listen = function (listener) {
            _this.listener = listener;
        };
    }
    return Transport;
}());
exports.Transport = Transport;
