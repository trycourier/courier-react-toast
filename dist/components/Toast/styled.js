"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastStyled = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_toastify_1 = require("react-toastify");
exports.ToastStyled = styled_components_1.default(react_toastify_1.ToastContainer)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.Toastify__toast-container"] = theme.container,
        _b[".Toastify__toast"] = theme.toast,
        _b[".Toastify__toast-body .courier__body"] = theme.body,
        _b[".Toastify__toast-body .courier__title"] = theme.title,
        _b[".Toastify__toast-body .courier__icon"] = theme.icon,
        _b[".Toastify__toast--error"] = theme.error,
        _b[".Toastify__toast--warning"] = theme.warning,
        _b[".Toastify__progress-bar"] = theme.progressBar,
        _b);
});
