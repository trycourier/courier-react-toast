"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentContainer = exports.AnchorContainer = exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div(function () { return ({
    height: "100%",
    width: "100%",
    display: "flex",
    outline: "none",
    border: "none",
    color: "inherit",
    backgroundColor: "inherit",
}); });
exports.AnchorContainer = styled_components_1.default.a(function () { return ({
    height: "100%",
    width: "100%",
    display: "flex",
    outline: "none",
    border: "none",
    color: "inherit",
    backgroundColor: "inherit",
}); });
//@ts-ignore
exports.ContentContainer = styled_components_1.default.div(function () { return ({
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    flexDirection: "column",
}); });
