"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_1 = require("./styled");
var courier_icon_1 = __importDefault(require("./courier-icon"));
var Body = function (_a) {
    var title = _a.title, body = _a.body, icon = _a.icon;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "courier__icon" }, icon ? react_1.default.createElement("img", { src: icon }) : react_1.default.createElement(courier_icon_1.default, null)),
        react_1.default.createElement(styled_1.ContentContainer, null,
            react_1.default.createElement("div", { className: "courier__title" }, title),
            react_1.default.createElement("div", { className: "courier__body" }, body))));
};
var BodyWrapper = function (_a) {
    var clickAction = _a.clickAction, onClick = _a.onClick, props = __rest(_a, ["clickAction", "onClick"]);
    if (clickAction || onClick) {
        return (react_1.default.createElement(styled_1.AnchorContainer, { target: "__blank", href: clickAction, onClick: onClick },
            react_1.default.createElement(Body, __assign({}, props))));
    }
    return (react_1.default.createElement(styled_1.Container, null,
        react_1.default.createElement(Body, __assign({}, props))));
};
exports.default = BodyWrapper;
