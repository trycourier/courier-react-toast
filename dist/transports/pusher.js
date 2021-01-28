"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PusherTransport = void 0;
var _1 = require("./");
var pusher_js_1 = __importDefault(require("pusher-js"));
var PusherTransport = /** @class */ (function (_super) {
    __extends(PusherTransport, _super);
    function PusherTransport(options) {
        var _this = _super.call(this) || this;
        _this.subscribe = function (channel, event) {
            _this.channel = _this.pusher.subscribe(channel);
            _this.channel.bind(event, function (data) {
                _this.emit({
                    type: "message",
                    data: data,
                });
            });
        };
        _this.unsubscribe = function (channel) {
            _this.pusher.unsubscribe(channel);
        };
        if (!options.appKey) {
            throw new Error("Missing App Key");
        }
        _this.pusher = new pusher_js_1.default(options.appKey, options.options);
        return _this;
    }
    return PusherTransport;
}(_1.Transport));
exports.PusherTransport = PusherTransport;
