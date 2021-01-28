"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToast = void 0;
var react_1 = require("react");
var providers_1 = require("../providers");
var useToast = function () {
    var _a = react_1.useContext(providers_1.ToastContext), toast = _a.toast, config = _a.config;
    return [toast, { config: config }];
};
exports.useToast = useToast;
