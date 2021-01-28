"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastProvider = exports.ToastContext = void 0;
var react_1 = __importStar(require("react"));
var react_toastify_1 = require("react-toastify");
//@ts-ignore
var ReactToastify_css_1 = __importDefault(require("react-toastify/dist/ReactToastify.css"));
var lodash_merge_1 = __importDefault(require("lodash.merge"));
var styled_components_1 = require("styled-components");
var Body_1 = __importDefault(require("../components/Body"));
var components_1 = require("../components");
var defaults_1 = require("./defaults");
var transports_1 = require("../transports");
var GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), ReactToastify_css_1.default);
exports.ToastContext = react_1.default.createContext({ config: {} });
var ToastProvider = function (_a) {
    var children = _a.children, _config = _a.config, transport = _a.transport;
    if (transport && !(transport instanceof transports_1.Transport)) {
        throw new Error("Invalid Transport");
    }
    var config = lodash_merge_1.default(defaults_1.defaultConfig, _config);
    var handleToast = function (message) { return react_toastify_1.toast(react_1.default.createElement(Body_1.default, __assign({}, message))); };
    react_1.useEffect(function () {
        if (!transport) {
            return;
        }
        transport.listen(function (courierEvent) {
            var _a;
            var clickAction = (_a = courierEvent === null || courierEvent === void 0 ? void 0 : courierEvent.data) === null || _a === void 0 ? void 0 : _a.clickAction;
            if (clickAction && window.location.pathname.includes(clickAction)) {
                return;
            }
            handleToast(courierEvent === null || courierEvent === void 0 ? void 0 : courierEvent.data);
        });
    }, [transport]);
    return (react_1.default.createElement(exports.ToastContext.Provider, { value: {
            toast: handleToast,
            config: config,
        } },
        react_1.default.createElement(GlobalStyle, null),
        react_1.default.createElement(components_1.Toast, null),
        children));
};
exports.ToastProvider = ToastProvider;
var templateObject_1;
